/**
 * Created by korman on 22.08.17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Preview, PreviewHeader, PreviewFooter, PreviewBody, PreviewItem, PreviewButton} from 'react-weui';

export default class TransactionDetail extends React.Component {

    constructor() {
        super();
    }

    render(){
        return (
            <Page>
                <Preview>
                    <PreviewHeader>
                        <PreviewItem label="Amount" value="$49.99" />
                    </PreviewHeader>
                    <PreviewBody>
                        <PreviewItem label="Consumer" value="John Doe" />
                        <PreviewItem label="Recepient Consumer" value="Jane Doe" />
                        <PreviewItem label="Type" value="Personal" />
                        <PreviewItem label="Route" value="Refill" />
                        <PreviewItem label="Date" value="2017-08-23 10:01 AM" />
                    </PreviewBody>
                    <PreviewFooter>
                        <PreviewButton primary onClick={ () => { window.location = '/#/transactions'} }>Back</PreviewButton>
                    </PreviewFooter>
                </Preview>
            </Page>
        );
    };
}