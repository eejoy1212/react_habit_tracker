import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {

    handleIncrement=(habit)=>{
this.props.onIncrement(habit);
    }
    handleDecrement=(habit)=>{
        this.props.onDecrement(habit);
    }
    handleDelete=(habit)=>{
                this.props.onDelete(habit);
    }
    handleAdd=(habit)=>{
        this.props.onAdd(habit);
    }

    render() {
        return (
           <>
          <HabitAddForm onAdd={this.handleAdd}/>
                      <ul>
                {
                    this.props.habits.map(habit=>
                    <Habit 
                    key={habit.id} 
                    habit={habit} 
                    cnt={habit.cnt}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                    />)
                }
            </ul>
            <div className='reset-btn'>
            <button className="habits-reset" onClick={this.props.onReset} >리셋</button>

            </div>
           </>
           
        );
    }
}

export default Habits;