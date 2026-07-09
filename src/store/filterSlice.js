import { createSlice } from '@reduxjs/toolkit'
import { FILTER_KEY } from '../utils/constants'

function loadFilters() {
  try {
    return JSON.parse(localStorage.getItem(FILTER_KEY) || 'null') || {}
  } catch {
    return {}
  }
}

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    country: 'India',
    state: null,
    city: null,
    project: null,
    site: null,
    zone: null,
    layer: null,
    shift: null,
    camera: null,
    dateFrom: null,
    dateTo: null,
    role: null,
    ...loadFilters(),
  },
  reducers: {
    setFilter(state, action) {
      const { key, value } = action.payload
      state[key] = value
      // cascade reset downstream filters
      const hierarchy = ['country', 'state', 'city', 'project', 'site', 'zone', 'layer', 'camera']
      const idx = hierarchy.indexOf(key)
      if (idx !== -1) {
        hierarchy.slice(idx + 1).forEach((k) => { state[k] = null })
      }
      localStorage.setItem(FILTER_KEY, JSON.stringify(state))
    },
    setFilters(state, action) {
      Object.assign(state, action.payload)
      localStorage.setItem(FILTER_KEY, JSON.stringify(state))
    },
    resetFilters(state) {
      state.state = null
      state.city = null
      state.project = null
      state.site = null
      state.zone = null
      state.layer = null
      state.shift = null
      state.camera = null
      state.dateFrom = null
      state.dateTo = null
      state.role = null
      localStorage.removeItem(FILTER_KEY)
    },
  },
})

export const { setFilter, setFilters, resetFilters } = filterSlice.actions
export default filterSlice.reducer
