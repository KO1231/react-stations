// @ts-check

import { useState } from "react";
import DogImage from "./DogImage";

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');

  async function renewDogImage() {
    try{
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if(data.status !== 'success') {
        throw new Error('API response was not ok');
      }

      setDogUrl(data.message);
    }catch(error) {
      console.error(error);
    }
  }

  return (
    <>
      <p>犬の画像です</p>
      <DogImage imageUrl={dogUrl} alt='犬の画像'/>
    </>
  )
}

export default Description
