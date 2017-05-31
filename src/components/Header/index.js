import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Navbar,FormControl, Badge, Icon } from 'tinper-bee';
import classnames from 'classnames';

import './index.css';

const Menu = Navbar.Menu;
const SubMenu = Menu.SubMenu;

const NavItem = Navbar.NavItem;
const Nav = Navbar.Nav;

@inject('homepageStore') @observer
class Header extends Component {

    render(){
        const { toggle, changeExpand, expanded, changeToggle } = this.props.homepageStore;
        return(
            <div className="header">
                <Navbar
                    expanded={expanded}
                    mode="horizontal"
                    onToggle={changeExpand}
                    fluid={true}>
				   		<span className="toggle" >
								<Icon type="uf-navmenu" className={ classnames({"closed": toggle}) } onClick={ changeToggle } />
						</span>

                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            <Badge dataBadge="4" colors="warning">
                                <Icon type="uf-bell" />
                            </Badge>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <Icon type="comments" />
                        </NavItem>
                        <Menu mode="horizontal" className="dropdown">
                            <SubMenu title={<span>Jack<Icon type="uf-caret-down" /></span>}>
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Nav>
                </Navbar>

            </div>
        )
    }
}



export default Header;
