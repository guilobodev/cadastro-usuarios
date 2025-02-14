import { useEffect, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api'
import logo from '../../assets/logoSEADgov.png'

function Home() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputServico = useRef()
  const inputCanal = useRef()

// async function getUsers(){
//   const usersFromApi = await api.get('/usuarios')
//   setUsers(usersFromApi.data)
  
// }

// useEffect(() => { 
//   getUsers()
// }
// , [])



async function createUsers(){
  const name = inputName.current.value;
  const servico = inputServico.current.value;
  const canal = inputCanal.current.value;

  console.log(name, servico, canal);

  alert('atendimento criado com sucesso')


  await api.post('/post', {name, servico, canal})
}





  return (
  
    <div className="container">
      <form>
        <h1>Atendimento</h1>
        <div className='nome'>
          <select name="atendentes" id="atendentes" ref={inputName}>
            <option value="guilherme">guilherme</option>
            <option value="vinicius">vinicius</option>
            <option value="humberto">humberto</option>
            <option value="gabriel">gabriel</option>
            <option value="jessica">jessica</option>
          </select>
        </div>


        <div className='cliente'>
          <select name="servico" id="servico" ref={inputServico}>
            <option value="Alteração de conta bancária">Alteração de conta bancária</option>
            <option value="tecnologia">tecnologia</option>
            <option value="tiradentes">tiradentes</option>
            <option value="ufologia">ufologia</option>
          </select>
        </div>

        <div className='canal'>
          <select name="canal" id="canal" ref={inputCanal}>
            <option value="Whatsapp">Whatsapp</option>
            <option value="Email">Email</option>
            <option value="Recepção">Recepção</option>
          </select>
        </div>
        <button type="button" onClick={createUsers}>enviar</button>
      </form>

      <div className="image-container">
        <img src={logo} alt="Descrição da imagem" />
      </div>
    </div>       
  )
}

export default Home
