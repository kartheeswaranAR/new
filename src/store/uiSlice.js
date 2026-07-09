import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    sidebarOpen: true,
    sidebarCollapsed: false,
    notificationPanelOpen: false,
    activeModal: null,
    activeDrawer: null,
    theme: 'dark',
    refreshTick: 0,
  },
  reducers: {
    toggleSidebar(state) { state.sidebarOpen = !state.sidebarOpen },
    setSidebarOpen(state, action) { state.sidebarOpen = action.payload },
    toggleSidebarCollapse(state) { state.sidebarCollapsed = !state.sidebarCollapsed },
    toggleNotificationPanel(state) { state.notificationPanelOpen = !state.notificationPanelOpen },
    setNotificationPanel(state, action) { state.notificationPanelOpen = action.payload },
    openModal(state, action) { state.activeModal = action.payload },
    closeModal(state) { state.activeModal = null },
    openDrawer(state, action) { state.activeDrawer = action.payload },
    closeDrawer(state) { state.activeDrawer = null },
    triggerRefresh(state) { state.refreshTick += 1 },
    toggleTheme(state) { state.theme = state.theme === 'dark' ? 'light' : 'dark' },
    setTheme(state, action) { state.theme = action.payload },
  },
})

export const {
  toggleSidebar, setSidebarOpen, toggleSidebarCollapse,
  toggleNotificationPanel, setNotificationPanel,
  openModal, closeModal, openDrawer, closeDrawer,
  triggerRefresh, toggleTheme, setTheme,
} = uiSlice.actions
export default uiSlice.reducer
