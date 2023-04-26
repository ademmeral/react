import { NavLink } from "react-router-dom";
import { Loader } from "./Loader";
import { memo, useContext, useEffect, useState } from "react";
import { PeopleContext } from "../contexts/people";

let Person =  ({person}) => {
    const {id, name} = person;

    return (

        <li className={'person'}>
            <NavLink className="db w-100 h-100 pad-sm" to={"/" + id}> {name} </NavLink>
        </li>
    )
};
Person = memo(Person);

function People () {
    const [searchErr,] = useState(<h4 className="text-cent fw-500 pad-sm">No record :/</h4>);
    const {search, setSearch, people} = useContext(PeopleContext);

    useEffect(() => {           // The component'll be aware of any change in the people, then set the search by it
        setSearch([...people]);
    }, [people]);

    if (!people || !people[0]) return <Loader />
    else if (!search[0]) return searchErr;
    else return(
        <ul className="people pad-sm scroll-hid owy-s">
            { search.map( (person,i) => <Person key={i} person={person} /> ) }
        </ul>
    )
};
export default People;