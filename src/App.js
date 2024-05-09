import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import FaqSection from "./components/FaqSection";
import Flashcard from "./components/Flashcard";
import Others from "./components/Others";

function App() {
  return (
    <div className="w-full flex flex-col justify-center ">
      {/* navbar */}
      <div className="mt-9">
        <Navbar />
      </div>

      {/* menu */}
      <div className="mt-[45px]">
        <Menu />
      </div>

      {/* heading */}
      <div className="w-full flex justify-center">
        <div className="w-10/12 mt-[64px] bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text text-transparent text-[32px] font-bold">
          <span> Relations and Functions ( Mathematics ) </span>
        </div>
      </div>

      {/* flashcard */}
      <div>
        <Flashcard />
      </div>

      {/* others */}
      <div className="mb-44">
        <Others />
      </div>

      <div className="flex flex-col gap-11">
        {/* faq heading */}
        <div className="w-full flex justify-center">
          <div className="w-10/12 bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text text-transparent text-[48px] font-bold">
            FAQ
          </div>
        </div>

        {/* faq */}
        <div className="w-full flex justify-center mb-24">
          <div className="w-10/12">
            <FaqSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
