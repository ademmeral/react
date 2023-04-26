import { useNavigate, useParams } from "react-router";
import { findUserById, removeObjectFromArray } from "../modules/modules";
import { useContext, useEffect, useState } from "react";
import { Socials } from "./Socials";
import { Loader } from "./Loader";
import { ErrorPage } from "./ErrorPage";
import { PeopleContext } from "../contexts/people";
import { Avatar } from "./Avatar";
import { Link } from "react-router-dom";

export function Details(){
    const [notFound, setNotFound] = useState(false);
    const [timeOut, seTimeOut] = useState();

    const {key} = useParams();

    const {people, setPeople} = useContext(PeopleContext);

    const navigate = useNavigate();
    
    let person = findUserById(key, people);

    useEffect( () => {
        if (!person){
            const timeout = setTimeout(() => setNotFound(true), 2000 );
            seTimeOut(timeout);
        } 
    }, [person]);
    
    useEffect(() => () => {                         // compWillUnm
        seTimeOut(() => clearTimeout(timeOut));
        person = {};
        setNotFound(false);
    }, [person]);

    function handleRemove(){
        const newArr = removeObjectFromArray({key : 'id', val : key, many : 1}, people)
        console.log(newArr);
        setPeople([...newArr]);
        navigate('/')
    };

    if (notFound) return <ErrorPage />
    else if (!person) return <Loader />
    else return (
        <div className="view__details h-max flex gap-m jc-cent pad-xl">
            <Avatar person={person}/>
            <article className="flex-col jc-sb w-max ai-cent text-cent">
                <header>
                    <h4 className="fullname">{person.name}</h4>
                    <h5 className="username fw-500">{person.username}</h5>
                </header>
                <address>
                    <p className="phone">{person.phone}</p>
                    <p className="email">{person.email}</p>
                </address>
                <Socials />
                <footer className="details__buttons flex gap-sm">
                    <Link to={"/" + key + "/edit"} className="btn edit cp">Edit</Link>
                    <button className="btn delete cp" onClick={handleRemove}>Delete</button>
                </footer>
            </article>
        </div>
    )
    
}