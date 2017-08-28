/**
 * Created by korman on 19.08.17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, hashHistory } from 'react-router-dom'

import Shopper from './components/Shopper';
import ManageStaffList from './components/manage_staff/list/ManageStaffList';
import ManageStaffDetail from './components/manage_staff/ManageStaffDetail';
import Statistic from './components/statistic/Statistic';
import TransactionsList from './components/transaction/list/TransactionsList';
import TransactionDetail from './components/transaction/TransactionDetail';
import ScanUserQR from './components/spent_credit/ScanUserQR';
import Setting from './components/user/Setting';

import Config from './Config';

//import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './../../../public/css/main.css';


export default class Index extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (

            <HashRouter history={hashHistory}>
                <div>
                    <Route exact path="/" component={Shopper} />
                    <Route exact path="/statistic" component={Statistic} />
                    <Route exact path="/transactions" component={TransactionsList} />
                    <Route exact path="/transaction/:id" component={TransactionDetail} />
                    <Route exact path="/scan" component={ScanUserQR} />
                    <Route exact path="/store-credit" component={ManageStaffList} />
                    <Route exact path="/add/store-credit" component={ManageStaffDetail} />
                    <Route exact path="/staff/:id" component={ManageStaffDetail} />
                    <Route exact path="/setting" component={Setting} />
                </div>
            </HashRouter>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));