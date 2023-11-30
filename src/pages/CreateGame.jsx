import React, { Component } from "react";
import SectionParagraph from "../components/SectionParagraph";
import SectionTitle from "../components/SectionTitle";

class GameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            description:"",
            price:"",
            image_url:""
        };
        this.submitForm = this.submitForm.bind(this)
    }

    syncChanges(value,property) {
        let state = {};
        state[property] = value;
        this.setState(state);
    }

    async submitForm(ev) {
        ev.preventDefault();

        await fetch('http://localhost:3000/games', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        });

        window.location.href = "/";

    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="">Titulo</label>
                    <input onChange={ (ev) => { this.syncChanges(ev.target.value,'title') } } value={this.state.title} type="text" name="title" placeholder="Ingresa el titulo del juego" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="">Descripción</label>
                    <textarea onChange={ (ev) => { this.syncChanges(ev.target.value,'description') } } value={this.state.description} name="description" placeholder="Ingresa la descripción del juego" className="form-control" id="" cols="100" rows="30"></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="">Precio del juego</label>
                    <input onChange={ (ev) => { this.syncChanges(ev.target.value,'price') } } type="number" value={this.state.price} name="price" placeholder="Ingresa el precio del juego" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="">Imagen</label>
                    <input onChange={ (ev) => { this.syncChanges(ev.target.value,'image_url') } } type="text" value={this.state.image_url} name="image_url" placeholder="Ingresa la imagen URL del juego" className="form-control" />
                </div>

                <button onClick={this.submitForm} type="submit" className="main-button">
                    Guardar videojuego
                </button>
            </form>
            
        )
    }

}

const CreateGame = () => {
    return (
        <div className="wrapper">
            <SectionTitle className="text-center" title="¡Comparte tu joya con la comunidad de jugadores de Gameverse!" ></SectionTitle>
            <SectionParagraph title="Completa los detalles de tu videojuego para que otros puedan explorar y disfrutar de tu creación."></SectionParagraph>
            <section className="form">
                <GameForm />  
            </section>
        </div>  
    );
};

export default CreateGame;