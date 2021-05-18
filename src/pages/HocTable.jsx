import React from "react";
import { Table, Tooltip } from "antd";

export default props => {
    // ...
    // 对table进行包装逻辑
    let a; // 用于避开ESlint
    props.columns.some(item => item.dataIndex === 'numIndex') ? a = 0 : props.columns.unshift({
        dataIndex: 'numIndex',
        title: ''
    })
    props.columns.some(item => item.dataIndex === 'numOnOrder') ? a = 0 : props.columns.push({
        dataIndex: 'numOnOrder',
        title: '账面数'
    })
    props.columns.forEach(item => {
        if (item.dataIndex === 'goodsName') {
            item.width = 200
            item.render = (text, record, index) => (<Tooltip placement="top" title={text}>
                <span className="wuping">{text}</span>
            </Tooltip>)
            item.align = 'left'
        } else {
            item.align = 'center'
        }
        if (item.dataIndex === 'code') {
            item.width = 100
        }
    })
    props.dataSource.forEach((item, index) => {
        item.numIndex = index + 1
        item.numOnOrder = 87
    })
    const summary = (pageData) => {
        console.info(pageData)
        let totalBorrow = 0;

        pageData.forEach(({ numOnOrder }) => {
            totalBorrow += numOnOrder;
        });

        return (
            <>
                <Table.Summary.Row>
                    <Table.Summary.Cell></Table.Summary.Cell>
                    <Table.Summary.Cell></Table.Summary.Cell>
                    <Table.Summary.Cell>合计</Table.Summary.Cell>
                    <Table.Summary.Cell></Table.Summary.Cell>
                    <Table.Summary.Cell></Table.Summary.Cell>
                    <Table.Summary.Cell>
                        <span type="danger">{totalBorrow}</span>
                    </Table.Summary.Cell>
                </Table.Summary.Row>
            </>
        );
    }
    // console.info( props.columns)
    return <Table {...props} summary={summary} pagination={false}/>;
};
