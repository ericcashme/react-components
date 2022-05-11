import { Meta } from '@storybook/react'
import { getTokens, tokens } from './_tokens'
import { Template } from './_base'

export default {
  title: 'Tokens/ Typography'
} as Meta

export const FontFamilies = Template.bind({})

FontFamilies.args = {
  title: 'Font Families',
  tokens: getTokens('font-family', tokens.fonts),
  key: tokens.fonts
}

FontFamilies.parameters = { options: { showPanel: false } }

export const FontSizes = Template.bind({})

FontSizes.args = {
  title: 'Font Sizes',
  tokens: getTokens('font-size', tokens.fontSizes),
  key: tokens.fontSizes
}

FontSizes.parameters = { options: { showPanel: false } }

export const FontWeights = Template.bind({})

FontWeights.args = {
  title: 'Font Weights',
  tokens: getTokens('font-weight', tokens.fontWeights),
  key: tokens.fontWeights
}

FontWeights.parameters = { options: { showPanel: false } }

export const LineHeights = Template.bind({})

LineHeights.args = {
  title: 'Line Heights',
  tokens: getTokens('line-height', tokens.lineHeights),
  key: tokens.lineHeights
}

LineHeights.parameters = { options: { showPanel: false } }
