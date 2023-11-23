import React from "react";
import { textPrefix } from "../utils/util";

const CatatanListItem = ({
  catatan,
  onSetArchived,
  onDeleteCatatan,
  onShowModal,
  onIsEditChange,
  onSetSelectedCatatan,
}) => {
  return (
    <div
      className="list-item card"
      onClick={() => {
        onSetSelectedCatatan(catatan);
      }}
    >
      <div className="item-body">
        <h3 className="item-body__title">{catatan.title}</h3>
        <p className="item-body__description">
          {catatan.body.length < 100
            ? catatan.body
            : `${textPrefix(catatan.body, 100)}...`}
        </p>
        <p className="item-body__created">Created : {catatan.createdAt}</p>
      </div>
      <ul className="item-action">
        <li
          className="item-action__list"
          onClick={(e) => {
            e.stopPropagation();
            onIsEditChange(true);
            onSetSelectedCatatan(catatan);
            onShowModal();
          }}
        >
          Edit
        </li>
        <li
          className="item-action__list"
          onClick={(e) => {
            e.stopPropagation();
            onSetArchived(catatan.id);
          }}
        >
          {catatan.archived ? "Buka Arsip" : "Arsip"}
        </li>
        <li
          className="item-action__list"
          onClick={(e) => {
            e.stopPropagation();
            onDeleteCatatan(catatan.id);
          }}
        >
          Delete
        </li>
      </ul>
    </div>
  );
};

export default CatatanListItem;
