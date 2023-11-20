import React from "react";
import imgHACCP from "../../../asset/images/img-HACCP.png";
import imgStandard from "../../../asset/images/img-standard.png";
function Standard() {
  return (
    <div className="width-page space_section margin-l_r border-top-section">
      <h3>Giấy chứng nhận tiêu chuẩn</h3>
      <div className="img-standard d-flex space_article choose-img">
        <img src={imgHACCP} alt="" />
        <img src={imgStandard} alt="" />
      </div>
    </div>
  );
}

export default Standard;
