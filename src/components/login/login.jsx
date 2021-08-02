import React from 'react';
import styles from './login.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = ({authService}) => {
  const onLogin = event => {
    authService
    .login(event.currentTarget.textContent)
    .then(console.log);
  };

  return (
    <section className={styles.login}>
      <Header/>
        <section>
          <h1>Login</h1>
          <ul className={styles.list}>
            <li className={styles.item}><button className={styles.button} onClick={onLogin}>Google</button></li>
            <li className={styles.item}><button className={styles.button} onClick={onLogin}>Github</button></li>
          </ul>
        </section>
      <Footer/>
    </section>
  )
}

export default Login;