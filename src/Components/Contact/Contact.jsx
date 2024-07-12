import React from 'react'
import "./Contact.css"
import mailIcon from '../../assets/mail-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import msgIcon from '../../assets/msg-icon.png'
import locIcon from '../../assets/location-icon.png'
import arrow from "../../assets/white-arrow.png"


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8cbac891-aba2-4e92-a167-da6d0d62b594");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset()
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className='column-left'>
            <h3>Send us a message <img src={msgIcon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mailIcon} alt="" />Contact@Bmc.edu.np</li>
                <li><img src={phoneIcon} alt="" />+977 9812345678</li>
                <li><img src={locIcon} alt="" />Dudhpati 1-Bhaktapur</li>
            </ul>
        </div>
        <div className="column-right">
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Your name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required />
                <label htmlFor="phone">Phone Number</label>
                <input type="number" name='phone' placeholder='Enter your number' required />
                <label htmlFor="email">Your Email</label>
                <input type="email" name='email' placeholder='Enter your email' required/>
                <label htmlFor="textarea">Write your message here</label>
                <textarea name="message" rows='6' placeholder='Enter Your Message' required></textarea>
                <button className='btn dark-btn'>Submit now <img src={arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact