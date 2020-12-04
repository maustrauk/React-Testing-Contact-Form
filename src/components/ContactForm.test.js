import React from "react";
import { render , screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import ContactForm from "./ContactForm";





test("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});

describe("Testing Contact Form", () => {

  render(<ContactForm />);

  const firstNameInput = screen.getByPlaceholderText("Edd");
  const lastNameInput = screen.getByPlaceholderText("Burke");
  const emailInput = screen.getByPlaceholderText("bluebill1049@hotmail.com");
  const messageInput = screen.getByPlaceholderText("Hi there!");
  const submit =screen.getByRole('button');
 

  const testUser ={
    firstName: "Iar",
    lastName: "Mokroguz",
    email: "test",
    message: "Hello World"
  }


  test("testing user inputs and submit", () => {
    
    userEvent.type(firstNameInput, testUser.firstName);
    expect(firstNameInput).toHaveValue(testUser.firstName);
  
    userEvent.type(lastNameInput, testUser.lastName);
    expect(lastNameInput).toHaveValue(testUser.lastName);
  
    userEvent.type(emailInput, testUser.email);
    expect(emailInput).toHaveValue(testUser.email);
  
    userEvent.type(messageInput, testUser.message);
    expect(messageInput).toHaveValue(testUser.message);

  
    
  });


})


