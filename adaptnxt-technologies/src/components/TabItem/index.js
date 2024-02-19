import './index.css'

const TabItem = (props) => {
    const {tabDetails,changeActiveTabId,isActive} = props
    const {name,id} = tabDetails
    const onClickOfTab = () => {
        changeActiveTabId(id)
    }
    const activeClass = isActive ? "active-tab" : "tab"
    return(
    <li className="tab-item">
    <button onClick = {onClickOfTab} className={activeClass}>
       {name}
        </button>
    </li>
)
}

export default TabItem