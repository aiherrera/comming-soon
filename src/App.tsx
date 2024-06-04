import logo from './assets/Logomark.png';
import CountdownBanner from './components/countdown-banner';

function App() {
  return (
    <div className="flex flex-col w-full h-screen bg-slate-950 text-slate-200">
      <header className="flex justify-between px-6 md:px-10 pt-8">
        <div className="flex items-center">
          <div className="w-12 h-12 hidden md:flex">
            <img className="rounded-full w-full h-full object-cover" src={logo} alt="Avatar" />
          </div>
          <h1 className="text-2xl text-center md:pl-4">Hackathon Space</h1>
        </div>
      </header>

      <main className="flex flex-col md:flex-row w-full flex-1 justify-center items-center gap-10 -mt-32 p-6 md:pr-16">
        <div className="md:mb-0 w-40 h-40 md:w-80 md:h-80 flex justify-center">
          <img className="rounded-full w-full h-full object-cover" src={logo} alt="Avatar" />
        </div>

        <div className="text-center md:text-left max-w-md">
          <h1 className="font-sans font-bold text-7xl sm:text-4xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight">
            Hosting best in <span className="text-yellow-400">class</span> hackathons
          </h1>
          <p className="capitalize text-lg sm:text-xl md:text-2xl text-orange-500 mt-4">
            Our website is coming soon
          </p>
        </div>
      </main>
      
      <CountdownBanner eventDate="2024-06-10" />
    </div>
  );
}

export default App;
