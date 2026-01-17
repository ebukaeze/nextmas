import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {EventItem} from "@/lib/constants";


const EventCard = ({title, image, slug, date, time, location, description}: EventItem) => {
    return (
        <Link href={`/events/${slug}`} id="event-card">
            <Image src={image} alt={title} width={410} height={300} className="poster" />
            <div className="w-full flex flex-row gap-x-2">
                <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
                <p>{location}</p>
            </div>
            <p className="title">{title}</p>
            <ul className="w-full flex items-start justify-between list-none">
                <li>{date}</li>
                <li>{time}</li>

            </ul>
        </Link>
    )
}
export default EventCard
