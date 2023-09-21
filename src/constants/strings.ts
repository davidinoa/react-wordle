export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const DELETE_TEXT = 'Delete'
export const ENTER_TEXT = 'Enter'
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Not enough letters'
export const WORD_NOT_FOUND_MESSAGE = 'Word not found'
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
