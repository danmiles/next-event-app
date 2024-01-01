
import { getEventById, getRelatedEventsByCategory } from '@/lib/actions/event.actions'
import { formatDateTime } from '@/lib/utils';
import { SearchParamProps } from '@/types'
import Image from 'next/image';

export default async function EventDetails({ params: { id }, searchParams }: SearchParamProps) {
  const event = await getEventById(id);

  console.log(event)
  return (
    <div className="container">
      Event
    </div>
    
  )
}
