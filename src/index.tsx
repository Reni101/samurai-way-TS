import React from 'react';
import {store} from "./Redux/Redux-store"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";



const rerenderEntireTree = (state: any) => { //fixed!

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
        , document.getElementById('root')
    )
    ;

}


rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);
})

