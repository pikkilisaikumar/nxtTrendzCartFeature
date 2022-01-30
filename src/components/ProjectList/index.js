import './index.css'

const ProjectList = props => {
  const {eachOne, onImageprojectList} = props
  const {imageUrl, thumbnailUrl} = eachOne

  const onImageButtonclicked = () => {
    onImageprojectList(imageUrl)
  }

  return (
    <li className="list-itemproject">
      <button
        type="button"
        className="imageButon"
        onClick={onImageButtonclicked}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumnailurlone" />
      </button>
    </li>
  )
}

export default ProjectList
