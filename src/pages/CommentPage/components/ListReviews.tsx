import React, { useCallback, useState } from "react";
import iconheart from "../../../asset/images/iconheart.svg";
import iconheartback from "../../../asset/images/iconheartbreak.svg";
import avata from "../../../asset/images/avata.png";
const ListReviews = () => {
  const [feedback, setFeedback] = useState(false);
  const handleBtnFeedback = () => {
    setFeedback(true);
  };

  const handleBtnCancelFeedback = useCallback(() => {
    setText("");
    setFeedback(false);
  }, [setFeedback]);

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
    <div className="width-page margin-l_r space_article">
      <div className="row">
        <div className="col-1 avata">
          <img src={avata} alt="" />
        </div>
        <div className="col-11">
          <ul>
            <li>User name</li>
            <li>Day post</li>
          </ul>
          <p>Comments</p>
          <ul>
            <li className="order-0">
              <button className="button">
                <img src={iconheart} alt="" />
              </button>
            </li>
            <li className="order-1">
              <button className="button">
                <img src={iconheartback} alt="" />
              </button>
            </li>
            <li className="order-2">
              <button
                className="button btn-feedback"
                onClick={handleBtnFeedback}
              >
                Phản hồi
              </button>
            </li>
            {feedback && (
              <li className="admin-feedback order-3">
                <div className="row">
                  <div className="col-1 avata">
                    <img src={avata} alt="" />
                  </div>
                  <div className="col-11 comment-post">
                    <form action="#">
                      <input
                        type="text"
                        className="text-feedback"
                        placeholder="Phản hồi của bạn"
                        onChange={handleInputChange}
                        value={text}
                      />
                      <div className="group-btn feedback">
                        <button
                          className="btn-cancle-feedback"
                          onClick={handleBtnCancelFeedback}
                        >
                          Hủy
                        </button>
                        <button
                          className="btn-send-feedback"
                          disabled={disabled}
                        >
                          Bình luận
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ListReviews);
