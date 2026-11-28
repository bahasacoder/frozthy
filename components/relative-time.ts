'use client'

import { createElement } from 'react'

export function RelativeTime({ timestamp }: { timestamp: number | string | Date }) {
  const now = Date.now()
  return createElement(
    'time',
    { suppressHydrationWarning: true },
    computeTimeAgo({ timestamp, now }),
  )
}

function computeTimeAgo(arg0: { timestamp: string | number | Date; now: number }): import("react").ReactNode {
  const timestamp = arg0.timestamp instanceof Date
    ? arg0.timestamp.getTime()
    : new Date(arg0.timestamp).getTime()

  if (!Number.isFinite(timestamp)) {
    return 'Invalid date'
  }

  const elapsedSeconds = Math.round((arg0.now - timestamp) / 1000)
  const absoluteSeconds = Math.abs(elapsedSeconds)
  const suffix = elapsedSeconds < 0 ? 'from now' : 'ago'

  if (absoluteSeconds < 45) {
    return 'just now'
  }

  const minute = 60
  const hour = 60 * minute
  const day = 24 * hour
  const month = 30 * day
  const year = 365 * day

  let value: number
  let unit: string

  if (absoluteSeconds < 45 * minute) {
    value = Math.round(absoluteSeconds / minute)
    unit = 'minute'
  } else if (absoluteSeconds < 22 * hour) {
    value = Math.round(absoluteSeconds / hour)
    unit = 'hour'
  } else if (absoluteSeconds < 26 * day) {
    value = Math.round(absoluteSeconds / day)
    unit = 'day'
  } else if (absoluteSeconds < 320 * day) {
    value = Math.round(absoluteSeconds / month)
    unit = 'month'
  } else {
    value = Math.round(absoluteSeconds / year)
    unit = 'year'
  }

  return `${value} ${unit}${value === 1 ? '' : 's'} ${suffix}`
}
