import React from "react";
import { UserReviews } from "./components/UserReviews";
import { ListReviews } from "./components/ListReviews";

const CommentPage = () => {
  return (
    <>
      {/*  BEGIN: User reviews */}
      <section id="user-reviews">
        <UserReviews />
      </section>
      {/*  END: User reviews  */}

      {/*  BEGIN: List reviews  */}
      <section id="list-reviews">
        <ListReviews />
      </section>
      {/*  END: List reviews  */}
    </>
  );
};
export default CommentPage;
