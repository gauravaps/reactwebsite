import React, { useState } from 'react'

const Contact1 = () => {
	const[data,setData]=useState({fullname:"",number:"",email:"", msg:'',})

	const inputevent=(event)=>{
		const{name,value}=event.target; 
		setData((preval)=>{
			return {...preval, [name]:value,
			};
			
		});
	

	};

	const formSubmit=(e)=>{
		e.preventDefault();
		alert(`name is ${data.fullname} email id is ${data.email} and mobile number is ${data.number} and massege is
		${data.msg}`)		

	}
  return (
    

<div className="container">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
	<h3 className='h3'>Contact Form</h3>
	<form className='form1' onSubmit={formSubmit} >
		
		<input className='field' name="fullname" value={data.fullname} onChange={inputevent} type="text" required placeholder="Enter your name"/>
		<br/><br />

		<input className='field' name="email" value={data.email} onChange={inputevent} type="text" required placeholder="enter your email"/>
		<br/><br />

		<input className='field' name="number" value={data.number} onChange={inputevent} type="number" required placeholder="Enter mobile number"/>
		<br/><br />
		
		<textarea name="msg" value={data.msg} onChange={inputevent} cols="30" rows="10" placeholder="Enter your message..." required> </textarea>
		<div className="center">
			<input className='btnname' type="submit" value="Submit"/>
		</div>
    
	</form>	
	<div className='icon'> 
	<p className='tags'> follow Us On.. 
	<i  className="fa fa-fw fa-facebook" ></i>
	<i className="fa fa-fw fa-youtube" ></i>
	<i className="fa fa-fw fa-instagram" ></i>
	<i className="fa fa-fw fa-twitter" ></i>
	<i className="fa fa-fw fa-linkedin" ></i>
	</p>
	</div>
</div>
      
  
  )
}

export default Contact1;