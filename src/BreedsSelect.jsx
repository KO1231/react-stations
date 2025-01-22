// @ts-nocheck

export const BreedsSelect = (props) => {

  return (
    <div>
      <select value={props.selectedBreed} onChange={props.handleBreedsChange}>
      {props.breeds.map(breed => (
        <option key={breed}>{breed}</option>
      ))}
    </select>
    </div>
  )
}

export default BreedsSelect
