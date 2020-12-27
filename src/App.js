import React, { Component, createRef } from 'react'
import Formulaire from './components/Formulaire'
import Message from './components/Message'
import base from './base'

export default class App extends Component {
  
  state = {
    messages:{},
    pseudo: this.props.match.params.pseudo,
  }

  messageRef = createRef();

  
  componentDidMount(){
    base.syncState('/', {
      context:this,
      state:'messages'
    })
  }
  // pour garder le scroll à la hauteur du dernier message
  componentDidUpdate(){
    const ref = this.messageRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = message =>{
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    Object
      .keys(messages)
      .slice(0, -25)
      .forEach(key=>{
        messages[key] = null
      })
    this.setState({ messages })
  }

  isUser = nick => nick === this.state.pseudo

  render() {
    const messages = Object
      .keys(this.state.messages)
      .map(key=>(
        <Message 
          pseudo={this.state.messages[key].pseudo}
          message={this.state.messages[key].message}
          isUser={this.isUser}
        />
      ))
    return (
      <div className="flex flex-col h-screen justify-between mx-auto h-1/2 w-1/2">
         <header class=" bg-red-500">Chat demo</header>
          <div className="mb-auto bg-green-100 overflow-scroll" ref={this.messageRef}>
            { messages }
          </div>
        <div className="block mx-auto w-full">
          <Formulaire 
        length={150}
        pseudo={this.state.pseudo}
        addMessage={this.addMessage}
        />
        </div>
        
      </div>
    )
  }
}
