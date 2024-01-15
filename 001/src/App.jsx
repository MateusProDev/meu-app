import React from './assets/react.svg'
import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/listRender'

function App() {
  return (
    <>
      <div>
        <h1>Meu Projeto 001 em React</h1>
        <img src="/vite.svg" alt="Imagem Teste" />
      </div>
      <div>
        <h2>Teste do acesso à imagem pelo  assets</h2>
        <img src={React} alt="Imagem do React" />
      </div>
      <ManageData />
      <ListRender />
    </>
  )
}

export default App
