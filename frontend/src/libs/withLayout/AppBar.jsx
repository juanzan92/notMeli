import React, { Component } from 'react';
//Material-UI Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import {MDBBtn} from 'mdbreact';
//Material-ui Icons
import MenuIcon from '@material-ui/icons/Menu';
//Components
import Spinner from '../../utils/Spinner/Spinner';
import Search from '../../components/Search';
import CategoryCard from './CategoryCardMenu';


class NavBar extends Component {
    state = {
        categories: [],
        left: false,
        isLoading: true,
        isError: false,
    };

    classes = {
        root: {
            width: '100%',
        },
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginLeft: -12,
            marginRight: 20,
        },
        title: {
            display: 'none',
        },
        search: {
            position: 'relative',
            marginLeft: 0,
            width: '100%',
        },
        searchIcon: {
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
            width: '100%',
        },
        inputInput: {
            width: '100%',
        },

    };

    componentDidMount = () => {
        this.fetchSites();
    }

    fetchSites = () => {
        const url = 'https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLA/categories';
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                this.setState({
                    categories: myJson,
                    isLoading: false,
                    isSinged: false,
                })
            });
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const {isLoading, isError, categories, isSinged} = this.state;
        return (
            <>
                <AppBar position="static" style={{ backgroundColor: "#00A896" }} >
                    <Toolbar>
                        <IconButton onClick={this.toggleDrawer('left', true)}
                            style={this.classes.menuButton} color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>
                        <div style={this.classes.grow} />
                        <Search/>
                        {!isSinged
                            ?<MDBBtn
                            className="btn col-1 mr-4 rounded "
                            style={{ backgroundColor: "#05668D" }}
                            href="/login"
                          >
                            Sign in
                          </MDBBtn>
                          :isError
                        }
                        <Typography variant="h6" color="inherit" noWrap>
                            {'Not MeLi'}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}>
                        {
                            isLoading
                                ? <Spinner />
                                : !isError &&
                                <Grid container spacing={16}
                                    alignItems="center"
                                    direction="row"
                                    justify="center" style={{ width: window.innerWidth / 5 }}>
                                    <List>
                                        {categories.map(x =>
                                            <CategoryCard
                                                key={x.id}
                                                idCategoria={x.id}
                                                nombreCategoria={x.name} />
                                        )}
                                    </List>
                                </Grid>
                        }
                    </div>
                </Drawer>
            </>
        );
    }
}
export default NavBar;