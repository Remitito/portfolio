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
                    <h2 className='contactHeader'>Contact</h2>
                    <div className='contactMethodsCont'>
                        <div className='contactItemLogoCont'>
                            <BsFillTelephoneFill className='contactItemLogo'/>
                            <MdEmail className='contactItemLogo'/>
                            <BsGithub className='contactItemLogo'/>
                        </div>
                        <div className='contactItemInfoCont'>
                            <label className='contactItemInfo'>07897271634</label>
                            <label className='contactItemInfo'>jrossot@protonmail.com</label>
                            <label className='contactItemInfo'>https://github.com/Remitito/</label>
                        </div>
                    </div>
                </div>
                <div className='contactRight'>
                <h2 className='contactHeader'>My Latest CV</h2>
                <div className='cvCont'>
                    
                    <a className='cvDownload' href='CodingCV.pdf' download>
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