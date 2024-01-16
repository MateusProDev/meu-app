import { useState } from 'react'

const ManageData = () => {
  const [number, setNumber] = useState(0);


  return (
    <>
      <div>ManageData</div>
      <p>Benjamin: {number}</p>
      <button onClick={() => setNumber(10)}>Adcionar 10</button>
    </>
  )
}

export default ManageData;

