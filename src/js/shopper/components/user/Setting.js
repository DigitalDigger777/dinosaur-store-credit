/**
 * Created by korman on 22.08.17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Article, CellsTitle, CellHeader, CellBody, Form, FormCell,
        Label, Input, ButtonArea, Button, Grids, Grid, Uploader, Flex, FlexItem} from 'react-weui';

import iconHome from './../../../../../public/icons/all.png';

export default class Setting extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gallery: false,
            demoFiles : [
                // {
                //     url: 'thumbSrc'
                // },
                // {
                //     url: 'photoSrc'
                // },
                // {
                //     url: 'thumbSrc'
                // },
                // {
                //     url: 'photoSrc',
                //     error: true
                // },
                // {
                //     url: 'thumbSrc',
                //     status: '50%'
                // }
            ]
        };
        this.clickLogo = this.clickLogo.bind(this);
    }

    clickLogo() {
        // console.log(this.inputElement);
        this.inputElement.click();
    }

    render(){
        return (
            <Page>
                <Article>
                    <section>
                        <CellsTitle>Settings</CellsTitle>
                        <Form>
                            <FormCell>
                                <CellBody>
                                    <Flex>
                                        <FlexItem/>
                                        <FlexItem>
                                            <img onClick={ this.clickLogo } src="http://via.placeholder.com/100x100?text=logo" alt=""/>
                                            <input type="file" ref={ (input) => { this.inputElement = input;  } } style={{display:'none'}} />
                                        </FlexItem>
                                        <FlexItem/>
                                    </Flex>

                                    {/*<Uploader*/}
                                        {/*title="Shopper Logo"*/}
                                        {/*maxCount={1}*/}
                                        {/*files={this.state.demoFiles}*/}
                                        {/*onError={msg => alert(msg)}*/}
                                        {/*onChange={(file,e) => {*/}
                                            {/*let newFiles = [...this.state.demoFiles, {url:file.data}];*/}
                                            {/*this.setState({*/}
                                                {/*demoFiles: newFiles*/}
                                            {/*});*/}
                                        {/*}}*/}
                                        {/*onFileClick={*/}
                                            {/*(e, file, i) => {*/}
                                                {/*console.log('file click', file, i)*/}
                                                {/*this.setState({*/}
                                                    {/*gallery: {*/}
                                                        {/*url: file.url,*/}
                                                        {/*id: i*/}
                                                    {/*}*/}
                                                {/*})*/}
                                            {/*}*/}
                                        {/*}*/}
                                        {/*lang={{*/}
                                            {/*maxError: maxCount => `Max ${maxCount} images allow`*/}
                                        {/*}}*/}
                                    {/*/>*/}
                                </CellBody>
                            </FormCell>
                            <FormCell>
                                <CellHeader>
                                    <Label>Name</Label>
                                </CellHeader>
                                <CellBody>
                                    <Input type="text" placeholder="Company Name"/>
                                </CellBody>
                            </FormCell>
                            <FormCell>
                                <CellHeader>
                                    <Label>Address</Label>
                                </CellHeader>
                                <CellBody>
                                    <Input type="text" placeholder="Address"/>
                                </CellBody>
                            </FormCell>
                            <FormCell>
                                <CellHeader>
                                    <Label>Tel</Label>
                                </CellHeader>
                                <CellBody>
                                    <Input type="text" placeholder="Phone Number"/>
                                </CellBody>
                            </FormCell>
                            <FormCell>
                                <CellHeader>
                                    <Label>Work Hours</Label>
                                </CellHeader>
                                <CellBody>
                                    <Input type="text" placeholder="Working Hours"/>
                                </CellBody>
                            </FormCell>
                        </Form>
                        <ButtonArea>
                            <Button>Save</Button>
                        </ButtonArea>
                    </section>
                </Article>
                <Grids style={{position:'absolute', bottom: '0', width: '100%'}}>
                    <Grid label="Home" icon={<img src={iconHome} />} href="/#/" style={{ padding: '5px', width: '100%'}} />
                </Grids>
            </Page>
        );
    };
}