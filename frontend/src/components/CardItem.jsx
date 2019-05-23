import React, { Component } from 'react';
//Material-Boostrap
import { MDBBtn, MDBCard, MDBCardImage, MDBCardTitle, MDBCol } from 'mdbreact';
import Grid from '@material-ui/core/Grid';

class CardItem extends Component {

    state = {
        item: null,
        left: false,
        isLoading: true,
        isError: false,
    };

    componentDidMount = () => {
        this.fetchItem();
    }

    fetchItem = () => {
        const idItem = this.props.item.id;

        const url = 'https://cors-anywhere.herokuapp.com/' +
            `https://api.mercadolibre.com/items/${idItem}`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                this.setState({
                    item: myJson,
                    isLoading: false,
                })
            });
    }

    render() {
        const { item } = this.props;
        return (
            <MDBCol className={"mb-4"}>
                <MDBCard style={{ width: "22rem" }} className={"h-100"}>
                    <Grid
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="center" className={"h-100"}>
                        <MDBCardImage className="img-fluid" src={this.state.item && this.state.item.pictures[0].url} waves />
                        
                            <MDBCardTitle>{item.title}</MDBCardTitle>
                            <h4 className="font-weight-bold mb-3">${item.price}</h4>
                            <MDBBtn href={`/item/${this.props.item.id}`}>Comprar</MDBBtn>

                    </Grid>

                </MDBCard>
            </MDBCol>
        );
    }
}
export default CardItem;


