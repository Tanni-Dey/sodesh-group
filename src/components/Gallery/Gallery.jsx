import gImg1 from "../../assets/images/g_img_1.png";
import gImg2 from "../../assets/images/g_img_2.png";
import gImg3 from "../../assets/images/g_img_3.png";
import gImg4 from "../../assets/images/g_img_4.png";
import gImg5 from "../../assets/images/g_img_5.png";
import gImg6 from "../../assets/images/g_img_6.png";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    [gImg1, gImg2],
    [gImg3, gImg4],
    [gImg5, gImg6],
  ];
  return (
    <div className="container gallery">
      <h6 className="heading">Gallery</h6>
      <h3 className="ethics_tittle gallery_tittle">
        Lighter Vessel Loading Pictures
      </h3>
      <div className="row">
        {images.map((img, index) => (
          <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
            <div className="img">
              <img className="img-fluid mb-4" src={img[0]} alt="img" />
              <img className="img-fluid mb-4" src={img[1]} alt="img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
Gallery;
