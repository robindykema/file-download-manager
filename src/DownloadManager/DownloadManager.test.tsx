import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import DownloadManager from "./DownloadManager";
import { fileData } from "../fileData";

const firstFileName = fileData[0].name;
const availableFile = fileData.find((file) => file.status === "available")!;
const scheduledFile = fileData.find((file) => file.status === "scheduled")!;

describe("DownloadManager", () => {
  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  it("renders all files", () => {
    render(<DownloadManager files={fileData} />);
    fileData.forEach((file) => {
      expect(screen.getByText(file.name)).toBeInTheDocument();
    });
  });

  it("shows 'None Selected' on initial render", () => {
    render(<DownloadManager files={fileData} />);
    expect(screen.getByText("None Selected")).toBeInTheDocument();
  });

  it("updates selected count when a row is clicked", async () => {
    render(<DownloadManager files={fileData} />);
    const firstRow = screen.getByText(firstFileName);
    await userEvent.click(firstRow);
    expect(screen.getByText("Selected 1")).toBeInTheDocument();
  });

  it("deselects a row when clicked again", async () => {
    render(<DownloadManager files={fileData} />);
    const firstRow = screen.getByText(firstFileName);
    await userEvent.click(firstRow);
    await userEvent.click(firstRow);
    expect(screen.getByText("None Selected")).toBeInTheDocument();
  });

  it("selects all rows when 'select all' checkbox is clicked", async () => {
    render(<DownloadManager files={fileData} />);
    await userEvent.click(screen.getByLabelText("Select all files"));
    expect(screen.getByText(`Selected ${fileData.length}`)).toBeInTheDocument();
  });

  it("deselects all rows when 'select all' check box is clicked twice", async () => {
    render(<DownloadManager files={fileData} />);
    await userEvent.click(screen.getByLabelText("Select all files"));
    await userEvent.click(screen.getByLabelText("Deselect all files"));
    expect(screen.getByText("None Selected")).toBeInTheDocument();
  });

  it("'select all' checkbox is indeterminate when some rows are selected", async () => {
    render(<DownloadManager files={fileData} />);
    await userEvent.click(screen.getByText(firstFileName));
    const selectAll = screen.getByLabelText("Select all files");
    expect((selectAll as HTMLInputElement).indeterminate).toBe(true);
  });

  it("disables download button when no available files are selected", async () => {
    render(<DownloadManager files={fileData} />);
    const downloadButton = screen.getByText("Download Available");
    await userEvent.click(screen.getByText(scheduledFile.name));
    expect(downloadButton).toHaveAttribute("aria-disabled", "true");
  });

  it("enables download button when at least one available file is selected", async () => {
    render(<DownloadManager files={fileData} />);
    const downloadButton = screen.getByText("Download Available");
    await userEvent.click(screen.getByText(availableFile.name));
    expect(downloadButton).toHaveAttribute("aria-disabled", "false");
  });

  it("shows alert with device and path of available selected files", async () => {
    render(<DownloadManager files={fileData} />);
    const downloadButton = screen.getByText("Download Available");
    await userEvent.click(screen.getByText(availableFile.name));
    await userEvent.click(downloadButton);
    expect(window.alert).toHaveBeenCalledWith(
      expect.stringContaining(`Device: ${availableFile.device}`),
    );
    expect(window.alert).toHaveBeenCalledWith(
      expect.stringContaining(`Path: ${availableFile.path}`),
    );
  });
});
