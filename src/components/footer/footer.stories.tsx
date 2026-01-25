import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { Footer } from "./footer";

const meta = {
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default site footer.
 */
export const Default: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("contentinfo")).toBeInTheDocument();
    await expect(canvas.getByText("eCrow")).toBeVisible();
    await expect(canvas.getByRole("link", { name: /Services/i })).toBeVisible();
    await expect(canvas.getByRole("link", { name: /Features/i })).toBeVisible();
    await expect(canvas.getByRole("link", { name: /About/i })).toBeVisible();
    await expect(canvas.getByRole("link", { name: /Contact/i })).toBeVisible();
  },
};
