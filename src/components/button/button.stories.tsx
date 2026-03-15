import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Button } from './button';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
  argTypes: {
    variant: {
      control: 'select',
      options: [ 'primary', 'secondary', 'ghost', 'outline' ],
    },
    size: {
      control: 'select',
      options: [ 'sm', 'md', 'lg' ],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default button with primary variant.
 */
export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button')).toBeInTheDocument();
    await expect(canvas.getByText('Button')).toBeVisible();
  },
};

/**
 * Secondary variant button for alternative actions.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button')).toBeInTheDocument();
    await expect(canvas.getByText('Secondary Button')).toBeVisible();
  },
};

/**
 * Ghost variant button for subtle interactions.
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button')).toBeInTheDocument();
    await expect(canvas.getByText('Ghost Button')).toBeVisible();
  },
};

/**
 * Outline variant button with border styling.
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button')).toBeInTheDocument();
    await expect(canvas.getByText('Outline Button')).toBeVisible();
  },
};

/**
 * Small size button.
 */
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button')).toBeInTheDocument();
    await expect(canvas.getByText('Small Button')).toBeVisible();
  },
};

/**
 * Large size button.
 */
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button')).toBeInTheDocument();
    await expect(canvas.getByText('Large Button')).toBeVisible();
  },
};
