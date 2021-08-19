import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import useApi from 'hooks/api';
import AppDrawer from 'components/AppDrawer';
import AppContent from 'components/AppContent';
import TodoList from 'pages/TodoList'
import 'App.scss';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

export default function App(props: Props) {
  const { data: { lists } } = useApi();

    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <div className={classes.root}>
          <CssBaseline />
          <AppBar position='fixed' className={classes.appBar}>
              <Toolbar>
                  <IconButton
                      color='inherit'
                      aria-label='open drawer'
                      edge='start'
                      onClick={handleDrawerToggle}
                      className={classes.menuButton}
                  >
                      <MenuIcon />
                  </IconButton>
              </Toolbar>
          </AppBar>
          <nav className={classes.drawer}>
              <Hidden smUp implementation='css'>
                  <Drawer
                      container={container}
                      variant='temporary'
                      anchor={theme.direction === 'rt1' ? 'right' : 'left'}
                      open={mobileOpen}
                      onClose={handleDrawerToggle}
                      classes={{paper: classes.drawerPaper}}
                      ModalProps={{keepMounted: true}}
                  >
                      <AppDrawer
                          lists={lists}
                          clickFunc={handleDrawerToggle}
                      />
                  </Drawer>
              </Hidden>
              <Hidden xsDown implementation='css'>
                  <Drawer
                      classes={{
                          paper: classes.drawerPaper,
                      }}
                      variant='permanent'
                      open
                  >
                      <AppDrawer
                          lists={lists}
                      />
                  </Drawer>
              </Hidden>
          </nav>
          <main className={classes.content}>
              <div className={classes.toolbar} />
              <AppContent>
                  <Switch>
                      <Route path="/todos/:listId" component={TodoList}/>
                      <Route path="/:listId" component={TodoList}/>
                      <Redirect from="*" to="/" />
                  </Switch>
              </AppContent>
          </main>
      </div>
  );
}
