import { FC, useRef, useEffect } from 'react'
import { OutsideAlerterProps, ClickOutsideElementProps } from './models'

const useOutsideAlerter = ({ ref, handleClick, handleFocusOutside }: OutsideAlerterProps) => {
  useEffect(() => {
    const handleClickOutside = (event?: Event) => {
      if (ref?.current && !ref.current.contains(event?.target as Node)) {
        handleClick()
      }
    }

    const documentFocus = (event?: Event) => {
      if (ref?.current && !ref.current.contains(event?.target as Node)) {
        handleFocusOutside?.()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('focusin', documentFocus)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('focusin', documentFocus)
    }
  }, [ref, handleClick, handleFocusOutside])
}

export const UseClickOutsideElement: FC<ClickOutsideElementProps> = ({ children, handleClick, handleFocusOutside }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  useOutsideAlerter({ ref: wrapperRef, handleClick, handleFocusOutside })
  return <div ref={wrapperRef}>{children}</div>
}
