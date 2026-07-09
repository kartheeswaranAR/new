import { motion } from 'framer-motion'
import { MapPin, Users, Camera, TrendingUp } from 'lucide-react'
import { cn, formatCurrency, formatPercent } from '../../utils/helpers'
import { StatusBadge } from './SharedUI'
import { ProgressBar } from './SharedUI'

const riskColor = { Low: 'text-success', Medium: 'text-warning', High: 'text-danger' }

export function SiteCard({ site, onClick }) {
  const variance = site.actualProgress - site.plannedProgress

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      onClick={() => onClick?.(site)}
      className="bg-surface border border-border rounded-2xl p-4 cursor-pointer flex flex-col gap-3 hover:border-primary/40 hover:shadow-glow transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-text text-sm leading-tight">{site.name}</h3>
          <div className="flex items-center gap-1 text-xs text-muted mt-0.5">
            <MapPin size={10} />
            <span>{site.city}, {site.state}</span>
          </div>
        </div>
        <StatusBadge status={site.status} />
      </div>

      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="text-muted">Progress</span>
          <span className={cn('font-semibold', variance >= 0 ? 'text-success' : 'text-danger')}>
            {formatPercent(site.actualProgress)} <span className="text-muted font-normal">/ {formatPercent(site.plannedProgress)}</span>
          </span>
        </div>
        <ProgressBar value={site.actualProgress} tone={variance >= 0 ? 'success' : 'danger'} />
      </div>

      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="flex flex-col gap-0.5">
          <span className="text-muted flex items-center gap-1"><Users size={10} /> Workers</span>
          <span className="font-semibold text-text">{site.workers}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-muted flex items-center gap-1"><Camera size={10} /> Cameras</span>
          <span className="font-semibold text-text">{site.cameras}</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-muted flex items-center gap-1"><TrendingUp size={10} /> Safety</span>
          <span className="font-semibold text-success">{site.safetyScore}%</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-border text-xs">
        <span className="text-muted">Budget: <span className="text-text font-medium">{formatCurrency(site.spent)}</span></span>
        <span className={cn('font-semibold', riskColor[site.aiRisk])}>AI Risk: {site.aiRisk}</span>
      </div>
    </motion.div>
  )
}
