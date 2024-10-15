import React from "react";

class UserClass extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         count: 0,
         count2: 0
      }

      console.log(props);
      console.log(this.props.name+"child constructor");
   }

   componentDidMount() {
      console.log(this.props.name+"Child component did mount");
   }

   render() {

      //destructuring
      const {count, count2} = this.state;
      console.log(this.props.name+"child render");

      return (
         <div className="user-card">
            {/* <h1>Count: {this.state.count} </h1> */}
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <button onClick={() => {
               this.setState({
                  count: this.state.count + 1,
                  count2: this.state.count2 + 1
               })
            }} >Increase Count</button>
            <h2>Name: {this.props.name}</h2>
            <h3>Location: {this.props.location}</h3>
            <h4>Contact: 4756746574</h4>
         </div>
      )
   }
}

export default UserClass;