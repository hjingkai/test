//建立"外殼"元件App
//此處的import{Component}不是解構賦值，而是因為Component在React中有單獨導出
import React,{Component} from "react";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

//建立並導出App類別元件
export default class App extends Component {
    render(){
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}
