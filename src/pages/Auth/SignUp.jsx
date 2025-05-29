import React from 'react'
import classes from "./SignUp.module.css"
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'

function SignUp() {
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
          <input type="email" id='email' />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' />
        </div>
        <button className={classes.login__btn}>
          Sign In
        </button>
      </form>
      <p>
          By continuing, you agree to Amazon fake clone condition of use and sale. please see our conditions of Use and Privacy
          Notice.
        </p>
        <button className={classes.login__register}>Create your Amazon acoount</button>
      </div>
    </section>
  )
}

export default SignUp