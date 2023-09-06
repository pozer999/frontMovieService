import Card, { CardProps } from 'antd/es/card/Card';

const CardComponent = (props: CardProps) => {
    return (
        <Card {...props}/>
    );
};

export default CardComponent;
