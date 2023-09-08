import Meta, { CardMetaProps } from "antd/es/card";

const AMeta = (props: CardMetaProps) => {
    const { title, description, avatar } = props;
    return (
        <Meta {...props}>
            {title}
            {description}
            {avatar}
        </Meta>
    );
};

export default AMeta;
