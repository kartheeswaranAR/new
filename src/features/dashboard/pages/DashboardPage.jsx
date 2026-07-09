import { useMemo } from 'react'
import { mockSites, mockUsers } from '../../../services/mockData'

const chartPalette = ['var(--primary)', 'var(--success)', 'var(--warning)', 'var(--purple)', 'var(--yellow)']

export function DashboardPage() {
  const siteMetrics = useMemo(
    () =>
      mockSites.map((site) => ({
        ...site,
        statusTone: site.health >= 90 ? 'healthy' : site.health >= 75 ? 'warning' : 'critical',
      })),
    [],
  )

  const roleMetrics = useMemo(() => {
    const counts = mockUsers.reduce((acc, user) => {
      const role = user.role || 'Unassigned'
      acc[role] = (acc[role] || 0) + 1
      return acc
    }, {})

    return Object.entries(counts).map(([role, count]) => ({ role, count }))
  }, [])

  const summary = useMemo(() => {
    const totalSites = mockSites.length
    const totalCameras = mockSites.reduce((sum, site) => sum + site.cameras, 0)
    const healthySites = mockSites.filter((site) => site.health >= 90).length
    const criticalSites = mockSites.filter((site) => site.health < 80).length
    const activeUsers = mockUsers.filter((user) => user.status === 'Active').length

    return {
      totalSites,
      totalCameras,
      healthySites,
      criticalSites,
      activeUsers,
    }
  }, [])

  return (
    <section style={{ display: 'grid', gap: '20px', padding: '24px', background: 'transparent', color: 'var(--text)' }}>
      <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        <div style={cardStyle}>
          <div style={labelStyle}>Sites</div>
          <div style={valueStyle}>{summary.totalSites}</div>
          <div style={{ marginTop: '10px', height: '8px', borderRadius: '999px', background: 'linear-gradient(90deg, var(--primary), var(--purple))' }} />
        </div>
        <div style={cardStyle}>
          <div style={labelStyle}>Cameras</div>
          <div style={valueStyle}>{summary.totalCameras}</div>
          <div style={{ marginTop: '10px', height: '8px', borderRadius: '999px', background: 'linear-gradient(90deg, var(--success), var(--primary))' }} />
        </div>
        <div style={cardStyle}>
          <div style={labelStyle}>Healthy Sites</div>
          <div style={valueStyle}>{summary.healthySites}</div>
          <div style={{ marginTop: '10px', height: '8px', borderRadius: '999px', background: 'linear-gradient(90deg, var(--success), var(--yellow))' }} />
        </div>
        <div style={cardStyle}>
          <div style={labelStyle}>Active Users</div>
          <div style={valueStyle}>{summary.activeUsers}</div>
          <div style={{ marginTop: '10px', height: '8px', borderRadius: '999px', background: 'linear-gradient(90deg, var(--warning), var(--danger))' }} />
        </div>
      </div>

      <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: '1.2fr 0.8fr' }}>
        <div style={panelStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h3 style={{ margin: 0, fontSize: '1.05rem' }}>Site-wise Metrics</h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Live health</span>
          </div>
          <div style={{ display: 'grid', gap: '12px' }}>
            {siteMetrics.map((site, index) => (
              <div key={site.id} style={{ border: '1px solid var(--stroke)', borderRadius: '12px', padding: '12px 14px', background: 'linear-gradient(135deg, rgba(20, 28, 46, 0.95), rgba(12, 18, 32, 0.96))', color: 'var(--text)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', alignItems: 'center' }}>
                  <strong>{site.name}</strong>
                  <span style={{ color: getToneColor(site.statusTone), fontWeight: 700 }}>{site.health}%</span>
                </div>
                <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ flex: 1, height: '8px', borderRadius: '999px', background: 'rgba(255,255,255,0.08)' }}>
                    <div style={{ width: `${site.health}%`, height: '100%', borderRadius: '999px', background: chartPalette[index % chartPalette.length] }} />
                  </div>
                  <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{site.working}/{site.cameras}</span>
                </div>
                <div style={{ marginTop: '8px', color: 'var(--muted)', fontSize: '0.95rem' }}>
                  Cameras: {site.cameras} · Working: {site.working} · Offline: {site.offline}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={panelStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h3 style={{ margin: 0, fontSize: '1.05rem' }}>Role-wise Metrics</h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Team spread</span>
          </div>
          <div style={{ display: 'grid', gap: '10px' }}>
            {roleMetrics.map((item, index) => (
              <div key={item.role} style={{ padding: '10px 12px', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(20, 28, 46, 0.95), rgba(12, 18, 32, 0.96))', color: 'var(--text)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{item.role}</span>
                  <strong style={{ color: chartPalette[index % chartPalette.length] }}>{item.count}</strong>
                </div>
                <div style={{ marginTop: '8px', height: '8px', borderRadius: '999px', background: 'rgba(255,255,255,0.08)' }}>
                  <div style={{ width: `${Math.min((item.count / 4) * 100, 100)}%`, height: '100%', borderRadius: '999px', background: chartPalette[index % chartPalette.length] }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: '1.1fr 0.9fr 0.8fr' }}>
        <div style={panelStyle}>
          <h3 style={{ margin: '0 0 10px', fontSize: '1rem' }}>Site Health Distribution</h3>
          <div style={{ display: 'grid', gap: '8px' }}>
            {['Healthy', 'Warning', 'Critical'].map((label, index) => {
              const value = index === 0 ? summary.healthySites : index === 1 ? mockSites.filter((site) => site.health >= 75 && site.health < 90).length : summary.criticalSites
              const width = index === 0 ? 60 : index === 1 ? 25 : 15
              return (
                <div key={label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '4px' }}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                  <div style={{ height: '8px', borderRadius: '999px', background: 'rgba(255,255,255,0.08)' }}>
                    <div style={{ width: `${width}%`, height: '100%', borderRadius: '999px', background: index === 0 ? 'var(--success)' : index === 1 ? 'var(--warning)' : 'var(--danger)' }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div style={panelStyle}>
          <h3 style={{ margin: '0 0 10px', fontSize: '1rem' }}>Role Mix</h3>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '130px' }}>
            <div style={{ width: '110px', height: '110px', borderRadius: '50%', background: 'conic-gradient(var(--primary) 0 35%, var(--purple) 35% 60%, var(--warning) 60% 85%, var(--success) 85% 100%)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '22px', borderRadius: '50%', background: 'var(--surface)', display: 'grid', placeItems: 'center', fontWeight: 700 }}>{roleMetrics.length}</div>
            </div>
          </div>
        </div>

        <div style={panelStyle}>
          <h3 style={{ margin: '0 0 10px', fontSize: '1rem' }}>Operational Pulse</h3>
          <div style={{ display: 'grid', gap: '8px' }}>
            {['Camera uptime', 'Edge devices', 'User activity'].map((label, index) => {
              const values = [92, 88, 96]
              return (
                <div key={label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '4px' }}>
                    <span>{label}</span>
                    <strong>{values[index]}%</strong>
                  </div>
                  <div style={{ height: '8px', borderRadius: '999px', background: 'rgba(255,255,255,0.08)' }}>
                    <div style={{ width: `${values[index]}%`, height: '100%', borderRadius: '999px', background: chartPalette[index % chartPalette.length] }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        <div style={panelStyle}>
          <h3 style={{ margin: '0 0 8px', fontSize: '1rem' }}>Critical Sites</h3>
          <div style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{summary.criticalSites} sites need attention</div>
        </div>
        <div style={panelStyle}>
          <h3 style={{ margin: '0 0 8px', fontSize: '1rem' }}>Camera Health</h3>
          <div style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>High-visibility monitoring is active across the network</div>
        </div>
        <div style={panelStyle}>
          <h3 style={{ margin: '0 0 8px', fontSize: '1rem' }}>Operations Pulse</h3>
          <div style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>Performance is stable with targeted alerts in motion</div>
        </div>
      </div>
    </section>
  )
}

function getToneColor(tone) {
  if (tone === 'healthy') return '#10b981'
  if (tone === 'warning') return '#f59e0b'
  return '#ef4444'
}

const cardStyle = {
  background: 'var(--surface-elevated)',
  borderRadius: '16px',
  padding: '16px 18px',
  boxShadow: 'var(--shadow)',
  border: '1px solid var(--stroke)',
  color: 'var(--text)',
}

const labelStyle = {
  color: 'var(--muted)',
  fontSize: '0.9rem',
  marginBottom: '6px',
}

const valueStyle = {
  fontSize: '1.4rem',
  fontWeight: 700,
  color: 'var(--text-strong)',
}

const panelStyle = {
  background: 'var(--surface)',
  borderRadius: '16px',
  padding: '16px',
  boxShadow: 'var(--shadow)',
  border: '1px solid var(--stroke)',
  color: 'var(--text)',
}
