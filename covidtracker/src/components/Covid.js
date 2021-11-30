import React from 'react'
import { useEffect, useState } from 'react';
import './covid.css';

const Covid = () => {

    const [data, setData] = useState({
        id:"",
        name:""
    })
    const [active, setactive] = useState([])
    const [recovered, setrecovered] = useState([])
    const [death, setdeath] = useState([])
    const [tests, settests] = useState([])
    const [indexCountry, setindexCountry] = useState([])

    const getCovidData = async () => {
        fetch("https://disease.sh/v3/covid-19/countries")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData({
                    id:data.forEach((object, i) => object.Quantity = i),
                    name:data.map(val => val.country)
                });
                setactive(data.map(val => val.active));
                setrecovered(data.map(val => val.recovered));
                setdeath(data.map(val => val.deaths));
                settests(data.map(val => val.tests));
                console.log(data);
            });
    }

    useEffect(() => {
        getCovidData();
    }, [])

    const [currentFruit, setCurrentFruit] = useState({
        id:0,
        name:"India"
    })

    const changeFruit = (newFruit) => {
        setCurrentFruit(newFruit);
        var index = data.indexOf(newFruit);
        console.log("index", index);
        setindexCountry(index);
    }

    return (
        <>
            <h2>🔴 LIVE</h2>
            <h1>COVID-19 CORONAVIRUS TRACKER</h1>
            <label for="Country">Select The Country:</label>

            <form>
                <select
                    onChange={(event) => changeFruit(event.target.value)}
                    value={currentFruit}
                >
                    {
                        // Object.keys(data).map(function(key, index) {
                        //     console.log(key);
                        //     <option value={key} key={key}>{key}</option>
                        //     // myObject[key] *= 2;
                        //   })
                        // data.map(key => (
                        //     <option value={key} key={key}>{key}</option>
                        // ))
                    }

                </select>
            </form>

            <div className='row'>
                <div className='column'>
                    <div className='card'>
                        <p className='card_name'><span>OUR</span> COUNTRY</p>
                        <p className='card_value'>{currentFruit}</p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <p className='card_name'><span>TOTAL</span> RECOVERED</p>
                        <p className='card_value'>{recovered[indexCountry]}</p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <p className='card_name'><span>TOTAL</span> CONFIRMED</p>
                        <p className='card_value'>{tests[indexCountry]}</p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <p className='card_name'><span>TOTAL</span> DEATHS</p>
                        <p className='card_value'>{death[indexCountry]}</p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'>
                        <p className='card_name'><span>TOTAL</span> ACTIVE</p>
                        <p className='card_value'>{active[indexCountry]}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Covid