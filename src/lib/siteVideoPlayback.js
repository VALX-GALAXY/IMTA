export const SITE_VIDEO_PLAYBACK_EVENT = 'imta:site-video-playback'

export function setSiteVideoPlaying(id, playing) {
  if (typeof window === 'undefined') return

  window.dispatchEvent(
    new CustomEvent(SITE_VIDEO_PLAYBACK_EVENT, {
      detail: { id, playing },
    }),
  )
}