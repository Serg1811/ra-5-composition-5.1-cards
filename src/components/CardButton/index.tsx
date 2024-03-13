import './index.css';

interface Props {
    buttonLink?: string;
    buttonText?: string;
}

const CardButton = ({ buttonLink, buttonText }: Props) => {
    return (
        <a href={buttonLink} className="btn">
            {buttonText}
        </a>
    );
}

export default CardButton;
