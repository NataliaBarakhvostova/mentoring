function Card({data, title}) {
    console.log(data);
    console.log(title);

    const { description, color, price, tag, cover } = data;

    return (
        <div className={'card'}>
            <h3>{title}</h3>
            <img src={cover} alt={title}/>
            <h5>{price} $</h5>
            <p>{description}</p>
            <p>{tag}</p>
            <div style={{width: '20px', height: '20px', backgroundColor: color}} />
        </div>
    );
}

export default Card;

