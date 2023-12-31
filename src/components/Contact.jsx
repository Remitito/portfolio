import '../assets/Contact.css';
import { Link } from 'react-scroll';
import { BsFillTelephoneFill, BsGithub } from "react-icons/bs";
import { MdEmail} from "react-icons/md";
import {BiSolidDownload} from "react-icons/bi"

const Contact = () => {
    return (
        <>
            <div className='contactMain'>
                <div className='contactLeft'>
                    <div className='contactHeader'>Contact</div>
                    <div className='contactMethodsCont'>
                        <div className='contactItemLogoCont'>
                            <BsFillTelephoneFill className='contactItemLogo'/>
                            <MdEmail className='contactItemLogo'/>
                            <BsGithub className='contactItemLogo'/>
                        </div>
                        <div className='contactItemInfoCont'>
                            <label className='contactItemInfo'>+447897271634</label>
                            <label className='contactItemInfo'>jack.rosser@live.co.uk</label>
                            <a href='https://github.com/Remitito/' className='contactItemLink'>https://github.com/Remitito/</a>
                        </div>
                    </div>
                </div>
                <div className='contactRight'>
                <h2 className='contactHeader'>My Latest CV</h2>
                    <div className='cvCont'>
                        <a className='cvDownload' href='JackRosserCV.pdf' download>
                            <BiSolidDownload className='downloadLogo'></BiSolidDownload>
                            <label className='downloadText'>Download</label>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;