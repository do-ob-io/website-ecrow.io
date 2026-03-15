import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { FeatureCard } from './feature-card';

const meta = {
  component: FeatureCard,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
  argTypes: {
    accent: {
      control: 'select',
      options: [ 'primary', 'secondary', 'tertiary' ],
    },
  },
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Sample icon for stories.
 */
const LightningIcon = () => (
  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

/**
 * Default feature card with primary accent.
 */
export const Default: Story = {
  args: {
    icon: <LightningIcon />,
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second load times and smooth, responsive interactions across all devices.',
    accent: 'primary',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('article')).toBeInTheDocument();
    await expect(canvas.getByRole('heading', { name: 'Lightning Fast' })).toBeVisible();
    await expect(canvas.getByText(/Optimized performance/)).toBeVisible();
  },
};

/**
 * Feature card with secondary accent.
 */
export const Secondary: Story = {
  args: {
    icon: <LightningIcon />,
    title: 'Secure by Design',
    description: 'Bank-grade encryption and comprehensive security measures to protect your data at all times.',
    accent: 'secondary',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('article')).toBeInTheDocument();
    await expect(canvas.getByRole('heading', { name: 'Secure by Design' })).toBeVisible();
  },
};

/**
 * Feature card with tertiary accent.
 */
export const Tertiary: Story = {
  args: {
    icon: <LightningIcon />,
    title: 'Flexible Integration',
    description: 'RESTful APIs and native integrations with popular tools to fit seamlessly into your workflow.',
    accent: 'tertiary',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('article')).toBeInTheDocument();
    await expect(canvas.getByRole('heading', { name: 'Flexible Integration' })).toBeVisible();
  },
};
