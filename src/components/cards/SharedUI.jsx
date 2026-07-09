import { cn, getStatusBg } from '../../utils/helpers'
import { motion } from 'framer-motion'

export function StatusBadge({ status, className }) {
  return (
    <span className={cn('tag border text-xs', getStatusBg(status), className)}>
      {status}
    </span>
  )
}

export function SectionHeader({ eyebrow, title, subtitle, actions, className }) {
  return (
    <div className={cn('flex items-start justify-between gap-4', className)}>
      <div>
        {eyebrow && <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">{eyebrow}</div>}
        <h2 className="text-lg font-bold text-text">{title}</h2>
        {subtitle && <p className="text-sm text-muted mt-0.5">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
    </div>
  )
}

export function GlassPanel({ children, className, noPad }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn('bg-surface border border-border rounded-2xl', !noPad && 'p-4', className)}
    >
      {children}
    </motion.div>
  )
}

export function Spinner({ size = 20 }) {
  return (
    <div
      className="border-2 border-border border-t-primary rounded-full animate-spin"
      style={{ width: size, height: size }}
    />
  )
}

export function LoadingOverlay() {
  return (
    <div className="flex items-center justify-center h-40">
      <Spinner size={32} />
    </div>
  )
}

export function EmptyState({ message = 'No data available', icon: Icon }) {
  return (
    <div className="flex flex-col items-center justify-center h-40 gap-3 text-muted">
      {Icon && <Icon size={32} className="opacity-40" />}
      <p className="text-sm">{message}</p>
    </div>
  )
}

export function ProgressBar({ value, max = 100, tone = 'primary', showLabel = false, height = 6 }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  const colorMap = {
    primary: 'bg-primary',
    success: 'bg-success',
    warning: 'bg-warning',
    danger: 'bg-danger',
    purple: 'bg-purple',
    cyan: 'bg-cyan',
  }
  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-xs text-muted mb-1">
          <span>{value}</span>
          <span>{pct.toFixed(0)}%</span>
        </div>
      )}
      <div className="w-full bg-border rounded-full overflow-hidden" style={{ height }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={cn('h-full rounded-full', colorMap[tone] || 'bg-primary')}
        />
      </div>
    </div>
  )
}

export function IconButton({ icon: Icon, onClick, title, variant = 'ghost', size = 16 }) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={cn(
        'p-2 rounded-lg border transition-all duration-150',
        variant === 'ghost' && 'bg-transparent border-border text-muted hover:text-text hover:border-border-2',
        variant === 'primary' && 'bg-primary/10 border-primary/30 text-primary hover:bg-primary/20',
        variant === 'danger' && 'bg-danger/10 border-danger/30 text-danger hover:bg-danger/20',
      )}
    >
      <Icon size={size} />
    </button>
  )
}

export function Button({ children, onClick, variant = 'primary', size = 'md', disabled, type = 'button', className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'btn',
        size === 'sm' && 'px-3 py-1.5 text-xs',
        size === 'lg' && 'px-6 py-3 text-base',
        variant === 'primary' && 'btn-primary',
        variant === 'ghost' && 'btn-ghost',
        variant === 'danger' && 'btn-danger',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      {children}
    </button>
  )
}
