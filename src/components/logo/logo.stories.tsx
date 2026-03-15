import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Logo } from './logo';

const meta = {
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
  argTypes: {
    size: {
      control: 'select',
      options: [ 'sm', 'md', 'lg' ],
    },
    showText: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default logo with medium size and text.
 */
export const Default: Story = {
  args: {
    size: 'md',
    showText: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('e')).toBeVisible();
    await expect(canvas.getByText('Crow')).toBeVisible();
  },
};

/**
 * Small logo variant.
 */
export const Small: Story = {
  args: {
    size: 'sm',
    showText: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('e')).toBeVisible();
    await expect(canvas.getByText('Crow')).toBeVisible();
  },
};

/**
 * Large logo variant.
 */
export const Large: Story = {
  args: {
    size: 'lg',
    showText: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('e')).toBeVisible();
    await expect(canvas.getByText('Crow')).toBeVisible();
  },
};

/**
 * Logo icon only without text.
 */
export const IconOnly: Story = {
  args: {
    size: 'md',
    showText: false,
  },
  play: async ({ canvas }) => {
    await expect(canvas.queryByText('Crow')).not.toBeInTheDocument();
  },
};
