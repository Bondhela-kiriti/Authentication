
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'


const Signup =()=>{

  const navigator = useNavigate()
  const [fetchdata,setfetchdata]=useState({
    name:"",
    email:"",
    password:""
  })

  const handlechange=(e)=>{
    const {name,value}=e.target
    
    setfetchdata({...fetchdata,[name]:value})
  }

  const handleSubmit =async(e)=>{
    e.preventDefault()
    try{
      const response = await fetch('https://2c2021f6-d50d-4137-90d9-f1206674974c-00-2m2ot2tq0ez58.sisko.replit.dev/api/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(fetchdata)
      })
      const data = await response.json()
      console.log(data)
      navigator("/login")
      if(data.message==="User created successfully"){
        alert("User created successfully")
      }
      else{
        alert("User already exists")
      }
      
    }catch(err){
      console.log(err)
      
    }finally{
      setfetchdata({
        name:"",
            email:"",
            password:""  
        })
      
    }
  
  }
  
  return(
    <div>
      
      <div className="signup">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <input type="text"  name="name"placeholder="Name" value={fetchdata.name}  onChange={handlechange}/>
          <input type="email"  name="email"placeholder="Email" value={fetchdata.email}  onChange={handlechange}/>
          <input type="password" name="password" placeholder="Password" value={fetchdata.password}  onChange={handlechange}/>
          
          <button type="submit">Signup</button>
          </form>
          </div>
    </div>
  )
}

export default Signup