import { ReactNode, RefObject } from 'react'

export type OutsideAlerterProps = {
  ref: RefObject<HTMLDivElement> | null
  handleClick: () => void
  handleFocusOutside: () => void
}

export type ClickOutsideElementProps = {
  children: ReactNode
  handleClick: () => void
  handleFocusOutside: () => void
}
