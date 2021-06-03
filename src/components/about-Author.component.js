import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

var imageName = require('./image1.png')
export default class CreateAuthor extends Component {
    constructor(props){
        super(props);
        
    }

    //Change html styling
    //Possibly add a image****
    render(){
        return (
            <div>
                <h3>About Farhan Shahbaz</h3>
                <form>
                    <p>Farhan Shahbaz was born in Westchester, New York and was always
                    passionite about fitness and being healthy. He played numerous 
                    sports as a kid and always had a winning mentality. As he grew up
                    he wanted to help others and make a chnage in the world. He knew that
                    alot of people in America were struggling with being fit, so he decided
                    to create a application that can easily keep track of calories and food
                    consumed throughout the day.</p>
                    
                </form>
            </div>
        )
    }
}