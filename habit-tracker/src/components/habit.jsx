import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    componentDidMount(){
        console.log(`habit: ${this.props.habit.name} mounted`);
    }
    componentWillUnmount(){
        console.log(`habit: ${this.props.habit.name} will unmounted`);

    }
    handleIncrement=()=>{this.props.onIncrement(this.props.habit); }
    handleDecrement=()=>{this.props.onDecrement(this.props.habit);}
    handleDelete=()=>{this.props.onDelete(this.props.habit);}
    render() {
        const {name,cnt}=this.props.habit;
        return( 
        <li className='habit'>
        <span className="habit-name">{name}</span>
        <span className="habit-cnt">{cnt}</span>
        <button className='habit-btn habit-increase' onClick={this.handleIncrement}>
        <i className="fa-solid fa-circle-plus"></i>
        </button>
        <button className='habit-btn habit-decrease' onClick={this.handleDecrement}>
        <i className="fa-solid fa-circle-minus"></i>
        </button>
        <button className='habit-btn habit-delete' onClick={this.handleDelete}> <i className="fa-solid fa-trash"></i></button>
        </li>
        
        );
    }
}

export default Habit;