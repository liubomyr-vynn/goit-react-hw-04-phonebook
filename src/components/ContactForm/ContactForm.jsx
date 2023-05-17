import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.addContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className="section">
        <h1 className="section__title">Phonebook</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form__container">
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <input
              className="form__input"
              type="text"
              name="name"
              pattern="^[a-zA-Z\u0400-\u04FF]+([\-'\s][a-zA-Z\u0400-\u04FF]+)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
              id="name"
            />
          </div>

          <div className="form__container">
            <label className="form__label" htmlFor="number">
              Number
            </label>
            <input
              className="form__input"
              type="tel"
              name="number"
              pattern="^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
              id="number"
            />
          </div>

          <button className="form__button" type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
