import React from 'react'
import svg from './assets/undraw_stepping_up_g6oo.svg'
import './contact-us.css'
const ContactUs = () => {
  return (
    <>
      <div className='contact-us-container'>
        <div className='contact-header'>
          <h2>contact us:</h2>
        </div>
        <div className='contact-form-parent'>
          <div className='contact-form-card'>
            <img src={svg} alt='person climbing stairs' />
          </div>
          <div className='contact-form-fields'>
            <form>
              <div className='contact-form-field-name'>
                <section>
                  <label htmlFor='u-name'>Your name</label>
                  <input type='text' name='name' id='u-name' />
                </section>
                <section>
                  <label htmlFor='email'>Your email</label>
                  <input type='email' name='email' id='email' />
                </section>
              </div>
              <div className='contact-form-field-message'>
                <label htmlFor='u-message'>Your Message</label>
                <textarea name='message' id='u-message' cols={45} rows={6} />
              </div>
              <div className='contact-form-field-button'>
                <button className='contact-form-button'>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
