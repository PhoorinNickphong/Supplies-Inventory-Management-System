import React from "react";
import "./Organizationsbar.css";

function Organizationsbar({ onAddClick }) {
  return (
    <div className="org-bar">
      <div className="org-title">บริษัท/ห้าง/ร้าน</div>

      <div className="org-controls">
        <div className="org-search-box">
          <span className="org-search-icon">🔍</span>
          <input type="text" placeholder="ค้นหา" className="org-input" />
        </div>

        {/* ปุ่มเพิ่มร้านค้า */}
        <button className="org-btn-green" onClick={onAddClick}>
          + เพิ่มร้านค้า
        </button>
      </div>
    </div>
  );
}

export default Organizationsbar;
