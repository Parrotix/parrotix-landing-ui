import { useEffect, useState } from 'react'
import { fetchPlans, Plan } from '../lib/api'

interface UsePlansResult {
  plans: Plan[]
  loading: boolean
  error: boolean
}

export function usePlans(): UsePlansResult {
  const [plans, setPlans] = useState<Plan[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchPlans()
      .then(setPlans)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return { plans, loading, error }
}
