import { useState, useEffect, useCallback, useRef } from 'react'

export function useApi(apiFn, deps = [], options = {}) {
  const { immediate = true, onSuccess, onError } = options
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(immediate)
  const [error, setError] = useState(null)
  const mountedRef = useRef(true)

  useEffect(() => {
    mountedRef.current = true
    return () => { mountedRef.current = false }
  }, [])

  const execute = useCallback(async (...args) => {
    setLoading(true)
    setError(null)
    try {
      const result = await apiFn(...args)
      if (mountedRef.current) {
        setData(result)
        onSuccess?.(result)
      }
      return result
    } catch (err) {
      if (mountedRef.current) {
        setError(err.message || 'Something went wrong')
        onError?.(err)
      }
    } finally {
      if (mountedRef.current) setLoading(false)
    }
  }, deps) // eslint-disable-line

  useEffect(() => {
    if (immediate) execute()
  }, [execute]) // eslint-disable-line

  return { data, loading, error, refetch: execute }
}
