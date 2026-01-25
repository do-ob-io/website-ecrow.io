import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { SectionHeading } from "./section-heading";

const meta = {
  component: SectionHeading,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["left", "center"],
    },
  },
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default centered section heading with all elements.
 */
export const Default: Story = {
  args: {
    eyebrow: "About Us",
    title: "Our Mission Statement",
    subtitle: "We are dedicated to building exceptional digital experiences that empower users and push boundaries.",
    align: "center",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("About Us")).toBeVisible();
    await expect(canvas.getByRole("heading", { name: "Our Mission Statement" })).toBeVisible();
    await expect(canvas.getByText(/We are dedicated/)).toBeVisible();
  },
};

/**
 * Left-aligned section heading.
 */
export const LeftAligned: Story = {
  args: {
    eyebrow: "Features",
    title: "What We Offer",
    subtitle: "Discover the powerful capabilities that set us apart from the competition.",
    align: "left",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Features")).toBeVisible();
    await expect(canvas.getByRole("heading", { name: "What We Offer" })).toBeVisible();
  },
};

/**
 * Section heading without eyebrow text.
 */
export const WithoutEyebrow: Story = {
  args: {
    title: "Simple and Direct",
    subtitle: "Sometimes you just need a straightforward heading without extra decoration.",
    align: "center",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("heading", { name: "Simple and Direct" })).toBeVisible();
    await expect(canvas.getByText(/Sometimes you just need/)).toBeVisible();
  },
};

/**
 * Section heading with title only.
 */
export const TitleOnly: Story = {
  args: {
    title: "Just a Title",
    align: "center",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("heading", { name: "Just a Title" })).toBeVisible();
  },
};
