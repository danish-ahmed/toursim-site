import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {setUser} from './actions/auth';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './App.css';

const store = createStore(
        rootReducer, 
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    )

if(localStorage.userJWT){
    const user = {token: localStorage.userJWT}
    store.dispatch(setUser(user))
}
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>        
            <App className="App" />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
