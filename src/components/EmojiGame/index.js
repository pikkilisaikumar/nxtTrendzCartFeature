import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {listElement: [], score: 0, topScore: 0, isTrue: true}

  onPlayAgain = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({listElement: [], score: 0, isTrue: true, topScore: score})
    } else {
      this.setState({listElement: [], score: 0, isTrue: true, topScore})
    }
  }

  onPlayAgain1 = () => {
    const {score} = this.state
    this.setState({listElement: [], score: 0, isTrue: true, topScore: score})
  }

  emojiClickedmethod = id => {
    const {listElement, score} = this.state
    const data = listElement.find(each => each === id)

    if (data !== undefined) {
      this.setState({
        score,
        isTrue: false,
        listElement: [],
      })
    } else {
      this.setState(prevState => ({
        listElement: [...prevState.listElement, id],
        score: prevState.score + 1,
        isTrue: true,
      }))
    }
  }

  render() {
    const {score, topScore, isTrue} = this.state
    emojisList.sort(() => Math.random() - 0.5)
    let wincard
    let navbar

    if (score === 12 || isTrue === false) {
      wincard = (
        <>
          <div className="winorlosecard-container-one">
            <WinOrLoseCard
              score={score}
              onPlayAgain={this.onPlayAgain}
              onPlayAgain1={this.onPlayAgain1}
            />
          </div>
        </>
      )
      navbar = <NavBar score={score} topScore={topScore} isTrue={false} />
    } else {
      wincard = (
        <ul className="emojiunorderlistone">
          {emojisList.map(each => (
            <EmojiCard
              key={each.id}
              each={each}
              emojiClickedmethod={this.emojiClickedmethod}
            />
          ))}
        </ul>
      )
      navbar = <NavBar score={score} topScore={topScore} isTrue={isTrue} />
    }

    return (
      <>
        {navbar}
        <div className="emoji-first-container-background">{wincard}</div>
      </>
    )
  }
}

export default EmojiGame
