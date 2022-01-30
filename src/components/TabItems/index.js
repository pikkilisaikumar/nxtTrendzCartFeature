import './index.css'

const TabItems = props => {
  const {each, onTabItemIdOne, isActive} = props
  const {tabId, displayText} = each
  const styling = !isActive ? 'displaytext1' : 'displaytext'
  const onclickTabItem = () => {
    onTabItemIdOne(tabId)
  }

  return (
    <li className="list-Tabitems">
      <button type="button" className={styling} onClick={onclickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
