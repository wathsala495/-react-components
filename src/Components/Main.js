import React from 'react'

//obj
const name1="nimal";
const position1="developer"

const myObj={
    name:`${name1}`,
    position:`${position1}`
}
export default function Main(props) {
  // component
//     const name="Amal";
//     const position="web developer"
//   return (
//     <div>
//       <h4>This is Main page {props.children}</h4>
//       <h4>Name: {name}</h4>
//       <h4>Position:{position}</h4>
//       <h3>obj name:{myObj.name}</h3>
//       <h3>obj Position:{myObj.position}</h3>
//  <h3>Paragraph</h3>
//       <p>name2:{props.name2}</p>
//       <p>City:{props.city}</p>
//       <p>Position:{props.position}</p>
//     </div>
//   )
return(
// daynamic component
<ul>
  <li>{props.name}</li>
  <li>{props.city}</li>
  <li>{props.position}</li>
  
</ul>

)
}
