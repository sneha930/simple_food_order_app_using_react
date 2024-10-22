import React from 'react'
import User from './User';
import UserClass from './UserClass';
import {Component} from "react";
import UserContext from '../utils/UserContext';

/* const About = () => {
  return (
    <div>
      <h2>This is about page</h2>
      <User name={"sneha from function"} />
      <UserClass name={"sneha from class"} location={"Pune from class"}/>
    </div>
  )
} */

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent component did mount");
  }


  render() {

    // console.log("parent render");

    return (
      <div>
        <h1>This is about class component</h1>
        <div>
          
          loggedInUser:
          {/* This is component */}
          {/* <UserContext.Consumer>
            {(data) => console.log(data)}
          </ UserContext.Consumer> */}
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className='text-xl font-bold'>{loggedInUser}</h1>}
          </ UserContext.Consumer>
        </div>
        <h2>This is about page</h2>
        <User name={"sneha from function"} />
        <UserClass name={"first"} location={"Pune from class"} />
      </div>
    )
  }
}

export default About;