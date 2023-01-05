import React, { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { Button, Card, Image, Badge, Text, createStyles } from '@mantine/core';
import theme from './Card.module.css';

function CardItem({data, title}) {
    const [ buttonActive, setButtonActive ] = useState(true);
    const { addToCart } = useContext(CartContext);

    const { description, color, price, tag, cover, id } = data;

    const onAddToCartClick = () => {
        addToCart(title, price);
        setButtonActive(false);
    }

    const useStyles = createStyles((theme) => ({
        card: {
            backgroundColor: theme.white,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },

        imageSection: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: `1px solid ${theme.colors.gray[3]}`,
        },

        label: {
            marginBottom: theme.spacing.xs,
            lineHeight: 1,
            fontWeight: 700,
            fontSize: theme.fontSizes.xs,
            letterSpacing: -0.25,
            textTransform: 'uppercase',
        },

        section: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 25px',
        },

        icon: {
            marginRight: 5,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
        },
    }));

    const { classes } = useStyles();

    return (
        <Card withBorder radius="md" p="md" className={classes.card} data-testis={id}>
            <Card.Section className={classes.imageSection}>
            <Image src={cover} alt={title} height={200}/>
            </Card.Section>
            <Card.Section className={classes.section} p="md">
                <Text size="lg" weight={500} role={'title'}>{title}</Text>
                {tag && <Badge role={'tag'}>{tag}</Badge>}
            </Card.Section>
            <Text size='sm'>{description}</Text>
            <Card.Section className={classes.section}>
                <div className={theme.cardColors}>
                    Color:
                    <div style={{width: '20px', height: '20px', backgroundColor: color, border: '1px solid black', marginLeft: '10px'}} />
                </div>
                <Text size='xl' weight={700}>{price} $</Text>
            </Card.Section>
            <Button radius="md" onClick={() => buttonActive ? onAddToCartClick() : null } className={theme.cardButton} style={{backgroundColor: buttonActive ? '#228be6' : 'lightgray'}}>{buttonActive ? 'add to cart' : 'added to cart'}</Button>
        </Card>
    );
}

export default CardItem;

