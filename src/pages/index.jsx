import React, { Component } from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
import HocTable from "./HocTable";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

const data = [
  {
    id: "1",
    category: "类别1",
    code: "BH001",
    goodsName: "三十字物品名称八九十一二三四五六七八九十一二三四五六七八九十",
    unit: "克",
    address: "西湖区湖底公园1号"
  },
  {
    id: "2",
    category: "类别2",
    code: "BH002",
    goodsName: "十五字物品名称八九十一二三四五六",
    unit: "斤",
    address: "西湖区湖底公园1号"
  }
];

const columns = [
  {
    title: "物品类别",
    dataIndex: "category"
  },
  {
    title: "物品编码",
    dataIndex: "code",
    width: 100,
  },
  {
    title: "物品",
    dataIndex: "goodsName",
    width: 200,
  },
  {
    title: "库存单位",
    dataIndex: "unit"
  }
];

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <h1>题目：利用 antd 的 table 实现一个高阶组件 HocTable</h1>
        <h3>要求：</h3>
        <ol className="list">
          <li>使用高阶组件的思想对Table进行抽象封装。</li>
          <li>组件为表格首列自动添加【序号】列。</li>
          <li>组件为【物品编码】列设置固定宽度100px。</li>
          <li>
            组件为【物品】列设置固定宽度200px，左对齐，且设置文本超出时自动添加省略号效果。
          </li>
          <li>
            实现【物品】列hover后展示浮层的效果（提示：使用antd
            Tooltip组件，已引入）
          </li>
        </ol>
        <h3>结果：</h3>
        <img
          src="https://p0.meituan.net/travelcube/2cc657c094a3973d5c20c73539dd190282686.png"
          width="800"
        />
        <ol className="list">
          <li>TypeScript类型设置正确。</li>
          <li>正确使用高阶组件。</li>
          <li>表格展示符合预期。</li>
        </ol>
        <h3>原始组件：</h3>
        <HocTable columns={columns} dataSource={data} />
      </div>
    );
  }
}
export default App
// render(<App />, document.getElementById("root"));
