'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  eventDate: string;
}

export default function CountdownBanner({ eventDate }: CountdownProps) {
  const [countdownOpen, setCountdownOpen] = useState<boolean>(true);

  const calculateTimeLeft = () => {
    const eventTime = new Date(eventDate).getTime();
    const currentTime = new Date().getTime();
    const difference = eventTime - currentTime;

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <>
      {countdownOpen && (
        <div className="fixed bottom-0 right-0 z-50 w-full lg:bottom-8 lg:right-12 lg:w-2/5 xl:w-2/6">
          <div className="flex justify-center bg-gradient-to-r from-purple-700 to-purple-800 px-3 py-2 text-sm text-slate-50 shadow-lg md:rounded">
            <div className="flex mr-auto mx-auto bg-gradient-to-r from-purple-700 to-purple-800 text-white w-full md:w-auto md:pl-5">
              {timeLeft.days !== undefined ? (
                <div className="flex w-full justify-center space-x-2">
                  <div className="text-lg md:text-xl text-blue-50">🚀 Launching in: </div>
                  <div className="text-lg md:text-xl" style={{ minWidth: '3ch' }}>
                    {timeLeft.days}
                    <span className="pl-1">days</span>
                  </div>
                  <div className="text-lg md:text-xl" style={{ minWidth: '3ch' }}>
                    {timeLeft.hours}
                    <span className="pl-1">h</span> :
                  </div>
                  <div className="ml-0 pl-0 text-lg md:text-xl" style={{ minWidth: '3ch' }}>
                    {timeLeft.minutes}
                    <span className="pl-1">m</span> :
                  </div>
                  <div className="text-lg md:text-xl" style={{ minWidth: '3ch' }}>
                    {timeLeft.seconds}
                    <span className="pl-1">s</span>
                  </div>
                </div>
              ) : (
                <span className="text-xl">Event Started!</span>
              )}
            </div>

            <button
              className="ml-3 border-l border-blue-100 pl-2 text-blue-100 hover:text-blue-200"
              onClick={() => setCountdownOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
