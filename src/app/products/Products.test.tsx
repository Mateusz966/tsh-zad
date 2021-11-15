import React from 'react';
import { render } from 'tests';
import { Products } from './Products';
import userEvent from "@testing-library/user-event";
import {setupServer} from "msw/node";
import {rest} from "msw";
import {act, waitFor} from "@testing-library/react";

const productsRes = {
  "items":[
    {
      "id":1,
      "name":"Awesome Steel Fish",
      "description":"Quam soluta et consequuntur velit ipsa sint facere occaecati fugiat.",
      "rating":2,
      "image":"https://picsum.photos/640/480?random=4946",
      "promo":true,
      "active":true
    },
    {
      "id":2,
      "name":"Unbranded Frozen Cheese",
      "description":"Non dolorum aut ad ut voluptates nulla recusandae maxime natus.",
      "rating":3,
      "image":"https://picsum.photos/640/480?random=3174",
      "promo":false,
      "active":false
    },
  ],
  "meta":{
    "totalItems":20,
    "itemCount":8,
    "itemsPerPage":8,
    "totalPages":3,
    "currentPage":1
  },
  "links":{
    "first":"https://join-tsh-api-staging.herokuapp.com/products?limit=8",
    "previous":"",
    "next":"https://join-tsh-api-staging.herokuapp.com/products?page=2&limit=8",
    "last":"https://join-tsh-api-staging.herokuapp.com/products?page=3&limit=8"
  }
}

const emptyProductsRes = {
  "items":[],
  "meta":{
    currentPage: 1,
    itemCount: 0,
    itemsPerPage: 8,
    totalItems: 0,
    totalPages: 0,
  },
  "links":{
    "first":"https://join-tsh-api-staging.herokuapp.com/products",
    "previous":"",
    "next":"",
    "last":""
  }
}

const server = setupServer(
  rest.get('https://join-tsh-api-staging.herokuapp.com/products', (req, res, ctx) => {
    return res(ctx.json(productsRes))
  }),
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe('Products', () => {
  test('Render correct product header', async () => {
    const { getByText, getByTestId } = render(<Products />);
    expect(getByText('join.tsh.io')).toBeInTheDocument();
    expect(getByTestId('search-input')).toBeInTheDocument();
    expect(getByText('Promo')).toBeInTheDocument();
    expect(getByText('Active')).toBeInTheDocument();
  });

  test('When api request is inProgress should show loader', async () => {
    const { getAllByTestId, getByTestId } = render(<Products />);

    await act(async () => {
      await userEvent.type(getByTestId('search-input'), 'test');
    });

  });

  test('Typing text in search input should cause api req for products', async () => {
    const { getAllByTestId, getByTestId } = render(<Products />);

    await act(async () => {
      await userEvent.type(getByTestId('search-input'), 'test');
    });

    await waitFor(() => expect(getAllByTestId('product-card')).toHaveLength(2));

  });

  test('If api response doesnt contain any elements should render empty list info', async () => {
    server.use(
      rest.get('https://join-tsh-api-staging.herokuapp.com/products', (req, res, ctx) => {
        console.log('overridiing');
        return res(ctx.json(emptyProductsRes))
      }),
    );
    const { getByTestId } = render(<Products />);

    await act(async () => {
      await userEvent.type(getByTestId('search-input'), 'test');
    });

    await waitFor(() => expect(getByTestId('empty-list')).toBeInTheDocument());

  });


});
