import "./scss/About.scss";
import { IoIosCalendar } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about">
      <img loading="lazy" src="./khang1.jpg" alt="avatar" className="about_img"/>
      <div className="about_info">
        <h1>About Me</h1>
        <p>
          With a goal of becoming a Full Stack developer, I believe my
          job-related skills and knowledge would be maximized to achieve strong
          values for the company.
        </p>

        <h1>Contact Details</h1>
        <div className="about_contact_detail">
          <div>
            <li>
              <IoIosCalendar />
              <span>16/06/2001</span>
            </li>
            <li>
              <FaPhone />
              <span>0326 160601</span>
            </li>
          </div>
          <div>
            <li>
              <MdOutlineMailOutline />
              <span>ngockhang16062001@gmail.com</span>
            </li>
            <li>
              <FaLocationDot />
              <span>Binh Chanh, Ho Chi Minh</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
