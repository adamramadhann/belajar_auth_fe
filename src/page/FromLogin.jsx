import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const FromLogin = () => {

    const [api, setApi] = useState({
        email : '',
        password : ''
    })

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const response = await axios.post('http://localhost:3888/api/login', api)
            const token = response.data
            alert('login berhasil')
            navigate("/")
            localStorage.setItem(token)
        } catch (error) {
            alert('data yang anda masukan salah')
            console.error(error)
        }
    }

    function handleChange(e) {
        const {name, value} = e.target
        setApi(prev => ({
            ...prev,
            [name] : value
        }))
    }


  return (
    <div className='w-screen h-screen flex items-center justify-center  bg-slate-100 '>
    <div className='w-[600px] rounded-xl gap-5 h-[3z50px] z-20 bg-white flex flex-col items-center shadow-2xl '>
        <h1 className='text-xl font-bold mt-5 '>From Login</h1>
        <form className='flex flex-col gap-4 w-full px-10 h-full' onSubmit={handleSubmit} >
            <span className='flex gap-3 flex-col' >
                <label htmlFor="email">Email :</label>
                <input onChange={handleChange} value={api.email}  name='email' className='border rounded-[4px] pl-1 pr-5 w-[100%]  py-2' type="email"  placeholder='Masukan Email ' />
            </span>
            <span className='flex gap-3 flex-col' >
                <label htmlFor="password">Password :</label>
                <input onChange={handleChange} value={api.password} name='password' className='border rounded-[4px] pl-1 pr-5 w-[100%]  py-2' type="password"  placeholder='Masukan Password ' />
            </span>
            <button className='py-2 bg-blue-500 rounded-md mt-3 text-white' type='submit'>Submit</button>
            <span className='text-sm text-end -mt-2 text-gray-500 mb-5'>Sudah punya akun?  <Link className='text-blue-300 ' to="/">Login Register</Link></span>
        </form>
    </div>
</div>
  )
}

export default FromLogin