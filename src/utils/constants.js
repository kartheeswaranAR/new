export const APP_NAME = 'L&T AI Monitor'
export const APP_SUBTITLE = 'AI-Driven Construction Progress Monitoring Platform'
export const APP_VERSION = '2.0.0'

export const DEMO_EMAIL = 'admin@lt.com'
export const DEMO_PASSWORD = 'Admin@1234'
export const TOKEN_KEY = 'lt_token'
export const USER_KEY = 'lt_user'
export const FILTER_KEY = 'lt_filters'

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'

export const CHART_COLORS = {
  primary: '#2563EB',
  success: '#2CFF05',
  warning: '#FF8624',
  danger: '#FF272A',
  purple: '#FF57D2',
  yellow: '#FFDA29',
  cyan: '#00D7FF',
  muted: '#94A3B8',
}

export const REFRESH_INTERVALS = {
  FAST: 10000,
  NORMAL: 30000,
  SLOW: 60000,
}

export const DATE_FORMAT = 'dd MMM yyyy'
export const DATETIME_FORMAT = 'dd MMM yyyy HH:mm'
export const TIME_FORMAT = 'HH:mm'

export const PAGINATION_LIMIT = 20

export const MAP_CENTER = [20.5937, 78.9629]
export const MAP_ZOOM = 5
