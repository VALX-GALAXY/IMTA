import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function AdminStatCard({ title, value, description, icon: Icon, className }) {
  return (
    <Card className={cn('rounded-2xl border-border bg-surface shadow-surface', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-earth">{title}</CardTitle>
        {Icon ? <Icon className="size-4 text-gold" aria-hidden /> : null}
      </CardHeader>
      <CardContent>
        <p className="font-sans text-3xl font-semibold text-ink">{value}</p>
        {description ? <p className="mt-1 text-xs text-earth">{description}</p> : null}
      </CardContent>
    </Card>
  )
}

export function AdminStatCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-border bg-surface p-6 shadow-surface">
      <div className="h-4 w-24 rounded bg-highlight" />
      <div className="mt-4 h-8 w-16 rounded bg-highlight" />
      <div className="mt-2 h-3 w-32 rounded bg-highlight" />
    </div>
  )
}
