import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillCar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Popluation from "../Popluation";
import Independent from "./Independent";

function All() {
  const baseUrl = "https://restcountries.com/v3.1/all";
  // about to store data from the api ...
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setData(res.data);
      }
      setLoading(false);
    });
  }, []); // will run once
  const searchedStoies = data.filter(function (story) {
    return story.name.official.toLowerCase().includes(search.toLowerCase());
  });
  let page_load = "";
  let fail = "";
  if (searchedStoies) {
    const place = {
        position: 'absolute',
        top: '50vh',
        left: '50vw'

    }
    // let page_load = '';
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
          <div>
            <h4 className="text-center fw-bolder">Live Searching</h4>
            <input
              value={search}
              onChange={handleSearch}
              style={{ margin: "auto", width: "50%" }}
              type="text"
              className="form-control"
              placeholder="search"
            />
            <br />
          </div>
          {searchedStoies.map((item, id) => {
            return (
              <div className="col-4 text-black  container-fluid " key={id}>
                <hr></hr>
                <h3 className="h2 fw-bold text-center">{item.status}</h3>
                <div className="card mt-4 " style={{ padding: "10px" }}>
                  <h4>{item.name.official}</h4>
                  <div className="mt-4">
                    <img
                      className="card-img-top image-fluid"
                      alt="..."
                      src={item.flags.png}
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
                      Population-- <span>{item.population}</span>
                    </p>
                    <p className="fw-bold">
                      Region-- <span>{item.region}</span>
                    </p>
                    <p className="fw-bold">
                      Time Zones-- <span>{item.timezones[0]}</span>
                    </p>
                    <p className="">
                      Subregion-- <span>{item.subregion}</span>
                    </p>
                    <br></br>
                    <hr></hr>
                    <div className="d-flex justify-content-space-between">
                      <h2 className="mt-2">
                        <AiFillCar />
                      </h2>
                      <h2 className="mt-2 ps-3">{item.car.side}</h2>
                    </div>
                    <Link
                      to={`/${item.name.official}/more`}
                      className="nav-link btn btn-success text-white fw-bold"
                    >
                      More info
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
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

export default All;
