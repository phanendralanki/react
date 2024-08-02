import React from "react";
class UserClass extends React.Component {

    constructor(props){
        super(props);
        // console.log(props);

        // state variable
        this.state = {
            count:0,
            count2:1,
            userInfo:{
              name:"Phanendra",
              location:"Default",
              avatar_url:"Dummy photo"
            }
        };
        console.log(this.props.name + "Child Constructor");
    }

    // called once the component is completely mounted
    //i.e after the component is rendered completely with constructor and render

    // componentDidMount is used to make API Calls.
    async componentDidMount(){    
        console.log(this.props.name + "child Component Did Mount");

        //API Calls this method
        const data = await fetch("https://api.github.com/users/dhanushmummidi");
        const json = await data.json();
        this.setState({
          userInfo:json,
        })
        console.log(json);
    }

    //calls everytime when component updates - the same like dependency array in Functional Component
    componentDidUpdate(){
      console.log("Component Did Update");
    }

    componentWillUnmount(){
      console.log("Component will unmount");
    }

  render() {
    // console.log(this.props.name + "Child Render");
    // const {name,location} = this.props
    // const {count} = this.state;


    const {name,location,avatar_url} = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <h1>count: {count}</h1>
        <button onClick={()=> {
            //NEVER DIRECTLY UPDATE STATE VARIABLES. 
            // this.state.count = this.state.count+1
            
            this.setState({
                count: this.state.count + 1,
            });

        }}>Count Increase</button> */}


        <img src= {avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: +917013634111</h4>



      </div>
    );
  }
}


export default UserClass;


/***
 * 
 * 
 * Constructor
 * Render (dummy data)
 *  <HTML Dummy>
 * Component Did Mount
 *  <API Call>
 *  <this.setState>
 *
 *  --- UPDATE 
 *    render (API data)
 *    <HTML (new API data)>
 * 
 * ComponentDidUpdate
 * 
 */