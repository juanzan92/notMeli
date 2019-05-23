import React from 'react';
//Components
import AppBar from './AppBar';
import Footer from './Footer';

export default function withAppBar(WrappedComponent) {


    return class extends React.Component {
        render() {
            return (
                <>
                    <AppBar />
                    <WrappedComponent {...this.props} />
                    <Footer />
                </>
            )
        }
    };
}