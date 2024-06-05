import "../assets/Contact.css";
import { Link } from "react-scroll";
import { BsFillTelephoneFill, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
// import { BiSolidDownload } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="flex mt-8 bg-custom-gray">
      <div className="flex flex-col w-screen text-center">
        <div className="font-roboto text-5xl my-6">Contact</div>
        <div className="flex flex-row m-auto">
          <div className="flex flex-col font-comic text-3xl ">
            <BsFillTelephoneFill className="ml-4 h-12" />
            <MdEmail className="ml-4 h-12" />
            <BsGithub className="ml-4 h-12" />
          </div>
          <div className="flex flex-col font-comic text-2xl text-start">
            <label className="ml-4 h-12">+447897271634</label>
            <label className="ml-4 h-12">jack.rosser@live.co.uk</label>
            <a
              href="https://github.com/Remitito/"
              className="text-black ml-4 hover:underline hover:text-purple-700"
            >
              https://github.com/Remitito/
            </a>
          </div>
        </div>
      </div>
      {/* <div className='contactRight'>
                <h2 className='contactHeader'>My Latest CV</h2>
                    <div className='cvCont'>
                        <a className='cvDownload' href='JackRosserCV.pdf' download>
                            <BiSolidDownload className='downloadLogo'></BiSolidDownload>
                            <label className='downloadText'>Download</label>
                        </a>
                    </div>
                </div> */}
    </div>
  );
};

export default Contact;
