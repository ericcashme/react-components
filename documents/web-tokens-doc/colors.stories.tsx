import { Meta } from '@storybook/react'
import { Template } from './_base'
import { getTokens, tokens } from './_tokens'

export default {
  title: 'Tokens/ Colors'
} as Meta

export const Background = Template.bind({})
Background.args = {
  title: 'Background Colors',
  tokens: getTokens('background'),
  key: tokens.colors
}
Background.parameters = { options: { showPanel: false } }

export const Border = Template.bind({})
Border.args = {
  title: 'Border Colors',
  tokens: getTokens('border'),
  key: tokens.colors
}
Border.parameters = { options: { showPanel: false } }

export const Icon = Template.bind({})
Icon.args = {
  title: 'Icon Colors',
  tokens: getTokens('icon'),
  key: tokens.colors
}
Icon.parameters = { options: { showPanel: false } }

export const Text = Template.bind({})
Text.args = {
  title: 'Text Colors',
  tokens: getTokens('text'),
  key: tokens.colors
}
Text.parameters = { options: { showPanel: false } }
