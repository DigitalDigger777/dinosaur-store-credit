/**
 * Created by korman on 22.08.17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Cells, Cell, CellBody, CellFooter, Grids, Grid, Article, Badge} from 'react-weui';

import iconSrc from './../../../../../../node_modules/weui/dist/example/images/icon_tabbar.png'
import iconHome from './../../../../../../public/icons/all.png';
import iconAdd from './../../../../../../public/icons/add.png';

const data = Array(9).fill({
    name: '2017/08/26'
});


export default class ManageStaffList extends React.Component {

    constructor() {
        super();
    }

    render(){
        return (
            <Page>
                <Article>
                    <h1>Store Credits List</h1>
                    <Cells>
                        {data.map( (item, index) =>
                            <Cell key={index} access href="/#/staff/1">
                                <CellBody>
                                    {item.name} <Badge preset="body">reduce</Badge>
                                </CellBody>
                                <CellFooter/>
                            </Cell>
                        )}
                    </Cells>
                </Article>
                <Grids style={{position:'absolute', bottom: '0', width: '100%'}}>
                    <Grid label="Home" icon={<img src={iconHome} />} href="/#/" style={{ padding: '5px', width: '50%'}} />
                    <Grid label="New" icon={<img src={iconAdd} />} href="/#/add/staff" style={{ padding: '5px', width: '50%'}} />
                </Grids>
            </Page>
        );
    };
}