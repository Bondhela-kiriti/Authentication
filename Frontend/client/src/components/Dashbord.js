// icons links
 import {FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'

const Dashbord =()=>{  

  const handlelogout =async()=>{
    try{
      const response = await fetch('https://2c2021f6-d50d-4137-90d9-f1206674974c-00-2m2ot2tq0ez58.sisko.replit.dev/api/logout',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        credentials:'include'
      })
      const data = await response.json()
      console.log(data)
      if(data.message==="User logged out successfully"){
        alert("User logged out successfully")
        window.location.href="/login"
      }
      else{
        alert("User does not exist")
      }
      
    }
    catch(err){
      console.log(err)
      console.log("Something went wrong")
    }
    finally{
      window.location.href="/login"
      console.log("User logged out successfully")
      
    }
      // redirect to login page
    
  }
  
  
  return(
    <div className="dash">
       
      <h1>Welcome to Dashbord</h1>
      <h2>Welcome to full stack development</h2>
          {/* adding social media links */}
      <div className="social">
        {/* make social media links clickable */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/naniyadav621/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
        <a href="https://github.com/naniyadav621" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        
      
        </div>
        
      
      <button  onClick={handlelogout}>Logout</button>
        {/* creating logout button to logout user and redirect to login page */}
      
    
    </div>
  )
}
export default Dashbord