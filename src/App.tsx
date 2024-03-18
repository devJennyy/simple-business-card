import "./App.css";
import { SiVsco } from "react-icons/si";
import { CiBasketball, CiMail } from "react-icons/ci";
import { FaReact } from "react-icons/fa6";
import { PiInstagramLogoThin } from "react-icons/pi";

function App() {
  return (
    <>
      <div className="flex md:flex-row md:justify-between flex-col justify-between items-center w-full h-full ">
        <div className="md:h-full md:w-1/2 h-1/2 object-cover">
          <img
            src="public/img/power.png"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col flex-1 justify-center items-center md:gap-4">
          {/*Name*/}
          <h1 className="flex md:flex-1 justify-center md:text-[40px]/[45px] text-[26px]/[33px] text-[#4C4F63] max-w-0.5 font-bold md:pb-0 pb-[16px]">
            Power Chainsawman
          </h1>

          {/*Content*/}
          <p className="md:text-[14px] text-[12px] text-[#4C4F63] md:max-w-[30rem] max-w-[15rem]">
            Power is a devil hunter in "Chainsaw Man" with the ability to
            control blood. Initially brash and selfish, she becomes a loyal ally
            to Denji, showcasing formidable combat skills.
          </p>

          {/*Button*/}
          <button className="border-2 bg-[#4AC7B5] border-[#4AC7B5] md:px-[60px] px-[50px] md:py-[10px] py-[10px] rounded-[25px] text-white md:text-[16px] text-[13px] font-semibold my-5 hover:scale-95 transition-all">
            Get in touch
          </button>

          {/*Icons*/}
          <div className="flex flex-row justify-between items-center md:gap-[20px] gap-[17px]">
            <button className="md:text-[22px] text-[18px] hover:scale-[1.5] transition-all">
              <PiInstagramLogoThin />
            </button>
            <button className="md:text-[20px] text-[16px] hover:scale-[1.5] transition-all">
              <SiVsco />
            </button>
            <button className="md:text-[20px] text-[16px] hover:scale-[1.5] transition-all">
              <FaReact />
            </button>
            <button className="md:text-[21px] text-[16px] hover:scale-[1.5] transition-all">
              <CiBasketball />
            </button>
            <button className="md:text-[19px] text-[16.4px] hover:scale-[1.5] transition-all">
              <CiMail />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
