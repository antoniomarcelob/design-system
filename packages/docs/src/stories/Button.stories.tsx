import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    
  },
}