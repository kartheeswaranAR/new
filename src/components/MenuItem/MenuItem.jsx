import { NavLink } from 'react-router-dom'
import { FaTachometerAlt } from 'react-icons/fa'
import './MenuItem.css'

export function MenuItem({ menu, icon }) {
  const normalizedMenu = (menu || '').toLowerCase()
  const path = normalizedMenu === 'dashboard' ? '/dashboard' : `/dashboard/${normalizedMenu.replace(/\s+/g, '-')}`

  return (
    <NavLink
      to={path}
      end={normalizedMenu === 'dashboard'}
      className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
    >
      <span className="nav-icon">{icon ?? <FaTachometerAlt />}</span>
      <span>{menu}</span>
    </NavLink>
  )
}
