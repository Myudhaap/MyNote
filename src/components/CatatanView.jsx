import React from "react";

const CatatanView = ({ onSetSelectedCatatan, selectedCatatan }) => {
  return (
    <div className="catatan-view">
      <h2 className="catatan-view__title">{selectedCatatan?.title}</h2>
      <p className="catatan-view__created">{selectedCatatan?.createdAt}</p>
      <p className="catatan-view__body">{selectedCatatan?.body}</p>
      <button
        className="catatan-view__btn"
        onClick={() => onSetSelectedCatatan()}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default CatatanView;
