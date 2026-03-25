import { Outlet } from "react-router-dom";
import EventsNavigation from "../EventsNavigation";

function EventsRootLayout(){
    return(
        <>
            <EventsNavigation/>
            <main>
                <Outlet/>
            </main>

        </>
    );
}

export default EventsRootLayout;