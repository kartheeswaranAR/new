import { createSlice } from '@reduxjs/toolkit'
import { TOKEN_KEY, USER_KEY } from '../utils/constants'

function loadFromStorage() {
  try {
    return {
      user: JSON.parse(localStorage.getItem(USER_KEY) || 'null'),
      token: localStorage.getItem(TOKEN_KEY) || null,
    }
  } catch {
    return { user: null, token: null }
  }
}

const stored = loadFromStorage()

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: stored.user,
    token: stored.token,
    isAuthenticated: Boolean(stored.user && stored.token),
    loading: false,
    error: null,
  },
  reducers: {
    loginStart(state) {
      state.loading = true
      state.error = null
    },
    loginSuccess(state, action) {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isAuthenticated = true
      state.loading = false
      state.error = null
      localStorage.setItem(USER_KEY, JSON.stringify(action.payload.user))
      localStorage.setItem(TOKEN_KEY, action.payload.token)
    },
    loginFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    logout(state) {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      localStorage.removeItem(USER_KEY)
      localStorage.removeItem(TOKEN_KEY)
    },
    updateUser(state, action) {
      state.user = { ...state.user, ...action.payload }
      localStorage.setItem(USER_KEY, JSON.stringify(state.user))
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout, updateUser } = authSlice.actions
export default authSlice.reducer
