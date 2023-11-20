import React from "react";
import img1 from "../../../asset/images/cham-soc-cay-dua-luoi-.png";
import img2 from "../../../asset/images/che-bien-nong-san-18062020.png";
import img3 from "../../../asset/images/che-bien-nong-san-2.png";
import img4 from "../../../asset/images/download.png";
import img5 from "../../../asset/images/istockphoto-1251268131-612x612.png";
import img6 from "../../../asset/images/phat-trien-cong-nghiep-che-bien-nong-san-dap-ung-yeu-cau-hoi-nhap.png";

const ImgInformation = () => {
  return (
    <div className="width-page space_section margin-l_r border-top-section">
      <div className="row choose-img">
        <h3>Hình ảnh quá trình chăm sóc và chế biến</h3>
        <div className="col-12 col-md-4 col-sm-6">
          <img src={img1} alt="" className="img-fluid" />
        </div>
        <div className="col-12 col-md-4 col-sm-6">
          <img src={img2} alt="" className="img-fluid" />
        </div>
        <div className="col-12 col-md-4 col-sm-6">
          <img src={img3} alt="" className="img-fluid" />
        </div>
        <div className="col-12 col-md-4 col-sm-6">
          <img src={img4} alt="" className="img-fluid" />
        </div>
        <div className="col-12 col-md-4 col-sm-6">
          <img src={img5} alt="" className="img-fluid" />
        </div>
        <div className="col-12 col-md-4 col-sm-6">
          <img src={img6} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};
export default ImgInformation;
