import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';


const Person = ({children, ...restProps}) => {
    return(
      <>
      <div>
        <h1>Full Name: {restProps.FullName}</h1>
        <h1>Bio: {restProps.Bio}</h1>
        <h1>Profession: {restProps.Profession}</h1>
        {children}
      </div>
      </>
    )    
  };


  
function ActionLink() {
    function handleName(Person, e){
        e.preventDefault();
        alert(Person, e.target)
    }
  return (
    <a href='/' onClick={(e) => handleName("Nteyou Yousouf",e)}> Click Me</a>
  )
  };

  Person.defaultProps = {
    FullName: 'Nteyou Yousouf',
    Bio: 'We are here to simply programming for you',
    Profession: 'Web Developer'
  }
  Person.prototype = {
   FullName : propTypes.string,
   Bio : propTypes.string,
   Profession: propTypes.string

  }
  

function Profile() {
  return (
    <div style = {{color:'blue', fontSize: '40px'}}>
        <Person
        FullName  ='Nteyou Yousouf'
        Bio ='We are here to simply programming for you' 
        Profession = "Web Developer">
        <img src ="" width= "100px"  height= "100px" alt= ""/>
        </Person>
        <ActionLink />
        
    </div>
  )
}

export default Profile