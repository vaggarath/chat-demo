import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Connexion extends Component {

    state = {
        pseudo: '',
        goToChat: false,
    }

    handleChange = e =>{
        const pseudo = e.target.value
        this.setState({ pseudo })
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.setState({goToChat:true})
    }

    render() {
        if(this.state.goToChat){
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
        }
        return (
            <div className="flex items-center justify-center h-screen bg-blue-100">
                <div className="bg-blue-400 text-white font-bold rounded-lg border shadow-lg p-10 mx-auto w-1/2 formulaire">
                <h2 className="text-5xl text-purple-800 text-center pb-5">Connexion au chat</h2>
                    <form className="form" onSubmit={this.handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-grey-darker text-sm font-bold mb-2">
                                    Pseudo
                                </label>
                                <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-black" 
                                id="username" type="text" 
                                placeholder="Votre pseudo"
                                value={this.state.pseudo} 
                                onChange={this.handleChange}
                                required />
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-800 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded mt-5" type="submit">
                                    Connexion
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
