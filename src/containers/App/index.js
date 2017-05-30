import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Con } from 'tinper-bee';

@inject('appStore') @observer
class App extends Component {

    onReset = () => {
        this.props.appStore.resetTimer();
    }

    render() {
        return (
            <Con fluid>
                <DevTools />
                {
                    this.props.children
                }
            </Con>
        );
    }

};

export default App;
