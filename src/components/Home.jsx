import "../assets/Home.css";
import { HelloWorld } from "./HelloWorld";
import { Link } from "react-scroll";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="flex h-5/6 w-screen flex-row md:justify-evenly bg-custom-gray">
        <div className="flex flex-col items-center justify-between text-center w-auto">
          <div className="h-3/6 flex flex-col justify-end">
            <h2 className="font-roboto text-4xl md:text-6xl">Hi, I'm Jack!</h2>
            <label className="font-comic text-lg sm:text-xl md:text-2xl">
              A full-stack developer from the UK
            </label>
          </div>

          <img src={"./myAvatar.png"} alt="My Avatar" />
        </div>
        <div className="flex flex-col items-baseline mt-8 justify-evenly">
          <HelloWorld position="bubble top-left" textToType={"¡Hola, mundo!"} />
          <HelloWorld position="bubble top-right" textToType={"你好世界"} />
          <HelloWorld
            position="bubble bottom-right"
            textToType={"Hello World!"}
          />
        </div>
      </div>
      <div className="h-1/6 flex justify-center items-center">
        <Link to="about" className="scroll" smooth={true} duration={500} />
      </div>
    </div>
  );
};

export default Home;
