import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      isSearch: false,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClearSearch = this.onClearSearch.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      search: e.target.value,
    });
  }

  onClearSearch() {
    this.setState({
      search: "",
      isSearch: false,
    });
    this.props.onSearchHandler("");
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      isSearch: true,
    });
    this.props.onSearchHandler(this.state.search);
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header-logo">
            <h1 className="header-logo__title">MyNote</h1>
          </div>
          <form
            className="header-form"
            id="search-form"
            onSubmit={this.onSubmit}
          >
            <input
              type="text"
              className="header-form__input"
              value={this.state.search}
              onChange={this.onChangeHandler}
              placeholder="Search..."
            />
            {!this.state.isSearch ? (
              <button type="submit">
                <i className="fa-solid fa-search"></i>
              </button>
            ) : (
              <div onClick={this.onClearSearch}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            )}
          </form>
        </div>
      </header>
    );
  }
}

export default Header;
