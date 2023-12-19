import Image from 'next/image';
import Link from 'next/link';

// UI Components
import { Button } from '@/components/ui/button';

export default function Home() {
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
                Book and learn helpful tips from 3,168+ mentors in world-class
                companies with our global community.
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
      </section >
      <section className="section-padding" id="events">
        <div className="container">
          <h2 className="h2-bold">
            Trust by <br /> Thousands of Events
          </h2>

          <div className="flex w-full flex-col gap-5 md:flex-row"></div>
        </div>
      </section>
    </main>
  );
}
