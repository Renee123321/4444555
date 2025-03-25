import React from "react";
import Student from "./ObjectLesson/Student";

function App() {
  //===============产生一个类型的对象================
  const xiaoWu : Student = {
    name:"xiaoWu",
    age: 18,
    money:100,
    recharge : ()=>{ 
      xiaoWu.money+=100;
    }
  }
  console.log("xiaoWu:", xiaoWu)
  //=========>>>>作业： 产生一个老师类型的对象<<<<<=====
  

  //===============使用xiaoWu================
  //了解xiaoWu的卡现有值
  const mny = xiaoWu.money;
  console.log("小吴卡的现有值：", mny)
  //给小吴卡上充值
  xiaoLi.recharge();
  console.log("小吴卡充值后：", xiaoWu.money)
  //=========>>>>作业： 使用老师的对象<<<<<=====

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold">
        Typescript的类和对象
      </h2>
      <h4>   </h4>
    </div>
  );
}

export default App;

