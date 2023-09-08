import Card, { CardProps } from "antd/es/card";

const ACard = (props: CardProps) => {
    const { children } = props;
    return <Card {...props}>{children}</Card>;
};

export default ACard;
