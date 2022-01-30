import {Component} from 'react'

import Popup from 'reactjs-popup'

// <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />

import 'reactjs-popup/dist/index.css'

import {Loader} from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

class Entertainment extends Component {
  state = {isLoading: true}

  render() {
    const {isLoading} = this.state
    let sai
    if (isLoading) {
      sai = <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    } else {
      sai = (
        <div className="mt-3 ml-2">
          <h1>Games</h1>
          <div className="overall-game-container">
            <div className="emoji-game-container mt-2 mb-2">
              <img
                src="//5.imimg.com/data5/ET/RO/GLADMIN-57198290/guess-the-emoji-game-500x500.png"
                alt="emoji-game"
                className="game-images"
              />
              <p>Emoji-game</p>
              <br />
              <Popup
                modal
                trigger={
                  <button type="button" className="playbutton">
                    Play
                  </button>
                }
              >
                {close => (
                  <div className="close-container-one">
                    <div>
                      <p className="logout-paragraph">
                        Do you want to play the game ?
                      </p>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="trigger-button m-2 btn btn-danger"
                        onClick={() => close()}
                      >
                        Close
                      </button>
                      <Link to="/entertainment/emoji">
                        <button
                          type="button"
                          className="trigger-button btn btn-primary m-2"
                        >
                          Open
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
            <div className="emoji-game-container mt-2 mb-2">
              <img
                className="game-images"
                src="https://media.istockphoto.com/photos/scissor-rock-paper-concept-game-picture-id670950914?k=20&m=670950914&s=612x612&w=0&h=dEDtB7WUDOcPrHAfEIk6V3Vy8d___T8_VWXD93EATos="
                alt="rockpaperscissors"
              />
              <p>Rock Paper Scissor</p>
              <br />
              <Popup
                className="popup-content"
                modal
                trigger={
                  <button type="button" className="playbutton">
                    Play
                  </button>
                }
              >
                {close => (
                  <div className="close-container-one">
                    <div>
                      <p className="logout-paragraph">
                        Do you want to play the game ?
                      </p>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="trigger-button m-2 btn btn-danger"
                        onClick={() => close()}
                      >
                        Close
                      </button>

                      <Link to="/entertainment/rockpapergame">
                        <button
                          type="button"
                          className="trigger-button btn btn-primary m-2"
                        >
                          Open
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
            <div className="emoji-game-container mt-2 mb-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/7/76/Match_Game_2016_logo.png"
                alt="emoji-game"
                className="game-images"
              />
              <p>Match-game</p>
              <br />
              <Popup
                modal
                trigger={
                  <button type="button" className="playbutton">
                    Play
                  </button>
                }
              >
                {close => (
                  <div className="close-container-one">
                    <div>
                      <p className="logout-paragraph">
                        Do you want to play the game ?
                      </p>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="trigger-button m-2 btn btn-danger"
                        onClick={() => close()}
                      >
                        Close
                      </button>
                      <Link to="/entertainment/matchgame">
                        <button
                          type="button"
                          className="trigger-button btn btn-primary m-2"
                        >
                          Open
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </div>
      )
    }

    return (
      <>
        <Header />
        {sai}
      </>
    )
  }
}

export default Entertainment
