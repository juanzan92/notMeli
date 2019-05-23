import React from 'react';
//Components
import AppBar from './AppBar';
import Footer from './Footer';

export default function withLayout(WrappedComponent) {


    return class extends React.Component {
        render() {
            return (
                <div style={{backgroundColor:"#F2F2F2"}}>
                    <AppBar />
                    <WrappedComponent {...this.props} />
                    <Footer />
                </div>
            )
        }
    };
}