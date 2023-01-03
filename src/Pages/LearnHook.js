import React, { useState } from "react";
//import ReactDOM from "react-dom/client";
//import style from '../CSS/MyStyle.module.css'

export default function LearnHook(){


function Car() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");

    return (
        <>
            <h1>My {brand}</h1>
            <p>
                It is a {color} {model} from {year}.
            </p>
        </>
    )
}



function Car2() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "Black"
    });

    let myCol = "Green";

    const myStyleColor = {
        color: myCol,
    }

    const updateColor = () => {
        setCar(previousState => {
            return (
                { ...previousState, color: myCol }
                )
        });
        //setCar({color: "blue"})
    }

    return (
        <>
            <h1 style={myStyleColor}>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button type="button" onClick={updateColor}>{myCol}</button>
        </>
    )
}

function FavouriteColor() {
    const [color, setColor] = useState("red");

    return (
        <>
            <h1>My favourite color is {color}.!</h1>
            <button
                type="button"
                onClick={() => setColor("Blue")}>Blue</button> &nbsp;
            <button
                type="button"
                onClick={() => setColor("Red")}>Red</button> &nbsp;
            <button
                type="button"
                onClick={() => setColor("Pink")}>Pink</button> &nbsp;
            <button
                type="button"
                onClick={() => setColor("Green")}>Green</button> &nbsp;
        </>
    );
}

return(
    <>
    <Car /><br/>
    <Car2 /><br/><br/>
    <FavouriteColor />
    </>
)
}