import EventsNavigation from '../components/EventsNavigation';
import { Outlet } from 'react-router-dom';

const EventRootLayout = () => {
    return (
        <>
            <EventsNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default EventRootLayout;