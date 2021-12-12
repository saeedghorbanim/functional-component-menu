import React, {useState} from 'react';

const FunctionalMenu = (props) => {
    //over here setNumMeals it is what it will modify numMeals
    //useState is a function that returns to us an array
    //and props.numMealsServed is what the variable (numMeals)
    //starts off as
    const [numMeals, setNumMeals] = useState(props.numMealsServed);

    const doSomething = ()=> {
        console.log(`you just got served some ${props.nameOfDish}`)
        setNumMeals(numMeals + 1)
    }
    
    return (
        <>
            <div className="menuItem">
                <h3>Dish Name: {props.nameOfDish}</h3>
                <p>Price: {props.price}</p>
                <p>Description: {props.children}</p>
                <p> Number of Orders: {numMeals} </p>
                <p><button onClick = {doSomething}>Order here!</button></p>
            </div>
        </>
        )
}

export default FunctionalMenu