import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const restaurantCard = () => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Nome do restaurante</Title>
        <ReactStars count={5} isHalf activeColor="#e7711c" edit={false} value={4} />
        <Address>Rua Rio de Janeiro, 12345</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={restaurante} alt="foto do restaurante" />
    </Restaurant>
  );
};

export default restaurantCard;
