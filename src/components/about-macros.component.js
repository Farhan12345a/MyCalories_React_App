import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class CreateMacros extends Component {
    constructor(props){
        super(props);
        
    }

    //Change html styling
  
    render(){
        return (
            <div>
                <h3>What You Have to Know About Calories</h3>
                <form>
                    <p>Whether you are trying to gain weight, maintain your current weight,
                    or shred a few pounds; the main aspect will be how many calories you 
                    consume throughout the day. With the help of MyCalories, you can easily 
                    log in what foods you eat and easily reach your goal. Alwayss remember:</p>
                    
                    <p>1 gram of Carb = 4 calories</p>
                    <p>1 gram of Fat = 9 calories</p>
                    <p>1 gram of Protein = 4 calories</p>
                    <p>In order to lose wieght, a person will have to consume less calories then 
                    there body needs to maintain weight. For example, say we have a 25 year old 
                    male who currently is 5'10 and weighs 170 lbs. If they excersie moderatly (4-5 times
                    a week), the amount of calories to maintain their body weight will be around 2,550 
                    calories per day. In order for weight loss to occur, he'll have to consume around 2,000
                    calories a day. If we take the same criteria for a 5'10 female that weighs 170 lbs; they'll have
                    to consume even less calories per day (1,805 calories/day). Losing weight also comes down
                    to genetics, your metabolism, and overall the nutritional value of the foods you eat. </p>



                    
                     
                </form>
            </div>
        )
    }
}