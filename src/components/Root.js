import React, { useEffect, useState } from "react"
// import oldPets from "../petdata"
import PetList from "./PetList"
import axios from "axios"

const Root = () => {
  const [pets, setPets] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    (async function() {
      // const { data } = await axios.get("/api/pets")
      // setPets(data)
      try {
        const { data } = await axios.get("/api/pets")
        setPets(data)
      } catch (err) {
        setError(err.message)
        // console.error(err)
      }
    })()
  }, [])
  return (
    <>
      {error}
      <h1>Adoption Center</h1>
      <PetList pets={pets} />
    </>
  )
}

export default Root
