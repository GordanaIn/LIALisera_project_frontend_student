import React from "react";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";

import {BrowserRouter as Router} from "react-router-dom";
import renderer from "react-dom/test-utils";

import BackgroundImage from "../sections/studentClient/components/landingPageComponents/BackgroundImage";



//Sussecs
test("heder renders correct text", () => {
    render(
        <BackgroundImage/>
    );
    const heder = screen.getByTestId("title");

    expect(heder).toBeInTheDocument();
    expect(heder).toBeVisible();
    expect(heder).toMatchSnapshot();
    expect(true).toBeTruthy();

    const text = screen.getByTestId("text");
    expect(text).toBeInTheDocument();
    expect(text).toBeVisible();
    expect(text).toMatchSnapshot();
    expect(true).toBeTruthy();
});
