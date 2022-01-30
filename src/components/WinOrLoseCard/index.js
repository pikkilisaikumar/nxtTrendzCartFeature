import './index.css'

const WinOrLoseCard = props => {
  const {score, onPlayAgain, onPlayAgain1} = props

  const playAgainclicked = () => {
    onPlayAgain()
  }

  const playAgainclicked1 = () => {
    onPlayAgain1()
  }

  let winorlose
  if (score === 12) {
    winorlose = (
      <div className="lose-win-card-container">
        <div>
          <h1>You Won</h1>
          <p>Best Score</p>
          <p>{score}/12</p>
          <button type="button" onClick={playAgainclicked1}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          className="won-game-image-one"
          alt="win or lose"
        />
      </div>
    )
  } else {
    winorlose = (
      <div className="lose-win-card-container">
        <div>
          <h1>You Lose</h1>
          <p>Score</p>
          <p>{score}/12</p>
          <button type="button" onClick={playAgainclicked}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          className="won-game-image-one"
          alt="win or lose"
        />
      </div>
    )
  }

  return winorlose
}

export default WinOrLoseCard
