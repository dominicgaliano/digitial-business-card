import CardContentHeader from "./CardContentHeader";
import CardContentButtons from "./CardContentButtons";
import CardContentBody from "./CardContentBody";

function CardContent() {
  return (
    <div className="card-content-container">
      <CardContentHeader />
      <CardContentButtons />
      <CardContentBody />
    </div>
  );
}

export default CardContent;
