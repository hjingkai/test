import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {mouse:false} //辨識鼠標移入、移出

  //鼠標移入、移出的回呼
  handleMouse = (flag) => {
    return ()=>{
      // console.log(flag);
      this.setState({mouse:flag})
    }
  }

  //勾選、取消勾選某一個todo的回呼
  handleCheck = (id) => {
    return (event)=>{
      //因為input的類型是checkbox，若要取得是否勾選的狀態，屬性名是 checked
      // console.log(id,event.target.checked);
      this.props.updateTodo(id,event.target.checked)
    }
  }

  //刪除一個todo的回呼
  handleDelete = (id) => {
    //this.props.deleteTodo(id) -> 會直接刪除選項
    //添加確認彈窗，點擊確定再執行刪除 *window.confirm('string') 彈窗顯示string並且有"確定"和"取消"兩個按鈕，點擊確定回傳"true";取消回傳"false"
    if(window.confirm('確定刪除嗎？')){
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
        <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <label>
                {/* type="checkbox" 輸入框的類型變成勾選的選單；defaultChecked 回傳checked属性的設定值，之後可以更改checked的值，但只執行一次(初次)
                若使用Checked則會直接固定勾選狀態*/}
                {/* onchange：當用戶改變輸入輸入框內容時執行一段Javascript代碼 */}
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                <span>{name}</span>
            </label>
            <button onClick={()=> this.handleDelete(id) } className="btn btn-danger" style={{display:mouse ? 'block' : 'none'}}>删除</button>
        </li>
    )
  }
}
