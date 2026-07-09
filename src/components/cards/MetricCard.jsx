import { motion } from 'framer-motion'
import { cn } from '../../utils/helpers'

const toneMap = {
  primary: 'border-primary/30 shadow-glow',
  success: 'border-success/30 shadow-glow-success',
  danger: 'border-danger/30 shadow-glow-danger',
  warning: 'border-warning/30 shadow-glow-warning',
  purple: 'border-purple/30',
  cyan: 'border-cyan/30',
  muted: 'border-border',
}

export function MetricCard({ label, value, subvalue, icon: Icon, tone = 'primary', trend, trendLabel, onClick, className }) {
  const trendPositive = trend > 0
  const trendNeutral = trend === 0 || trend === undefined

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={cn(
        'relative bg-surface border rounded-2xl p-4 flex flex-col gap-2 cursor-default overflow-hidden',
        toneMap[tone] || toneMap.muted,
        onClick && 'cursor-pointer',
        className,
      )}
    >
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="flex items-start justify-between gap-2 relative">
        <span className="metric-label">{label}</span>
        {Icon && (
          <span className={cn('p-2 rounded-xl', {
            'bg-primary/10 text-primary': tone === 'primary',
            'bg-success/10 text-success': tone === 'success',
            'bg-danger/10 text-danger': tone === 'danger',
            'bg-warning/10 text-warning': tone === 'warning',
            'bg-purple/10 text-purple': tone === 'purple',
            'bg-cyan/10 text-cyan': tone === 'cyan',
            'bg-muted/10 text-muted': tone === 'muted',
          })}>
            <Icon size={16} />
          </span>
        )}
      </div>
      <div className="relative">
        <div className="metric-value text-text">{value}</div>
        {subvalue && <div className="text-xs text-muted mt-0.5">{subvalue}</div>}
      </div>
      {trend !== undefined && (
        <div className={cn('flex items-center gap-1 text-xs font-medium', {
          'text-success': trendPositive,
          'text-danger': !trendPositive && !trendNeutral,
          'text-muted': trendNeutral,
        })}>
          <span>{trendPositive ? '↑' : trendNeutral ? '→' : '↓'}</span>
          <span>{trendLabel || `${Math.abs(trend)}%`}</span>
        </div>
      )}
    </motion.div>
  )
}
