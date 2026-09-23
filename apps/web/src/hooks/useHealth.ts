import useSWR from 'swr'

async function fetchHealth() {
  const response = await fetch('/api/health')

  if (!response.ok) {
    throw new Error('API request failed')
  }

  return response.json() as Promise<{ status: string }>
}

export function useHealth() {
  return useSWR('/api/health', fetchHealth)
}
