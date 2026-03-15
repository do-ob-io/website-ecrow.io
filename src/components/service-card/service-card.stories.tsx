import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { ServiceCard } from './service-card';

/**
 * Sample illustration for stories.
 */
const SampleIllustration = () => (
  <div className="
    border-accent-primary/30 bg-accent-primary/10 h-20 w-32 rounded-lg border
    p-2
  ">
    <div className="bg-accent-primary/50 h-2 w-12 rounded-sm" />
    <div className="mt-2 space-y-1">
      <div className="bg-accent-primary/30 h-1.5 w-full rounded-sm" />
      <div className="bg-accent-primary/20 h-1.5 w-3/4 rounded-sm" />
    </div>
  </div>
);

const meta = {
  component: ServiceCard,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default service card with tags.
 */
export const Default: Story = {
  args: {
    title: 'SaaS Applications',
    description: 'Enterprise-grade web applications designed to streamline workflows, boost productivity, and scale with your business.',
    illustration: <SampleIllustration />,
    tags: [ 'Enterprise', 'Cloud-Native', 'Scalable' ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'SaaS Applications' })).toBeVisible();
    await expect(canvas.getByText(/Enterprise-grade web applications/)).toBeVisible();
    await expect(canvas.getByText('Enterprise')).toBeVisible();
    await expect(canvas.getByText('Cloud-Native')).toBeVisible();
    await expect(canvas.getByText('Scalable')).toBeVisible();
  },
};

/**
 * Service card without tags.
 */
export const WithoutTags: Story = {
  args: {
    title: 'Browser Games',
    description: 'Immersive gaming experiences that run entirely in the browser. No downloads required.',
    illustration: <SampleIllustration />,
    tags: [],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Browser Games' })).toBeVisible();
    await expect(canvas.getByText(/Immersive gaming experiences/)).toBeVisible();
  },
};
