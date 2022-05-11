export type sizes =
  | 'nano'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'mega'
  | 'ultra'
  | 'giga'

export type spaces = sizes

export type commonProps = {
  id?: string
  className?: string
  asChild?: boolean
}
