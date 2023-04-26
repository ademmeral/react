import { Form } from "react-router-dom";

export function EditPerson(){

    return (
        <Form method="PATCH" action="/" className="flex-col gap-sm h-max pad-sm js-cent">
            <h2 className="text-cent pad-m">Edit person</h2>
            <input 
                type="text" 
                required 
                placeholder="Fullname" 
                pattern="[A-Za-z]+[ ]{1}[A-Za-z]+" 
                name="name" 
                className="pad-sm" 
            />
            <input 
                type="text" 
                required 
                placeholder="Username" 
                pattern="\w+" 
                name="username" 
                className="pad-sm" 
             />
            <input type="email" required placeholder="Email" name="email" className="pad-sm"/>
            <input type="tel" required placeholder="Phone" name="phone" className="pad-sm"/>
            <button 
                type="submit" 
                className={"btn submit cp"}
                name="intent"
                value="edit"
            >Submit</button>
        </Form>
    )
}