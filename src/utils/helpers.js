import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatNumber(value, decimals = 0) {
  if (value === null || value === undefined) return '—'
  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: decimals }).format(value)
}

export function formatCurrency(value, currency = 'INR') {
  if (value === null || value === undefined) return '—'
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`
  if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency }).format(value)
}

export function formatPercent(value, decimals = 1) {
  if (value === null || value === undefined) return '—'
  return `${Number(value).toFixed(decimals)}%`
}

export function getStatusColor(status) {
  const map = {
    Active: 'text-success',
    Online: 'text-success',
    Completed: 'text-success',
    'On Track': 'text-success',
    Warning: 'text-warning',
    Delayed: 'text-warning',
    Inactive: 'text-muted',
    Offline: 'text-danger',
    Critical: 'text-danger',
    Pending: 'text-yellow',
    'In Progress': 'text-primary',
  }
  return map[status] || 'text-muted'
}

export function getStatusBg(status) {
  const map = {
    Active: 'bg-success/10 text-success border-success/30',
    Online: 'bg-success/10 text-success border-success/30',
    Completed: 'bg-success/10 text-success border-success/30',
    'On Track': 'bg-success/10 text-success border-success/30',
    Warning: 'bg-warning/10 text-warning border-warning/30',
    Delayed: 'bg-warning/10 text-warning border-warning/30',
    Inactive: 'bg-muted/10 text-muted border-muted/30',
    Offline: 'bg-danger/10 text-danger border-danger/30',
    Critical: 'bg-danger/10 text-danger border-danger/30',
    Pending: 'bg-yellow/10 text-yellow border-yellow/30',
    'In Progress': 'bg-primary/10 text-primary border-primary/30',
  }
  return map[status] || 'bg-muted/10 text-muted border-muted/30'
}

export function getTrendIcon(value) {
  if (value > 0) return '↑'
  if (value < 0) return '↓'
  return '→'
}

export function getTrendColor(value, inverse = false) {
  if (value > 0) return inverse ? 'text-danger' : 'text-success'
  if (value < 0) return inverse ? 'text-success' : 'text-danger'
  return 'text-muted'
}

export function truncate(str, length = 30) {
  if (!str) return ''
  return str.length > length ? `${str.slice(0, length)}...` : str
}

export function generateId() {
  return Math.random().toString(36).slice(2, 9)
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}
