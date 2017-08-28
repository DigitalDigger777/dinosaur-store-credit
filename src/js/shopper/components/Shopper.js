/**
 * Created by korman on 21.08.17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Tab,
        TabBarItem,
        Article,

        CellBody,
        CellHeader,
        Form,
        FormCell,
        Label,
        Page,
        Input,
        Grids,
        Grid,
        Flex,
        FlexItem} from 'react-weui';
import { Link } from 'react-router-dom';

import iconSrc from './../../../../node_modules/weui/dist/example/images/icon_tabbar.png'
import iconSetting from  './../../../../public/icons/set.png';
import iconTransaction from  './../../../../public/icons/trade.png';
import iconQR from  './../../../../public/icons/QRCode.png';
import iconStaff from  './../../../../public/icons/personal-center.png';
import iconStoreCredit from  './../../../../public/icons/integral.png';
import iconStat from  './../../../../public/icons/data.png';
import Auth from './../Auth';

export default class Shopper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: ''
        };
    }

    componentWillMount(){
        const auth = new Auth(this.state);

    }

    render(){
        return (
            <Page infiniteLoader={true}>
                <Article>
                    <h1>Store credit</h1>
                    <section>
                        <Grids>
                            <Grid label="Statistic" icon={<img src={iconStat} alt=""/>} href="/#/statistic" />
                            <Grid label="Transactions" icon={<img src={iconTransaction} alt=""/>} href="/#/transactions" />
                            <Grid label="Scan" icon={<img src={iconQR} alt=""/>} href="/#/scan" />
                            <Grid label="Store Credits" icon={<img src={iconStoreCredit} alt=""/>} href="/#/store-credit" />
                            <Grid label="Settings" icon={<img src={iconSetting} alt=""/>} href="/#/setting" />
                        </Grids>
                    </section>
                </Article>
            </Page>
        );
    };
}