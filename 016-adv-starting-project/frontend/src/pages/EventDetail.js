import EventItem from "../components/EventItem";
import { json, useRouteLoaderData, redirect, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { loadEvents } from './Events';
import { Suspense } from "react";

const EventDetailPage = () => {
    const {event, events} = useRouteLoaderData('event-detail');

    return (
    <>
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
            <Await resolve={event}>
                {(loadedEvent) => <EventItem event={loadedEvent}/>}
            </Await>
        </Suspense>
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents}/>}
            </Await>
        </Suspense>
    </>
    );
};

export default EventDetailPage;

export const loader = async({params}) => {
    const id = params.id;
    return defer({
        event: await loadEvent(id),
        events: loadEvents()
    });
};

export const action = async({params, request}) => {
    const id = params.id;
    const response = await fetch('http://localhost:8080/events/' + id, {
        method: request.method
    });

    if (!response.ok) {
        throw json({message: 'Could not delete event.'}, {status: 500});
    }

    return redirect('/events');
};

const loadEvent = async(id) => {
    const response = await fetch('http://localhost:8080/events/' + id);
    if (!response.ok) {
        throw json({message: 'Could not fetch event info.'}, {status: 500});
    } else {
        const resData = await response.json();
        return resData.event;
    }
};
