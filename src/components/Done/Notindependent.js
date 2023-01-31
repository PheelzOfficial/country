import Independent from "../Independent";
import { useState, useEffect } from "react";
import axios from "axios";
import {AiFillCar } from 'react-icons/ai';

function Notindependent() {
    const baseUrl = 'https://restcountries.com/v3.1/all';
    // about to store data from the api ...
    const [data, setData] = useState([]);;
    const [loading, setLoading] = useState(true);
    // const [filterData, setFilter] = useState([]);
    useEffect(() => {
        axios.get(baseUrl).then((res) => {
            if (res.status === 200) {
                // console.log(res.data)
                setData(res.data)
                
            }
            setLoading(false)
        })
    }, [])// will run once

    const filterData = data.filter(datas =>{
        return datas.independent === false;
      })

      console.log(filterData)


    let page_load = '';
    if (loading) {
        page_load =
            <div className="d-flex justify-content-center text-dark mt-6" >
            <div className="spinner-border" role="status"  style={{width: '3rem', height: '3rem'}}>
                
            </div>
        </div>
    } else {
        page_load =
            <div className="row border border-success" >
            {filterData.map((item, id) => {
                return (
             <div className="col-4 text-black  container-fluid " key={id}    >
                        <hr></hr>
                        <h3 className="h2 fw-bold text-center">{item.status }</h3>
                        <div className="card mt-4 " style={{padding:'10px'}}>
                            <h4>{item.name.official }</h4>
                            <div className="mt-4">
                                <img className="card-img-top image-fluid" alt="..." src={item.flags.png} style={{ width: '100%', boxSizing: 'border-box', height: '160px' }} />
                                <br />
                                
                            </div>
                            <div className="fw-bold mt-4">
                                <p className="fw-bold">Population-- <span>{item.area }</span></p>
                                <p className="fw-bold">Region-- <span>{item.region}</span></p>
                                <p className="fw-bold">Time Zones-- <span>{item.timezones[0]}</span></p>
                                <p className="">Subregion-- <span>{item.subregion}</span></p>
                                <br></br>
                                <hr></hr>
                                <div className="d-flex justify-content-space-between">
                                    <h2 className="mt-2"><AiFillCar /></h2>
                                    <h2 className="mt-2 ps-3">{item.car.side }</h2>
                                </div>
                            </div>
                        </div>
                        
            </div>   )   })
    }
        </div>
    }
    return (
        <div className="m-4 mt-5">
            <Independent />
            <br></br>
            {page_load}
        </div>
    )
}
export default Notindependent;