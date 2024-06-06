import './index.css'
import {Component} from 'react'
import GreetingButtons from '../GreetingButtons'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {activeBtn: languageGreetingsList[0].imageAltText}

  onChangeActiveBtn = activeBtnValue => {
    this.setState({activeBtn: activeBtnValue})
  }

  displayGreeting = () => {
    const {activeBtn} = this.state
    const getGreeting = languageGreetingsList.find(
      eachItem => eachItem.imageAltText === activeBtn,
    )
    return (
      <div className="greeting-container">
        <img
          src={getGreeting.imageUrl}
          className="greeting-image"
          alt={getGreeting.imageAltText}
        />
      </div>
    )
  }

  render() {
    const {activeBtn} = this.state
    return (
      <div className="greeting-bgcontainer">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="greeting-buttons-list">
          {languageGreetingsList.map(eachItem => (
            <GreetingButtons
              greeting={eachItem}
              key={eachItem.id}
              isActive={activeBtn === eachItem.imageAltText}
              clickLanguageBtn={this.onChangeActiveBtn}
            />
          ))}
        </ul>
        {this.displayGreeting()}
      </div>
    )
  }
}
export default Greetings
