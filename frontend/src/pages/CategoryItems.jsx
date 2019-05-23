import React, { Component } from 'react';
// Material-UI components
import withLayout from '../libs/withLayout/withLayout';
import Spinner from '../utils/Spinner/Spinner';
import CardItem from '../components/CardItem';
import {  MDBRow } from "mdbreact";

class CategoryItemsPage extends Component {

  state = {
    items: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount = () => {
    this.fetchItems();
  }

  fetchItems = () => {
    const idCategory = this.props.match.params.idCategory;

    const url = 'https://cors-anywhere.herokuapp.com/' +
      `https://api.mercadolibre.com/sites/MLA/search?category=${idCategory}&official_store_id=all`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          items: myJson.results,
          isLoading: false,
        })
      });
  }

  componentDidUpdate(prevProps) {
    prevProps.match.params.idCategory !== this.props.match.params.idCategory && this.fetchItems();

  }

  render() {
    const { isLoading, isError, items } = this.state;
    return (
      isLoading
        ? <Spinner />
        : !isError && 
        <MDBRow className={"mt-4 ml-5"}>
        {items.map(item => <CardItem key={item.id} item={item} />)} 
        </MDBRow>

    );
  }
}
export default withLayout(CategoryItemsPage);


