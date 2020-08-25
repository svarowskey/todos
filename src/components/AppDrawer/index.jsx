import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    Drawer, DrawerHeader, DrawerContent,
    Icon,
    List, ListItem, ListItemGraphic, ListItemText ,
    ListGroup, ListDivider
} from 'mdc-react';

export default function AppDrawer({ lists }) {
    return(
        <Drawer
            id="app-drawer"
        >
            <DrawerHeader 
                title="React Todo"
            />

            <DrawerContent>
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
                    
                    <ListDivider element="hr" />

                    <List>
                        {lists.map(item=> 
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
            </DrawerContent>
        </Drawer>
    );
}
