import React from "react";
import avata from "../../../asset/images/avata.png";

export const UserReviews = () => {
  return (
    <div className="width-page margin-l_r space_section user-comments">
      <div className="row">
        <div className="col-1 avata">
          <img src={avata} alt="" />
        </div>
        <div className="col-11">
          <form action="#">
            <input
              type="text"
              className="text-comment"
              placeholder="Nhận xét của bạn về sản phẩm"
            />
            <div className="group-btn comment">
              <button className="btn-cancle">Hủy</button>
              <button className="btn-send-comment" disabled>
                Bình luận
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
