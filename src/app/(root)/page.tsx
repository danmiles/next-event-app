import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection';
import Search from '@/components/shared/Search';
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

// UI Components
import { Button } from '@/components/ui/button';

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });
  return (
    <main>
      <section className="section-padding bg-slate-200">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Left start */}
            <div className="flex flex-col sm:items-start  items-center gap-8">
              <h1 className="h1-bold">
                Next.js 14 Event App, allows you to authenticate and then create
                the required event.
              </h1>
              <p className="p-regular-20 md:p-regular-24">
                Clerk is a developer-first authentication API that handles all,
                or part, of your app`s login flow. It`s easy to integrate, fully
                customizable, and secure by default.
              </p>
              <p className="p-regular-20 md:p-regular-24">
                Once authenticated, this will allow you to create a new Event as
                well as modify it.
              </p>
              <Button size="lg" asChild className="button w-fit ">
                <Link href="#events">Explore Now</Link>
              </Button>
            </div>
            {/* Left end */}

            {/* Right start */}
            <div className="flex justify-center items-center">
              <Image
                src="/images/home/evangeline-shaw-xRlI-L-kvrw-unsplash.jpg"
                alt="buisness event"
                width={675}
                height={450}
                className="h-auto rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="events" className="wrapper section-padding flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Trust by <br /> Thousands of Events</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </main>
  );
}
