import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isButtonClicked: false, searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeText = () => {
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked,
    }))
  }

  render() {
    const {isButtonClicked, searchInput} = this.state
    const buttonText = isButtonClicked ? 'Edit' : 'Save'
    return (
      <div className="bgContainer">
        <div className="subContainer">
          <h1 className="heading">Editable Text Input</h1>
          {isButtonClicked ? (
            <p className="paragraph">{searchInput}</p>
          ) : (
            <input
              className="input"
              type="text"
              value={searchInput}
              onChange={this.onChangeSearch}
            />
          )}
          <button className="button" type="button" onClick={this.onChangeText}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default App
