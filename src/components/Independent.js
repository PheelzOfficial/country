import { Link } from 'react-router-dom';
function Independent() {
    return (
        <>
            <nav className='fixed-top'>
                <ul className="nav justify-content-center mb-4  p-2 mb-5"
                    style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
                >
                    
                <li className="nav-item ms-3">
                        <Link className="nav-link btn btn-dark text-white fw-bold" to="/">All Contries</Link>
                </li>
                <li className="nav-item ms-3">
                        <Link className="nav-link btn btn-dark text-white fw-bold" to="/independent">Independent</Link>
                </li>
                <li className="nav-item ms-3">
                    <Link  className="nav-link btn btn-dark text-white fw-bold"  to="/notindependent" >Not Independent</Link>
                </li>
                <li className="nav-item ms-3">
                    <Link className="nav-link btn btn-dark text-white fw-bold" to="/unMember">unMember</Link>
                </li>
                <li className="nav-item ms-3">
                    <Link className="nav-link btn btn-dark text-white fw-bold" to="/notunmember">Not a unMember</Link>
                </li>
                </ul>
                <br></br>
        </nav>
            
        </>
    )
}

export default Independent;