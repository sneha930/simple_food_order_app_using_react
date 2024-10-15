import React from "react";

class UserClass extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         userInfo: {
            name: "dummy",
            location: "dummy",
            avatar_url: "m",
         }
      }

      console.log(props);
      console.log(this.props.name+"child constructor");
   }

   async componentDidMount() {

      const data = await fetch("https://api.github.com/users/akshaymarch7");
      const json = await data.json();
      console.log(json);

      this.setState({
         userInfo: json,
      })

      console.log(this.props.name+"Child component did mount");

      // this.timer = setInterval(() => {console.log("Hello")}, 1000)
   }

   componentDidUpdate() {
      console.log("component did update");
   }

   componentWillUnmount() {
      // clearInterval(this.timer);
      
      console.log("Component will unmount");
   }

   render() {
      console.log(this.props.name+"child render");

      const {name, location, avatar_url} = this.state.userInfo;
      {console.log(name, location)}

      // debugger;

      return (
         <div className="user-card">
         
            <img src={avatar_url} />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
         </div>
      )
   }
}

export default UserClass;

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */