import type { Meta, StoryObj } from '@storybook/react'
import { css } from '@web-application-template-admin/styled-system/css'
import { flex } from '@web-application-template-admin/styled-system/patterns'
import * as icons from 'icon'

import { Icon } from './Icon'

const meta = {
  title: 'Example/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'User',
  },
  argTypes: {
    name: {
      control: {
        type: 'select',
      },
    },
    color: {
      control: {
        type: 'select',
      },
    },
    size: {
      control: {
        type: 'select',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof Icon>

export const Base: Story = {
  render: (args) => <Icon {...args} />,
}

export const Colors: Story = {
  render: () => {
    return (
      <div className={flex({ gap: 2, alignItems: 'end' })}>
        <Icon color="primary" name="User" />
        <Icon color="secondary" name="User" />
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    return (
      <div className={flex({ gap: 2, alignItems: 'end' })}>
        <Icon name="User" size="xs" />
        <Icon name="User" size="sm" />
        <Icon name="User" size="md" />
        <Icon name="User" size="lg" />
        <Icon name="User" size="xl" />
        <Icon name="User" size="2xl" />
        <Icon name="User" size="3xl" />
      </div>
    )
  },
}

export const Icons: Story = {
  render: () => {
    return (
      <div className={flex({ gap: 6 })}>
        {Object.keys(icons).map((iconName) => {
          const name = iconName as keyof typeof icons

          return (
            <div
              className={flex({ gap: 1, alignItems: 'center', flexDirection: 'column' })}
              key={iconName}
            >
              <Icon name={name} size="sm" />
              <span className={css({ fontSize: '12px' })}>{iconName}</span>
            </div>
          )
        })}
      </div>
    )
  },
}
