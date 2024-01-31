import React,{useEffect, useState} from "react";
import axios from "axios";
import SubMain from "./subMain";
const Main = () => {
const [food,setFood] = useState(null)
useEffect(() => {
   const getData = async() => {
    await axios(`http://localhost:3060/getFoods`).then((res) => {
     setFood(res.data)
    }).catch((err) => console.log({message:err.message}))
   }
   getData()
},[])
console.log(food,"foodie13")
    return(
        <>
        <div className="grid grid-cols-3 gap-6 my-5 w-4/5 mx-auto">         
            {food !== null&& food.response.map((response) => (
            <SubMain restaurant={response.restaurants_name} food={response.food_name} price={response.price} distance={response.distance} delivery={response.delivery}/>
         ))}
         </div>

        </>
    )
}

export default Main;