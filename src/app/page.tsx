'use client'
import { Grid } from '@/components/grid/Grid'
import { Keyboard } from '@/components/keyboard/Keyboard'
import { VALID_GUESSES } from '@/constants/validGuesses'
import { WORDS } from '@/constants/wordlist'

export default function Home() {
  return (
    <main>
      <Grid
        solution={WORDS.at(0) ?? ''}
        guesses={['']}
        currentGuess=""
        currentRowClassName=""
      />
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
