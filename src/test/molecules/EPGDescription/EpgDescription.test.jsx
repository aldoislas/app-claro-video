// EpgDescription.test.js
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { EpgDescription } from "../../../molecules";

describe("Test for <EpgDescription/>", () => {
  it("renders EpgDescription correctly with selectedEvent", () => {
    const selectedEvent = {
      channelName: "Channel 1",
      name: "Program 1",
      date_begin: "2021/08/12 20:02:56",
      date_end: "2021/08/12 21:02:56",
      index: 1,
      duration: "01:00:00",
    };

    render(<EpgDescription selectedEvent={selectedEvent} />);

    // Check if the rendered elements are correct based on the provided data
    expect(screen.getByText("Program 1")).toBeInTheDocument();
    expect(screen.getByText("20:02hs a 21:02hs 1h")).toBeInTheDocument();
  });

  it("renders EpgDescription correctly with 'NA' name", () => {
    const selectedEvent = {
      channelName: "Channel 1",
      name: "NA",
      date_begin: "2021/08/13 15:00:00",
      date_end: "2021/08/13 17:00:00",
      index: 3,
      duration: "02:00:00",
    };

    render(<EpgDescription selectedEvent={selectedEvent} />);

    // Check if the rendered elements are correct based on the provided data
    expect(screen.getByText("Channel 1 Programa 4")).toBeInTheDocument();
    expect(screen.getByText("15:00hs a 17:00hs 2h")).toBeInTheDocument();
  });

  // Add more test cases as needed
});
