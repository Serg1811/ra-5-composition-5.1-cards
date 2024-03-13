import { ReactNode } from 'react';
import './index.css';

interface Props {
    img: ReactNode;
}

const CardImg = ({ img }: Props) => {
    return <div className="card-img">{img}</div>;
}

export default CardImg;
