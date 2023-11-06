import Modal from 'react-modal'
import incomeImg from '../../assets/entrada.svg'
import outcomeImg from '../../assets/saida.svg'
import closeImg from '../../assets/botaoFechar.svg'
import { Container, TransactionTypeContainer, RadioTypeButton } from './styles'
import { FormEvent, useState, useContext } from 'react'
import { api } from '../../services/api'
import { TransactionsContext } from '../../TransactionsContext'

interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext)
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')
  
  function handleCreateNewTransaction (event: FormEvent) {
    event.preventDefault()
    createTransaction({
      title,
      amount,
      category,
      type
    })
  }

  return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
        <button 
          type="button" 
          onClick={onRequestClose} 
          className='react-modal-close'>
          <img src={closeImg} alt="Fechar modal" />
        </button>
        
        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar Transação</h2>
          <input 
            placeholder='Título'
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <input 
            type='number'
            placeholder='Valor'
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioTypeButton
              type="button"
              // Uma forma de indentificar se o botão está selecionado
              // className={ type === 'deposit' ? 'active' : ''}
              // A segunda forma é passando uma propriedade para o componente que é criado uma interface no arquivo
              //styles.ts e estilizando a partir de lá utilizando ${ (props) => props.+propriedade ? 'estilização1': 'estilização2}
              onClick={() =>{ setType('deposit') }}
              isActive={type === 'deposit'}
              activeColor='green'
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioTypeButton>
            
            <RadioTypeButton 
              type="button"
              onClick={() => { setType('withdraw') }}
              isActive={type === 'withdraw'}
              activeColor='red'
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioTypeButton>
          </TransactionTypeContainer>

           <input 
            placeholder='Categoria'
            value={category}
            onChange={event => setCategory(event.target.value)}
          />
          <button className='transaction-button' type="submit">
            Cadastrar
          </button>
        </Container>
      </Modal>
  )
}