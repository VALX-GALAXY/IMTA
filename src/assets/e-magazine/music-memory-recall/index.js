/** Unsplash photos for Music & Memory Recall (not from /public). */

function unsplash(photoId, { w = 900, h } = {}) {
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    w: String(w),
    q: '80',
  })
  if (h) params.set('h', String(h))
  return `https://images.unsplash.com/${photoId}?${params}`
}

export const musicMemoryRecallImages = {
  cover: unsplash('photo-1511379938547-c1f69419868d', { w: 900, h: 700 }),
  sections: [
    unsplash('photo-1529156069898-49953e39b3ac', { w: 900, h: 600 }),
    unsplash('photo-1559757175-0eb30cd8c063', { w: 900, h: 600 }),
    unsplash('photo-1516280440614-37939bbacd81', { w: 900, h: 600 }),
  ],
}

export const musicMemoryRecallPhotoCredit = ''
