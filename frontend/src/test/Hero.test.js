import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";

// test suite for Hero component
describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
  });

  test("renders heading text", () => {
    render(<Hero />);
    const heading = screen.getByText(/Invest in everything/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders description text", () => {
    render(<Hero />);
    const description = screen.getByText(
      /Online platform to invest in stocks, derivatives, mutual funds, and more/i
    );
    expect(description).toBeInTheDocument();
  });

  test("renders Signup Now button", () => {
    render(<Hero />);
    const button = screen.getByRole("button", { name: /Signup Now/i });
    expect(button).toBeInTheDocument();
  });
});
