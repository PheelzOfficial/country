import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiFillCar } from "react-icons/ai";
import Popluation from '../../Popluation';
import { Link } from "react-router-dom";
import Independent from '../Independent';


const More = () => {
    const { name } = useParams();
    console.log(name);
  const baseUrl = "https://restcountries.com/v3.1/all";
  // about to store data from the api ...
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    setSearch(name);
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      if (res.status === 200) {
        //   console.log(res.data);
        setData(res.data);
      }
      setLoading(false);
    });
  }, []); // will run once

//   const populationsa = data.filter((data) => {
//     return data.name.official === name;
//   });

  const found = data.find(obj => {
    return obj.name.official === name;
  });

  console.log(found)
//   console.log(populationsa);


    
  const searchedStoies = data.filter(function (story) {
    return story.name.official.toLowerCase().includes(search.toLowerCase());
  });

  console.log(searchedStoies)

// console.log(populationsA)
let page_load = '';
let fail = "";
// if (searchedStoies) {
  const place = {
      position: 'absolute',
      top: '50vh',
      left: '50vw'

  }

if (loading) {
    page_load = (
      <div className="d-flex justify-content-center text-dark mt-6" style={place}>
        <div
          className="spinner-border"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        ></div>
      </div>
    );
  } else {
    page_load = (
      <div className="row border">
      <div className="mt-5">
      
        <h5 className="text-center">Population</h5>
        <Popluation />
      </div>
            <div className="col-4 text-black  container-fluid ">
              <hr></hr>
              <h3 className="h2 fw-bold text-center">Population is {found.population}</h3>
              <div className="card mt-4 " style={{ padding: "10px" }}>
                <h4>{found.name.official}</h4>
                <div className="mt-4">
                  <img
                    className="card-img-top image-fluid"
                    alt="..."
                    src={found.flags.png}
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      height: "160px",
                    }}
                  />
                  <br />
                </div>
                <div className="fw-bold mt-4">
                  <p className="fw-bold">
                    Population-- <span>{found.population}</span>
                  </p>
                  <p className="fw-bold">
                    Region-- <span>{found.region}</span>
                  </p>
                  <p className="fw-bold">
                    Time Zones-- <span>{found.timezones[0]}</span>
                  </p>
                  <p className="">
                    Subregion-- <span>{found.subregion}</span>
                  </p>
                  <br></br>
                  <hr></hr>
                  <div className="d-flex justify-content-space-between">
                    <h2 className="mt-2">
                      <AiFillCar />
                    </h2>
                    <h2 className="mt-2 ps-3">{found.car.side}</h2>
                  </div>
                  <Link
                    to={`/moreinfo/${found.name.official}`}
                    className="nav-link btn btn-success text-white fw-bold"
                  >
                    More info
                  </Link>
                </div>
              </div>
            </div>
          );
    
      </div>
    );
  }

return (
    <div className="">
      <Independent />

      <br></br>
      {page_load}
      {/* {searchedStoies} */}
    </div>
  );
}

export default More;
