import React, { useCallback, useState } from "react";
import avata from "../../../asset/images/avata.png";

const UserReviews = () => {
  const [comment, setComment] = useState(false);
  const handleInputComment = useCallback(() => {
    setComment(true);
  }, [setComment]);

  const handleBtnCancelComment = useCallback(() => {
    setText("");
    setComment(false);
  }, [setComment]);
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let inputValue = event.target.value;
      setText(inputValue);
      setDisabled(inputValue === "");
    },
    [setDisabled]
  );
  return (
    <div className="width-page margin-l_r space_section user-comments  border-top-section">
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

export default React.memo(UserReviews);
