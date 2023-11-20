import React from "react";
import HomePage from "../../pages/HomePage/index";
import { Outlet, Route, Routes } from "react-router-dom";
import ImportantInformation from "./components/ImportantInformation";
import CommentPage from "../../pages/CommentPage";
function Dashboard() {
  return (
    <div>
      <section id="important-information">
        <ImportantInformation />
      </section>
      <Outlet />
    </div>
  );
}

const Content = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<HomePage />} />
          <Route path="commentpage" element={<CommentPage />} />
          {/* <Route path="tasks" element={<CommentPage />} /> */}
        </Route>
      </Routes>
    </main>
  );
};
export default Content;
