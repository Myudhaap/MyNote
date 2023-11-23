import React from "react";
import Header from "./components/Header";
import CatatanView from "./components/CatatanView";
import CatatanList from "./components/CatatanList";

import "./index.css";
import CatatanBtnAdd from "./components/CatatanBtnAdd";
import Modal from "./components/Modal";

import { getInitialData, showFormattedDate } from "./utils";

class Catatan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catatan: getInitialData().map((item) => ({
        ...item,
        createdAt: showFormattedDate(item.createdAt),
      })),
      selectedCatatan: "",
      search: "",
      isModal: false,
      isEdit: false,
    };

    this.onShowModal = this.onShowModal.bind(this);
    this.onAddCatatan = this.onAddCatatan.bind(this);
    this.onEditCatatan = this.onEditCatatan.bind(this);
    this.onDeleteCatatan = this.onDeleteCatatan.bind(this);
    this.onSetArchived = this.onSetArchived.bind(this);
    this.onIsEditChange = this.onIsEditChange.bind(this);
    this.onSetSelectedCatatan = this.onSetSelectedCatatan.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onShowModal() {
    this.setState((prevState) => {
      return {
        isModal: !prevState.isModal,
      };
    });
  }

  onSetSelectedCatatan(catatan) {
    this.setState({
      selectedCatatan: catatan ? catatan : "",
    });
  }

  onIsEditChange(edit) {
    this.setState({
      isEdit: edit,
    });
  }

  onSearchHandler(search) {
    this.setState({
      search: search,
    });
  }

  onAddCatatan(payload) {
    const newCatatan = payload;

    this.setState((prevState) => {
      return {
        catatan: [...prevState.catatan, newCatatan],
      };
    });
  }

  onEditCatatan(payload, id) {
    const editCatatan = payload;
    this.setState((prevState) => {
      return {
        catatan: prevState.catatan?.map((item) => {
          if (item.id === id) return { ...editCatatan };
          return item;
        }),
      };
    });
  }

  onDeleteCatatan(id) {
    this.setState((prevState) => {
      return {
        catatan: prevState.catatan?.filter((item) => item.id !== id),
      };
    });
  }

  onSetArchived(id) {
    let updateCatatan = this.state.catatan;
    updateCatatan = updateCatatan.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          archived: !item.archived,
        };
      }
      return item;
    });

    this.setState({
      catatan: updateCatatan,
    });
  }

  render() {
    const catatan = this.state.catatan.filter((item) =>
      item.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <>
        <Header onSearchHandler={this.onSearchHandler} />
        <main className="catatan">
          <div className="container">
            {this.state.selectedCatatan && !this.state.isEdit && (
              <CatatanView
                onSetSelectedCatatan={this.onSetSelectedCatatan}
                selectedCatatan={this.state.selectedCatatan}
              />
            )}

            <CatatanBtnAdd onShowModal={this.onShowModal} />
            <CatatanList
              catatan={catatan}
              isArchive={false}
              isEdit={this.state.isEdit}
              onSetArchived={this.onSetArchived}
              onDeleteCatatan={this.onDeleteCatatan}
              onIsEditChange={this.onIsEditChange}
              onEditCatatan={this.onEditCatatan}
              onShowModal={this.onShowModal}
              onSetSelectedCatatan={this.onSetSelectedCatatan}
            />
            <CatatanList
              catatan={catatan}
              isArchive={true}
              isEdit={this.state.isEdit}
              onSetArchived={this.onSetArchived}
              onDeleteCatatan={this.onDeleteCatatan}
              onIsEditChange={this.onIsEditChange}
              onShowModal={this.onShowModal}
              onSetSelectedCatatan={this.onSetSelectedCatatan}
            />
            {this.state.isModal && (
              <Modal
                catatan={this.state.selectedCatatan}
                isEdit={this.state.isEdit}
                onShowModal={this.onShowModal}
                onIsEditChange={this.onIsEditChange}
                onAddCatatan={this.onAddCatatan}
                onEditCatatan={this.onEditCatatan}
                onSetSelectedCatatan={this.onSetSelectedCatatan}
              />
            )}
          </div>
        </main>
      </>
    );
  }
}

export default Catatan;
