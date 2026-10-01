import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { publicAsset } from '@/lib/publicAsset'
import { SITE_VIDEO_PLAYBACK_EVENT } from '@/lib/siteVideoPlayback'

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

  const activeVideosRef = useRef(new Set())
  const resumeAfterVideoRef = useRef(false)


  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const activeVideos = activeVideosRef.current

    audio.loop = true
    audio.preload = 'auto'
    audio.volume = VOLUME

    const pause = () => {
      audio.pause()
      playingRef.current = false
    }

    if (!isHome) {

      activeVideos.clear()
      resumeAfterVideoRef.current = false

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

    const tryPlay = async () => {
      if (!isHome || activeVideos.size > 0) return


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
    const detachUnlockListeners = () => {
      if (!listenersAttached) return
      listenersAttached = false
      for (const event of interactionEvents) {
        document.removeEventListener(event, unlockAndPlay)
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

    const onVideoPlayback = (event) => {
      const { id, playing } = event.detail ?? {}
      if (!id) return

      if (playing) {
        if (!activeVideos.has(id) && activeVideos.size === 0) {
          resumeAfterVideoRef.current = !audio.paused
        }
        activeVideos.add(id)
        pause()
        return
      }

      if (!activeVideos.delete(id) || activeVideos.size > 0) return

      const shouldResume = resumeAfterVideoRef.current
      resumeAfterVideoRef.current = false
      if (shouldResume && document.visibilityState === 'visible') void tryPlay()

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

    window.addEventListener(SITE_VIDEO_PLAYBACK_EVENT, onVideoPlayback)


    for (const event of interactionEvents) {
      document.addEventListener(event, unlockAndPlay, { passive: true })
    }
    document.addEventListener('visibilitychange', onVisible)

    return () => {
      window.clearTimeout(retryId)
      window.clearTimeout(retryId2)
      audio.removeEventListener('canplaythrough', onReady)
      audio.removeEventListener('loadeddata', onReady)

      window.removeEventListener(SITE_VIDEO_PLAYBACK_EVENT, onVideoPlayback)
      detachUnlockListeners()
      document.removeEventListener('visibilitychange', onVisible)
      activeVideos.clear()
      resumeAfterVideoRef.current = false

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
