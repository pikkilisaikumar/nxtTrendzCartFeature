import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const NavBar = props => {
  const {score, topScore, isTrue} = props
  return (
    <div className="nav-container-background">
      <nav className="inside-nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emojiheadingone">Emoji Game</h1>
      </nav>
      <div className="score-top-score-container-exit">
        {isTrue && (
          <div className="score-topscore-container">
            <p className="top-score-paragraph">Score: {score}</p>
            <p className="top-score-paragraph">Top Score: {topScore}</p>
          </div>
        )}
        <Popup
          className="popup-content"
          modal
          trigger={
            <button type="button" className="btn btn-primary">
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
      </div>
    </div>
  )
}

export default NavBar
