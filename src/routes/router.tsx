import axios from 'axios';
import { createBrowserRouter } from 'react-router-dom';
import { CAPSULES_URL, LAUNCH, LAUNCHES_URL } from '../api';
import Capsules from './capsules';
import Home from './home';
import Launches from './launches';
import Launch from '../components/launch';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/capsules',
    element: <Capsules />,
    loader: async ({ request }) =>
      await axios
        .get(CAPSULES_URL, {
          signal: request.signal,
        })
        .then((res) => res.data),
  },

  {
    path: '/launches/*',
    element: <Launches />,

    loader: async ({ request }) =>
      await axios
        .get(LAUNCHES_URL, {
          signal: request.signal,
        })
        .then((res) => res.data),
    children: [
      {
        path: ':launchId',
        element: <Launch />,
        loader: async ({ request, params }) => {
          console.log(params.launchId);
          return await axios
            .get(LAUNCH(params), {
              signal: request.signal,
            })
            .then((res) => res.data);
        },
      },
    ],
  },
]);
