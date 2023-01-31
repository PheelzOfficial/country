import { Link } from 'react-router-dom';
function Popluation() {
    return (
        <>
          
            <nav className='' style={{margin:'auto', width:'80%'}}>
                <ul className="nav justify-content-center  p-2 mb-3"
                    style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
                >

                    <li className="nav-item ms-3 mt-1">
                        <Link className="nav-link btn btn-success text-white fw-bold" to="/population/population-less-than-500k">Popluation below 500k
                        </Link>
                    </li>
                   
                    <li className="nav-item ms-3 mt-1">
                        <Link className="nav-link btn btn-success text-white fw-bold" to="/population/population-between-500k-and-1m" >Popluation between 500k - 1m</Link>
                    </li>
                    <li className="nav-item ms-3 mt-1">
                        <Link className="nav-link btn btn-success text-white fw-bold" to="/unMember">Popluation between 1m-10m</Link>
                    </li>
                    <li className="nav-item ms-3 mt-1">
                        <Link className="nav-link btn btn-success text-white fw-bold" to="/notunmember">Popluation above 10m</Link>
                    </li>
                </ul>
                <br></br>
            </nav>

        </>
    )
}

export default Popluation