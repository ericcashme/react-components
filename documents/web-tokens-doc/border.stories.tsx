import { Meta } from '@storybook/react'
import { getTokens, tokens } from './_tokens'
import { Template } from './_base'

export default {
  title: 'Tokens/ Border'
} as Meta

export const Stroke = Template.bind({})
Stroke.args = {
  title: 'Border Widths',
  tokens: getTokens('border-stroke', tokens.borderWidths),
  key: tokens.borderWidths
}
Stroke.parameters = { options: { showPanel: false } }

export const Radii = Template.bind({})
Radii.args = {
  title: 'Border Radius',
  tokens: getTokens('corner-radius', tokens.radii),
  key: tokens.radii
}
Radii.parameters = { options: { showPanel: false } }
