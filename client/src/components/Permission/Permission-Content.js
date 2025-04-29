import React from "react";
import "./Permission-Content.css";

function PermissionContent() {
  return (
    <div className="perm-container">
      
      {/* ส่วนหัวข้อและกล่องค้นหา+ปุ่ม */}
      <div className="perm-header">
        <div className="perm-title">แบ่งสิทธิ์</div>

        <div className="perm-actions">
          <div className="perm-search-box">
            <span className="perm-search-icon">🔍</span>
            <input
              type="text"
              placeholder="ค้นหา"
              className="perm-search-input"
            />
          </div>
          <button className="perm-add-btn">+ เพิ่มสิทธิ์</button>
        </div>
      </div>

      {/* ตาราง */}
      <table className="perm-table">
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>บริษัท/ร้านค้า</th>
            <th>วันที่สร้าง</th>
            <th>วันที่แก้ไข</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>01</td><td>แอดมิน ฝ่ายบริการโครงสร้างพื้นฐานฯ</td><td>27 มี.ค. 65</td><td>24 พ.ย. 65</td></tr>
          <tr><td>02</td><td>สำนักงานความร่วมมืออุตสาหกรรม</td><td>27 มี.ค. 65</td><td>—</td></tr>
          <tr><td>03</td><td>ศูนย์ทรัพย์สินทางปัญญา</td><td>27 มี.ค. 65</td><td>—</td></tr>
          <tr><td>04</td><td>ศูนย์บ่มเพาะวิสาหกิจ</td><td>27 มี.ค. 65</td><td>—</td></tr>
          <tr><td>05</td><td>ฝ่ายยุทธศาสตร์และแผน</td><td>17 พ.ค. 65</td><td>—</td></tr>
          <tr><td>06</td><td>ศูนย์นวัตกรรมการออกแบบ</td><td>17 พ.ค. 65</td><td>—</td></tr>
          <tr><td>07</td><td>สำนักงานกลาง</td><td>17 พ.ค. 65</td><td>9 พ.ย. 65</td></tr>
          <tr><td>08</td><td>สถาบันพัฒนาการเป็นผู้ประกอบการนักศึกษา</td><td>17 พ.ค. 65</td><td>—</td></tr>
          <tr><td>09</td><td>ประชาสัมพันธ์และสื่อสารองค์กร</td><td>31 ส.ค. 65</td><td>7 ธ.ค. 65</td></tr>
          <tr><td>10</td><td>STI</td><td>31 ส.ค. 65</td><td>—</td></tr>
        </tbody>
      </table>

    </div>
  );
}

export default PermissionContent;
