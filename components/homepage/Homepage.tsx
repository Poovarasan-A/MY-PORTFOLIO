"use client";

import HomeContent from "./HomeContent";

const Homepage = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-slate-50 text-zinc-900 transition-colors duration-300 dark:bg-[#020305] dark:text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:52px_52px] opacity-60 dark:bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] dark:opacity-35" />
      <div className="absolute left-1/2 top-0 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[130px] dark:bg-violet-500/20" />
      <div className="absolute bottom-0 right-0 h-[30rem] w-[36rem] rounded-full bg-cyan-400/8 blur-[130px] dark:bg-cyan-400/14" />
      <div className="absolute bottom-[-14rem] left-[-8rem] h-[30rem] w-[30rem] rounded-full bg-emerald-400/8 blur-[120px] dark:bg-emerald-400/10" />
      <HomeContent />
    </section>
  );
};

export default Homepage;
