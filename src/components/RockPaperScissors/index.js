import {Component} from 'react'

import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import Paragraph from './styledComponent'

import ChoiceList from '../ChoiceList'
import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testId: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testId: 'paperButton',
  },
]

const statusofGameOne = {
  initial: 'INITIAL',
  win: 'WIN',
  lose: 'LOSE',
  tie: 'TIE',
}

class App extends Component {
  state = {
    count: 0,
    activeImage: choicesList[0].imageUrl,
    randomImage: choicesList[1].imageUrl,
    gameStatus: statusofGameOne.initial,
    isTrue: true,
  }

  onSelectImage = id => {
    const {count} = this.state
    const lengthOfchoicelist = choicesList.length
    const randomnumber = Math.floor(Math.random() * lengthOfchoicelist)
    const choicerandomImage = choicesList[randomnumber].id
    const userclickedimagedata = choicesList.find(each => each.id === id)
    const randomimagedata = choicesList.find(
      eachone => eachone.id === choicerandomImage,
    )

    if (
      (id === 'ROCK' && choicerandomImage === 'SCISSORS') ||
      (id === 'PAPER' && choicerandomImage === 'ROCK') ||
      (id === 'SCISSORS' && choicerandomImage === 'PAPER')
    ) {
      this.setState({
        activeImage: userclickedimagedata.imageUrl,
        randomImage: randomimagedata.imageUrl,
        isTrue: false,
        count: count + 1,
        gameStatus: statusofGameOne.win,
      })
    } else if (
      (id === 'ROCK' && choicerandomImage === 'ROCK') ||
      (id === 'PAPER' && choicerandomImage === 'PAPER') ||
      (id === 'SCISSORS' && choicerandomImage === 'SCISSORS')
    ) {
      this.setState({
        activeImage: userclickedimagedata.imageUrl,
        randomImage: randomimagedata.imageUrl,
        isTrue: false,
        gameStatus: statusofGameOne.tie,
      })
    } else {
      this.setState({
        activeImage: userclickedimagedata.imageUrl,
        randomImage: randomimagedata.imageUrl,
        isTrue: false,
        gameStatus: statusofGameOne.lose,
        count: count - 1,
      })
    }
  }

  playAgainButtonClick = () => {
    const {count} = this.state

    this.setState({
      count,
      activeImage: '',
      randomImage: '',
      gameStatus: statusofGameOne.initial,
      isTrue: true,
    })
  }

  render() {
    const {count, isTrue, activeImage, randomImage, gameStatus} = this.state

    let finalgamestatus

    switch (gameStatus) {
      case statusofGameOne.win:
        finalgamestatus = <p className="you-opponent-heading">YOU WON</p>
        break
      case statusofGameOne.lose:
        finalgamestatus = <p className="you-opponent-heading">YOU LOSE</p>
        break
      case statusofGameOne.tie:
        finalgamestatus = <p className="you-opponent-heading">IT IS DRAW</p>
        break
      default:
        finalgamestatus = null
    }

    return (
      <div className="first-background-details-one">
        <Popup
          className="popup-content"
          modal
          trigger={
            <button type="button" className="btn btn-primary exitbutton">
              Exit
            </button>
          }
        >
          {close => (
            <div className="close-container-one">
              <div>
                <p className="logout-paragraph">Do you want to exit ?</p>
              </div>
              <div>
                <button
                  type="button"
                  className="trigger-button m-2 btn btn-danger"
                  onClick={() => close()}
                >
                  Close
                </button>
                <Link to="/entertainment">
                  <button
                    type="button"
                    className="trigger-button btn btn-primary m-2"
                  >
                    Yes
                  </button>
                </Link>
              </div>
            </div>
          )}
        </Popup>
        <div className="container-of-rock-paper-scissor-score-card">
          <div>
            <h1 className="heading-styling">
              Rock
              <br /> Paper
              <br /> Scissors
            </h1>
          </div>
          <div className="score-white-container-one">
            <p className="score-heading-one">Score</p>
            <Paragraph>{count}</Paragraph>
          </div>
        </div>
        {isTrue ? (
          <ul className="unorderlist-data">
            {choicesList.map(each => (
              <ChoiceList
                key={each.id}
                each={each}
                onSelectImage={this.onSelectImage}
              />
            ))}
          </ul>
        ) : (
          <div>
            <div className="unorderlist-data1">
              <div>
                <h1 className="you-opponent-heading">YOU</h1>
                <img
                  src={activeImage}
                  alt="your choice"
                  className="rock-paper-scissors-image-one"
                />
              </div>
              <div>
                <h1 className="you-opponent-heading">OPPONENT</h1>
                <img
                  src={randomImage}
                  alt="opponent choice"
                  className="rock-paper-scissors-image-one"
                />
              </div>
            </div>
            <div className="winningstatus-container-again-button">
              {finalgamestatus}
              <button
                className="playagainbuttonstyling"
                type="button"
                onClick={this.playAgainButtonClick}
              >
                PLAY AGAIN
              </button>
            </div>
          </div>
        )}
        <div className="rules-container">
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                RULES
              </button>
            }
          >
            {close => (
              <div className="close-container-element">
                <button
                  type="button"
                  className="close-button1"
                  onClick={() => close()}
                >
                  <RiCloseLine className="close-button-react-icon" />
                </button>
                <div className="container-image-one">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                    className="rulesimage-one"
                  />
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default App
