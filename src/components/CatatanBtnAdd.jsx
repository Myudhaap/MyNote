import React from "react";

const CatatanBtnAdd = ({ onShowModal }) => {
  return (
    <div className="catatan-action">
      <button className="catatan-action__btn" onClick={onShowModal}>
        Tambah Catatan <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default CatatanBtnAdd;
