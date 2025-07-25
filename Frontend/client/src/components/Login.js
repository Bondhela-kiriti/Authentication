import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login =()=>{
const navigate =useNavigate()
const [formdata,setformdata]=useState({
  email:"",
    password:""
})
  const handlechange=(e)=>{
    const {name,value}=e.target
    setformdata({...formdata,[name]:value})
    
  }
  const handleSubmit =async(e)=>{
    e.preventDefault()
    try{
      const response = await fetch('https://2c2021f6-d50d-4137-90d9-f1206674974c-00-2m2ot2tq0ez58.sisko.replit.dev/api/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formdata)
      })
      const data = await response.json()
      console.log(data)
      if(data.message==="User logged in successfully"){
        alert("User logged in successfully")
        navigate('/')
      }
      else{
        alert("User does not exist")
        navigate('/signup')
      }
      
    }
    catch(err){
      console.log(err)
    }
    finally{
      setformdata({
        email:"",
        password:""
      })
    }
  }
  
  return(
    <div className='login'>
      <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <input type="email"  name="email" placeholder="Email" value={formdata.email} onChange={handlechange}/>
          <input type="password" name="password" placeholder="Password" value={formdata.password} onChange={handlechange}/>
          
          <button type="submit">Login</button>
        </form>
    </div>
  )
}
export default Login