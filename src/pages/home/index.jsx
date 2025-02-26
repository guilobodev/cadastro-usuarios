import { useEffect, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api'
import logo from '../../assets/logoSEADgov.png'

function Home() {
  //estou referenciando que no select de nome, servico e canal, eu quero pegar o valor deles usando o useRef

  const inputName = useRef()
  const inputServico = useRef()
  const inputCanal = useRef()

// essa funcao ela cria, quando acionada,  os usuarios no banco de dados
// ele pega os valores dos inputs e coloca em variaveis
// depois ele faz um post com axios para o backend


async function createUsers(){
  const name = inputName.current.value;
  const servico = inputServico.current.value;
  const canal = inputCanal.current.value;

  console.log(name, servico, canal);
  await api.post('/post', {name, servico, canal})
  alert('atendimento criado com sucesso')
}





  return (
    <div className="home-body">
    <div className="container">
      <form>
        <h1>Atendimento</h1>
        <div className='nome'>
  <select name="atendentes" id="atendentes" ref={inputName}>
    <option value="Pedro Santos">Pedro Santos</option>
    <option value="Rhuana Figueiredo">Rhuana Figueiredo</option>
    <option value="Alexandre Santos">Alexandre Santos</option>
    <option value="Tacyanna Santiago">Tacyanna Santiago</option>
    <option value="Jessica Magalhães">Jessica Magalhães</option>
    <option value="Barbara Yalle">Bárbara Yalle</option>
    <option value="Moane Santos">Moane Santos</option>
    <option value="Mirele Serra">Mirele Serra</option>
    <option value="Kamila Menezes">Kamila Menezes</option>
    <option value="Hugo Leite">Hugo Leite</option>
    <option value="Priscila Almeida">Priscila Almeida</option>
    <option value="Patricia Teixeira">Patrícia Teixeira</option>
  </select>
</div>

<div className='servico'>
  <select name="servico" id="servico" ref={inputServico}>
    <option value="Alteração de conta bancária">Alteração de conta bancária</option>
    <option value="Alteração de endereço">Alteração de endereço</option>
    <option value="Censo previdenciário">Censo previdenciário</option>
    <option value="Censo universitário">Censo universitário</option>
    <option value="Análise de comprovante de rendimento">Análise de comprovante de rendimento</option>
    <option value="Declaração de dependentes">Declaração de dependentes</option>
    <option value="Declaração de inexistência de vínculo">Declaração de inexistência de vínculo</option>
    <option value="Declaração de pensão alimentícia">Declaração de pensão alimentícia</option>
    <option value="Declaração de tempo de averbação">Declaração de tempo de averbação</option>
    <option value="Declaração para abertura da conta">Declaração para abertura da conta</option>
    <option value="Defesa administrativa">Defesa administrativa</option>
    <option value="Denúncia">Denúncia</option>
    <option value="Emissão de senha-portal">Emissão de senha-portal</option>
    <option value="Inclusão/exclusão de dependente">Inclusão/exclusão de dependente</option>
    <option value="Inf. processo de aposentadoria">Inf. processo de aposentadoria</option>
    <option value="Inf. processo de pensão">Inf. processo de pensão</option>
    <option value="Óbito para finalização">Óbito para finalização</option>
    <option value="Pedido de certidão de tempo de contribuição">Pedido de certidão de tempo de contribuição</option>
    <option value="Pedido de cópia de processos">Pedido de cópia de processos</option>
    <option value="Pedido de isenção de imposto de renda">Pedido de isenção de imposto de renda</option>
    <option value="Pedido de pensão">Pedido de pensão</option>
    <option value="Pedido de recolhimento de contribuição previdenciária">Pedido de recolhimento de contribuição previdenciária</option>
    <option value="Pedido de restituição de valores">Pedido de restituição de valores</option>
    <option value="Pedido de saldo de proventos">Pedido de saldo de proventos</option>
    <option value="Prova de vida">Prova de vida</option>
    <option value="Reconsideração de decisão administrativa">Reconsideração de decisão administrativa</option>
    <option value="Revisão de aposentadoria">Revisão de aposentadoria</option>
    <option value="Revisão de pensão">Revisão de pensão</option>
  </select>
</div>


        <div className='canal'>
          <select name="canal" id="canal" ref={inputCanal}>
            <option value="Whatsapp">Whatsapp</option>
            <option value="Email">Email</option>
            <option value="Recepção">Recepção</option>
            <option value="Central telefonica">Central Telefônica</option>
          </select>
        </div>
        <button type="button" onClick={createUsers}>enviar</button>  
        {/* botao para crar os dados no "/post" */}
      </form>

      <div className="image-container">
        <img src={logo} alt="logo do sergipe prevencia" />
      </div>
    </div>
  </div>       
  )
}

export default Home
