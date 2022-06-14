import { theme } from '../../../../stitches.config'
export type tokensProps = { [name: string]: { token: string; value: string } }[]
export enum tokens {
  colors = 'colors',
  space = 'space',
  fonts = 'fonts',
  fontSizes = 'fontSizes',
  fontWeights = 'fontWeights',
  lineHeights = 'lineHeights',
  borderWidths = 'borderWidths',
  radii = 'radii',
  shadows = 'shadows',
  opacity = 'opacity',
  zIndices = 'zIndices'
}

export const getTokens = (usage: string, token = tokens.colors): tokensProps => {
  return Object.entries(theme[token]).reduce(
    (tokens, [key, value]) => ({
      ...tokens,
      ...(key.includes(usage) ? { [key]: value } : {})
    }),
    {}
  ) as tokensProps
}
