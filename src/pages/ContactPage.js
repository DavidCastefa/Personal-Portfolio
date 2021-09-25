import React from "react";
import Title from "../components/Title";
import ContactItem from "../components/ContactItem";
import phone from "../images/phone.svg";
import email from '../images/emailme.svg';
import linkedIn from '../images/linkedin-svgrepo-com.svg';
import address from '../images/location.svg';
import dkrEmail from '../images/dkr-email.png'


const ContactPage = () => {
  return (
    <div>
      <div className="title">
        <Title title={'Contact'} span={'Contact'} />
      </div>

      <div className="ContactPage">
        <div className="map-sect">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23987.387946896633!2d1.9540303997287916!3d41.277886773533304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a482becb445f4f%3A0xc9f576ce44531eab!2sCastelldefels%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1632059887151!5m2!1sen!2ses" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Map of Castelldefels"></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            title={'Phone'}
            icon={phone}
            text1={'+34 619 757 891'}
            text2={''}
          />
          <ContactItem
            title={'Email'}
            icon={email}
            text1={<img src={dkrEmail} alt="DKR's email" />}
            text2={''}
          />
          <ContactItem
            title={'LinkedIn'}
            icon={linkedIn}
            text1={<a href="https://www.linkedin.com/in/davidrhoton">https://www.linkedin.com/in/davidrhoton</a>}
            text2={''}
          />
          <ContactItem
            title={'Address'}
            icon={address}
            text1={'08860 Castelldefels'}
            text2={'Barcelona, Spain'}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactPage;