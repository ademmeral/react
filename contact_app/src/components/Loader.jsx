import { BounceLoader } from "react-spinners";

export function Loader({size}){
    return (
        <section className="loader flex jc-cent w-100" >
            <BounceLoader color="dodgerblue" size={size ? size : 60}/>
        </section>
    )
};