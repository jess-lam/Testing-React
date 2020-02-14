// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import * as rtl from "@testing-library/react";
import axios from 'axios';
import App from "./App";

//set up test for whether characters get displayed
//set up test for get request
//set up test for next button action
//set up test for previous button action 

test("Render the Star War character names", async() => {
    const wrapper = rtl.render(<App />);

    const characterName = await wrapper.findAllByTestId(/test/i);
    expect(characterName[0]).toBeVisible();
});


test("Render the next button", async() => {
    const wrapper = rtl.render(<App />);

    const nextButton = await wrapper.getByText(/next/i);
    expect(nextButton).toBeVisible();
});


test("Render the previous button", async() => {
    const wrapper = rtl.render(<App />);

    const previousButton = await wrapper.getByText(/previous/i);
    expect(previousButton).toBeVisible();
});


test("next", async () => {
    const wrapper = rtl.render(<App />);
    await wrapper.findAllByText(/anakin/i);
  
    const nextElem = wrapper.getByText(/next/i);
  
    rtl.act(()=>{
      rtl.fireEvent.click(nextElem);
    });
  
    expect(wrapper.queryByText(/dog/i)).toBeNull();
  })

  
// jest.mock("axios", () => {
//     return {
//       get: jest.fn(() => Promise.resolve({
//         results: [
//           {
//               name: "Luke SkyWalker"
//           }
//         ]
//       }))
//     }
//   });


