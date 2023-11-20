import React from "react";
import Standard from "./components/Standard";
import Evaluate from "./components/Evaluate";
import ImgInformation from "./components/ImgInformation";
import { VideoInformation } from "./components/VideoInformation";

function HomePage() {
  return (
    <>
      {/* BEGIN: Standard  */}
      <section id="standard">
        <Standard />
      </section>
      {/* END: Standard */}

      {/* BEGIN: Evaluate*/}
      <section id="evaluate">
        <Evaluate />
      </section>
      {/* END:  Evaluate*/}

      {/* BEGIN: Img information */}
      <section id="img-information">
        <ImgInformation />
      </section>
      {/* END: Img information */}

      {/* BEGIN: Video information */}
      <section id="video-information">
        <VideoInformation />
      </section>
      {/* END: Video information */}
    </>
  );
}

export default HomePage;
