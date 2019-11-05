import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';


import automatePic from '../assets/images/automate.svg';
import integratePic from '../assets/images/connect.svg';
import socialPic from '../assets/images/social.svg';
import dashboardPic from '../assets/images/dashboard.svg';



import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                How it works
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Us humans like to chat
            <br />
            Engage with your customers, in a way that's right for them
          </h2>
          <p>
            Did you know that us humans spend on average 4 hours and 23 mins on our phones ?
            <br />
            And what do we do? Some of us play games, but most of us interact with each other on one of the many platforms out there!
            That's right, most of us spend on average 45% of our screen time in social media! You know, chatting to your friends and sharing pictures of cats !
          </p>
          <h3>Want to see the platform in action?</h3>
          <br />
          <p>Check out the bellow video</p>
          <br />
          <iframe width="420" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
          </iframe>
        </header>
        <ul className="icons major">
          <li>
            <span className="fab fa-facebook-messenger major style1">
              {/* <span className="label">Facebook Messenger</span> */}
            </span>
          </li>
          <li>
            <span className="fab fa-whatsapp major style1">
            </span>
          </li>
          <li>
            <span className="fab fa-facebook-messenger major style1">
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={automatePic} alt="" />
        </div>
        <div className="content">
          <h2>
            Automate
            <br />
            your business
          </h2>
          <p>
            Allow your clients to get in touch, whenever, however. No humans required.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={socialPic} alt="" />
        </div>
        <div className="content">
          <h2>
            Integrate
            <br />
            With the most popular channels
          </h2>
          <p>
            Facebook, WhatsApp, IVR and SMS
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={integratePic} alt="" />
        </div>
        <div className="content">
          <h2>
            One app
            <br />
            To rule them all!
          </h2>
          <p>
            Integrate with the most popular table booking platforms. ResDiary Bookatable Collinsbookings Open table
          </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={dashboardPic} alt="" />
        </div>
        <div className="content">
          <h2>
            Data Hungry?
            <br />
            Use our state of the art dashboard
          </h2>
          <p>
            Keep track of of your bookings, where is your engagement coming from and your drop off rate.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Hungry for more?</h2>
          <p>
            Interested in our platform & our journey? Subscribe to our news letter !
          </p>
        </header>
        <form action="https://formspree.io/mwkegrdj" method="POST">
          <div className="row gtr-uniform">
            <div className="col-8 col-12-xsmall">
              <input type="email" name="subscribe-email" id="subscribe-email" defaultValue="" placeholder="john.smith@domain.com" />
            </div>
            <div className="col-4 col-12-xsmall">
              <button type="submit" className="primary">Subscribe</button>
            </div>
          </div>
        </form>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <form action="https://formspree.io/mwkegrdj" method="POST">
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input type="text" name="contact-name" id="contact-name" defaultValue="" placeholder="John Smith" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="text" name="contact-phone" id="contact-phone" defaultValue="" placeholder="++ 44 7495 112233" />
            </div>
            <div className="col-12 col-12-xsmall">
              <input type="email" name="contact-email" id="contact-email" defaultValue="" placeholder="john.smith@domain.com" />
            </div>

            <div className="col-12">
              <textarea name="contact-message" id="contact-message" placeholder="I'd like to learn more about your platform" rows="6" resize='false'></textarea>
            </div>
            <div className="col-12">
              <ul className="actions">
                <li><input type="submit" value="Send Message" className="primary" /></li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </section>
  </Layout >
);

export default IndexPage;
