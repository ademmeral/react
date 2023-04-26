import { useState, useEffect } from "react";
import { setRandomPhoto } from "../modules/modules";
import { BounceLoader } from "react-spinners";

export function Avatar({person}){
    const [photo, setPhoto] = useState('');
    const [timeOut, setTimeOut] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            const photo_ = setRandomPhoto("female");
            setPhoto(photo_);
        }, 2000);

        setTimeOut(timeout);
    }, [person]);

    useEffect(() => () => {
        setPhoto('');
        setTimeOut((prev) => clearTimeout(prev));           // clear everything before sleeping to sleep comfortable 
    }, [person]);

    if (!photo) return (
        <figure className="img__loader flex ai-cent jc-cent">
            <BounceLoader color="dodgerblue" size={30} className="as-cent js-cent"/>
        </figure>
    );
    return (
        <figure>
            <img src={photo ? photo : ''} alt="random_female_user" />
        </figure>
    )
};