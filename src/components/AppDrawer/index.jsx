import './index.scss'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    Icon,
    List, ListItem, ListItemGraphic, ListItemText ,
    ListGroup
} from 'mdc-react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {Divider} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
    }),
);

export default function AppDrawer(props) {
    const classes = useStyles();
    return(
        <div>
            <div className={classes.toolbar}>React Todo</div>
            <Divider />
            <ListGroup>
                <List>
                    {props.lists.map(item=>
                        <ListItem
                            component={NavLink}
                            to={item.id}
                            key={item.id}
                        >
                            <ListItemGraphic>
                                <Icon>{ item.title === 'Магазин' ? 'shopping_cart' : 'list' }</Icon>
                            </ListItemGraphic>

                            <ListItemText>
                                { item.title }
                            </ListItemText>
                        </ListItem>
                    )}
                </List>
            </ListGroup>
        </div>
    );
}
