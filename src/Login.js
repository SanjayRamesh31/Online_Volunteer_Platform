import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import { Link ,useNavigate } from "react-router-dom";

function App() {
	const navigate= useNavigate()
	const { register, formState: { errors } } = useForm();

	const handleSubmit = (e) => { 
		e.preventDefault();
		navigate('/dashboard')
	};


	return (
		<div className="box">

			<form className="App" onSubmit={handleSubmit}>
				<p className="p"> Login Form</p>
				<label>Username</label>
				<input type="text" {...register("name", { required: true })} />
				{errors.name && <span style={{ color: "red" }}>
					*Name* is mandatory </span>}
				<label>Email</label>
				<input type="email" {...register("email", { required: true })} />
				{errors.email && <span style={{ color: "red" }}>
					*Email* is mandatory </span>}
				<label>Password</label>
				<input type="password" {...register("password", { required: true })} />
				{errors.password && <span style={{ color: "red" }}>
					*Password* Required </span>}
				{/* <Grid container justifyContent={'center'}alignItems="center">
						<Grid item>
							<Checkbox className='u'/>
						</Grid>
						<Grid item>
							<label>I agree to all the Terms and Condition</label>
						</Grid>
					</Grid> */}
				<button type="submit">
                    <span className="b">
                        Submit
                    </span>
                </button>

				<Link to="/Register">Don't have an Account ? Sign Up</Link>
			</form>
		</div>
	);
}
export default App;