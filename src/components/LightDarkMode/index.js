import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  onChangeMode = () => {
    const {isDark} = this.state
    if (isDark === true) {
      this.setState({isDark: false})
    } else {
      this.setState({isDark: true})
    }
  }

  render() {
    const {isDark} = this.state
    return (
      <div className="bg-container">
        {isDark ? (
          <div className="dark-container">
            <h1 className="dark-heading">Click To Change Color</h1>
            <button
              type="button"
              className="dark-button"
              onClick={this.onChangeMode}
            >
              Light Mode
            </button>
          </div>
        ) : (
          <div className="light-container">
            <h1 className="light-heading">Click To Change Color</h1>
            <button
              type="button"
              className="light-button"
              onClick={this.onChangeMode}
            >
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
