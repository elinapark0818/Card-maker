import React from 'react';
import styles from './login.module.css';
import { signInWithGoogle } from '../../firebase.utills';

const Login = (props) => {
  return (

  <section>  
    <header>
      <img 
      src="/images/logo.png" 
      alt="logo" 
      />
      <h1>
        Business Card Maker
      </h1>
    </header>

    <main>
      <div className={styles.login__btn}>
        <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
      </div>
      <div className={styles.login__btn}>
        <button>SIGN IN WITH GITHUB</button>
      </div>
    </main>

    <footer>
      <p>Code your dream</p>
    </footer>

  </section>
  )
}

export default Login;