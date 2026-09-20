"use client";

import HomeContent from "./HomeContent";

const Homepage = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#020305] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px] opacity-35" />
      <div className="absolute left-1/2 top-0 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-[30rem] w-[36rem] rounded-full bg-cyan-400/14 blur-[130px]" />
      <div className="absolute bottom-[-14rem] left-[-8rem] h-[30rem] w-[30rem] rounded-full bg-emerald-400/10 blur-[120px]" />
      <HomeContent />
    </section>
  );
};

export default Homepage;
