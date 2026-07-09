import {
  mockUsers, mockProjects, mockSites, mockProjectManagerKPIs,
  mockProgressTrend, mockBudgetTrend, mockAttendanceTrend,
  mockLayerProgress, mockEquipmentData, mockPPEData, mockAlerts,
  mockWorkers, mockCameras, mockHITLQueue, mockActivityTimeline,
  mockWeather, mockAIRecommendations, mockServerHealth,
  mockSafetyData, mockEngineerData, mockSupervisorData,
} from './mock/mockData'

const delay = (ms = 300) => new Promise((res) => setTimeout(res, ms))

// ─── Auth ─────────────────────────────────────────────────────────────────────
export async function apiLogin({ email, password }) {
  await delay(400)
  const user = mockUsers.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  )
  if (!user) throw new Error('Invalid credentials. Please check your email and password.')
  const { password: _, ...safeUser } = user
  return { token: `mock-jwt-${safeUser.id}-${Date.now()}`, user: safeUser }
}

// ─── Projects ─────────────────────────────────────────────────────────────────
export async function apiGetProjects(filters = {}) {
  await delay()
  let data = [...mockProjects]
  if (filters.state) data = data.filter((p) => p.state === filters.state)
  if (filters.city) data = data.filter((p) => p.city === filters.city)
  return data
}

export async function apiGetProject(id) {
  await delay()
  return mockProjects.find((p) => p.id === id) || null
}

// ─── Sites ────────────────────────────────────────────────────────────────────
export async function apiGetSites(filters = {}) {
  await delay()
  let data = [...mockSites]
  if (filters.projectId) data = data.filter((s) => s.projectId === filters.projectId)
  if (filters.state) data = data.filter((s) => s.state === filters.state)
  if (filters.city) data = data.filter((s) => s.city === filters.city)
  return data
}

export async function apiGetSite(id) {
  await delay()
  return mockSites.find((s) => s.id === id) || null
}

// ─── KPIs ─────────────────────────────────────────────────────────────────────
export async function apiGetProjectManagerKPIs() {
  await delay()
  return mockProjectManagerKPIs
}

// ─── Charts ───────────────────────────────────────────────────────────────────
export async function apiGetProgressTrend() { await delay(); return mockProgressTrend }
export async function apiGetBudgetTrend() { await delay(); return mockBudgetTrend }
export async function apiGetAttendanceTrend() { await delay(); return mockAttendanceTrend }
export async function apiGetLayerProgress() { await delay(); return mockLayerProgress }
export async function apiGetEquipmentData() { await delay(); return mockEquipmentData }
export async function apiGetPPEData() { await delay(); return mockPPEData }

// ─── Alerts ───────────────────────────────────────────────────────────────────
export async function apiGetAlerts(filters = {}) {
  await delay()
  let data = [...mockAlerts]
  if (filters.site) data = data.filter((a) => a.site === filters.site)
  if (filters.severity) data = data.filter((a) => a.severity === filters.severity)
  if (filters.status) data = data.filter((a) => a.status === filters.status)
  return data
}

// ─── Workers ──────────────────────────────────────────────────────────────────
export async function apiGetWorkers(filters = {}) {
  await delay()
  let data = [...mockWorkers]
  if (filters.site) data = data.filter((w) => w.site === filters.site)
  return data
}

// ─── Cameras ──────────────────────────────────────────────────────────────────
export async function apiGetCameras(filters = {}) {
  await delay()
  let data = [...mockCameras]
  if (filters.site) data = data.filter((c) => c.site === filters.site)
  return data
}

// ─── HITL ─────────────────────────────────────────────────────────────────────
export async function apiGetHITLQueue() { await delay(); return mockHITLQueue }
export async function apiReviewHITL(id, decision) {
  await delay(200)
  return { id, decision, reviewedAt: new Date().toISOString() }
}

// ─── Activity ─────────────────────────────────────────────────────────────────
export async function apiGetActivityTimeline() { await delay(); return mockActivityTimeline }

// ─── Weather ──────────────────────────────────────────────────────────────────
export async function apiGetWeather() { await delay(); return mockWeather }

// ─── AI ───────────────────────────────────────────────────────────────────────
export async function apiGetAIRecommendations() { await delay(); return mockAIRecommendations }

// ─── Server Health ────────────────────────────────────────────────────────────
export async function apiGetServerHealth() { await delay(); return mockServerHealth }

// ─── Safety ───────────────────────────────────────────────────────────────────
export async function apiGetSafetyData() { await delay(); return mockSafetyData }

// ─── Engineer ─────────────────────────────────────────────────────────────────
export async function apiGetEngineerData() { await delay(); return mockEngineerData }

// ─── Supervisor ───────────────────────────────────────────────────────────────
export async function apiGetSupervisorData() { await delay(); return mockSupervisorData }
