// Components
import LinkTreeButton from "../components/Linktree/LinkTreeButton";

// JSON
import linktree from "../assets/json/linktree.json"

const Linktree = () => {
  return (
 <div className="linktree_container">{linktree.map((link)=>{
   return <LinkTreeButton title={link.title} onClick={link.link} icon={link.icon}/>
 })}</div>
  );
};

export default Linktree;
