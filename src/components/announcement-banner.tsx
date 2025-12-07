'use client';

import { useEffect, useState } from 'react';
import { PartyPopper, Rocket } from 'lucide-react';

export function AnnouncementBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const targetDate = new Date('2026-02-01T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-b bg-primary/10">
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center gap-2">
          <Rocket className="h-6 w-6 text-primary" />
          <h2 className="font-headline text-2xl font-bold tracking-tight md:text-3xl">
            Get Ready! Something Big is Coming
          </h2>
        </div>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
          Our first flagship platform,{" "}
          <span className="font-semibold text-primary">
            WEBz Solution Platform 1.0
          </span>
          , is scheduled to launch in February 2026.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <div className="flex flex-col items-center">
            <span className="font-headline text-4xl font-bold text-primary">
              {timeLeft.days}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              Days
            </span>
          </div>
          <div className="text-4xl font-light text-muted-foreground">:</div>
          <div className="flex flex-col items-center">
            <span className="font-headline text-4xl font-bold text-primary">
              {timeLeft.hours}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              Hours
            </span>
          </div>
          <div className="text-4xl font-light text-muted-foreground">:</div>
          <div className="flex flex-col items-center">
            <span className="font-headline text-4xl font-bold text-primary">
              {timeLeft.minutes}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              Minutes
            </span>
          </div>
          <div className="text-4xl font-light text-muted-foreground">:</div>
          <div className="flex flex-col items-center">
            <span className="font-headline text-4xl font-bold text-primary">
              {timeLeft.seconds}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              Seconds
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
