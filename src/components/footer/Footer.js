import './footer.css'
import { BsFacebook, BsInfoCircle } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'
import { AiFillInstagram, AiFillYoutube, AiOutlineHome } from 'react-icons/ai'
import { RiContactsLine } from 'react-icons/ri'

export default function Footer() {
  return (
    <div className='footer '>
      <div className='footer-top'>
        <ul>
          <li>
            <AiOutlineHome className='socials-icons' />
            <a href='/'>home</a>
          </li>
          <li>
            <BsInfoCircle className='socials-icons' />
            <a href='/about'>about</a>
          </li>
          <li>
            <RiContactsLine className='socials-icons' />
            <a href='/contact_us'>contact</a>
          </li>
        </ul>
      </div>

      <div className='footer-center'>
        <ul>
          <li>
            <BsFacebook />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <AiFillInstagram />
          </li>
          <li>
            <AiFillYoutube />
          </li>
        </ul>
      </div>

      <div className='footer-bottom'>
        <p>Privacy and Policy - Terms of Services</p>
      </div>
    </div>
  )
}
