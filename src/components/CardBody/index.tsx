import { ReactNode } from 'react';
import './index.css';

interface Props {
    children: ReactNode;
}

const CardBody = ({ children }: Props) => {
    return <div className="card-body">{children}</div>;
}

export default CardBody;
