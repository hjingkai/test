import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

  //對接收的props進行:類型、必要性的限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  //鍵盤事件的回呼 *因為input綁定的元素與要操作的元素是同一個，所以不需要設置ref，直接使用內部傳遞的參數(evet)
  handleKeyUp = (event) => {
    //解構賦值獲取keyCode,target
    const {keyCode,target} = event
    // event.keyCode 鍵盤按鍵在代碼中的辨識碼 -> Enter：13，所以if還沒按下13就不用還不用輸出event.target.value，直接停止函式
    //判斷是否按下Enter按鍵
    if(keyCode !== 13) return
    //添加的 todo 值不能為空白 *string.trim()：刪除字串前後的空格
    if(target.value.trim() === ''){
      alert('輸入不能為空白')
      return
    }
    //準備好一個todo物件
    const todoObj = {id:nanoid(),name:target.value,done:false}
    //將輸入框內的值(todoObj)回傳給父組件App的專屬盒子(addTodo)
    this.props.addTodo(todoObj)
    //清空輸入
    target.value = ''
  }

  render() {
    return (
        <div className="todo-header">
            {/* onkeyup 綁定鍵盤事件，up代表離開按鍵時 */}
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="請輸入你的任務名稱，按Enter鍵確認"/>
        </div>
    )
  }
}
