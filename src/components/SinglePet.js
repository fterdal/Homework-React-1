import React, { useState } from "react"

// This component receives props that look something like this:
/*
{
  pet: {
    name: "Rigatoni",
    species: "cat",
    description: "A flaming hot cheetoh in feline form"
  }
}
*/
const SinglePet = props => {
  console.log(props)
  const [adopted, setAdopted] = useState(false)
  const { name, description, species } = props
  return (
    <div className="single-pet">
      <h2>{name}</h2>
      <div>
        Species: {species}
        <span>
          {species === "cat" && " 😸"}
          {species === "dog" && " 🐶"}
        </span>
      </div>
      <div>{description}</div>
      <hr />
      <div>{adopted ? "Adopted!" : "Available for adoption"}</div>
      <button onClick={() => setAdopted(!adopted)}>Toggle Adopted</button>
    </div>
  )
}

export default SinglePet
