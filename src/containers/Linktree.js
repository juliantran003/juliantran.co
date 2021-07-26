// Components
import LinkTreeButton from "../components/Linktree/LinkTreeButton";

// JSON
import linktree from "../assets/json/linktree.json";

const Linktree = () => {
  return (
    <div className="linktree_container">
      <div className="linktree_video">
        <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/55Yd-bEKcjE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      {linktree.map((link) => {
        return <LinkTreeButton title={link.title} href={link.link} />;
      })}
    </div>
  );
};

export default Linktree;
