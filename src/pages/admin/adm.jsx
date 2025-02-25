import { useEffect, useState } from 'react'
import api from '../../services/api'
import './adm.css'

function Admin() {

  // essa função (getUsers) inteira é responsável por pegar o que esta no banco de dados; 
  // pelo get com axios.
  const [users, setUsers] = useState([])

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')
    setUsers(usersFromApi.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const contadorServco = () => {
    const servicoArray = {}
    users.forEach((user) => {
      if (servicoArray[user.servico]) {
        servicoArray[user.servico] += 1
      } else {
        servicoArray[user.servico] = 1
      }
    })
    return servicoArray
  }


  //oq acontece aqui:  é que ele pega o array de usuarios, la do hook (useState, "const [users, setUsers]") e cria um objeto vazio
  //depois ele faz um loop (forEach((user))) em cada usuario e verifica se o nome do usuario ja existe no objeto
  //se existir ele incrementa 1 no valor do nome do usuario, se não ele cria o nome do usuario e coloca 1
  const contadorUsuario = () => {
    const usuarioArray = {}
    users.forEach((user) => {
      if (usuarioArray[user.name]) {
        usuarioArray[user.name] += 1
      } else {
        usuarioArray[user.name] = 1
      }
    })
    return usuarioArray
  }

  const contadorCanal = () => {
    const canalArray = {}
    users.forEach((user) => {
      if (canalArray[user.canal]) {
        canalArray[user.canal] += 1
      } else {
        canalArray[user.canal] = 1
      }
    })
    return canalArray
  }

  const servicoContador = contadorServco()
  const usuarioContador = contadorUsuario ()
  const canalContador = contadorCanal()

  return (
    <div className='body-admin'>
    <div className="div-admin">
      <h2>Tela de Controle</h2>
      <div className="contadores">
        <div className="contador">
          <h3>Serviços</h3>
          
          {/* aqui ele pega o objeto do contador do servico, e traz apenas as chaves sem as quantidades.
          depois ele percorre essas chaves com o .map e coloca essas chaves em um paragrafo.  Apos isso ele mostra a quantidade 
          usando o servicoContador[key] */}
          {Object.keys(servicoContador).map((key) => (
            <p key={key}>
              <strong>{key}:</strong> {servicoContador[key]}
            </p>
          ))}
        </div>
        <div className="contador">
          <h3>Usuários</h3>
          {Object.keys(usuarioContador).map((key) => (
            <p key={key}>
              <strong>{key}:</strong> {usuarioContador[key]}
            </p>
          ))}
        </div>
        <div className="contador">
          <h3>Canais</h3>
          {Object.keys(canalContador).map((key) => (
            <p key={key}>
              <strong>{key}:</strong> {canalContador[key]}
            </p>
          ))}
        </div>
      </div>
    </div>
    </div>
  
  )
}

export default Admin