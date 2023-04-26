import { Outlet, useActionData, useParams } from "react-router"
import { Aside } from "./Aside"
import { PeopleContext } from "../contexts/people";
import { checkObjectByEmail, findUserById } from "../modules/modules";
import { useContext, useState } from "react";
import { useEffect } from "react";

export const ShowCase = () => {
    const {people, setPeople} = useContext(PeopleContext);

    const action = useActionData();
    const {key} = useParams();

    const [id, setId] = useState(key && key);

    useEffect(() => {
        if (key) setId(key)
        else setId((prev) => prev);
    }, [key]);

    useEffect(() => {
        if (action) {
            if ( action.intent == 'add' ) {
                if (!checkObjectByEmail(action.email, people)) {
                    setPeople((p) => p.concat(action));
                };
            } else if ( action.intent == 'edit' ) {
                let curr = findUserById(id, people);
                if (curr) {
                    setPeople((p) => {
                        const index = p.indexOf(curr);
                        const { name, email, username, phone } = action;
                        p[index] = { ...p[index], name, username, email, phone };
                        return [...p];
                    });
                };
            };
        }
    }, [action]);

    return (
        <main className="main grid col-1-3">
            <Aside />
            <Outlet />
        </main>
    )
};