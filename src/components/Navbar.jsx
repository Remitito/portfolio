import { GiHamburgerMenu } from "react-icons/gi";
import "../assets/Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const sectionNames = ["About", "Projects", "Contact"];
  const sections = ["about", "projects", "contact"];

  return (
    <div className="font-roboto absolute items-center border text-2xl flex flex-row bg-white w-full justify-between">
      <div className="w-2/5 flex flex-row items-center">
        <div className="h-20 w-16">
          <img
            className="h-full object-scale-down md:object-cover ml-8"
            src="portrait.png"
          />
        </div>
        <label className="ml-12">Jack Rosser</label>
      </div>
      <div className="w-2/5 justify-end">
        <div className="md:flex hidden flex-row justify-evenly">
          {sectionNames.map((name, index) => {
            return (
              <div className="navLinks" key={name}>
                <Link to={sections[index]} smooth={true} duration={500}>
                  {name}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="md:hidden flex justify-end mr-4">
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
