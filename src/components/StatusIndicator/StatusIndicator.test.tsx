import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import StatusIndicator from "./StatusIndicator";

describe("StatusIndicator", () => {
  it("renders 'Available' for available status", () => {
    render(<StatusIndicator status="available" />);
    expect(screen.getByText("Available")).toBeInTheDocument();
  });

  it("renders 'Scheduled' for scheduled status", () => {
    render(<StatusIndicator status="scheduled" />);
    expect(screen.getByText("Scheduled")).toBeInTheDocument();
  });

  it("renders a dot for available status", () => {
    const { container } = render(<StatusIndicator status="available" />);
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it("does not render a dot for scheduled status", () => {
    const { container } = render(<StatusIndicator status="scheduled" />);
    expect(container.querySelector('[aria-hidden="true"]')).not.toBeInTheDocument();
  });
});
