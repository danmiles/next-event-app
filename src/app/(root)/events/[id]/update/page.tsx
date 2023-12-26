import EventForm from '@/components/shared/EventForm';
import { auth } from '@clerk/nextjs';
import React from 'react';

export default function UpdateEnent() {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  return (
    <section className=" bg-dotted-pattern bg-slate-100 bg-cover bg-center py-5 md:py-10">
      <h3 className="wrapper h3-bold text-center sm:text-left">Update Event</h3>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Update" />
      </div>
    </section>
  );
}
