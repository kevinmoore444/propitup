import React, { Component } from 'react'


class Student extends Component {
    constructor(props){
        super(props);
        this.state = {
            age : this.props.age
        }
    }

    render() {
        const {firstName, lastName, haircolor} = this.props
        return(
            <div>
                <h1> {lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {haircolor}</p>
                <button onClick={()=> this.setState({age: this.state.age + 1})}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default Student;