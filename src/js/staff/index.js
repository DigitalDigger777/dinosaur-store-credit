/**
 * Created by korman on 19.08.17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,Route, hashHistory } from 'react-router-dom'


export default class Index extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <HashRouter history={hashHistory}>

            </HashRouter>
        );
    }
}
