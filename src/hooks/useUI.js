import { useSelector, useDispatch } from 'react-redux'
import {
  toggleSidebar, setSidebarOpen, toggleSidebarCollapse,
  toggleNotificationPanel, openModal, closeModal,
  openDrawer, closeDrawer, triggerRefresh, toggleTheme, setTheme,
} from '../store/uiSlice'

export function useUI() {
  const ui = useSelector((state) => state.ui)
  const dispatch = useDispatch()

  return {
    ...ui,
    toggleSidebar: () => dispatch(toggleSidebar()),
    setSidebarOpen: (v) => dispatch(setSidebarOpen(v)),
    toggleSidebarCollapse: () => dispatch(toggleSidebarCollapse()),
    toggleNotificationPanel: () => dispatch(toggleNotificationPanel()),
    openModal: (id) => dispatch(openModal(id)),
    closeModal: () => dispatch(closeModal()),
    openDrawer: (id) => dispatch(openDrawer(id)),
    closeDrawer: () => dispatch(closeDrawer()),
    triggerRefresh: () => dispatch(triggerRefresh()),
    toggleTheme: () => dispatch(toggleTheme()),
    setTheme: (value) => dispatch(setTheme(value)),
  }
}
