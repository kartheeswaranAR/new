import { AlertTriangle, AlertCircle, Info, CheckCircle } from 'lucide-react'
import { cn } from '../../utils/helpers'
import { motion } from 'framer-motion'

const severityConfig = {
  Critical: { icon: AlertCircle, color: 'text-danger', bg: 'bg-danger/10', border: 'border-danger/30' },
  High: { icon: AlertTriangle, color: 'text-warning', bg: 'bg-warning/10', border: 'border-warning/30' },
  Medium: { icon: AlertTriangle, color: 'text-yellow', bg: 'bg-yellow/10', border: 'border-yellow/30' },
  Low: { icon: Info, color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/30' },
  Info: { icon: Info, color: 'text-muted', bg: 'bg-muted/10', border: 'border-border' },
}

export function AlertCard({ alert, onResolve, compact = false }) {
  const cfg = severityConfig[alert.severity] || severityConfig.Info
  const Icon = cfg.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn('flex gap-3 p-3 rounded-xl border', cfg.bg, cfg.border)}
    >
      <Icon size={16} className={cn('shrink-0 mt-0.5', cfg.color)} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className={cn('text-xs font-bold uppercase tracking-wide', cfg.color)}>{alert.severity}</span>
          <span className="text-xs text-muted">{alert.time}</span>
        </div>
        {!compact && (
          <>
            <p className="text-sm text-text mt-0.5 leading-snug">{alert.description}</p>
            <div className="flex items-center gap-3 mt-1.5 text-xs text-muted">
              <span>{alert.site}</span>
              <span>·</span>
              <span>{alert.camera}</span>
              <span>·</span>
              <span>AI {alert.aiConfidence}%</span>
            </div>
          </>
        )}
        {compact && <p className="text-xs text-muted truncate">{alert.description}</p>}
      </div>
      {onResolve && alert.status !== 'Resolved' && (
        <button
          type="button"
          onClick={() => onResolve(alert.id)}
          className="shrink-0 text-xs text-success hover:underline"
        >
          Resolve
        </button>
      )}
    </motion.div>
  )
}
