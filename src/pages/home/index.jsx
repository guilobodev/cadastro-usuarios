import { useEffect, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api'
import logo from '../../assets/logoSEADgov.png'

function Home() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputServico = useRef()
  const inputCanal = useRef()




// aqui ele cria os usuarios no banco de dados
// ele pega os valores dos inputs e coloca em variaveis
// depois ele faz um post com axios para o backend


async function createUsers(){
  const name = inputName.current.value;
  const servico = inputServico.current.value;
  const canal = inputCanal.current.value;

  console.log(name, servico, canal);


  alert('atendimento criado com sucesso')


  await api.post('/post', {name, servico, canal})
}





  return (
    <div className="home-body">
    <div className="container">
      <form>
        <h1>Atendimento</h1>
        <div className='nome'>
          <select name="atendentes" id="atendentes" ref={inputName}>
            <option value="Pedro Santos">Pedro Santos</option>
            <option value="Rhuana Figueiredo">Rhuana figueiredo</option>
            <option value="Alexandre Santos">Alexandre Santos</option>
            <option value="Tacyanna Santiago">Tacyanna Santiago</option>
            <option value="Jessica Magalhaes">Jessica Magalhães</option>
            <option value="Barbara Yalle">Bárbara Yalle</option>
            <option value="Moane Santos">Moane Santes</option>
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
            <option value="Alteração de endereço">alteração de endereço</option>
            <option value="Censo previdenciario">censo previdenciário</option>
            <option value="Censo universitario">censo universitário</option>
            <option value="Analise de comprovante de rendimento">analise de comprovante de rendimento</option>
            <option value="Declaracao de dependentes">declaracao de dependentes</option>
            <option value="Declaracao de inexistencia de vinculo">declaracao de inexistencia de vinculo</option>
            <option value="Declaracao de pensao alimenticia">declaracao de pensao alimenticia</option>
            <option value="Declaracao de tempo de averbacao">declaracao de tempo de averbacao</option>
            <option value="Declaracao para abertura da conta">declaração para abertura da conta</option>
            <option value="Defesa administrativa">defesa administrativa</option>
            <option value="Denuncia">denuncia</option>
            <option value="Emissao de senha-portal">emissão de senha-portal</option>
            <option value="Inclusao/exclusao de dependente">inclusão/exclusão de dependente</option>
            <option value="Inf.processo de aposentadoria">inf.processo de aposentadoria</option>
            <option value="Inf.processo de pensao">inf.processo de pensão</option>
            <option value="Obito para finalizacao">óbito para finalização</option>
            <option value="Pedido de certidao de tempo de contribuicao">pedido de certidão de tempo de contribuição</option>
            <option value="Pedido de copia de processos">pedido de cópia de processos</option>
            <option value="Pedido de insencao de imposto de renda">pedido de insenção de imposto de renda</option>
            <option value="Pedido de pensao">pedido de pensão</option>
            <option value="Pedido de recolhimento de contribuicao previdenciaria">pedido de recolhimento de contribuição previdenciária</option>
            <option value="Pedido de restituicao de valores">pedido de restituição de valores</option>
            <option value="Pedido de saldo de proventos">pedido de saldo de proventos</option>
            <option value="Prova de vida">prova de vida</option>
            <option value="Reconsideracao de decisao administrativa">reconsideração de decisão administrativa</option>
            <option value="Revisao de aposentadoria">revisão de aposentadoria</option>
            <option value="Revisao de pensao">revisão de pensão</option>

          </select>
        </div>

        <div className='canal'>
          <select name="canal" id="canal" ref={inputCanal}>
            <option value="Whatsapp">Whatsapp</option>
            <option value="Email">Email</option>
            <option value="Recepção">Recepção</option>
            <option value="Central telefonica">central telefonica</option>
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
