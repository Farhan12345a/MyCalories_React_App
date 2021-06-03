import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Calorie= props => (
    <tr>
      <td>{props.calorie.username}</td>
      <td>{props.calorie.food}</td>
      <td>{props.calorie.calories}</td>
      <td>{props.calorie.fatPercent}</td>
      <td>{props.calorie.carbPercent}</td>
      <td>{props.calorie.proteinPercent}</td>
      <td>{props.calorie.date.substring(12,16)}</td>
      <td>{props.calorie.date.substring(0,10)}</td>

      <td>
        <Link to={"/edit/"+props.calorie._id}>edit</Link> | <a href="#" onClick={() => { props.deleteCalorie(props.calorie._id) }}>delete</a>
      </td>
    </tr>
  )

//shows every calorie log

export default class CalorieList extends Component {
    constructor(props){
        super(props);

        this.deleteCalorie = this.deleteCalorie.bind(this);

        this.state = {calorie: []};
    }

    //get list of calorie log from database
    componentDidMount(){
        
        axios.get('http://localhost:5000/calorie')
            .then(response => {
                this.setState({calorie: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteCalorie(id) {
        
        axios.delete('http://localhost:5000/calorie/'+id)
          .then(res => { console.log(res.data)});
    
        
        this.setState({
          calorie: this.state.calorie.filter(el => el._id !== id)
        })
      }

    calorieList() {
    return this.state.calorie.map(currentcalorie => {
        return <Calorie calorie={currentcalorie} deleteCalorie={this.deleteCalorie} key={currentcalorie._id}/>;
    })
    }


    render(){
        return (
            <div>
                <h3>Logged Calories</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>Username</th>
                        <th>Food</th>
                        <th>Calories</th>
                        <th>Grams of Fat</th>
                        <th>Grams of Carbs</th>
                        <th>Grams of Protein</th>
                        <th>Time</th>
                        <th>Date</th>
                        
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.calorieList() }
                    </tbody>
                    </table>
      </div>
        )
    }
}
  