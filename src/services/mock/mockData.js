import { ROLES, STATUS, LAYERS, ALERT_SEVERITY } from '../../types/index'

// ─── Users ────────────────────────────────────────────────────────────────────
export const mockUsers = [
  { id: 'u-001', name: 'Rajesh Kumar', email: 'admin@gmail.com', password: 'Admin@1234', role: ROLES.ADMIN, state: null, city: null, project: null, avatar: null, status: STATUS.ACTIVE },
  { id: 'u-002', name: 'Priya Sharma', email: 'pm@lt.com', password: 'Admin@1234', role: ROLES.PROJECT_MANAGER, state: 'Tamil Nadu', city: 'Chennai', project: 'NH-44 Chennai Corridor', avatar: null, status: STATUS.ACTIVE },
  { id: 'u-003', name: 'Arun Patel', email: 'supervisor@lt.com', password: 'Admin@1234', role: ROLES.SITE_SUPERVISOR, state: 'Tamil Nadu', city: 'Chennai', project: 'NH-44 Chennai Corridor', site: 'Site A - Southern Bypass', avatar: null, status: STATUS.ACTIVE },
  { id: 'u-004', name: 'Neha Singh', email: 'safety@lt.com', password: 'Admin@1234', role: ROLES.SAFETY_MANAGER, state: 'Tamil Nadu', city: 'Chennai', project: 'NH-44 Chennai Corridor', avatar: null, status: STATUS.ACTIVE },
  { id: 'u-005', name: 'Vikram Rao', email: 'engineer@lt.com', password: 'Admin@1234', role: ROLES.SITE_ENGINEER, state: 'Tamil Nadu', city: 'Chennai', project: 'NH-44 Chennai Corridor', site: 'Site A - Southern Bypass', avatar: null, status: STATUS.ACTIVE },
  { id: 'u-006', name: 'Meera Nair', email: 'officer@lt.com', password: 'Admin@1234', role: ROLES.SAFETY_OFFICER, state: 'Tamil Nadu', city: 'Chennai', project: 'NH-44 Chennai Corridor', site: 'Site A - Southern Bypass', avatar: null, status: STATUS.ACTIVE },
  { id: 'u-007', name: 'Suresh Babu', email: 'hitl@lt.com', password: 'Admin@1234', role: ROLES.HITL, state: null, city: null, project: null, avatar: null, status: STATUS.ACTIVE },
  { id: 'u-008', name: 'Anita Desai', email: 'client@lt.com', password: 'Admin@1234', role: ROLES.CLIENT, state: 'Tamil Nadu', city: 'Chennai', project: 'NH-44 Chennai Corridor', avatar: null, status: STATUS.ACTIVE },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export const mockProjects = [
  { id: 'p-001', name: 'NH-44 Chennai Corridor', state: 'Tamil Nadu', city: 'Chennai', totalBudget: 850000000, spentBudget: 612000000, plannedProgress: 78, actualProgress: 72, workers: 1240, equipment: 86, sites: 4, status: STATUS.IN_PROGRESS, startDate: '2023-01-15', endDate: '2025-12-31', spi: 0.92, cpi: 0.96, safetyScore: 87, lat: 13.0827, lng: 80.2707 },
  { id: 'p-002', name: 'Mumbai Coastal Road', state: 'Maharashtra', city: 'Mumbai', totalBudget: 1200000000, spentBudget: 480000000, plannedProgress: 45, actualProgress: 41, workers: 1850, equipment: 124, sites: 6, status: STATUS.IN_PROGRESS, startDate: '2023-06-01', endDate: '2026-06-30', spi: 0.91, cpi: 0.94, safetyScore: 82, lat: 19.0760, lng: 72.8777 },
  { id: 'p-003', name: 'Bangalore Ring Road', state: 'Karnataka', city: 'Bangalore', totalBudget: 650000000, spentBudget: 598000000, plannedProgress: 95, actualProgress: 94, workers: 620, equipment: 42, sites: 3, status: STATUS.IN_PROGRESS, startDate: '2022-03-01', endDate: '2025-03-31', spi: 0.99, cpi: 1.02, safetyScore: 94, lat: 12.9716, lng: 77.5946 },
  { id: 'p-004', name: 'Delhi Expressway Phase 2', state: 'Delhi', city: 'Delhi', totalBudget: 980000000, spentBudget: 196000000, plannedProgress: 22, actualProgress: 18, workers: 980, equipment: 68, sites: 5, status: STATUS.DELAYED, startDate: '2024-01-01', endDate: '2027-01-31', spi: 0.82, cpi: 0.88, safetyScore: 76, lat: 28.6139, lng: 77.2090 },
]

// ─── Sites ────────────────────────────────────────────────────────────────────
export const mockSites = [
  { id: 's-001', name: 'Site A - Southern Bypass', projectId: 'p-001', projectName: 'NH-44 Chennai Corridor', state: 'Tamil Nadu', city: 'Chennai', progress: 74, plannedProgress: 80, workers: 320, attendance: 94, equipment: 22, budget: 210000000, spent: 158000000, safetyScore: 88, aiRisk: 'Medium', delayProbability: 34, status: STATUS.IN_PROGRESS, cameras: 8, lat: 13.0500, lng: 80.2100, zone: 'Zone A', layer: LAYERS.DBM },
  { id: 's-002', name: 'Site B - Highway Widening', projectId: 'p-001', projectName: 'NH-44 Chennai Corridor', state: 'Tamil Nadu', city: 'Chennai', progress: 68, plannedProgress: 75, workers: 280, attendance: 91, equipment: 18, budget: 180000000, spent: 124000000, safetyScore: 85, aiRisk: 'Low', delayProbability: 22, status: STATUS.IN_PROGRESS, cameras: 6, lat: 13.1000, lng: 80.2500, zone: 'Zone B', layer: LAYERS.WMM },
  { id: 's-003', name: 'Site C - Bridge Approach', projectId: 'p-001', projectName: 'NH-44 Chennai Corridor', state: 'Tamil Nadu', city: 'Chennai', progress: 82, plannedProgress: 82, workers: 360, attendance: 96, equipment: 28, budget: 240000000, spent: 198000000, safetyScore: 92, aiRisk: 'Low', delayProbability: 12, status: STATUS.ON_TRACK, cameras: 10, lat: 13.0200, lng: 80.1800, zone: 'Zone C', layer: LAYERS.BC },
  { id: 's-004', name: 'Site D - Interchange', projectId: 'p-001', projectName: 'NH-44 Chennai Corridor', state: 'Tamil Nadu', city: 'Chennai', progress: 58, plannedProgress: 72, workers: 280, attendance: 88, equipment: 18, budget: 220000000, spent: 132000000, safetyScore: 79, aiRisk: 'High', delayProbability: 58, status: STATUS.DELAYED, cameras: 7, lat: 13.0700, lng: 80.2900, zone: 'Zone D', layer: LAYERS.GSB },
]

// ─── KPI Data ─────────────────────────────────────────────────────────────────
export const mockProjectManagerKPIs = {
  totalWorkers: 1240,
  attendancePercent: 92.4,
  overallProgress: 72,
  plannedProgress: 78,
  actualProgress: 72,
  spi: 0.92,
  cpi: 0.96,
  budgetTotal: 850000000,
  budgetBurn: 612000000,
  budgetRemaining: 238000000,
  safetyCompliance: 87.3,
  equipmentAvailability: 91.2,
  liveCameras: 31,
  openAlerts: 14,
  criticalAlerts: 3,
  aiProductivity: 78.6,
  estimatedCompletion: '2025-12-31',
  workersOnSite: 1144,
  workersAbsent: 96,
  nearMissCount: 2,
  accidentCount: 0,
}

// ─── Progress Trend ───────────────────────────────────────────────────────────
export const mockProgressTrend = [
  { month: 'Jan', planned: 12, actual: 10 },
  { month: 'Feb', planned: 22, actual: 19 },
  { month: 'Mar', planned: 32, actual: 29 },
  { month: 'Apr', planned: 42, actual: 38 },
  { month: 'May', planned: 52, actual: 47 },
  { month: 'Jun', planned: 60, actual: 55 },
  { month: 'Jul', planned: 68, actual: 62 },
  { month: 'Aug', planned: 75, actual: 69 },
  { month: 'Sep', planned: 78, actual: 72 },
]

// ─── Budget Trend ─────────────────────────────────────────────────────────────
export const mockBudgetTrend = [
  { month: 'Jan', planned: 60, actual: 58 },
  { month: 'Feb', planned: 110, actual: 105 },
  { month: 'Mar', planned: 175, actual: 168 },
  { month: 'Apr', planned: 250, actual: 242 },
  { month: 'May', planned: 330, actual: 318 },
  { month: 'Jun', planned: 420, actual: 405 },
  { month: 'Jul', planned: 510, actual: 492 },
  { month: 'Aug', planned: 580, actual: 558 },
  { month: 'Sep', planned: 612, actual: 612 },
]

// ─── Attendance Trend ─────────────────────────────────────────────────────────
export const mockAttendanceTrend = [
  { day: 'Mon', present: 1180, absent: 60 },
  { day: 'Tue', present: 1210, absent: 30 },
  { day: 'Wed', present: 1195, absent: 45 },
  { day: 'Thu', present: 1220, absent: 20 },
  { day: 'Fri', present: 1144, absent: 96 },
  { day: 'Sat', present: 980, absent: 260 },
]

// ─── Layer Progress ───────────────────────────────────────────────────────────
export const mockLayerProgress = [
  { layer: 'Earthwork', planned: 100, actual: 100, status: STATUS.COMPLETED },
  { layer: 'GSB', planned: 100, actual: 98, status: STATUS.COMPLETED },
  { layer: 'WMM', planned: 95, actual: 88, status: STATUS.IN_PROGRESS },
  { layer: 'DBM', planned: 80, actual: 72, status: STATUS.IN_PROGRESS },
  { layer: 'BC', planned: 40, actual: 28, status: STATUS.IN_PROGRESS },
  { layer: 'PQC', planned: 20, actual: 10, status: STATUS.IN_PROGRESS },
  { layer: 'Survey', planned: 100, actual: 100, status: STATUS.COMPLETED },
]

// ─── Equipment Utilization ────────────────────────────────────────────────────
export const mockEquipmentData = [
  { name: 'Excavators', total: 18, running: 16, idle: 2, utilization: 89 },
  { name: 'Rollers', total: 12, running: 11, idle: 1, utilization: 92 },
  { name: 'Pavers', total: 8, running: 7, idle: 1, utilization: 88 },
  { name: 'Dumpers', total: 24, running: 22, idle: 2, utilization: 92 },
  { name: 'Cranes', total: 6, running: 5, idle: 1, utilization: 83 },
  { name: 'Graders', total: 10, running: 8, idle: 2, utilization: 80 },
  { name: 'Concrete Mixers', total: 8, running: 7, idle: 1, utilization: 88 },
]

// ─── PPE Compliance ───────────────────────────────────────────────────────────
export const mockPPEData = [
  { ppe: 'Helmet', compliant: 94, nonCompliant: 6 },
  { ppe: 'Safety Vest', compliant: 91, nonCompliant: 9 },
  { ppe: 'Safety Shoes', compliant: 88, nonCompliant: 12 },
  { ppe: 'Harness', compliant: 96, nonCompliant: 4 },
  { ppe: 'Gloves', compliant: 82, nonCompliant: 18 },
  { ppe: 'Goggles', compliant: 78, nonCompliant: 22 },
]

// ─── Alerts ───────────────────────────────────────────────────────────────────
export const mockAlerts = [
  { id: 'a-001', type: 'PPE Violation', severity: ALERT_SEVERITY.CRITICAL, site: 'Site A', zone: 'Zone A', camera: 'CAM-101', description: 'Worker without helmet detected near excavation zone', time: '10:42 AM', status: STATUS.PENDING, aiConfidence: 96 },
  { id: 'a-002', type: 'Restricted Zone', severity: ALERT_SEVERITY.HIGH, site: 'Site D', zone: 'Zone D', camera: 'CAM-407', description: 'Unauthorized personnel in restricted zone', time: '10:38 AM', status: STATUS.PENDING, aiConfidence: 91 },
  { id: 'a-003', type: 'Equipment Proximity', severity: ALERT_SEVERITY.HIGH, site: 'Site B', zone: 'Zone B', camera: 'CAM-205', description: 'Worker too close to operating excavator', time: '10:31 AM', status: STATUS.PENDING, aiConfidence: 88 },
  { id: 'a-004', type: 'PPE Violation', severity: ALERT_SEVERITY.MEDIUM, site: 'Site C', zone: 'Zone C', camera: 'CAM-312', description: 'Worker without safety vest on active road section', time: '10:22 AM', status: STATUS.RESOLVED, aiConfidence: 94 },
  { id: 'a-005', type: 'Near Miss', severity: ALERT_SEVERITY.CRITICAL, site: 'Site A', zone: 'Zone A', camera: 'CAM-103', description: 'Near miss incident between dumper and worker', time: '09:58 AM', status: STATUS.PENDING, aiConfidence: 97 },
  { id: 'a-006', type: 'Fire Hazard', severity: ALERT_SEVERITY.HIGH, site: 'Site D', zone: 'Zone D', camera: 'CAM-401', description: 'Smoke detected near material storage area', time: '09:44 AM', status: STATUS.RESOLVED, aiConfidence: 89 },
]

// ─── Workers ──────────────────────────────────────────────────────────────────
export const mockWorkers = [
  { id: 'w-001', name: 'Ramu Krishnan', role: 'Excavator Operator', site: 'Site A', zone: 'Zone A', attendance: 'Present', ppeCompliant: true, shift: 'Morning', contractor: 'ABC Infra' },
  { id: 'w-002', name: 'Selvam Murugan', role: 'Roller Operator', site: 'Site A', zone: 'Zone A', attendance: 'Present', ppeCompliant: true, shift: 'Morning', contractor: 'ABC Infra' },
  { id: 'w-003', name: 'Balu Pandian', role: 'Helper', site: 'Site B', zone: 'Zone B', attendance: 'Present', ppeCompliant: false, shift: 'Morning', contractor: 'XYZ Builders' },
  { id: 'w-004', name: 'Karthik Raj', role: 'Paver Operator', site: 'Site C', zone: 'Zone C', attendance: 'Present', ppeCompliant: true, shift: 'Afternoon', contractor: 'PQR Works' },
  { id: 'w-005', name: 'Dinesh Kumar', role: 'Surveyor', site: 'Site A', zone: 'Zone A', attendance: 'Absent', ppeCompliant: false, shift: 'Morning', contractor: 'ABC Infra' },
]

// ─── Cameras ──────────────────────────────────────────────────────────────────
export const mockCameras = [
  { id: 'cam-101', name: 'AI Pole Cam 01', site: 'Site A', zone: 'Zone A', status: STATUS.ONLINE, detection: 'PPE Compliance', health: 96, lastSeen: 'Live', lat: 13.0510, lng: 80.2110 },
  { id: 'cam-102', name: 'AI Pole Cam 02', site: 'Site A', zone: 'Zone A', status: STATUS.ONLINE, detection: 'Vehicle Entry', health: 94, lastSeen: 'Live', lat: 13.0520, lng: 80.2120 },
  { id: 'cam-103', name: 'AI Tower Cam 01', site: 'Site A', zone: 'Zone A', status: STATUS.OFFLINE, detection: 'Zone Monitoring', health: 0, lastSeen: '4 min ago', lat: 13.0530, lng: 80.2130 },
  { id: 'cam-201', name: 'AI Pole Cam 03', site: 'Site B', zone: 'Zone B', status: STATUS.ONLINE, detection: 'PPE Compliance', health: 98, lastSeen: 'Live', lat: 13.1010, lng: 80.2510 },
  { id: 'cam-301', name: 'AI Tower Cam 02', site: 'Site C', zone: 'Zone C', status: STATUS.ONLINE, detection: 'Progress Monitoring', health: 92, lastSeen: 'Live', lat: 13.0210, lng: 80.1810 },
]

// ─── HITL Queue ───────────────────────────────────────────────────────────────
export const mockHITLQueue = [
  { id: 'h-001', alertId: 'a-001', type: 'PPE Violation', image: null, aiLabel: 'No Helmet', aiConfidence: 96, site: 'Site A', camera: 'CAM-101', time: '10:42 AM', status: 'Pending' },
  { id: 'h-002', alertId: 'a-002', type: 'Restricted Zone', image: null, aiLabel: 'Unauthorized Entry', aiConfidence: 91, site: 'Site D', camera: 'CAM-407', time: '10:38 AM', status: 'Pending' },
  { id: 'h-003', alertId: 'a-003', type: 'Equipment Proximity', image: null, aiLabel: 'Unsafe Distance', aiConfidence: 88, site: 'Site B', camera: 'CAM-205', time: '10:31 AM', status: 'Approved' },
  { id: 'h-004', alertId: 'a-005', type: 'Near Miss', image: null, aiLabel: 'Near Miss Event', aiConfidence: 97, site: 'Site A', camera: 'CAM-103', time: '09:58 AM', status: 'Pending' },
]

// ─── Activity Timeline ────────────────────────────────────────────────────────
export const mockActivityTimeline = [
  { id: 't-001', time: '10:42 AM', type: 'alert', message: 'Critical PPE violation detected at Site A Zone A', severity: 'Critical' },
  { id: 't-002', time: '10:30 AM', type: 'progress', message: 'DBM layer completed 72% at Site A', severity: 'Info' },
  { id: 't-003', time: '10:15 AM', type: 'attendance', message: '1144 workers checked in across all sites', severity: 'Info' },
  { id: 't-004', time: '09:58 AM', type: 'alert', message: 'Near miss incident reported at Site A', severity: 'Critical' },
  { id: 't-005', time: '09:30 AM', type: 'equipment', message: 'Excavator EX-07 maintenance completed, back online', severity: 'Success' },
  { id: 't-006', time: '09:00 AM', type: 'shift', message: 'Morning shift started across all 4 sites', severity: 'Info' },
  { id: 't-007', time: '08:45 AM', type: 'weather', message: 'Weather alert: Light rain expected at 2 PM', severity: 'Warning' },
]

// ─── Weather ──────────────────────────────────────────────────────────────────
export const mockWeather = {
  location: 'Chennai, Tamil Nadu',
  temperature: 32,
  feelsLike: 36,
  humidity: 74,
  windSpeed: 18,
  condition: 'Partly Cloudy',
  uvIndex: 7,
  visibility: 8,
  forecast: [
    { day: 'Today', high: 34, low: 26, condition: 'Partly Cloudy', rain: 20 },
    { day: 'Tomorrow', high: 32, low: 25, condition: 'Light Rain', rain: 70 },
    { day: 'Wed', high: 30, low: 24, condition: 'Rainy', rain: 85 },
    { day: 'Thu', high: 33, low: 25, condition: 'Cloudy', rain: 40 },
    { day: 'Fri', high: 35, low: 27, condition: 'Sunny', rain: 10 },
  ],
}

// ─── AI Recommendations ───────────────────────────────────────────────────────
export const mockAIRecommendations = [
  { id: 'r-001', priority: 'High', category: 'Safety', message: 'Increase PPE monitoring frequency at Site D Zone D — 3 violations in last 2 hours', action: 'Deploy additional safety officer' },
  { id: 'r-002', priority: 'High', category: 'Progress', message: 'Site D is 14% behind schedule. Recommend adding night shift to recover delay', action: 'Schedule night shift crew' },
  { id: 'r-003', priority: 'Medium', category: 'Equipment', message: 'Roller R-04 showing abnormal vibration patterns. Preventive maintenance recommended', action: 'Schedule maintenance' },
  { id: 'r-004', priority: 'Medium', category: 'Weather', message: 'Rain forecast tomorrow. Secure material stockpiles and plan indoor tasks', action: 'Issue weather advisory' },
  { id: 'r-005', priority: 'Low', category: 'Productivity', message: 'Worker productivity at Site B is 8% above target. Recognize top performers', action: 'Issue performance recognition' },
]

// ─── Server / AI Health ───────────────────────────────────────────────────────
export const mockServerHealth = {
  cpuUsage: 42,
  ramUsage: 68,
  storageUsed: 71,
  gpuUsage: 84,
  networkSpeed: '940 Mbps',
  temperature: '52°C',
  uptime: '42d 6h',
  os: 'Ubuntu 24.04 LTS',
  aiModels: [
    { name: 'PPE Detection v3.2', status: 'Running', accuracy: 96.4, fps: 24 },
    { name: 'Zone Monitoring v2.1', status: 'Running', accuracy: 94.1, fps: 18 },
    { name: 'Progress Estimation v1.8', status: 'Running', accuracy: 91.2, fps: 6 },
    { name: 'Near Miss Detection v2.4', status: 'Running', accuracy: 97.8, fps: 24 },
  ],
  cameras: { total: 31, online: 28, offline: 3 },
  edgeDevices: { total: 12, online: 11, offline: 1 },
}

// ─── Safety Manager Data ──────────────────────────────────────────────────────
export const mockSafetyData = {
  ppeCompliance: 87.3,
  helmetCompliance: 94,
  vestCompliance: 91,
  shoesCompliance: 88,
  harnessCompliance: 96,
  unsafeActs: 12,
  unsafeConditions: 5,
  nearMiss: 2,
  accidents: 0,
  pendingReviews: 8,
  aiAccuracy: 95.6,
  trend: [
    { day: 'Mon', compliance: 89, violations: 8 },
    { day: 'Tue', compliance: 91, violations: 6 },
    { day: 'Wed', compliance: 88, violations: 10 },
    { day: 'Thu', compliance: 92, violations: 5 },
    { day: 'Fri', compliance: 87, violations: 12 },
    { day: 'Sat', compliance: 85, violations: 14 },
  ],
}

// ─── Site Engineer Layer Data ─────────────────────────────────────────────────
export const mockEngineerData = {
  todayTarget: 2.4,
  todayActual: 2.1,
  machineHours: 186,
  materialUsed: { aggregate: 420, bitumen: 18.4, cement: 0, steel: 0 },
  inspections: { pending: 3, passed: 12, failed: 1 },
  surveyPoints: { total: 48, completed: 44, pending: 4 },
}

// ─── Supervisor Data ──────────────────────────────────────────────────────────
export const mockSupervisorData = {
  todayTarget: 85,
  todayProgress: 78,
  attendance: { present: 318, absent: 22, total: 340 },
  equipmentRunning: 19,
  equipmentTotal: 22,
  materialReceived: [
    { material: 'Aggregate', quantity: 420, unit: 'MT', status: 'Received' },
    { material: 'Bitumen', quantity: 18.4, unit: 'MT', status: 'Received' },
    { material: 'Cement', quantity: 0, unit: 'MT', status: 'Pending' },
  ],
  issues: [
    { id: 'i-001', description: 'Roller breakdown at chainage 12+400', priority: 'High', status: 'Open' },
    { id: 'i-002', description: 'Material shortage - aggregate stock low', priority: 'Medium', status: 'Open' },
  ],
  tasks: [
    { id: 'tk-001', task: 'Complete DBM layer at chainage 12+000 to 12+500', status: 'In Progress', assignee: 'Ramu K' },
    { id: 'tk-002', task: 'Conduct evening safety briefing', status: 'Pending', assignee: 'Arun P' },
    { id: 'tk-003', task: 'Submit daily progress report', status: 'Pending', assignee: 'Vikram R' },
  ],
}
