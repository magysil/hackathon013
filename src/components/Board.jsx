import React, { Component } from 'react'
import Board from 'react-trello'
import { createTranslate } from 'react-trello'

const TEXTS = {
  "Add another lane": "Agregar otro",
  "Click to add card": "Haga clic para agregar una tarjeta",
  "Delete lane": "Eliminar carril",
  "Lane actions": "Acciones de carril",
  "button": {
    "Add lane": "Agregar carril",
    "Add card": "Agregar",
    "Cancel": "Cancelar"
  },
  "placeholder": {
    "title": "título",
    "description": "descripción",
    "label": "etiqueta"
  }
}
const data = require('../Data/data.json')

const handleDragStart = (cardId, laneId) => {
  console.log('drag started')
  console.log(`cardId: ${cardId}`)
  console.log(`laneId: ${laneId}`)
}

const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
  console.log('drag ended')
  console.log(`cardId: ${cardId}`)
  console.log(`sourceLaneId: ${sourceLaneId}`)
  console.log(`targetLaneId: ${targetLaneId}`)
}

class Boards extends Component {
  state = { boardData: { lanes: [] } }

  setEventBus = (eventBus) => {
    this.setState({ eventBus })
  }

  async componentWillMount() {
    const response = await this.getBoard()
    this.setState({ boardData: response })
  }

  getBoard() {
    return new Promise((resolve) => {
      resolve(data)
    })
  }

  shouldReceiveNewData = (nextData) => {
    console.log('New card has been added')
    console.log(nextData)
  }

  handleCardAdd = (card, laneId) => {
    console.log(`New card added to lane ${laneId}`)
    console.dir(card)
  }

  render() {
    return (
      <div className="App">
        
        <div className="App-intro">
          <Board
            editable
            onCardAdd={this.handleCardAdd}
            data={this.state.boardData}
            draggable
            onDataChange={this.shouldReceiveNewData}
            eventBusHandle={this.setEventBus}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
            t={createTranslate(TEXTS)}
            style={{backgroundColor: 'white'}}
            
          />
        </div>
      </div>
    )
  }
}

export default Boards
