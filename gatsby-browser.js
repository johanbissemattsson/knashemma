import React from 'react'
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './src/reducers';

exports.replaceRouterComponent = ({ history }) => {
    const store = createStore(appReducer);

    const ConnectedRouterWrapper = ({ children }) => (
        <Provider store={store}>
            <Router history={history}>{children}</Router>
        </Provider>
    )

    return ConnectedRouterWrapper;
}