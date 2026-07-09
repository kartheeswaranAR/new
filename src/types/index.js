// ─── Roles ───────────────────────────────────────────────────────────────────
export const ROLES = {
  ADMIN: 'Admin',
  REGIONAL_MANAGER: 'Regional Manager',
  STATE_MANAGER: 'State Manager',
  CITY_MANAGER: 'City Manager',
  PROJECT_MANAGER: 'Project Manager',
  SITE_SUPERVISOR: 'Site Supervisor',
  SITE_ENGINEER: 'Site Engineer',
  SAFETY_MANAGER: 'Safety Manager',
  SAFETY_OFFICER: 'Safety Officer',
  HITL: 'HITL',
  CLIENT: 'Client',
}

// ─── Status ───────────────────────────────────────────────────────────────────
export const STATUS = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
  CRITICAL: 'Critical',
  WARNING: 'Warning',
  ONLINE: 'Online',
  OFFLINE: 'Offline',
  COMPLETED: 'Completed',
  IN_PROGRESS: 'In Progress',
  DELAYED: 'Delayed',
  ON_TRACK: 'On Track',
  PENDING: 'Pending',
  RESOLVED: 'Resolved',
}

// ─── Construction Layers ──────────────────────────────────────────────────────
export const LAYERS = {
  EARTHWORK: 'Earthwork',
  GSB: 'GSB',
  WMM: 'WMM',
  DBM: 'DBM',
  BC: 'BC',
  PQC: 'PQC',
  SURVEY: 'Survey',
}

// ─── Shifts ───────────────────────────────────────────────────────────────────
export const SHIFTS = {
  MORNING: 'Morning',
  AFTERNOON: 'Afternoon',
  NIGHT: 'Night',
}

// ─── Alert Severity ───────────────────────────────────────────────────────────
export const ALERT_SEVERITY = {
  CRITICAL: 'Critical',
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low',
  INFO: 'Info',
}

// ─── PPE Types ────────────────────────────────────────────────────────────────
export const PPE_TYPES = {
  HELMET: 'Helmet',
  VEST: 'Vest',
  SHOES: 'Safety Shoes',
  HARNESS: 'Harness',
  GLOVES: 'Gloves',
  GOGGLES: 'Goggles',
}

// ─── Role → Dashboard Route Map ───────────────────────────────────────────────
export const ROLE_DASHBOARD_MAP = {
  [ROLES.ADMIN]: '/dashboard/admin',
  [ROLES.REGIONAL_MANAGER]: '/dashboard/admin',
  [ROLES.STATE_MANAGER]: '/dashboard/admin',
  [ROLES.CITY_MANAGER]: '/dashboard/admin',
  [ROLES.PROJECT_MANAGER]: '/dashboard/project-manager',
  [ROLES.SITE_SUPERVISOR]: '/dashboard/site-supervisor',
  [ROLES.SITE_ENGINEER]: '/dashboard/site-engineer',
  [ROLES.SAFETY_MANAGER]: '/dashboard/safety-manager',
  [ROLES.SAFETY_OFFICER]: '/dashboard/safety-officer',
  [ROLES.HITL]: '/dashboard/hitl',
  [ROLES.CLIENT]: '/dashboard/client',
}

// ─── Role → Sidebar Menu Map ──────────────────────────────────────────────────
export const ROLE_MENUS = {
  [ROLES.ADMIN]: ['Overview', 'Projects', 'Sites', 'Users', 'Cameras', 'AI Health', 'Server Health', 'Budget', 'Safety', 'Alerts', 'Settings'],
  [ROLES.REGIONAL_MANAGER]: ['Overview', 'Projects', 'Sites', 'Budget', 'Safety', 'Alerts'],
  [ROLES.STATE_MANAGER]: ['Overview', 'Projects', 'Sites', 'Budget', 'Safety', 'Alerts'],
  [ROLES.CITY_MANAGER]: ['Overview', 'Projects', 'Sites', 'Budget', 'Safety'],
  [ROLES.PROJECT_MANAGER]: ['Overview', 'Sites', 'Progress', 'Budget', 'Workers', 'Equipment', 'Safety', 'Cameras', 'Reports'],
  [ROLES.SITE_SUPERVISOR]: ['Today', 'Attendance', 'Equipment', 'Materials', 'Tasks', 'Cameras', 'Issues'],
  [ROLES.SITE_ENGINEER]: ['Layers', 'Survey', 'Materials', 'Machines', 'Inspection', 'Reports'],
  [ROLES.SAFETY_MANAGER]: ['PPE', 'Alerts', 'Incidents', 'AI Review', 'Reports'],
  [ROLES.SAFETY_OFFICER]: ['Today Alerts', 'Patrol', 'Incidents', 'Workers'],
  [ROLES.HITL]: ['Review Queue', 'Approved', 'Rejected', 'Retraining'],
  [ROLES.CLIENT]: ['Overview', 'Progress', 'Reports', 'Cameras'],
}
