import './index.css';

interface Props {
    text?: string;
}

function CardText({ text }: Props) {
    return <p className="card-text">{text}</p>;
}

export default CardText;
