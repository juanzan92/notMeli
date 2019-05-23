import React, { Component } from 'react';
// Material-UI components
import withLayout from '../libs/withLayout/withLayout';
import Spinner from '../utils/Spinner/Spinner';
import Grid from '@material-ui/core/Grid';
import Carousel from '../components/Carousel';
import { MDBBtn, MDBCard, MDBIcon} from 'mdbreact';

class ItemPage extends Component {

    state = {
        item: null,
        isLoading: true,
        isError: false,
        description: '',
        selled: false
    };

    componentDidMount = () => {
        this.fetchItem();
    }

    comprarItem = () => {
        this.setState({ selled: true })
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

                        <MDBCard style={{ width: (window.innerWidth / 1.15) }} className={"mt-4 ml-5"}>
                            <Grid container direction="row" alignItems="flex-start">
                                <Grid container direction="column" justify="flex-start"
                                    item xs={12} md={6}>
                                    <Carousel pictures={item.pictures} />
                                    <h5>{this.state.description.plain_text}</h5>
                                </Grid>
                                <Grid container direction="column" justify="flex-start" alignItems="flex-start"
                                    item xs={12} md={6} >
                                    <h1>{item.title}</h1>
                                    <h2>${item.price}</h2>
                                    <Grid container direction="column" alignItems="stretch">
                                        <MDBBtn onClick={this.comprarItem}>
                                            {
                                                this.state.selled
                                                    ? <MDBIcon icon="check-circle" />
                                                    : 'Comprar'
                                            }
                                        </MDBBtn>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </MDBCard>
                }
            </Grid>
        );
    }
}
export default withLayout(ItemPage);


