import { useState } from "react";

// Componente funcional ManageData
const ManageData = () => {
  // Utiliza o hook useState para gerenciar o estado do componente
  // A função useState retorna um array com dois elementos:
  //   - A variável de estado (number)
  //   - A função para atualizar a variável de estado (setNumber)
  const [number, setNumber] = useState(0); // Inicializa o estado com o valor 25

  return (
    <>
      {/* Elemento JSX representando o componente */}
      <div>ManageState</div>
      
      {/* Exibe o valor da variável de estado 'number' */}
      <h3>Valor: {number} </h3>
      
      {/* Botão que, quando clicado, chama a função setNumber para atualizar o estado para 15 */}
      <button onClick={() => setNumber(15)}>Adicionar 15</button>
    </>
  );
}

// Exporta o componente ManageData para ser utilizado em outros lugares
export default ManageData;
