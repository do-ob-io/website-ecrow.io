import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { Navigation } from "./navigation";

const meta = {
  component: Navigation,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default navigation header.
 */
export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="relative h-32">
        <Story />
      </div>
    ),
  ],
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("banner")).toBeInTheDocument();
    await expect(canvas.getByRole("navigation")).toBeVisible();
    await expect(canvas.getByRole("link", { name: /eCrow Home/i })).toBeVisible();
    await expect(canvas.getByRole("link", { name: /Services/i })).toBeVisible();
    await expect(canvas.getByRole("link", { name: /Features/i })).toBeVisible();
    await expect(canvas.getByRole("link", { name: /About/i })).toBeVisible();
    await expect(canvas.getByRole("link", { name: /Contact/i })).toBeVisible();
  },
};
