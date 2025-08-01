import Car from './Car';
import Apple from './Apple';
import Gun from './Gun';


function Garage(){
  // const brand="ford";
  // const companyname="Iphone";
  // const color="black";

  //conditional rendering

  const isDoorOpened=true;
  const appleInfo={type:"apple",color:"white"}
  const carInfo={brand:"BMW", color:"white"}
  //const carInfo={};

  const carList=[
    {brand:"BMW",color:"red"},
    {brand:"ford",color:"block"},
    {brand:"Tesla",color:"white"},
  ]

  const numberList=[
    1,2,3,4,5,6,7,8,9
  ]
  return (
   
    <>
      <h1>who lives inside my Garage?</h1>
     {/* <Car brand={brand} color={color}/> */}
    <Apple appleInfo={appleInfo} />
    {carInfo.brand !== undefined && carInfo.color !== undefined ?
     <Car carInfo={carInfo}/> :<h2>nothing to show</h2> // null
    }
    <Gun/>
   {isDoorOpened?<h2>Garage door is open</h2>:<h2>garage door is closed</h2>}
 <ul>
  {carList.map((carInfo) => (
    <li key={carInfo.brand}>
      <Car carInfo={carInfo} />
    </li>
  ))}
</ul>
<ul>
  {numberList.map((e,index) => <p key={index}>{e}</p>)}
</ul>

    </>
    
   //1.48.06
  );
}

export default Garage;