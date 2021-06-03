import React, { Component } from 'react';
//Can be changed around
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
//Add excercises into database

export default class EditCalorie extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeFood = this.onChangeFood.bind(this);
        this.onChangeCalories = this.onChangeCalories.bind(this);
        //************CHANGE****** */
        this.onChangeFat = this.onChangeFat.bind(this);
        this.onChangeCarb = this.onChangeCarb.bind(this);
        this.onChangeProtein = this.onChangeProtein.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);

        this.onSubmit = this.onSubmit.bind(this);


        //creating varibles in React
        this.state = {
            username: '',
            food: '',
            calories: 0,
            //************CHANGE****** */
            fatPercent: 0,
            carbPercent: 0,
            proteinPercent: 0,
            date: new Date(),
            users: []
        }
    }

    //automatically called before anything is loaded on screen
    componentDidMount(){
        axios.get('http://localhost:5000/calorie/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                username: response.data.username,
                food: response.data.food,
                calories: response.data.calories,
                //************CHANGE****** */
                fatPercent: response.data.fatPercent,
                carbPercent: response.data.carbPercent,
                proteinPercent: response.data.proteinPercent,

                date: new Date(response.data.date)

                
                })   
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0){
                    this.setState({
                        users: response.data.map(user => user.username), 
                        
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    //change e variable
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

     //change e variable
     onChangeFood(e){
        this.setState({
            food: e.target.value
        });
    }

     //change e variable
     onChangeCalories(e){
        this.setState({
            calories: e.target.value
        });
    }

    //change e variable
    //***********CHANGE****** */
    onChangeFat(e){
        this.setState({
            fatPercent: e.target.value
        });
    }

    onChangeCarb(e){
        this.setState({
            carbPercent: e.target.value
        });
    }

    onChangeProtein(e){
        this.setState({
            proteinPercent: e.target.value
        });
    }

     //change e variable
     onChangeDate(date){
        this.setState({
            date: date
        });
    }

    //change variable
    onSubmit(e){
        e.preventDefault();

        const calorie = {
            username: this.state.username,
            food: this.state.food,
            calories: this.state.calories,
            fatPercent: this.state.fatPercent,
            carbPercent: this.state.carbPercent,
            proteinPercent: this.state.proteinPercent,
            date: this.state.date,


        }

        console.log(calorie);

        //sending user data to backend
        //calorie or calories
        axios.post('http://localhost:5000/calorie/update/'+this.props.match.params.id, calorie)
            .then(res => console.log(res.data));

        window.location = '/';
    }


    render(){
        return (
            <div>
              <h3>Edit Calorie Log</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                  <label>Username: </label>
                  <select ref="userInput"
                      required
                      className="form-control"
                      value={this.state.username}
                      onChange={this.onChangeUsername}>
                      {
                        this.state.users.map(function(user) {
                          return <option 
                            key={user}
                            value={user}>{user}
                            </option>;
                        })
                      }
                  </select>
                </div>
                <div className="form-group"> 
                  <label>Food: </label>
                  <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.food}
                      onChange={this.onChangeFood}
                      />
                </div>
                <div className="form-group">
                  <label>Calories: </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={this.state.calories}
                      onChange={this.onChangeCalories}
                      />
                </div>

                <div className="form-group">
                  <label>Grams of Fat (g): </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={this.state.fatPercent}
                      onChange={this.onChangeFat}
                      />
                </div>

                <div className="form-group">
                  <label>Grams of Carbs (g): </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={this.state.carbPercent}
                      onChange={this.onChangeCarb}
                      />
                </div>

                <div className="form-group">
                  <label>Grams of Protein (g): </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={this.state.proteinPercent}
                      onChange={this.onChangeProtein}
                      />
                </div>

                

                <div className="form-group">
                  <label>Date: </label>
                  <div>
                    <DatePicker
                      selected={this.state.date}
                      onChange={this.onChangeDate}
                    />
                  </div>
                </div>
        
                <div className="form-group">
                  <input type="submit" value="Edit Calorie Log" className="btn btn-primary" />
                </div>
              </form>
            </div>
            )
          
    }
}