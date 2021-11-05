import React from 'react';
import {Divider, Drawer, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {List, ShoppingBasket} from "@mui/icons-material";

const Basket = (props) => {
    const{
        cartOpen,
        closeCard = Function.prototype,
        order,
        removeFromOrder
    } = props

    return (
        <Drawer
        anchor={'right'}
        open={cartOpen}
        onClose={closeCard}
        >
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary={'Корзина'}/>
                </ListItem>
                <Divider/>
                45454
            </List>
        </Drawer>
    );
};

export default Basket;