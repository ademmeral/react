import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage";
import { ShowCase } from "../components/ShwoCase";
import { rootAction } from "../api/client";
import { AddPerson } from "../components/AddPerson";
import { Default } from "../components/Default";
import { Details } from "../components/Details";
import { EditPerson } from "../components/EditPerson";

export const mainRouter = createBrowserRouter([
    {
        path: '/',
        element: <ShowCase />,
        errorElement: <ErrorPage />,
        action : rootAction,
        children : [
            {
                path : '',
                element : <Default />
            },
            {
                path : 'add',
                element : <AddPerson />,
            },
            {
                path : ':key',
                element : <Details />,
            },
            {
                path : ':key/edit',
                element : <EditPerson />,
            },
        ]

    },
]);

