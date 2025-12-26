import React from "react";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";

const splitIndex = Math.ceil(reviews.length / 2);
const firstRow = reviews.slice(0, splitIndex);
const secondRow = reviews.slice(splitIndex);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r bg-indigo to-storm p-4 transition-all duration-300 hover:bg-royal">
      <div className="flex items-center gap-3">
        <img
          className="h-8 w-8 rounded-full bg-white/10 object-cover"
          width="32"
          height="32"
          alt={name ? `${name} profile` : "Reviewer profile"}
          src={img}
          loading="lazy"
        />
        <div className="flex flex-col leading-tight">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/50">{username}</p>
        </div>
      </div>

      <blockquote className="mt-3 text-sm text-white/80">
        {body}
      </blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <section id="testimonials" className="c-space mt-16 md:mt-24">
      <h2 className="text-heading">Hear From My Clients</h2>

      <div className="relative mt-12 flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username || review.name} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username || review.name} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-primary" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-primary" />
      </div>
    </section>
  );
}
