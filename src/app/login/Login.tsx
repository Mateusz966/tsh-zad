import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import {Splitted} from "../components/layouts/Splitted/Splitted";

export const Login = () => {
  return (
    <Splitted>
      <Link to={AppRoute.HOME}>Products page</Link>
      <h2>Login</h2>
      <form>
        <div>
          <label>
            username:
            <input name="username" />
          </label>
        </div>
        <div>
          <label>
            password:
            <input name="password" type="password" />
          </label>
        </div>
        <button type="submit">submit</button>
      </form>
    </Splitted>
  );
};
