import "./scss/AboutMbl.scss";

const AboutMbl = () => {
  return (
    <div className="about_mbl">
      <div className="about_info">
        <h1>About Me</h1>
        <p id="about_sumary">
          <img
            id="stickManOffice1"
            loading="lazy"
            src={`./svg/stickManOffice1.svg`}
            alt="stickManOffice1"
            title="stickManOffice1"
          />
          With a goal of becoming a Full Stack developer,
          I believe my job-related skills and knowledge would be maximized to {" "}
          <img
            id="stickManOffice2"
            loading="lazy"
            src={`./svg/stickManOffice2.svg`}
            alt="stickManOffice2"
            title="stickManOffice2"
          />
          achieve strong values for the company.
        </p>

        <h1>Contact Details</h1>
        <div className="about_contact_detail">
          <div>
            <li>
              <img
                id="stickManBirthday"
                loading="lazy"
                src={`./svg/stickManBirthday.svg`}
                alt="stickManBirthday"
                title="stickManBirthday"
              />
              <span>16/06/2001</span>
            </li>
            <li>
              <img
                id="stickManPhone"
                loading="lazy"
                src={`./svg/stickManPhone.svg`}
                alt="stickManPhone"
                title="stickManPhone"
              />
              <span>0326 160601</span>
            </li>
          </div>
          <li>
            <img
              id="stickManMail"
              loading="lazy"
              src={`./svg/stickManMail.svg`}
              alt="stickManMail"
              title="stickManMail"
            />
            <span>ngockhang16062001@gmail.com</span>
          </li>
          <li>
            <img
              id="stickManAddress"
              loading="lazy"
              src={`./svg/stickManAddress.svg`}
              alt="stickManAddress"
              title="stickManAddress"
            />
            <span>Binh Chanh, Ho Chi Minh</span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default AboutMbl;
