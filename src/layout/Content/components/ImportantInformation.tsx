import React from "react";
import iconcomment from "../../../asset/images/icon-comment.svg";
import imgproduct from "../../../asset/images/img-juil.png";
import { useLocation, useNavigate } from "react-router-dom";
const ImportantInformation = () => {
  const location = useLocation();
  const linkpage = useNavigate();
  const handerClick = () => {
    linkpage("commentpage");
  };
  return (
    <div className="width-page space_section margin-l_r">
      <div className="row">
        <div className="col-12 col-md-6 choose-img">
          <img src={imgproduct} alt="" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6">
          <article>
            <h3 className="name-product">Thanh Long Ruột Đỏ</h3>
            <div className="id-product space_article">
              <h6>
                Mã Sản Phẩm <span>098765SMT</span>
              </h6>
              <h5>
                <span>
                  Xuất xứ: <span>......</span>
                </span>
                <span>
                  Nước: <span>.....</span>
                </span>
              </h5>
            </div>
            <h5 className="time-information d-flex">
              <span>
                Ngày kích hoạt <time>...</time>
              </span>
              <span>
                Ngày xuất sưởng <time>...</time>
              </span>
            </h5>
          </article>
          {location.pathname !== "/commentpage" ? (
            <article className="btn-comment">
              <button onClick={handerClick}>
                <img src={iconcomment} alt="" />
                Bình luận
              </button>
            </article>
          ) : (
            ""
          )}
          {/* <article className="btn-comment">
            <button onClick={handerClick}>
              <img src={iconcomment} alt="" />
              Bình luận
            </button>
          </article> */}
        </div>
      </div>
    </div>
  );
};

export default ImportantInformation;
