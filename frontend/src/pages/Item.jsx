import React, { Component } from 'react';
// Material-UI components
import withLayout from '../libs/withLayout/withLayout';
import Spinner from '../utils/Spinner/Spinner';
import Grid from '@material-ui/core/Grid';
import Carousel from '../components/Carousel';
class ItemPage extends Component {

    state = {
        item: null,
        isLoading: true,
        isError: false,
        description: '',
    };

    componentDidMount = () => {
        this.fetchItem();
    }

    fetchItem = () => {
        const idItem = this.props.match.params.idItem;
        const url = 'https://cors-anywhere.herokuapp.com/' +
            `https://api.mercadolibre.com/items/${idItem}`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                console.log(myJson)
                this.setState({
                    item: myJson,
                    isLoading: false,
                })
            });

            const urldescr = 'https://cors-anywhere.herokuapp.com/' +
            `https://api.mercadolibre.com/items/${idItem}/description`;
        fetch(urldescr)
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                console.log(myJson)
                this.setState({
                    description: myJson,
                })
            });
    }

    render() {
        const { isLoading, isError, item } = this.state;
        return (
            <Grid container direction="row" justify="center" alignItems="center">
                {
                    isLoading
                        ? <Spinner />
                        : !isError &&
                        <>
                            <Grid container direction="column" justify="flex-start"
                            item xs={12} md={6}>
                            <Carousel pictures={item.pictures}/>
                            Descripcion  
                            </Grid>
                            <Grid container direction="column" justify="flex-start" alignItems="flex-start"
                            item xs={12} md={6} >
                            <h1>{item.title}</h1>
                            <h2>${item.price}</h2>
                            </Grid>
                        </>
                }
            </Grid>
        );
    }
}
export default withLayout(ItemPage);


