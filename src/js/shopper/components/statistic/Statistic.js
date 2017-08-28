/**
 * Created by korman on 21.08.17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Cells, Cell, CellHeader, CellBody, CellFooter, CellsTitle,
        Grids, Grid, Article} from 'react-weui';

import iconHome from './../../../../../public/icons/all.png';

export default class Statistic extends React.Component {

    constructor() {
        super();
    }

    render(){
        return (
            <Page>
                <Article>
                    <h1>Store credit statistic</h1>
                    <Cells>
                        <Cell access>
                            <CellBody>
                                Statistic Item #1
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                        <Cell>
                            <CellBody>
                                Statistic Item #2
                            </CellBody>
                            <CellFooter>

                            </CellFooter>
                        </Cell>
                        <Cell>
                            <CellBody>
                                Statistic Item #3
                            </CellBody>
                            <CellFooter>

                            </CellFooter>
                        </Cell>
                        <Cell>
                            <CellBody>
                                Statistic Item #4
                            </CellBody>
                            <CellFooter>

                            </CellFooter>
                        </Cell>
                    </Cells>
                </Article>
                <Grids style={{position:'absolute', bottom: '0', width: '100%'}}>
                    <Grid label="Home" icon={<img src={iconHome} />} href="/#/" style={{ padding: '5px', width: '100%'}} />
                </Grids>

            </Page>
        );
    };
}