/**
 * Created by korman on 21.08.17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Article, CellsTitle, CellHeader, CellBody, Form, FormCell,
    Label, Input, ButtonArea, Button} from 'react-weui';

export default class ManageStaffDetail extends React.Component {

    constructor() {
        super();
    }

    render(){
        return (
            <Page>
                <Article>
                    <section>
                        <CellsTitle>Add Store Credit</CellsTitle>
                        <Form>
                            <FormCell>
                                <CellHeader>
                                    <Label>Value</Label>
                                </CellHeader>
                                <CellBody>
                                    <Input type="text" placeholder="Enter value"/>
                                </CellBody>
                            </FormCell>
                            <FormCell>
                                <CellHeader>
                                    <Label>Discount</Label>
                                </CellHeader>
                                <CellBody>
                                    <Input type="text" placeholder="Enter discount in %"/>
                                </CellBody>
                            </FormCell>
                        </Form>
                        <ButtonArea>
                            <Button>Save</Button>
                        </ButtonArea>
                    </section>
                </Article>
            </Page>
        );
    };
}