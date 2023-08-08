import whatToDoImg from "../../assets/images/what_to_do_img.png";
import "./WhatToDo.css";

const WhatToDo = () => {
  const whatToDoInfo = [
    { title: "Managing Director", info: "MOAMMED SHAKHAWAT HOSSAN SUMON" },
    { title: "Legal Type", info: "Limited Liability Company(LLC)" },
    { title: "Trade License No", info: "804256" },
  ];

  const expertiseArea = [
    "Building & Construction Materials Wholesale Trading",
    "Sand, Gravel & Stones Trading",
    "Marble & Natural Stones Trading",
    "Building & Construction Materials Trading",
    "Logistics Services",
  ];
  return (
    <div className="container what">
      <div className="bg_overlay"></div>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="what_to_do_left">
            <img src={whatToDoImg} alt="img" />
            <div className="what_to_do_left_content">
              {whatToDoInfo.map((item, index) => (
                <div key={index} className="row single_row">
                  <div className="col-4 item_tittle">{item.title}:</div>
                  <div className="col-8 item_info">{item.info}</div>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="what_to_do_right">
            <h4 className="what_tittle">What we do</h4>
            <p className="what_p">
              NIBRAS ALWADI BUILDING MATERIALS TRADING LLC is a full service
              international import-export trading and logistic company in United
              Arab Emirates .
            </p>
            <h4 className="area_tittle">Our areas of expertise are</h4>
            {expertiseArea.map((area, index) => (
              <div
                className="d-flex align-items-center single_area"
                key={index}
              >
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.28125 18.9941L7.96875 23.6816M14.5312 16.1816L19.2188 11.4941M10.7812 18.9941L15.4688 23.6816L26.7188 11.4941"
                    stroke="#0EB2D2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="area">{area}</p>
              </div>
            ))}
            <p className="area_p">
              We established longer and closer working relationships with our
              clients and suppliers in order to provide superior quality
              products and efficient logistics services. We source product from
              various parts of the world, import and export products, arrange
              logistics services globally and organize and manage oversee global
              projects with our sister concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatToDo;
WhatToDo;
