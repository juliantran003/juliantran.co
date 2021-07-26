const LinkTreeButton = ({title,onClick, icon}) => {
    return <button onClick={onClick} className="linktree_button">
    <img src={icon} alt={icon} /> {title}

  </button>
}

export default LinkTreeButton