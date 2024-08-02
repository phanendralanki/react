import React from 'react'
import User from './User'
import UserClass from './UserClass';
import UserContext from "../context/UserContext";

class About extends React.Component{

  constructor(props){
    super(props);
    // console.log("Parent constructor");
  }

  componentDidMount(){
    // console.log("Parent Did Mount");
  }


  render() {
    // console.log("Parent Render");

    return (
      <div>
         <h1>About page</h1>
      {/* <User name={"phanendra {function}"} /> */}
      <div>
        logged InUser:
        <UserContext.Consumer>
          { ({loggedInUser}) => <h1>{loggedInUser}</h1> }
        </UserContext.Consumer>
      </div>
      <UserClass name={"phani {class}"} location={'bengaluru'} />
      {/* <UserClass name={"sanjay {class}"} location={'bhimavaram'} /> */}
      </div>
    )
  }
}


/* 

Every one will think in this way, but it is not correct
❌❌❌❌
 - Parent Constructor
 - Parent render
    - Phani Constructor
    - phani render
    - phani ComponentDidMount

    - Sanjay Constructor
    - Sanjay Render
    - Sanjay ComponentDidMount

  - Parent ComponentDidMount


 ✅ Correct Way ✅ 
 - understand the React life cycle methods diagram.
 - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


 ✅✅✅✅ 
 - Parent Constructor
 - Parent Render
    - First Child Constructor
    - First child Render

    - Second child Constructor
    - Second Child Render

    <DOM UPDATED - IN SINGLE BATCH>

    - First Child ComponentDidMount
    - Second Child ComponentDidMount
 - Parent ComponentDidMount

 Note:
 1.Render Phase will be completed first then it will move 
 to the commit phase.




 ✅✅✅✅✅
 - Parent Constructor
 - Parent Render
    - Phani Constructor (First Child)
    - Phani Render

    - Sanjay Constructor (Second child)
    - Sanjay Render
    
    - Phani ComponentDidMount
    - Sanjay ComponentDidMount
  - Parent ComponentDidMount

*/

export default About;
