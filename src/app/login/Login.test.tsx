import React from 'react';
import { render } from 'tests';
import { Login } from './Login';
import userEvent from "@testing-library/user-event";
import {act, waitFor} from "@testing-library/react";
import {rest} from "msw";
import {setupServer} from "msw/node";
import {LoginRes} from "../../shared/useUser";

const loginRes: LoginRes = {
  access_token: 'token',
  expiresIn: "1d",
  user: {id: 2, username: "string", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dzantievm/128.jpg"},
}

const server = setupServer(
  rest.post('https://join-tsh-api-staging.herokuapp.com/users/login', (req, res, ctx) => {
    return res(ctx.json(loginRes))
  }),
)

const correctCredentials = {
  username: 'string',
  password: 'string'
};

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Login', () => {
  test('Render correct ui', async () => {
    const { getByTestId, getByText  } = render(<Login />);
    expect(getByTestId('username')).toBeInTheDocument();
    expect(getByTestId('password')).toBeInTheDocument();
    expect(getByText('join.tsh.io')).toBeInTheDocument();
  });

  test('Should throw error if username and password contains less than 3 characters', async () => {
    const { getByTestId, getAllByText } = render(<Login />);

    await act(async () => {
      await userEvent.type(getByTestId('input-username'), 'ss');
      await userEvent.type(getByTestId('input-password'), 's');
    });

    expect(getByTestId('form')).toHaveFormValues({ username: 'ss', password: 's' })
    expect(getAllByText('Field must contain at least 3 characters')).toHaveLength(2);
  });

  test('If user click submit button without filled fields should throw errors', async () => {
    const { getByTestId, getAllByText } = render(<Login />);

    await act(async () => userEvent.click(getByTestId('login-submit')));

    expect(getAllByText('That field is required')).toHaveLength(2);
  });

 test('After fill username nad password fields should send login req and show logged in info', async () => {
   const { getByTestId, getByRole } = render(<Login />);

   await act(async () => {
     await userEvent.type(getByTestId('input-username'), correctCredentials.username);
     await userEvent.type(getByTestId('input-password'), correctCredentials.password);
     await userEvent.click(getByTestId('login-submit'));
   });

   await waitFor(() =>
     expect(getByRole('alert')).toHaveTextContent('Logged in'));
  });
 
});
