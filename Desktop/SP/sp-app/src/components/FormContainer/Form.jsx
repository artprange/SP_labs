import React, { Component } from "react";
import LargeBtn from "../UI/LargeButton/LargeBtn";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      segment: "",
      message: "",
      agreeToTerms: false,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
    console.log("Form data submitted:", this.state);
  };

  render() {
    return (
      <div className="form-container">
        <h1>Não fique parado, fale conosco</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Seu nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Seu email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="segment">Seu segmento</label>
            <select
              id="segment"
              name="segment"
              value={this.state.segment}
              onChange={this.handleChange}
              required
            >
              <option value="">Seu segmento</option>
              <option value="Option 1">Segmento 1</option>
              <option value="Option 2">Segmento 2</option>
              <option value="Option 3">Segmento 3</option>
            </select>
          </div>
          <div>
            <label htmlFor="message">Fale um pouco osbre seu negócio</label>
            <input
              type="text"
              id="message"
              name="message"
              value={this.state.message}
              onCHange={this.handleChange}
              required
            ></input>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={this.state.agreeToTerms}
                onChange={this.handleChange}
                required
              />
              Declaro que conheço a Política de Privacidade e autorizo a
              utilização das minhas informações pelo SP Labs
            </label>
            <LargeBtn
              className="btn-large"
              type="submit"
              text={"Enviar"}
            ></LargeBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default MyForm;
