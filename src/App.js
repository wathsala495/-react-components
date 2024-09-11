import logo from './logo.svg';
import './App.css';
import Main from './Components/Main'
import UserData from './Components/UserData';
//import myData for method 2
import myData from './Data/myData'

// method 2
const NewBlock =()=>{
  return(
    <>
    {myData?.map(({name,city,position,id})=>{
      return(
        // <p>{element.name}</p>
        <Main key={id} name={name} city={city} position={position}/>
      )
     })}
     </>
  )
}

function App() {
  //  dynamic components
    const myData=[
      { id:1234,
        name:'amila',
        city:'tangalle',
        position :'web Developer'
      },
      {
        id:1235,
        name:'kumara',
        city:'galle',
        position :'app Developer'
      },
      {
        id:1236,
        name:'nimal ',
        city:'colombo',
        position :'react Developer'
      },
      {
        id:1237,
        name:'upul ',
        city:'colombo',
        position :'java Developer'
      },
    ]

  return (
    <>
    {/* compoenet */}
    {/* <div >
      <div><h1>react App</h1></div>
      <div><h1>react App</h1></div>

    </div>
    <p>paragraph</p>
  <Main>

    <span>this is hild</span>
  </Main>
  <Main name2="kamal" city="tangalle" position="web developer"/>
  <Main name2="sunil" city="beliatta" position=" developer"/> */}

  {/* dynamic components */}
  {/* method 1 */}
     {myData.map((element)=>{
      return(
        // <p>{element.name}</p>
        <Main  name={element.name} city={element.city} position={element.position}/>
      )
     })}
     {/* object distructuring */}
     <h4>Object Distructuring</h4>
     {myData.map(({name,city,position},index)=>{
      return(
        // <p>{element.name}</p>
        <Main key={index} name={name} city={city} position={position}/>
      )
     })}
     <h4>Object Distructuring with index</h4>
     {myData.map(({name,city,position,id})=>{
      return(
        // <p>{element.name}</p>
        <Main key={id} name={name} city={city} position={position}/>
      )
     })}
     <UserData/>
     <h4>method 2</h4>
     <NewBlock/>
    </>
  );
}

export default App;
