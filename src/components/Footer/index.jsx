<<<<<<< HEAD
import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  //全選checkbox的回呼
  handleCheckAll=(event)=>{
    this.props.checkAllTodo(event.target.checked)
  }

  //清除已完成任務的回呼
  handleClearAllDone=()=>{
    if(window.confirm('確定刪除嗎？')){
      this.props.clearAllDone()
    }
  }

  render() {
    const {todos} = this.props

    //計算已完成的個數
    //array.reduce((pre,item)=>{},0) 
    //reduce方法用於根據陣列計算回傳單個值。0是初始值，pre是上一次函式呼叫的值，item是當前的陣列元素
    //加法赋值(+=)：将右操作數的值添加給左邊的變量，並將结果配给該變量。*可以是數字加法 or 拼接字串 -> 也可以省略=
    const doneCount = todos.reduce((pre,todo)=>pre + (todo.done ? 1 : 0),0)
    // console.log(doneCount);

    //計算總數量
    const total = todos.length
    return (
        <div className="todo-footer">
            <label>
            <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={this.handleCheckAll}/>
            </label>
            <span>
            <span>已完成{doneCount}</span> / 全部{total}
            </span>
            <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任務</button>
        </div>
    )
  }
}
=======
import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  //全選checkbox的回呼
  handleCheckAll=(event)=>{
    this.props.checkAllTodo(event.target.checked)
  }

  //清除已完成任務的回呼
  handleClearAllDone=()=>{
    if(window.confirm('確定刪除嗎？')){
      this.props.clearAllDone()
    }
  }

  render() {
    const {todos} = this.props

    //計算已完成的個數
    //array.reduce((pre,item)=>{},0) 
    //reduce方法用於根據陣列計算回傳單個值。0是初始值，pre是上一次函式呼叫的值，item是當前的陣列元素
    //加法赋值(+=)：将右操作數的值添加給左邊的變量，並將结果配给該變量。*可以是數字加法 or 拼接字串 -> 也可以省略=
    const doneCount = todos.reduce((pre,todo)=>pre + (todo.done ? 1 : 0),0)
    // console.log(doneCount);

    //計算總數量
    const total = todos.length
    return (
        <div className="todo-footer">
            <label>
            <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={this.handleCheckAll}/>
            </label>
            <span>
            <span>已完成{doneCount}</span> / 全部{total}
            </span>
            <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任務</button>
        </div>
    )
  }
}
>>>>>>> 880ec5654ff783a2c900d41823380450b40ff914
