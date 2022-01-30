import './index.css'

const EmojiCard = props => {
  const {each, emojiClickedmethod} = props
  const {id, emojiName, emojiUrl} = each

  const onclickedEmojiOne = () => {
    emojiClickedmethod(id)
  }

  return (
    <li className="list-item-emoji">
      <button type="button" onClick={onclickedEmojiOne}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
