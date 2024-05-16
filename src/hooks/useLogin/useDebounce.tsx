import { useRef } from 'react'

export function useDebounce(delay: number = 500) {
  const debounceRef = useRef<any>(null)
  function debounce(fn: any) {
    window.clearTimeout(debounceRef.current)
    debounceRef.current = window.setTimeout(() => {
      return fn()
    }, delay)
  }
  return debounce
}
