import {Component} from 'react'

import {v4} from 'uuid'

import CounterCard from '../CounterCard'

import './index.css'

class CharacterCount extends Component {
  state = {textInput: '', listItems: [], show: false}

  onAddForm = event => {
    event.preventDefault()
    const {textInput} = this.state
    const textLength = textInput.length
    const newList = {
      id: v4(),
      textInput,
      textLength,
    }
    this.setState(prevState => ({
      listItems: [...prevState.listItems, newList],
      textInput: '',
      show: true,
    }))
  }

  onEnterTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {textInput, show, listItems} = this.state
    return (
      <div className="bg-container">
        <div className="character-count-card">
          <div className="count-card">
            <h1 className="heading">Count the characters like a Boss...</h1>
          </div>
          {show ? (
            <ul className="list-container">
              {listItems.map(eachItem => (
                <CounterCard key={eachItem.id} cardDetails={eachItem} />
              ))}
            </ul>
          ) : (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="input-img"
              />
            </div>
          )}
        </div>
        <div className="counter-container">
          <h1 className="counter">Character Counter</h1>
          <form className="form-container" onSubmit={this.onAddForm}>
            <input
              type="text"
              value={textInput}
              placeholder="Enter the Characters here"
              className="input-text"
              onChange={this.onEnterTextInput}
            />
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCount
