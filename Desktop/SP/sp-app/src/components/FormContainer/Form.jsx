import React, { Component } from "react";
import LargeBtn from "../UI/LargeButton/LargeBtn";
import "./styles.scss";
import Modal from "../ModalComponentContainer/Modal";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      segment: "",
      message: "",
      agreeToTerms: false,
      isModalOpen: false,
      modalData: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const requestData = {
        name: this.state.name,
      };

      const response = await fetch("https://sp-labs.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const responseData = await response.text();

      this.setState({ modalData: responseData });

      this.openModal();
    } catch (error) {
      console.error("API request error:", error.message);
    }
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  render() {
    return (
      <div className="form-container">
        <span className="form-container__background__blur"></span>
        <h1>Não fique parado, fale conosco</h1>
        <div className="form-container__inputs">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name"></label>
              <input
                placeholder="Seu nome"
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                placeholder="Seu Email"
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="segment"></label>
              <select
                placeholder="Seu Segmento"
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
              <textarea
                className="form_text"
                placeholder="Fale um pouco sobre seu negócio"
                type="text"
                id="message"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                required
              ></textarea>

              {/* <input
                className="form_text"
                placeholder="Fale um pouco sobre seu negócio"
                type="text"
                id="message"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                required
              /> */}
            </div>
            <div className="privacy-policy-container">
              <label className="privacy-policy__checkbox">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={this.state.agreeToTerms}
                  onChange={this.handleChange}
                  required
                />
              </label>
              <p>
                {" "}
                Declaro que conheço a Política de Privacidade e autorizo a
                utilização das minhas informações pelo SP Labs
              </p>
            </div>
            <LargeBtn type="submit" text={"Enviar"}></LargeBtn>

            <Modal
              isOpen={this.state.isModalOpen}
              closeModal={this.closeModal}
              data={this.state.modalData}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default MyForm;
