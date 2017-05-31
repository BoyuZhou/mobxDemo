import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import { Row, Con, Icon } from 'tinper-bee';
import { Header, Menus } from '../../components';
import classnames from 'classnames';
import './index.css';

@inject('homepageStore') @observer
class Homepage extends Component {

    render() {
        let { toggle, changeToggle } = this.props.homepageStore;
        return (
            <Row style={{ height: '100%' }}>
                <div className={classnames("side-bar",{"toggled": toggle})}>
                    {
                        toggle ? (
                            <Icon type="uf-iuap-col" className="nav-icon" />
                        ) : (
                            <img
                                src="http://design.yyuap.com/logos/logox.png"
                            />
                        )
                    }

                    <Menus toggle={ toggle } />
                </div>
                <div className={classnames("content",{"toggled": toggle})}>
                    <Header toggle={ toggle } onToggle={ changeToggle } />
                    <Con fluid={true}>
                        { this.props.children }
                    </Con>

                </div>
            </Row>
        );
    }

};

export default Homepage;
