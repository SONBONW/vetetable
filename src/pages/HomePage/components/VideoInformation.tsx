import React from "react";

export const VideoInformation = () => {
  const video1 = require("../../../asset/videos/video1.mp4");
  const video2 = require("../../../asset/videos/video2.mp4");
  return (
    <div className="width-page space_section margin-l_r border-top-section">
      <article className="care-videos space_article">
        <div className="row">
          <h3>Video trích xuất quá trình chăm sóc</h3>
          <div className="col-12 col-sm-6">
            <video controls>
              <source src={video1} type="video/mp4" />
            </video>
          </div>
          <div className="col-12 col-sm-6">
            <video controls>
              <source src={video2} type="video/mp4" />
            </video>
          </div>
        </div>
      </article>
      <article className="processing-videos space_article">
        <div className="row">
          <h3>Video trích xuất quá trình chế biến</h3>
          <div className="col-12 col-sm-6">
            <video controls>
              <source src={video2} type="video/mp4" />
            </video>
          </div>
          <div className="col-12 col-sm-6">
            <video controls>
              <source src={video1} type="video/mp4" />
            </video>
          </div>
        </div>
      </article>
    </div>
  );
};
