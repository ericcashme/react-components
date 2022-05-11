import { Meta } from '@storybook/react'
import { Template } from './_base'
import { getTokens, tokens } from './_tokens'

export default {
  title: 'Tokens/ Others'
} as Meta

export const Spacing = Template.bind({})
Spacing.args = {
  title: 'Spacing',
  tokens: getTokens('spacing', tokens.space),
  key: tokens.space
}
Spacing.parameters = { options: { showPanel: false } }

export const Shadows = Template.bind({})
Shadows.args = {
  title: 'Shadows',
  tokens: getTokens('shadow', tokens.shadows),
  key: tokens.shadows
}
Shadows.parameters = { options: { showPanel: false } }

export const Opacity = Template.bind({})
Opacity.args = {
  title: 'Opacity',
  tokens: getTokens('opacity', tokens.opacity),
  key: tokens.opacity
}
Opacity.parameters = { options: { showPanel: false } }
