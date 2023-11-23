import React from "react";
import { textPrefix } from "../utils/util";
import { showFormattedDate } from "../utils";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.catatan?.id || "",
      title: this.props.catatan?.title || "",
      body: this.props.catatan.body || "",
      archived: this.props.catatan.archived || false,
      createdAt: this.props.catatan.createdAt || "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let payload;
    if (this.props.isEdit) {
      payload = {
        ...this.state,
        id: this.props.catatan.id,
        createdAt: this.props.catatan.createdAt,
      };

      this.props.onSetSelectedCatatan();
      this.props.onEditCatatan(payload, this.props.catatan.id);
    } else {
      payload = {
        ...this.state,
        id: +new Date(),
        createdAt: showFormattedDate(new Date()),
      };

      this.props.onAddCatatan(payload);
    }
    this.props.onIsEditChange(false);
    this.props.onShowModal();
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="modal">
        <div className="container">
          <div className="modal-content">
            <h2 className="modal-content__title">Tambah Catatan</h2>
            <form className="content-form" onSubmit={this.onSubmit}>
              <div className="form-control">
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={
                    this.state.title.length < 50
                      ? this.state.title
                      : textPrefix(this.state.title, 50)
                  }
                  onChange={this.onChange}
                  required
                />
                <span
                  className={`form-control__info${
                    this.state.title.length < 50 ? "--success" : "--warning"
                  }`}
                >
                  Max length title tersisa {50 - this.state.title.length}
                </span>
                <label htmlFor="title">Title</label>
              </div>
              <div className="form-control">
                <textarea
                  name="body"
                  id="body"
                  cols="30"
                  rows="10"
                  value={this.state.body}
                  onChange={this.onChange}
                ></textarea>
                <label htmlFor="body">Body</label>
              </div>
              <div className="form-action">
                {this.props.isEdit ? (
                  <button type="submit">Edit</button>
                ) : (
                  <button type="submit">Simpan</button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    this.props.onIsEditChange(false);
                    this.props.onSetSelectedCatatan();
                    this.props.onShowModal();
                  }}
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
