import { useState } from 'react'

const ListRender = () => {
    const [users] = useState([
        { id: 7, name: "Mateus", age: 25 },
        { id: 77, name: "Lais", age: 23 },
        { id: 777, name: "Benjamin", age: 0.6 },
    ]);

  return (
    <>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
    </>
  );
};

export default ListRender;