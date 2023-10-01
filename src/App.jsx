import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  //⭐狀態放在哪裡，操作狀態的方法就放在哪裡 -> 此範例state放在APP，所以更新state的函式都放在APP然後再把函式傳給子組件，子組件透過呼叫函式傳遞數據

  //初始化狀態
  state = {todos:[
    {id:'001',name:'吃飯',done:true},
    {id:'002',name:'睡覺',done:true},
    {id:'003',name:'打代碼',done:false},
    {id:'004',name:'逛街',done:true},
  ]}

  //建立一個盒子(函式addTodo)，專屬於子組件(Header)傳遞輸入框的值給父組件(自己) -> 用於新增一個todo，接收的參數是todo物件 
  addTodo = (todoObj) => {
    //獲取原todo
    const {todos} = this.state
    //新增一個todo
    const newTodos = [todoObj,...todos]
    //更新狀態
    this.setState({todos:newTodos})
  }

  //updateTodo用於更新一個todo物件
  updateTodo = (id,done)=>{
    //獲取狀態中的todos
    const {todos} = this.state
    //配對處理數據
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id) return {...todoObj,done} //{...todoObj,done:done} 修改的鍵值名稱一樣可以簡寫成一個名稱
      else return todoObj
    })
    //更新狀態
    this.setState({todos:newTodos})
  }

  //deleteTodo用於刪除一個todo物件 *補充：注意命名不要單獨使用"delete"，因為"delete"本身是關鍵字，有刪除物件屬性的功能
  deleteTodo = (id) => {
    //獲取狀態中的todos
    const {todos} = this.state
    //刪除指定id的todo物件
    const newTodos = todos.filter((todoObj)=>{ //arr.filter(func)：陣列方法，根據函式(條件)，回傳所有符合的元素組成的陣列 -> 從陣列過濾(刪除)掉不符合的元素
      return todoObj.id !== id
    })
    //更新狀態
    this.setState({todos:newTodos})
  }

  //checkAllTodo用於全選todos選項
  checkAllTodo = (done)=>{
    //獲取狀態中的todos
    const {todos} = this.state
    //加工數據
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done} //{...todoObj,done:done} 修改的鍵值名稱一樣可以簡寫成一個名稱
    })
    //更新狀態
    this.setState({todos:newTodos})
  }

  //clearAllDone用於清除所有已完成的todos
  clearAllDone=()=>{
    //獲取狀態中的todos
    const {todos} = this.state
    //過濾數據
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done // todoObj.done === false 的簡寫
    })
    //更新狀態
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
        <div id="root">
            <div className="todo-container">
                <div className="todo-wrap">
                <Header addTodo={this.addTodo}/>
                <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        </div>
    )
  }
}
