import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {

  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'elina',
      company: 'google',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'elinapark0818@gmail.com',
      message: 'go for it',
      fileName: 'elina_img',
      fileURL: null,
    },
    {
      id: '2',
      name: 'elina2',
      company: 'google',
      theme: 'light',
      title: 'Software Engineer',
      email: 'elinapark0818@gmail.com',
      message: 'go for it',
      fileName: 'elina_img',
      fileURL: 'Elina.png',
    },
    {
      id: '3',
      name: 'elina3',
      company: 'google',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'elinapark0818@gmail.com',
      message: 'go for it',
      fileName: 'elina_img',
      fileURL: null,
    }
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if(!user) {
        history.push('/');
      }
    });
  });

  const addCard = card => {
    const updated = [...cards, card];
    setCards(updated);
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard}/>
        <Preview cards={cards}/>

      </div>
      <Footer />
    </section>
  )

};


export default Maker;