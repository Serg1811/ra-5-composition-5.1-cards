// import { ReactNode } from 'react';
import './index.css';

interface Props {
    title?: string;
    children?: string;
}

function CardTitle({ title, children }: Props) {
    return <h5 className="card-title">{title ? title : children}</h5>;
}

export default CardTitle;
