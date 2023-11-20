import React from "react";

function Evaluate() {
  return (
    <div className="width-page space_section margin-l_r border-top-section">
      <h3>Quá trình đánh giá của giám sát</h3>
      <table>
        <tbody>
          <tr>
            <th>Mã đánh giá</th>
            <th>Ngày đánh giá</th>
            <th>Người đánh giá</th>
            <th>Mục đánh giá</th>
            <th>Nhận xét</th>
          </tr>
          <tr>
            <td>MDG1</td>
            <td>26/8/2023</td>
            <td>Trịnh Thái Sơn</td>
            <td>Quy trình chăm sóc</td>
            <td>Đạt yêu cầu</td>
          </tr>
          <tr>
            <td>MDG2</td>
            <td>26/9/2023</td>
            <td>Lê Minh Tuấn</td>
            <td>Quy trình chế biến</td>
            <td>Đạt yêu cầu</td>
          </tr>
          <tr>
            <td>MDG3</td>
            <td>26/10/2023</td>
            <td>Vũ Thành Vinh</td>
            <td>Quá trình xuất sưởng</td>
            <td>Đạt yêu cầu</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Evaluate;
