/**
 * Created by korman on 22.08.17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Cells, Cell, CellBody, CellFooter, Grids, Grid,
        MediaBox, MediaBoxTitle, MediaBoxDescription,
        Panel, PanelHeader, PanelBody, MediaBoxBody, Badge} from 'react-weui';
import axios from 'axios';
import Config from './../../../Config';

import iconHome from './../../../../../../public/icons/all.png';

const data = Array(9).fill({
    name: 'John Doe',
    date: '2017-08-23'
});

export default class TransactionsList extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentWillMount(){
        const config = new Config();

        axios.get(config.baseUrl + 'store-credit/transaction/rest/0', {
            params: {
                method: 'LIST',
                shopperId: window.localStorage.getItem('user_id')
            }
        }).then(data => {
            console.log(data);
            this.setState({
                items: data.data
            });
        }).catch(error => {
            console.log(error);
        });

    }

    render(){
        return (
            <Page className="panel">
                <Panel>
                    <PanelHeader>Transactions list</PanelHeader>
                    <PanelBody>
                        {this.state.items.map( (item, index) =>
                            <MediaBox key={index} type="text">

                                    <MediaBoxTitle>
                                        {item.consumer.socialDataProfile.nickname}
                                        {item.transactionRoute == 1 && (
                                            <Badge preset="body" style={{ backgroundColor: 'green'}}>refill</Badge>
                                        )}
                                        {item.transactionRoute == 2 && (
                                            <Badge preset="body">reduce</Badge>
                                        )}
                                    </MediaBoxTitle>
                                    <MediaBoxDescription>
                                        {item.date.date}<br/>
                                         {item.transactionValue}$

                                    </MediaBoxDescription>

                            </MediaBox>
                        )}
                    </PanelBody>
                </Panel>
                <Grids style={{position:'absolute', bottom: '0', width: '100%'}}>
                    <Grid label="Home" icon={<img src={iconHome} />} href="/#/" style={{ padding: '5px', width: '100%'}} />
                </Grids>
            </Page>
        );
    };
}