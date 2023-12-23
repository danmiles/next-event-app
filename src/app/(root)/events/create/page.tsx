import EventForm from '@/components/shared/EventForm';
import React from 'react';

export default function CreateEvent() {
  return (
    <section className=" bg-dotted-pattern bg-slate-100 bg-cover bg-center py-5 md:py-10">
      <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>

      <div className="wrapper my-8">
        <EventForm />
      </div>
    </section>
  );
}
