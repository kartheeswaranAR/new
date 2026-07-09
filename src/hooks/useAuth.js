import { useSelector, useDispatch } from 'react-redux'
import { loginStart, loginSuccess, loginFailure, logout } from '../store/authSlice'
import { apiLogin } from '../services/apiService'

export function useAuth() {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  async function login(credentials) {
    dispatch(loginStart())
    try {
      const result = await apiLogin(credentials)
      dispatch(loginSuccess(result))
      return result
    } catch (err) {
      dispatch(loginFailure(err.message))
      throw err
    }
  }

  function logoutUser() {
    dispatch(logout())
  }

  return { ...auth, login, logout: logoutUser }
}
