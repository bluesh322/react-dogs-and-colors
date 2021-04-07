import React from "react";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Routes from "./Routes";
import App from "./App";

const { dogs, startColors } = App.defaultProps;

test("render all dogs", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/dogs"]}>
      <Routes dogs={dogs} />
    </MemoryRouter>
  );

  const dogNames = dogs.map((d) => d.name);
  for (const name of dogNames) {
    const linkElements = getByText(new RegExp(name, "i"));
    expect(linkElements).toBeInTheDocument();
  }
});

test("renders only Whiskey's info", () => {
  const { getByText, queryByText } = render(
    <MemoryRouter initialEntries={["/dogs/whiskey"]}>
      <Routes dogs={dogs} />
    </MemoryRouter>
  );

  const whiskey = dogs.find((d) => d.name === "Whiskey");
  const duke = dogs.find((d) => d.name === "Duke");

  const liElement = getByText(new RegExp(whiskey.facts[0], "i"));
  expect(liElement).toBeInTheDocument();

  expect(screen.queryByText(new RegExp(duke.facts[0], "i"))).toBeNull();
  expect(queryByText(new RegExp(duke.facts[0], "i"))).not.toBeInTheDocument();
});

test("renders home on bad route", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/bad_route"]}>
      <Routes dogs={dogs} />
    </MemoryRouter>
  );

  const dogNames = dogs.map((d) => d.name);
  for (const name of dogNames) {
    const linkElement = getByText(new RegExp(name, "i"));
    expect(linkElement).toBeInTheDocument();
  }
});

test("render all colors", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/colors"]}>
      <Routes startColors={startColors} />
    </MemoryRouter>
  );

  const colorNames = Object.keys(startColors);
  for (const name of colorNames) {
    const linkElements = getByText(new RegExp(name, "i"));
    expect(linkElements).toBeInTheDocument();
  }
});

test("render red color", () => {
  //I think this should be a snapshot test?
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/colors/red"]}>
      <Routes startColors={startColors} />
    </MemoryRouter>
  );

  expect(asFragment()).toMatchSnapshot();

  // const red = "backgroundColor: rgb(255, 0, 0);"
  // const green = "backgroundColor: rgb(0, 255, 0);"

  // const divEl = queryByText(new RegExp(red, "i"));
  // expect(divEl).toBeInTheDocument();
});

test("should add a new color link", () => {
  const { getByText, queryByText, getByLabelText } = render(
    <MemoryRouter initialEntries={["/colors/new"]}>
      <Routes startColors={startColors} />
    </MemoryRouter>
  );

  const nameInput = getByLabelText("name");
  const colorInput = getByLabelText("value");
  const btn = queryByText("Add Color");

  fireEvent.change(nameInput, {target: {value: 'black'}})
  fireEvent.change(colorInput, {target: {value: '#000000'}})
  fireEvent.click(btn);

  //redirect to '/colors' with black as a new link
  const linkElement = getByText(new RegExp('black', "i"));
  expect(linkElement).toBeInTheDocument();

  const blackLink = getByText('black');
  fireEvent.click(blackLink);

  //can I make a snapshot of a black square and compare it here?

});
