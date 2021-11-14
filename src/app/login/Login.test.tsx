import React from 'react';
import { render } from 'tests';
import { Login } from './Login';
import userEvent from "@testing-library/user-event";

describe('Login', () => {
  test('Render correct ui', async () => {
    const { getByTestId } = render(<Login />);
    expect(getByTestId('username')).toBeInTheDocument();
    expect(getByTestId('password')).toBeInTheDocument();
  });

  test('During leave form field validation should trigger error', async () => {
    const { getByTestId, getAllByText, getByPlaceholderText } = render(<Login />);

    userEvent.click(getByTestId('login-submit'));

    expect(getAllByText('That field is required')).toHaveLength(2);


  });

});
