import { css } from '../../../../stitches.config'

export const Title = css({
  fontFamily: 'system-ui',
  color: '$blue-text-default',
  mb: '$spacing-md'
})

export const Card = css({
  fontFamily: 'system-ui',
  color: '$neutral-text-default',
  p: '$spacing-sm',
  mb: '$spacing-xs',
  boxShadow: '$shadow-level-1 rgba(0, 0, 0, .16)',
  borderRadius: '$corner-radius-sm',
  '> .row': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    p: '$spacing-xxs',
    '> .col': {
      flex: 1,
      '&.-bg': {
        height: '50px'
      }
    }
  }
})
