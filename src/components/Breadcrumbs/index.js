import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Breadcrumb } from 'tinper-bee';

@inject('homepageStore') @observer
class Breadcrumbs extends Component{
    render () {
        const { breadcrumbItem } = this.props.homepageStore;
        return (
            <Breadcrumb>
                {
                    breadcrumbItem.map((item, index, ary) => {
                        "use strict";
                        return (
                            <Breadcrumb.Item active={ ary.length === index + 1 }>
                                item.name
                            </Breadcrumb.Item>
                        )
                    })
                }
            </Breadcrumb>
        )
    }
}

export default Breadcrumbs;