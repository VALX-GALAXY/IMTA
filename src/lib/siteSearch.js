import { footerColumns, megaMenuCategories } from '@/config/navigation'
import { pages } from '@/config/pages'
import { collaboratingInstitutions } from '@/data/collaboratingInstitutions'
import { ROUTES } from '@/constants/routes'
import { lifeMembers } from '@/data/lifeMembers'

function normalize(text) {
  return (text ?? '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

function addItem(items, seen, { title, subtitle, href, category }) {
  if (!href || !title) return
  const key = `${href}::${title}`
  if (seen.has(key)) return
  seen.add(key)
  items.push({
    title,
    subtitle: subtitle ?? '',
    href,
    category: category ?? 'Page',
    searchText: normalize([title, subtitle, category].filter(Boolean).join(' ')),
  })
}

function buildSiteSearchIndex() {
  const items = []
  const seen = new Set()

  for (const page of pages) {
    if (page.path === ROUTES.home) continue
    addItem(items, seen, {
      title: page.title,
      subtitle: page.description,
      href: page.path,
      category: 'Page',
    })
  }

  for (const group of megaMenuCategories) {
    for (const link of group.links ?? []) {
      addItem(items, seen, {
        title: link.title,
        subtitle: link.description,
        href: link.href,
        category: group.label,
      })
    }
  }

  for (const inst of collaboratingInstitutions) {
    addItem(items, seen, {
      title: inst.name,
      subtitle: inst.location ?? 'Collaborating institution',
      href: ROUTES.collaboratingInstitutions,
      category: 'Collaborating institutions',
    })
  }

  for (const column of footerColumns) {
    for (const link of column.links) {
      addItem(items, seen, {
        title: link.label,
        subtitle: column.title,
        href: link.href,
        category: 'Quick link',
      })
    }
  }

  for (const member of lifeMembers) {
    const subtitle = [member.title, member.location, member.membershipId].filter(Boolean).join(' · ')
    addItem(items, seen, {
      title: member.name,
      subtitle,
      href: `${ROUTES.lifeMembers}?q=${encodeURIComponent(member.name)}`,
      category: 'Life member',
    })
  }

  return items
}

export const siteSearchIndex = buildSiteSearchIndex()

export function searchSite(query, { limit = 12 } = {}) {
  const q = normalize(query)
  if (!q) return []

  const words = q.split(/\s+/).filter(Boolean)

  const scored = siteSearchIndex
    .map((item) => {
      let score = 0
      if (item.searchText.includes(q)) score += 10
      if (normalize(item.title).startsWith(q)) score += 8
      for (const word of words) {
        if (item.searchText.includes(word)) score += 2
      }
      return { item, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)

  return scored.slice(0, limit).map(({ item }) => item)
}
