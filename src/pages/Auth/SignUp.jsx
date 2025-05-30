/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import classes from "./SignUp.module.css"
import Layout from '../../components/Layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from "../../utility/firebase"
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import { DataContext } from '../../components/DataProvider/DataProvider'
import { Type } from '../../utility/action.type'
import {ClipLoader} from "react-spinners"

function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  })
  const navigate = useNavigate()
  // console.log(email, password);
  const [{user}, dispatch] =useContext(DataContext)
  console.log(user);

  const authHandler = async (e)=> {
    e.preventDefault();
    if(e.target.name === "signin"){
      setLoading({...loading, signIn: true})
      signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        console.log(userInfo);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        })
        navigate('/')
        setLoading({...loading, signIn:false})
      }).catch((err)=>{
        setError(err.message)
        setLoading({...loading, signIn:false})
      })
    }else{
      setLoading({...loading, signUp:true})
      createUserWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        console.log(userInfo);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user
        })
        navigate('/')
        setLoading({...loading, signUp:false})
      }).catch((err)=>{
        setError(err.message)
        setLoading({...loading, signUp:false})
      })
    }
  }

  return (
    <section className={classes.login}>
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className={classes.login__container}>
        <h1>Sign In</h1>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type='submit' onClick={authHandler} name='signin' className={classes.login__btn}>
          {
            loading.signIn? (<ClipLoader color='#000' size={15} />):("Sign In")
          }
        </button>
      </form>
      <p>
          By continuing, you agree to Amazon fake clone condition of use and sale. please see our conditions of Use and Privacy
          Notice.
        </p>
        <button type='submit' onClick={authHandler} name='signup' className={classes.login__register}>
          {
            loading.signUp? (<ClipLoader color='#000' size={15} />):("Create Your Amazon Acoount")
          }
          </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  )
}

export default SignUp