import React, { useState } from "react";
import avata from "../../../asset/images/avata.png";

export const UserReviews = () => {
  const [comment, setComment] = useState(false);
  const handleInputComment = () => {
    setComment(true);
  };

  const handleBtnCancelComment = () => {
    setText("");
    setComment(false);
  };
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    setText(inputValue);
    setDisabled(inputValue === "");
  };
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
              onClick={handleInputComment}
              onChange={handleInputChange}
              value={text}
            />
            {comment && (
              <div className="group-btn comment">
                <button className="btn-cancle" onClick={handleBtnCancelComment}>
                  Hủy
                </button>
                <button className="btn-send-comment" disabled={disabled}>
                  Bình luận
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
