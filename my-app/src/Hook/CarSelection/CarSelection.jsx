import React, { useState } from "react";

const carList = ['Audi', 'BMW', 'Mercedes']
const colorList = ['Red', 'Green', 'Blue']

function CarSelection() {
    const  [selectedCar, setSelectedCar] = useState({car: carList[0], color: colorList[0]})

    function handleCarChange(e){
        const selectCarName = e.target.value
        setSelectedCar(previousState =>{
            return{
                ...previousState,
                car: selectCarName
            }
        })
    }
    function handleColorChange(e){
        const selectedColorName = e.target.value
        setSelectedCar(previousState =>{
            return{
                ...previousState,
                color: selectedColorName
            }
        })
    }
    return(
        <div>
        <h1>Selected Car and Color</h1>
        <p>You Selected a {selectedCar.color} - {selectedCar.car}</p>
        <hr></hr>
        <select value={selectedCar.car} onChange={handleCarChange}>
            {carList.map((car, index) => (
            <option key={index} value={car}>
                {car}
            </option>
            ))}
        </select>
        <select value={selectedCar.color} onChange={handleColorChange}>
            {colorList.map((color, index) => (
            <option key={index} value={color}>
                {color}
            </option>
            ))}
        </select>
        </div>
    )
}
export default CarSelection