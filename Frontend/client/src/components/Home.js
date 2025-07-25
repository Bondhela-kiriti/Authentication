

import {Link} from 'react-router-dom'


const Home =()=>{
  return(
    <div>

     <div className="navbar">
       
      <h2>MERN AUTH</h2>
          
          <div className="links">
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </div>

     </div>
      
      
      
    </div>
  )
}

export default Home