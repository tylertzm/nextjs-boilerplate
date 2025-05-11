import type { ReactNode } from "react"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Define the cn function directly in this file
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface TimelineItemProps {
  title: string
  date: string
  description?: string
  icon?: ReactNode
  className?: string
}

export function TimelineItem({ title, date, description, icon, className }: TimelineItemProps) {
  return (
    <div className={cn("relative pl-6 pb-16 last:pb-0", className)}>
      {/* Minimal marker */}
      <div className="absolute left-0 top-2 h-[1px] w-3 bg-neutral-400" />

      {/* Thin vertical line */}
      <div className="absolute left-0 top-3 h-full w-[1px] bg-neutral-200" />

      <div className="flex flex-col gap-3">
        {/* Date with subtle styling */}
        <time className="font-light tracking-wider text-sm text-neutral-500">{date}</time>

        {/* Title with Japanese-inspired typography */}
        <h3 className="text-xl font-light tracking-wide">{title}</h3>

        {/* Description with ample spacing */}
        {description && <p className="mt-2 text-neutral-600 font-light leading-relaxed text-sm">{description}</p>}

        {/* Optional icon with subtle positioning */}
        {icon && <div className="mt-4 text-neutral-400">{icon}</div>}
      </div>
    </div>
  )
}

export interface TimelineProps {
  items: TimelineItemProps[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-0", className)}>
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  )
}
