import React, { Component } from 'react'

export default class Formulaire extends Component {

    state ={
        message:'',
        length: this.props.length,
    }

    handleSubmit = e =>{
        e.preventDefault()
        //alert('submit')
        this.createMessage()
    }

    handleChange = e =>{
        const message = e.target.value
        const length = this.props.length - message.length
        this.setState({message, length})
    }

    createMessage = () =>{
        const { addMessage, pseudo, length } = this.props
        const message = {
            pseudo,
            message: this.state.message
        }

        addMessage(message)

        this.setState({ message : '', length})
      }

    render() {
        return (
            <div>
                <form className="bg-purple-100 pb-5" onSubmit={this.handleSubmit}>
                    <textarea 
                    maxLength="150"
                    placeholder="150 mots maximum"
                    className="bg-blue-100 border-solid border-4 border-green-200 mx-auto block w-1/2"
                    onChange={this.handleChange}
                    value={this.state.message}
                    required />
                    <p className="text-center">{this.state.length} caractères restant</p>
                    <button 
                    type="submit"
                    className="mx-auto block border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                    >Envoyer</button>
                </form>
            </div>
        )
    }
}
