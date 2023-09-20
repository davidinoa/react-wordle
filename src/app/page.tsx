'use client'
import { Keyboard } from '@/components/keyboard/Keyboard'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Keyboard
        onChar={() => null}
        onDelete={() => null}
        onEnter={() => null}
        solution=""
        guesses={[]}
      />
    </main>
  )
}
