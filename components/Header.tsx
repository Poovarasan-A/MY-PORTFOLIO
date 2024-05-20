import Link from "next/link";

const Header = () => {
  return (
    <div className="flex absolute w-full h-[6rem] px-[6rem] bg-transparent items-center justify-between z-50">
      <div className="flex items-center gap-2 text-xl tracking-wide cursor-pointer">
        <div className="flex items-center ">
          <h4 className=" text-white font-bold">P</h4>
          <h4 className=" text-white font-bold">oovarasan</h4>
        </div>
        <div className="flex items-center">
          <h4 className=" text-violet-500 font-bold">A</h4>
          <h4 className=" text-violet-500 font-bold">rumugam</h4>
        </div>
      </div>
      <div className="flex">
        <ul className="flex gap-20">
          <li className="nav-link">About</li>
          <li className="nav-link">Projects</li>
          <li className="nav-link">Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
