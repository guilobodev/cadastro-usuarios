import { useEffect, useState } from 'react'
import api from '../../services/api'
import './adm.css'
import * as XLSX from 'xlsx';


function Admin() {




  

  // essa função (getUsers) inteira é responsável por pegar o que esta no banco de dados; 
  // pelo get com axios.
  const [users, setUsers] = useState([])

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')
    setUsers(usersFromApi.data)
    alert('Dados Atualizados')
  }

  useEffect(() => {
    getUsers()
  }, [])



  //https://www.tabnews.com.br/mayconbalves/como-exportar-dados-de-uma-api-para-excel-usando-react
  // site que ensina a exportar dados para excel
  
  const baixarDados = () => {
    const linhas = users.map((user) => {
      return [user.name, user.servico, user.canal]
    } )
    
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.aoa_to_sheet([['Nome', 'Serviço', 'Canal'], ...linhas])
    XLSX.utils.book_append_sheet(wb, ws, 'Usuarios')
    XLSX.writeFile(wb, 'atendimento.xlsx')




  }

 

  //oq acontece aqui: essa função, ela pega o array de usuarios, la do hook (useState, "const [users, setUsers]") e cria um objeto vazio -> usuarioObj = {};
  //depois ele faz um loop (forEach((user))) em cada usuario e verifica se o nome do usuario ja existe no objeto, se for o primeiro, ele nao existe
  //então ele cria o nome do usuario e coloca 1, se o nome do usuario ja existir, ele incrementa 1 no valor do nome do usuario
  //depois ele retorna o objeto com os nomes dos usuarios e a quantidade de vezes que eles aparecem

  const contadorUsuario = () => {
    const usuarioObj = {}
    users.forEach((user) => {
      if (usuarioObj[user.name]) {
        usuarioObj[user.name] += 1
      } else {
        usuarioObj[user.name] = 1
      }
    })
    return usuarioObj
  }

  const contadorServco = () => {
    const servicoObj = {}
    users.forEach((user) => {
      if (servicoObj[user.servico]) {
        servicoObj[user.servico] += 1
      } else {
        servicoObj[user.servico] = 1
      }
    })
    return servicoObj
  }


  const contadorCanal = () => {
    const canalObj = {}
    users.forEach((user) => {
      if (canalObj[user.canal]) {
        canalObj[user.canal] += 1
      } else {
        canalObj[user.canal] = 1
      }
    })
    return canalObj
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
      <div className='botao-container'> 
        <button onClick={getUsers} className='botaoAtualizar' >Atualizar</button>
        <button onClick={baixarDados} className='botaoExcel'>baixar dados</button>
      </div>
    </div>
    </div>
  
  )
}

export default Admin