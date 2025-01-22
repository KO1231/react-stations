// @ts-check

import { useEffect, useState } from "react";
import BreedsSelect from "./BreedsSelect";
import DogImage from "./DogImage";

const maxImages = 12;

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState(['']);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [breedImages, setBreedImages] = useState(['']);

  async function fetchDogList() {
    try{
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if(data.status !== 'success') {
        throw new Error('API response was not ok');
      }

      setBreeds(Object.keys(data.message));
      setSelectedBreed(Object.keys(data.message)[0]);

    }catch(error) {
      console.error(error);
    }
  }

  async function fetchDogImages() {
    try{
      const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/${maxImages}`)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if(data.status !== 'success') {
        throw new Error('API response was not ok');
      }

      setBreedImages(data.message);

    }catch(error) {
      console.error(error);
    }
  }

  // @ts-ignore
  function handleBreedsChange(event) {
    setSelectedBreed(event.target.value);
  }

  useEffect(() => {
    fetchDogList();
  }, []);

  return (
    <div>
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} handleBreedsChange={handleBreedsChange}/>
      <button onClick={fetchDogImages}>表示</button>
      {breedImages.map((image, index) => (
          <DogImage key={index} imageUrl={image} alt={`dog ${selectedBreed} ${index+1}`} />
        ))}
    </div>
  );
}

export default DogListContainer
