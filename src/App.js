import React from "react";
import "./styles.css";
import { List as AList, Popover } from 'antd'
import { DragOutlined } from '@ant-design/icons'
import TestApp from './pages/index'

function List(props) {
  // 完善这里的代码
  const [isActive, setIsActive] = React.useState(false)
  const [curName, setCurName] = React.useState("我的天")
  const [id, setId] = React.useState(0)
  const [top, setTop] = React.useState(0)

  const handleDown = (id, name, e) => {
    e.stopPropagation();
    let first = true;
    let timeFrame;
    let prevClientY = e.clientY;
    console.info(prevClientY)
    let oldId = id;
    let newId;
    let values = JSON.parse(JSON.stringify(props.value))
    document.onmousemove = (eMove) => {
      if (first) {
        setIsActive(true);
        setId(id)
        setCurName(name)
        setTop((id - 1) * 52)
      }
      first = false
      timeFrame = setTimeout(() => {
        let newTop = eMove.clientY - prevClientY + (id - 1) * 52
        newId = (newTop / 52 >>> 0) + 1
        setTop(newTop)
        setId(newId)
      }, 16)
    }
    document.onmouseup = (eUp) => {
      console.info('弹出')
      document.onmousemove = null;
      document.onmouseup = null;
      if (newId && newId !== oldId) {
        let moveChild = values.filter(item => item.id === oldId)[0]
        values.splice(oldId - 1, 1)
        values.splice(newId - 1, 0, moveChild)
        values.forEach((item, index) => {
          // * 更新id
          item.id = index + 1
        })
        props.onChange(values)
        setTop(0)
      }
      setIsActive(false);
      clearTimeout(timeFrame)
    }
  }


  return <div className="box-div">
    <AList
      bordered
      dataSource={props.value}
      renderItem={item => (
        <AList.Item className={id === item.id && isActive ? 'active' : ''} key={item.id} onMouseDown={handleDown.bind(this, item.id, item.name)}>
          <DragOutlined className="icon"/>
          {`${item.name}`}
        </AList.Item>
      )}
    >
    </AList>
    {/* <ul>
      {
        props.value.map(item => (
          <li key={item.id} onMouseDown={handleDown.bind(this, item.id, item.name)} className={id === item.id && isActive ? 'active' : ''}>{item.name}</li>
        ))
      }
    </ul> */}
    <Modal name={curName} isActive={isActive} top={top} />
  </div>;
}

function Modal(props) {
  return <div className={props.isActive ? 'modal active' : 'modal'} style={{ top: `${props.top}px` }}>
    <DragOutlined className="icon"/>{props.name}
  </div>
}

function Description() {
  return (
    <fragment style={{ textAlign: "left" }}>
      <h1>拖拽排序组件</h1>
      <p>完善 List 组件的代码，按下列要求实现一个拖拽排序组件：</p>
      <ul>
        <li>List 组件接受一个 value 的输入，value 中有每个条目的 ID 和名称</li>
        <li>用户可以通过拖拽每个条目来排序</li>
        <li>每个条目在拖拽时会通过黄色线条标记出落点</li>
        <li>拖拽完成后，List 组件会触发 onChange 事件通知外层结果</li>
        <li>除了 React，不能使用任何第三方库，只能使用浏览器原生 API</li>
      </ul>
      <p>List 组件的渲染结果如下图所示：</p>
      <img
        alt="说明"
        width="400"
        src="https://s3plus.meituan.net/v1/mss_bf7e9f1c1cc54cfb819fc8ffcf965b40/static/WX20201208-145040%402x.png"
      />
    </fragment>
  );
}

export default function App() {
  const [value, setValue] = React.useState(() => {
    return [
      {
        id: 1,
        name: "经营模式"
      },
      {
        id: 2,
        name: "订单来源"
      },
      {
        id: 3,
        name: "用餐方式"
      },
      {
        id: 4,
        name: "营业日期"
      },
      {
        id: 5,
        name: "下单事件"
      },
      {
        id: 6,
        name: "结账时间"
      },
      {
        id: 7,
        name: "撤单时间"
      },
      {
        id: 8,
        name: "下单人"
      }
    ];
  });
  return (
    <div className="App">
      {/* <Description /> */}
      {/* <List value={value} onChange={setValue} /> */}
      <TestApp/>
    </div>
  );
}
