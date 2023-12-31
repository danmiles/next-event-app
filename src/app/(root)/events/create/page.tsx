import EventForm from '@/components/shared/EventForm';
import { auth } from '@clerk/nextjs';
import React from 'react';

export default function CreateEvent() {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  return (
    <section className="">
      <div className="bg-dotted-pattern bg-slate-100 bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center">
          Create Event
        </h3>
      </div>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </section>
  );
}
