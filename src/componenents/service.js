import { useState } from "react";
import "./service.css";
import voi1 from './voi1.jpg';
import voi2 from './voi2.jpg';
import voi3 from './voi3.jpeg';
import voi4 from './voi4.jpeg';
import voi5 from './voi5.jpeg';
import voi6 from './voi6.jpeg';
import voi7 from './voi7.jpeg';
import voi8 from './voi8.jpeg';
import vv1 from './vv1.jpeg';
import vv2 from './vv2.jpeg';
import vv3 from './vv3.jpeg';
import vv5 from './vv5.jpeg';
import va1 from './va1.jpeg';
import va2 from './va2.jpeg';
import va3 from './va3.jpeg';
import va4 from './va4.jpeg';
import va5 from './va5.jpeg';
import va6 from './va6.jpeg';
import va7 from './va7.jpeg';
import va8 from './va8.jpeg';
import va9 from './va9.jpeg';

const cars = [
  {
    id: 1,
    category: "sport suv",
    name: "Dacia duster",
    img: voi1,
    year: 2020,
    priceDh:"26 000 000" ,
    priceEur: "260000 €",
    seats: 5,
     fuel: "diesel",
    consumption: "8.2km / 1L",
    gearbox: "manuelle",
  },
  {
    id: 2,
    category: "sport",
    name: "Dacia 2026",
    img: voi2,
    year: 2025,
    priceDh: "30 000 000 DH",
    priceEur: "30 000 00 €",
    seats: 5,
     fuel: "diesel",
    consumption: "8.2km / 1L",
    gearbox: "Automatique",
  },
  {
    id: 3,
    category: "classique ",
    name: "ford f-150",
    img: voi3,
    year: 2025,
    priceDh: "40 000 000 DH",
    priceEur: "79.5 €",
    seats: 5,
     fuel: "diesel",
    consumption: "10.2km / 1L",
    gearbox: "Automatique",
  },
  {
    id: 4,
    category: "classique",
    name: "ford Edge st ",
    img: voi4,
    year: 2024,
    priceDh: "950 000 DH",
    priceEur: "95 €",
    seats: 5,
   fuel: "diesel",
    consumption: "8.2km / 1L",
    gearbox: "Automatique",
  },
   {
    id: 5,
    category: "sport",
    name: "ferrari",
    img: voi5,
    year: 2024,
    priceDh: "950 000 000 DH",
    priceEur: "95.075 €",
    seats: 5,
    fuel: "diesel",
    consumption: "8.2km / 1L",
    gearbox: "Automatique",
  },
   {
    id: 6,
    category: "sport",
    name: "mercedes",
    img: vv1,
    year: 2024,
    priceDh: "60 000 000 DH",
    priceEur: "95 €",
    seats: 5,
    fuel: "diesel",
    consumption: "8.2km / 1L",
    gearbox: "Automatique",
  },
   {
    id: 7,
    category: "classique",
    name: "mercedes",
    img: voi7,
    year: 2024,
    priceDh: "35 000 000 DH",
    priceEur: "95 €",
    seats: 5,
    fuel: "diesel",
    consumption: "8.2km / 1L",
    gearbox: "Automatique",
  },
   {
    id: 8,
    category: "sport",
    name: "auddi",
    img: voi8,
    year: 2024,
    priceDh: "70 000 000 DH",
    priceEur: "95 €",seats: 5,
    fuel: "diesel",
    consumption: "8.2km / 1L",
    gearbox: "Automatique",
  },
     
    
     {
    id: 9,
    category: "classique",
    name: "honda civic",
    img: vv2,
    year: 2024,
    priceDh: "42 000 000 DH",
    priceEur: "95 €",
    seats: 5,
    fuel: "diesel",
    consumption: "8.2km / 1L",
    gearbox: "manuelle",
  },
   {
    id: 10,
    category: "sport",
    name: "honda civic",
    img: vv3,
    year: 2025,
    priceDh: "20 000 000 DH",
    priceEur: "95 €",
    seats: 5,
    fuel: "diesel",
    consumption: "8.2km / 1L",
    gearbox: "Automatique",
  },
     {
    id: 11,
    category: "sport",
    name: "bugatti chiron sport",
    img: vv5,
    year: 2024,
    priceDh: "950 DH",
    priceEur: "95 €",
    seats: 5,
    fuel: "diesel",
    consumption: "11.2km / 1L",
    gearbox: "Automatique",
  },
    {
    id: 12,
    category: "sport",
    name: "mercedes",
    img: va1,
    year: 2024,
    priceDh: "950 DH",
    priceEur: "95 €",
    seats: 5,
    fuel: "diesel",
    consumption: "8.2km / 1L",
    gearbox: "Automatique",
  },
     {
    id: 12,
    category: "lux",
    name: "porche",
    img: va2,
    year: 2024,
    priceDh: "80 000 000 DH",
    priceEur: "95 €",
    seats: 5,
    fuel: "diesel",
    consumption: "8.2km / 1L",
    gearbox: "Automatique",
  },
     {
    id: 13,
    category: "sport",
    name: "porche 911",
    img: va3,
    year: 2024,
    priceDh: "97 000 000 DH",
    priceEur: "97.085 €",
    seats: 5,
    fuel: "diesel",
    consumption: "8.2km / 1L",
    gearbox: "Automatique",
  },
   {
    id: 14,
    category: "lux",
    name: "porche",
    img: va4,
    year: 2024,
    priceDh: "100 000 000 DH",
    priceEur: "900.5 €",
    seats: 5,
    fuel: "diesel",
    consumption: "8.2km / 1L",
    gearbox: "Automatique",
  },
     {
    id: 15,
    category: "lux",
    name: "golf",
    img: va9,
    year: 2025,
    priceDh: "40 000 000 DH",
    priceEur: "300.45 €",
    seats: 5,
    fuel: "diesel",
    consumption: "8.2km / 1L",
    gearbox: "Automatique",
  },

  
   
   
];

export default function App() {
  const [filter, setFilter] = useState("all");

  const filteredCars =
    filter === "all" ? cars : cars.filter(c => c.category === filter);

  return (
    <div className="page">

      {/* HEADER */}
    

      {/* FILTER BUTTONS */}
      <div className="filter-bar">
        <button onClick={() => setFilter("all")}
          className={filter === "all" ? "active" : ""}>
          Tous
        </button>

        <button onClick={() => setFilter("classique")}
          className={filter === "classique" ? "active" : ""}>
          Classique
        </button>

        <button onClick={() => setFilter("sport")}
          className={filter === "sport" ? "active" : ""}>
          Sport
        </button>

        <button onClick={() => setFilter("lux")}
          className={filter === "lux" ? "active" : ""}>
          Luxe
        </button>
      </div>

      {/* CARDS */}
      <main>
        <section className="cards-grid">

          {filteredCars.map(car => (
            <article key={car.id} className="card">

              <div className="price-badge">
                <div className="price-upper">à partir de</div>
                <div className="price-main">
                  {car.priceDh} / {car.priceEur}
                </div>
                <button className="rent-btn">Louer</button>
              </div>

              <div className="img-wrap">
                <img src={car.img} alt={car.name} />
              </div>

              <div className="card-body">
                <h3>{car.name}</h3>
                <span className="pill">{car.year}</span>
                <ul className="features">
                  <li>{car.seats} People</li>
                  <li>{car.fuel}</li>
                  <li>{car.consumption}</li>
                  <li>{car.gearbox}</li>
                </ul>
              </div>
            </article>
          ))}

        </section>
      </main>
    </div>
  );
}
