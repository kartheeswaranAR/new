import { useSelector, useDispatch } from 'react-redux'
import { setFilter, setFilters, resetFilters } from '../store/filterSlice'

export function useFilters() {
  const filters = useSelector((state) => state.filters)
  const dispatch = useDispatch()

  return {
    filters,
    setFilter: (key, value) => dispatch(setFilter({ key, value })),
    setFilters: (values) => dispatch(setFilters(values)),
    resetFilters: () => dispatch(resetFilters()),
  }
}
