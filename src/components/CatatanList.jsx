import React from "react";
import CatatanListItem from "./CatatanListItem";

const CatatanList = ({
  catatan,
  isArchive,
  isEdit,
  onSetArchived,
  onDeleteCatatan,
  onShowModal,
  onIsEditChange,
  onSetSelectedCatatan,
}) => {
  const catatanList = catatan?.filter((item) => item.archived === isArchive);
  return (
    <div className="catatan-item">
      <h2 className="catatan-item__title">
        {isArchive ? "Catatan Archived" : "Catatan"}
      </h2>
      <section className="catatan-list">
        {catatanList?.length ? (
          catatanList?.map((item) => (
            <CatatanListItem
              key={item.id}
              catatan={item}
              onSetArchived={onSetArchived}
              onDeleteCatatan={onDeleteCatatan}
              idEdit={isEdit}
              onShowModal={onShowModal}
              onIsEditChange={onIsEditChange}
              onSetSelectedCatatan={onSetSelectedCatatan}
            />
          ))
        ) : (
          <p className="catatan-list__text">
            Catatan {isArchive ? "Archived" : ""} Kosong!
          </p>
        )}
      </section>
    </div>
  );
};

export default CatatanList;
