import { Link } from "react-router";
import HomeNav from "../components/HomeNav";
import Logo from "../components/Logo";

import Lightning from "../assets/img/gradient-lightning.svg";
import SpikeIcon from "../assets/img/spike-icon.svg";
import SpringIcon from "../assets/img/spring-icon.svg";
import AsteriskIcon from "../assets/img/asterisk-icon.svg";
import HeartIcon from "../assets/img/heart-icon.svg";
import GoldenStarIcon from "../assets/img/golden-star-icon.svg";
import PrevIcon from "../assets/img/prev-icon.svg";
import Project1 from "../assets/img/project-1.png";
import Client1 from "../assets/img/client-1.png";
import Client2 from "../assets/img/client-2.png";
import Client3 from "../assets/img/client-3.png";
import Client4 from "../assets/img/client-4.png";
import Client5 from "../assets/img/client-5.png";
import GradientCurve from "../assets/img/gradient-curve.svg";
import HomeFeatures from "../components/HomeFeatures";

function Home() {
  return (
    <div className="bg-black min-h-screen">
      <header className="fixed z-10 top-4 left-1/2 -translate-x-1/2 w-full max-w-desktop flex justify-between items-center gap-3 px-4">
        <Logo />
        <HomeNav />
        <div className="flex gap-[19px] items-center">
          <Link to="/signin" className="raleway-400">Sign in</Link>
          <Link to="/signup" className="raleway-700 py-3 px-9 rounded-xl bg-[#4E47FF]">Sign up</Link>
        </div>
      </header>

      <main>
        <section className="relative pb-32">
          {/* bg img */}
          <img src={Lightning} alt="gradient lightning image" className="-z-0 absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"/>

          {/* Extra Top Padding */}
          <div className="pt-[218px]">&nbsp;</div>

          {/* banner */}
          <div className="grid gap-12 relative place-items-center lg:pb-44 max-w-desktop">
            <h1 className="raleway-700 text-center text-[73.34px] leading-none">
              A Powerful Mini <br />
              Website Builder Tool
            </h1>
            <Link to="/signup" className="raleway-700 w-max py-4.5 px-16 rounded-xl bg-black">Sign up</Link>
          </div>

          {/* features */}
          <HomeFeatures />
        </section>

        {/* slider */}
        <section className="relative pb-20">
          {/* bg img */}
          <img src={SpikeIcon} className="-z-0 absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="max-w-desktop relative">
            <div className="flex justify-between items-center max-w-[987px] !mx-auto py-20">
              <button className="p-5 rounded-full border border-[#2A2A2A] bg-[#151515] grid place-items-center"><img src={PrevIcon} /></button>
              <div className="max-w-[449px] text-center">
                <p className="raleway-700 text-6xl pb-3.5">Built on Matik</p>
                <p className="inter-400 text-sm">Explore our users' websites and see how we've helped businesses like yours thrive online.</p>
              </div>
              <button className="p-5 rounded-full border border-[#2A2A2A] bg-[#151515] grid place-items-center rotate-180"><img src={PrevIcon} /></button>
            </div>
          </div>

          <div className="flex justify-center gap-8 scrollbar-hide overflow-x-auto relative">
            <div className="rounded-xl shrink-0 p-8.5 card-bg border border-[#2B2B2B]"><img src={Project1} /></div>
            <div className="rounded-xl shrink-0 p-8.5 card-bg border border-[#2B2B2B]"><img src={Project1} /></div>
            <div className="rounded-xl shrink-0 p-8.5 card-bg border border-[#2B2B2B]"><img src={Project1} /></div>
          </div>
        </section>

        {/* reviews */}
        <section className="grid place-items-center">
          <a href="https://www.upwork.com/freelancers/~01717c695f5f69880c?s=general" target="_blank" className="w-max border flex gap-3 items-center pr-5.5 border-[#2A2A2A] rounded-xl h-21">
            <div className="flex items-center">
              <img src={Client1} alt="client 1 image" className="z-40 translate-x-[calc(4px_*_4)]" />
              <img src={Client2} alt="client 2 image" className="z-30 translate-x-[calc(4px_*_3)]" />
              <img src={Client3} alt="client 3 image" className="z-20 translate-x-[calc(4px_*_2)]" />
              <img src={Client4} alt="client 4 image" className="z-10 translate-x-[calc(4px_*_1)]" />
              <img src={Client5} alt="client 5 image" className="z-0 " />
            </div>
            <div>
              <p className="inter-400 pb-1 text-sm"><strong>5.0</strong> Based On <strong>80</strong> Reviews</p>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img src={GoldenStarIcon} alt="golden star icon" key={i} />
                ))}
              </div>
            </div>
          </a>
        </section>
      </main>

      <footer className="pb-16 relative overflow-hidden">
        <img src={GradientCurve} className="absolute pointer-events-none bottom-0 left-0 w-full h-full" />

        <div className="h-[638px] relative">
          <img src={SpringIcon} className="absolute pointer-events-none top-0 right-9" />
          <img src={AsteriskIcon} className="absolute pointer-events-none bottom-0 left-0" />
        </div>

        <div className="max-w-desktop mx-auto relative">
          <div className="pt-[86px] pb-[78px] pl-[69px] pr-[72px] rounded-4xl card-bg border border-[#2B2B2B]">
            <Logo />

            <div className="pt-20 pb-9 flex justify-between gap-4">
              <p className="max-w-[356px] inter-400">
                Ready to elevate your online presence? Contact us today to discuss your project and discover how we can bring your vision to life.
              </p>

              <div className="flex items-center gap-12">
                <Link to="/" className="inter-400">Home</Link>
                <Link to="/" className="inter-400">About</Link>
                <Link to="/" className="inter-400">How it Works</Link>
                <Link to="/" className="inter-400">Services</Link>
              </div>
            </div>

            <div>
              <div className="flex gap-3 items-center">
                <img src={HeartIcon} alt="HeartIcon" />
                <p className="inter-400">Made with love powered by matik.app</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home;