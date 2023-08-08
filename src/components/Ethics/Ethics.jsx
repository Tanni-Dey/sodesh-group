import { useEffect, useState } from "react";
import "./Ethics.css";

const Ethics = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("ethics.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container">
      <h6 className="heading ethics_heading text-center">Our Ethics</h6>
      <h3 className="text-center ethics_tittle">
        We serve a inspiring Path of Visionary Growth and Ethical Values
      </h3>
      <p className="text-center ethics_p">
        We follow a path of inspiring growth and uphold strong ethical values.
        Our mission is to serve with dedication, integrity, and innovation.
      </p>
      <div id="data">
        {data.map((singleData) => (
          <div
            key={singleData.id}
            className="row single_data align-items-center"
          >
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="content">
                <h6>{singleData.type}</h6>
                <h3>{singleData.tittle}</h3>
                <p>{singleData.des}</p>
                {singleData.steps.length <= 4 ? (
                  singleData.steps.map((step, index) => (
                    <div className="d-flex align-items-center step" key={index}>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.8 9.11279L9.6405 16.3128L7.20001 13.8585"
                          stroke="#00858D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h5>{step}</h5>
                    </div>
                  ))
                ) : (
                  <div className="row gap-1">
                    <div className="col-7">
                      {singleData.steps.slice(0, 4).map((step, index) => (
                        <div
                          className="d-flex align-items-center step"
                          key={index}
                        >
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.8 9.11279L9.6405 16.3128L7.20001 13.8585"
                              stroke="#00858D"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <h5>{step}</h5>
                        </div>
                      ))}
                    </div>
                    <div className="col-4">
                      {singleData.steps.slice(4, 8).map((step, index) => (
                        <div
                          className="d-flex align-items-center step"
                          key={index}
                        >
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.8 9.11279L9.6405 16.3128L7.20001 13.8585"
                              stroke="#00858D"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <h5>{step}</h5>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="image">
                <img className="img-fluid" src={singleData.img} alt="img" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ethics;
