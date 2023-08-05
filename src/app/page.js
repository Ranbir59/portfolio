import Image from "next/image";
import { BsMoonStarsFill } from "react-icons/bs";
export default function Home() {
  return (
    <>
      <div className="main font-body ">
        <div className="navbar w-[100%]  h-24 flex justify-between items-center">
          <h2 className="text-lg ml-6 font-bold cursor-pointer ">Ranbir Verma</h2>
          <div className="flex items-center cursor-pointer">
            <BsMoonStarsFill className="mr-6" />
            <button className="mr-6 bg-blue-500 p-2 rounded-md">Resume</button>
          </div>
        </div>
      </div>
    </>
  );
}
