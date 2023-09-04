import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { BASE_URL, MOCKED_RESPONSE } from '../src/utils';

// Define your API mock handlers
export const handlers = [
  rest.get(`${BASE_URL}/search`, (req, res, ctx) => {
    const query = req.url.searchParams.get('q');

    if (query === 'London') {
      const mockResponse = MOCKED_RESPONSE;

      return res(ctx.json(mockResponse));
    }

    return res(ctx.status(404));
  }),
];

export const server = setupServer(...handlers);
