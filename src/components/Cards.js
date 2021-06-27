import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Start Exploring these Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/moon.jpeg'
              text="Shoot for the moon. Even if you miss, you'll land among the stars."
              label='Moon'
              path='/services'
            />
            <CardItem
              src='images/mars.jpeg'
              text='Travel through The Red Planet.'
              label='Mars'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/hole.jpeg'
              text='Step foot in the darkest place in space.'
              label='Black Hole'
              path='/services'
            />
            <CardItem
              src='images/pluto.jpeg'
              text='Explore the Dwarf Planet.'
              label='Pluto'
              path='/products'
            />
            <CardItem
              src='images/milk.jpeg'
              text='Ride along the Galactic Circle.'
              label='Milky Way'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
