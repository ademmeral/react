import { createContext, useEffect, useState } from "react";
import { getPeople } from "../api/client";

export const PeopleContext = createContext();

export function PeopleContexProvider({children}){
    const [people, setPeople] = useState([]);
    const [backup, setBackup] = useState([]);
    const [search, setSearch] = useState([]);
    const [err, setErr] = useState('')
    const data = {
        people, setPeople, 
        backup, setBackup, 
        err, setErr,
        search, setSearch
    };

    useEffect(() => {
        if ( !people || !people[0] ) 
            getPeople()
                .then(data => {
                    setPeople(data);
                    setBackup(data);
                    setSearch(data);
                })
                .catch( err => setErr(err));
    }, []);

    return (
        <PeopleContext.Provider value={data}>
            {children}
        </PeopleContext.Provider>
    )
}