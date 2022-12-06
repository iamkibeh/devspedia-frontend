import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'

export default function Footer() {
  return (
    <div className="footer ">
      <div className="footertop">
        <ul className="topList">
          <li className="footerIcons">
            <AiOutlineHome />
          </li>
          <li className="topitem">Home</li>
          <li className="footerIcons">
            <BsInfoCircle />
          </li>
          <li className="topitem">About</li>
          <li className="footerIcons">
            <RiContactsLine />
          </li>
          <li className="topitem">Contact us</li>
        </ul>
      </div>




      <div className="footercenter">
        <ul className='centerlist'>
          <li className="footerIcons">
            <BsFacebook />
          </li>
          <li className="footerIcons">
            <FaTwitter />
          </li>
          <li className="footerIcons">
            <AiFillInstagram />
          </li>
          <li className="footerIcons">
            <AiFillYoutube />
          </li>
        </ul>
      </div>

      

      <div className="footerbottom">
      <ul className="bottomlist">
          <li className="bottomitem">Terms of Services</li>
          <li className="bottomitem">Privacy and Policy</li>
        </ul>
      </div>
    </div>
  )
}
