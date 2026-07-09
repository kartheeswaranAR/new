import { FaBell, FaMoon, FaSun, FaSyncAlt } from 'react-icons/fa'
import { ActionButton } from '../UI/UI'
import { useUI } from '../../hooks/useUI'
import './TopBar.css'

export function TopBar({ user, title, subtitle, onRefresh }) {
  const { theme, toggleTheme } = useUI()

  return (
    <header className="topbar-shell">
      <div>
        <div className="eyebrow">{user?.role ?? 'Enterprise Access'}</div>
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      <div className="topbar-actions">
        <ActionButton variant="ghost" onClick={onRefresh}>
          <FaSyncAlt /> Refresh
        </ActionButton>
        <button type="button" className="icon-button" aria-label="Toggle theme" onClick={toggleTheme}>
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        <button type="button" className="icon-button">
          <FaBell />
        </button>
      </div>
    </header>
  )
}
