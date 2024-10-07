import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios' // Import axios

const FromRegister = () => {

    const [api, setApi] = useState({
        email: '',
        name: '',
        password: '',
        rePassword: ''
    })
    const navigate = useNavigate()

    function handleChange(e) {
        const { name, value } = e.target
        setApi(prev => ({
            ...prev,
            [name]: value
        }))
    }

     async function handleSubmit(e) {
        e.preventDefault()

        // Simple validation
        if (api.password !== api.rePassword) {
            alert("Passwords harus sama!")
            return
        }

        try {
            const respone = await axios.post("http://localhost:3888/api/register", api )
            alert("data berhasil disimpan !!")
            console.info(respone.data)
            navigate('/login')
        } catch (error) {
            console.error("ada yang salah bro", error)
            alert("nickname sudah ada ")
        }
    }

    return (
        <div className='w-screen h-screen flex items-center justify-center  bg-slate-100 '>
            <div className='w-[600px] rounded-xl gap-5 h-[550px] z-20 bg-white flex flex-col items-center shadow-2xl '>
                <h1 className='text-xl font-bold mt-5 '>Register From</h1>
                <form className='flex flex-col gap-4 w-full px-5 h-full ' onSubmit={handleSubmit}>
                    <span className='flex gap-3 flex-col  ' >
                        <label htmlFor="name">Name :</label>
                        <input onChange={handleChange} name='name' className='border rounded-[4px] pl-1 pr-5 w-[100%]  py-2' value={api.name} type="text" placeholder='Masukan Nama ' />
                    </span>
                    <span className='flex gap-3 flex-col' >
                        <label htmlFor="email">Email :</label>
                        <input onChange={handleChange} name='email' className='border rounded-[4px] pl-1 pr-5 w-[100%]  py-2' type="email" value={api.email} placeholder='Masukan Email ' />
                    </span>
                    <span className='flex gap-3 flex-col' >
                        <label htmlFor="password">Password :</label>
                        <input onChange={handleChange} name='password' className='border rounded-[4px] pl-1 pr-5 w-[100%]  py-2' type="password" value={api.password} placeholder='Masukan Password ' />
                    </span>
                    <span className='flex gap-3 flex-col' >
                        <label htmlFor="rePassword">Re-enter Password :</label>
                        <input onChange={handleChange} name='rePassword' className='border rounded-[4px] pl-1 pr-5 w-[100%]  py-2' type="password" value={api.rePassword} placeholder='Masukan rePassword ' />
                    </span>
                    <button className='py-2 bg-blue-500 rounded-md mt-3 text-white' type='submit'>Submit</button>
                    <span className='text-sm text-end -mt-2 text-gray-500'>Sudah punya akun?  <Link className='text-blue-300 ' to="/login">Login Page</Link></span>
                </form>
            </div>
        </div>
    )
}

export default FromRegister
