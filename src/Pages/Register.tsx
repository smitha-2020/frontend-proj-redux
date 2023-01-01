import React, { useEffect, useState } from 'react'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;
    
    const getData = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFormData((prevVal) => ({ ...prevVal, [field]: e.target.value }));
      }
    function onsubmitData( e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }
    return (
        <>
            <div>Register</div>
            <form onSubmit={(e) => onsubmitData(e)}>
                <div>
                    <span>Name</span>
                    <input type="text" value={name} name={name} id="name" onChange={(e) => getData('name',e)} placeholder="Enter your name" />
                </div>
                <div>
                    <span>Email</span>
                    <input type="text" value={email} name={email} id="email" onChange={(e) => getData('email',e)} placeholder="Enter email" />
                </div>
                <div>
                    <span>Password</span>
                    <input type="password" value={password} name={password} id="password" onChange={(e) => getData('password',e)} placeholder="Enter password" />
                </div>
                <div>
                    <span>Confirm Password</span>
                    <input type="password" value={password2} name={password2} id="password2" onChange={(e) => getData('password2',e)} placeholder="Confirm password" />
                </div>
                <button type="submit">submit</button>

            </form>

        </>
    )
}

export default Register