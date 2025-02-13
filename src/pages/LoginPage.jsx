import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'



function LoginPage() {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

   

    const navigate = useNavigate() 

    const inputRef = useRef();
    
    useEffect(()=>{
         inputRef.current.focus();
        // console.log(inputRef);
        
    },[])

    function handleInput(event){
      
        if(event.target.name === 'email')
            {
            setEmail(event.target.value)
        }else if(event.target.name === 'password')
        {
            setPassword(event.target.value)
        }
       
       
    }

    function handleSubmit(event){
        event.preventDefault()// So ovaa metoda go stopirame defoltnoto odnesuvanje na formata da ne se prikazat 

        // 1.Cuvanje na podatoci vo Lokalstorige         
        localStorage.setItem('vite-user',
        JSON.stringify({email,password}))

        // Redirect kon Home page

        setEmail('')
        setPassword('')

        setTimeout(()=>{
            toast.success('Podatocite Se Dobri -Logirani ste')
            navigate('/')
        },5000)

        
        
    }

  return (
    <div className='container mx-auto'>
        <h1 className='text-center text-2xl my-[50px]'>Login</h1>
        <form className='w-[50%] border-2 border-blue-500 mx-auto p-[20px] flex flex-col
        gap-[20px] '>
            <input type="email"
                   placeholder='email'
                   className='border px-[12px] py-[20px]'
                   name='email'
                   value={email}
                   onInput={handleInput}
                   ref = {inputRef}
            />
            <input type="password"
                   placeholder='password'
                   className='border px-[12px] py-[20px]'
                   name='password'
                   value={password}
                   onInput={handleInput}
           />
           <button className='w-[100%] bg-blue-400 px-[12px] text-white py-[20px]'
                   onClick={handleSubmit}
                   type='submit'>
                    Submit</button>
        </form>
    </div>
  )
}

export default LoginPage