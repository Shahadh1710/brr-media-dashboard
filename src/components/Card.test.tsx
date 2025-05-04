/// <reference types="vitest" />

import { render, screen } from "@testing-library/react";
import Card from "./Card";

/**
 * Unit tests for the Card component.
 * Uses React Testing Library and Vitest.
 */
describe("Card", () => {
  // Test that the Card component renders its children correctly
  it("renders children", () => {
    render(<Card>Test Content</Card>);
    // Assert that the child text is present in the document
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});