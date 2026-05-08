const BASE = import.meta.env.VITE_API_URL ?? ''

export interface PlanOffer {
  id: string
  planId: string
  label: string
  discountedPricePkr: number
  maxRedemptions: number | null
  currentRedemptions: number
  validFrom: string | null
  validUntil: string | null
  isActive: boolean
}

export interface Plan {
  id: string
  name: string
  billingCycle: 'none' | 'monthly' | 'yearly'
  pricePkr: number
  isActive: boolean
  limits: { featureKey: string; featureValue: string }[]
  activeOffer: PlanOffer | null
}

export async function fetchPlans(): Promise<Plan[]> {
  const res = await fetch(`${BASE}/api/v1/plans`)
  if (!res.ok) throw new Error('Failed to fetch plans')
  const json = await res.json()
  return json.data as Plan[]
}
