import { useSyncExternalStore } from 'react'

const emptySubscribe = () => () => {}

export const ClientGate = ({ children }: { children: React.ReactNode }) => {
  const isServer = useSyncExternalStore(
    emptySubscribe,
    () => false,
    () => true
  )
  return isServer ? null : children
}
