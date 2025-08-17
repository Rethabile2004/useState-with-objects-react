import React, { useState } from "react";

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    if (newCar.make === "" && newCar.model === "") {
      document.getElementById("car-model").style.backgroundColor =
        "hsl(0,0%,80%)";
      document.getElementById("car-make").style.backgroundColor =
        "hsl(0,0%,80%)";
    }
    if (newCar.model === "") {
      document.getElementById("car-model").style.backgroundColor =
        "hsl(0,0%,80%)";
      return;
    }else{
        document.getElementById("car-model").style.backgroundColor =
      "hsla(0, 0%, 100%, 1.00)";
    }
    if (newCar.make === "") {
      document.getElementById("car-make").style.backgroundColor =
        "hsl(0,0%,80%)";
      return;
    }else{
        document.getElementById("car-make").style.backgroundColor =
      "hsla(0, 0%, 100%, 1.00)";
    }
    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
    document.getElementById("car-make").style.backgroundColor =
      "hsla(0, 0%, 100%, 1.00)";
    document.getElementById("car-model").style.backgroundColor =
      "hsla(0, 0%, 100%, 1.00)";
  }

  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }

  return (
    <div className="car-container">
      <h2 className="title">List of Cars</h2>

      <ul className="car-list">
        {cars.map((car, index) => (
          <li
            key={index}
            className="car-item"
            onClick={() => handleRemoveCar(index)}
          >
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>

      <div className="input-group">
        <input
          type="number"
          value={carYear}
          onChange={(e) => setCarYear(e.target.value)}
          className="input"
        />
        <input
          type="text"
          value={carMake}
          id="car-make"
          onChange={(e) => setCarMake(e.target.value)}
          placeholder="Enter car make"
          className="input"
        />
        <input
          type="text"
          value={carModel}
          id="car-model"
          onChange={(e) => setCarModel(e.target.value)}
          placeholder="Enter car model"
          className="input"
        />
      </div>

      <button className="submit-button" onClick={handleAddCar}>
        Add Car
      </button>
    </div>
  );
}

export default MyComponent;
