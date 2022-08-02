
import { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state={
    habits:[
        {id:1,  name:'해피랑 산책하기',cnt:0},
        {id:2,  name:'해피 배 쓰다듬기',cnt:0},
        {id:3,  name:'해피 밥주기',cnt:0},]
}
handleIncrement=(habit)=>{
 const habits=this.state.habits.map(item=>{
  if (item.id===habit.id) {
    return {...habit,cnt:habit.cnt+1};
  }else{
return item;
  }
 });
 this.setState({habits});
      }
      handleDecrement=(habit)=>{
        const habits=this.state.habits.map(item=>{
          if (item.id===habit.id) {
            const cnt=habit.cnt-1;
            return {...habit,cnt:cnt<0?0:cnt};
          }else{
        return item;
          }
         });
         this.setState({habits});
      }
              handleDelete=(habit)=>{
                  console.log(`handleDelete : ${habit.name}`);
  const habits =this.state.habits.filter(item=>item.id!==habit.id);
  this.setState({habits});
              }
              handleAdd=(name)=>{
                const habits=[...this.state.habits,{id:Date.now(),name:name,cnt:0}]
                this.setState({habits})
              }
              handleReset=(habit)=>{
                const habits=this.state.habits.map(habit=>{
                  if (habit.cnt!==0) {
         
                    return {...habit,cnt:0};
                  }else{
                return habit;
                  }
                 });
                /////////////////////////
  
 this.setState({habits})
              }
  render() {
    return (
      <> 
      <Navbar totalCnt={this.state.habits.filter(item=>item.cnt>0).length}/>
      <Habits habits={this.state.habits}        
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handleDelete}
      onAdd={this.handleAdd}
      onReset={this.handleReset}
      /></>
     
    );
  }
}

export default App;
// export default App;
