import bannerImg from "../../assets/images/banner_img.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container text-center">
      <div className="banner">
        <h6 className="heading">Shodesh Group</h6>
        <h2 className="banner_tittle">
          Nibras Alwadi Trading: Your Global Partner for Building Materials and
          Logistics Solutions
        </h2>
        <p className="banner_p">
          NIBRAS ALWADI BUILDING MATERIALS TRADING LLC is a full service
          international import-export trading and logistic company in United
          Arab Emirates.
        </p>
        <button className="project_btn">Our Projects</button>
        <button className="contact_btn banner_contact_btn">Contact US</button>
        <img className="img-fluid banner_img" src={bannerImg} alt="img" />
      </div>
    </div>
  );
};

export default Banner;
