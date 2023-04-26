import { RouterProvider } from "react-router";
import { mainRouter } from "./routes/router";
import { PeopleContexProvider } from "./contexts/people";


function App(){
    return (
        <section className="app flex mh-100vh ai-cent jc-cent">
            <PeopleContexProvider>
                <RouterProvider router={mainRouter} />
            </PeopleContexProvider>
        </section>
    )
};
export default App;