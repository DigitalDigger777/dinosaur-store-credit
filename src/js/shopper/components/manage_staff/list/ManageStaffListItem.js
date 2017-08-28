/**
 * Created by korman on 22.08.17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Cells, Cell, CellBody, CellFooter} from 'react-weui';

const data = Array(9).fill({
    name: 'John Doe',
    date: '2017-08-23'
});


export default class ManageStaffListItem extends React.Component {

    constructor() {
        super();
    }

    render(){
        return (
            <Page>
                <Cells>
                    {data.map( (item, index) =>
                        <Cell key={index} access>
                            <CellBody>
                                {item.name}
                            </CellBody>
                            <CellFooter>
                                {item.date}
                            </CellFooter>
                        </Cell>
                    )}
                </Cells>
            </Page>
        );
    };
}