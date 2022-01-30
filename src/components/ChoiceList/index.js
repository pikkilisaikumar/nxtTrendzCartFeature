import './index.css'

const ChoiceList = props => {
  const {each, onSelectImage} = props
  const {id, imageUrl, testId} = each

  const OnImageClick = () => {
    onSelectImage(id)
  }

  return (
    <li>
      <button type="button" onClick={OnImageClick} data-testid={testId}>
        <img src={imageUrl} alt={id} className="images-of-gaming-setup" />
      </button>
    </li>
  )
}

export default ChoiceList
