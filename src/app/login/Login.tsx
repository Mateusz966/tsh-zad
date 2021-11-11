import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { Splitted } from "../components/layouts/Splitted/Splitted";
import { AppInput } from "../components/common/Input/Input";


export const Login = () => {
  return (
    <Splitted src="https://via.placeholder.com/250x250">
      <Link to={AppRoute.HOME}>Products page</Link>
      <h2>Login</h2>
      <form>
        <AppInput name="username" placeholder="Enter username" label="Username" />
        <AppInput name="password" placeholder="Enter password" label="Password" />
        <button type="submit">submit</button>
      </form>
    </Splitted>
  );
};
