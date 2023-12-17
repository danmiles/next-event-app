import React from 'react';
// Components
import { Button } from '@/components/ui/button';
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-center h-screen">
          <h1 className="h1">Next.js 14 + Tailwind Css Starter</h1>
          <Button variant={'destructive'}>Click me</Button>
            
        </div>
      </div>
    </header>
  );
}
