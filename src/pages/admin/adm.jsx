import { useEffect, useState } from 'react'
import api from '../../services/api'
import './adm.css'

function Admin() {
  const [users, setUsers] = useState([])

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')
    setUsers(usersFromApi.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const countByService = () => {
    const serviceCount = {}
    users.forEach((user) => {
      if (serviceCount[user.servico]) {
        serviceCount[user.servico] += 1
      } else {
        serviceCount[user.servico] = 1
      }
    })
    return serviceCount
  }

  const countByUser = () => {
    const userCount = {}
    users.forEach((user) => {
      if (userCount[user.name]) {
        userCount[user.name] += 1
      } else {
        userCount[user.name] = 1
      }
    })
    return userCount
  }

  const countByChannel = () => {
    const channelCount = {}
    users.forEach((user) => {
      if (channelCount[user.canal]) {
        channelCount[user.canal] += 1
      } else {
        channelCount[user.canal] = 1
      }
    })
    return channelCount
  }

  const serviceCount = countByService()
  const userCount = countByUser()
  const channelCount = countByChannel()

  return (
    <div className='body-admin'>
    <div className="div-admin">
      <h2>Contadores</h2>
      <div className="counters">
        <div className="counter">
          <h3>Serviços</h3>
          {Object.keys(serviceCount).map((key) => (
            <p key={key}>
              <strong>{key}:</strong> {serviceCount[key]}
            </p>
          ))}
        </div>
        <div className="counter">
          <h3>Usuários</h3>
          {Object.keys(userCount).map((key) => (
            <p key={key}>
              <strong>{key}:</strong> {userCount[key]}
            </p>
          ))}
        </div>
        <div className="counter">
          <h3>Canais</h3>
          {Object.keys(channelCount).map((key) => (
            <p key={key}>
              <strong>{key}:</strong> {channelCount[key]}
            </p>
          ))}
        </div>
      </div>
    </div>
    </div>
  
  )
}

export default Admin