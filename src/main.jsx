import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, {
  loader as rootLoader,
  action as rootAction
} from './routes/root.jsx';
import routes from "./routes/routeMap.jsx"
import ErrorPage from './ErrorPage.jsx';
import Contact, {
  loader as contactLoader
} from './routes/Contact.jsx';
import EditContact, {
  action as editContactAction
} from './routes/EditContact.jsx';
import {action as deleteAction} from "./routes/deleteContact.jsx"
import Index from './routes/Index.jsx';
import {action as contactAction} from "./routes/Contact.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction
      },
      {
        path: "/contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action:editContactAction
      },
      {
        path: "/contacts/:contactId/destroy",
        action: deleteAction
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
