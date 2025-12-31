import ExploreBtn from "@/app/components/ExploreBtn";
import EventCard from "@/app/components/EventCard";
import { events } from "@/lib/constants";

export default function Home() {
  return (
    <section>
      <h1 className="text-center">The Hub for Every Dev <br/> Events You Can't Miss</h1>
        <p className="text-center mt-5">Hackathons, Meetups, and Conferences. All in One Place</p>
        <ExploreBtn />

        <div className="mt-20 space-y-8">
            <h3 className="font-bold text-gray-100">Featured Events</h3>

            <div className="w-full mx-auto max-w-7xl" id="events">
                <ul className="events">
                {events.map((event, index) => (
                    <li key={index} className="list-none">
                        <EventCard title={event.title} image={event.image} date={event.date} location={event.location}/>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </section>
  );
}
