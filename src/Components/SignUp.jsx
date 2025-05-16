import React, { use } from 'react';
import { AuthContext } from '../AuthContex/AuthContex';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser } = use(AuthContext);
    const handleSignUP = e => {
        e.preventDefault();
        const form = e.target;
      const formData = new FormData(form);
      const { email, password, ...userProfile } = Object.fromEntries(formData.entries());


        // create user in firebase

        createUser(email, password)
          .then(result => {
              console.log(result)
              form.reset()
              
              // save data in my db

              fetch("http://localhost:3000/users", {
                method: 'POST',
                headers: {
                  
                  'content-type':'application/json'
                },
                body: JSON.stringify(userProfile)
              })
                .then(res => res.json())
                .then(data => {
                  if (data.insertedId) {
                    Swal.fire({
                      title: "Sign Up Successfully!",
                      icon: "success",
                      draggable: true,
                    });
                  }
                
              })
            })
            .catch(error => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>',
              });
        })
    }
    return (
      <div className="card bg-base-100 w-full max-w-sm mx-auto my-12 shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Sign Up Now!</h1>
          <form onSubmit={handleSignUP} className="fieldset">
            <label className="label">Name</label>
            <input type="text" name='name' className="input" placeholder="Email" />
            <label className="label">Address</label>
            <input type="text" name='address' className="input" placeholder="Email" />
            <label className="label">Phone</label>
            <input type="text" name='phone' className="input" placeholder="Email" />
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
          </form>
        </div>
      </div>
    );
};

export default SignUp;