## 一、todoList案例相關知識點
    1.拆分組件、實現靜態組件，注意：calssNmae、style的寫法
    2.動態初始化列表，如何確定將數據放在哪個組件中的state中？
        － 某『個』組件使用：放在其自身的state中
        － 某『些』組件使用：放在他們共同的父組件state中(官方稱此操作為：狀態提升)
    3.關於父子之間通信：傳遞數據
        a.【"父"組件】給【子組件】傳遞數據：通過props傳遞
        b.【子組件】給【"父"組件】傳遞數據：通過props傳遞，要求父提前給子傳遞一個函式
    4.注意 defaultChecked 和 checked 的區別，類似的還有：defaultValue 和 value *defaultChecked、defaultValue 只執行一次(初始化時)
    5.狀態在哪裡，操作狀態的方法就在哪裡