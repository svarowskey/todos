import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    Drawer, DrawerHeader, DrawerContent,
    Icon,
    List, ListItem, ListItemGraphic, ListItemText ,
    ListGroup, ListDivider
} from 'mdc-react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import {AppBar, CssBaseline, Divider, Hidden, IconButton, Toolbar} from "@material-ui/core";

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
            <div className={classes.toolbar} />
            <Divider />
            <ListGroup>
                <List>
                    {[
                        { title: 'Задачи', icon: 'home', to: "/" },
                        { title: 'Важно', icon: 'star', to: '/important' },
                        { title: 'Запланированные', icon: 'event', to: "/planned" }
                    ].map(item=>
                        <ListItem
                            component={NavLink}
                            to={item.to}
                            key={item.icon}
                        >
                            <ListItemGraphic>
                                <Icon>{ item.icon }</Icon>
                            </ListItemGraphic>

                            <ListItemText>
                                { item.title }
                            </ListItemText>
                        </ListItem>
                    )}
                </List>

                <Divider />

                <List>
                    {props.lists.map(item=>
                        <ListItem
                            component={NavLink}
                            to={item.id}
                            key={item.id}
                        >
                            <ListItemGraphic>
                                <Icon>list</Icon>
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
