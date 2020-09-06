import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import App from '../../App';

const Root = ({store}) =>(
        <Provider store={store}>
            <Router>
                <Route path='/' component={App}/>
            </Router>
        </Provider>
);


export default connect(
    (state,cookies) => ({
        myStore: state,
    }),
    dispatch => ({})
)(Root)
