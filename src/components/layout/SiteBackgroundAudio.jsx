import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { publicAsset } from '@/lib/publicAsset'

const SITE_AUDIO_SRC = publicAsset('AUDIO-2026-05-23-11-58-21.mp3')
const AUDIO_UNLOCK_KEY = 'imta-site-audio-unlocked'
const VOLUME = 0.85

/**
 * Homepage background music (public MP3). Plays only on `/`; pauses when navigating away.
 * Browsers may block autoplay until the visitor interacts once; we retry on first gesture.
 */
export function SiteBackgroundAudio() {
  const { pathname } = useLocation()
  const isHome = pathname === ROUTES.home
  const audioRef = useRef(null)
  const playingRef = useRef(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.loop = true
    audio.preload = 'auto'
    audio.volume = VOLUME

    const pause = () => {
      audio.pause()
      playingRef.current = false
    }

    if (!isHome) {
      pause()
      return
    }

    const markUnlocked = () => {
      try {
        sessionStorage.setItem(AUDIO_UNLOCK_KEY, '1')
      } catch {
        /* private mode */
      }
    }

    let listenersAttached = true
    const interactionEvents = ['pointerdown', 'keydown', 'touchstart', 'click']

    const detachUnlockListeners = () => {
      if (!listenersAttached) return
      listenersAttached = false
      for (const event of interactionEvents) {
        document.removeEventListener(event, unlockAndPlay)
      }
    }

    const tryPlay = async () => {
      if (!isHome) return
      if (playingRef.current && !audio.paused) return
      try {
        await audio.play()
        playingRef.current = true
        markUnlocked()
        detachUnlockListeners()
      } catch {
        playingRef.current = false
      }
    }

    const unlockAndPlay = () => {
      void tryPlay()
    }

    const onVisible = () => {
      if (document.visibilityState === 'visible' && isHome) {
        void tryPlay()
      } else {
        pause()
      }

    }

    void tryPlay()
    const retryId = window.setTimeout(() => void tryPlay(), 250)
    const retryId2 = window.setTimeout(() => void tryPlay(), 1000)

    if (sessionStorage.getItem(AUDIO_UNLOCK_KEY) === '1') {
      void tryPlay()
    }

    const onReady = () => {
      void tryPlay()
    }

    audio.addEventListener('canplaythrough', onReady)
    audio.addEventListener('loadeddata', onReady)

    for (const event of interactionEvents) {
      document.addEventListener(event, unlockAndPlay, { passive: true })
    }
    document.addEventListener('visibilitychange', onVisible)

    return () => {
      window.clearTimeout(retryId)
      window.clearTimeout(retryId2)
      audio.removeEventListener('canplaythrough', onReady)
      audio.removeEventListener('loadeddata', onReady)
      detachUnlockListeners()
      document.removeEventListener('visibilitychange', onVisible)
      pause()
    }
  }, [isHome])

  return (
    <audio
      ref={audioRef}
      src={SITE_AUDIO_SRC}
      loop
      preload="auto"
      className="sr-only"
      aria-hidden
    />
  )
}
