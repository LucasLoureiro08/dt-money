import { useContext } from 'react';
import incomeImg from '../../assets/entrada.svg'
import outcomeImg from '../../assets/saida.svg'
import totalImg from '../../assets/total.svg'
import { Container } from "./styles";
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {

    const transactions = useContext(TransactionsContext)

    console.log(transactions)

    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                   R$ 1000,00
                </strong>
            </div>
            <div>
                <header>
                    <p>Saída</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>
                   R$ 1000,00
                </strong>
            </div>
            <div className='highlighted-card'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    R$ 0,00
                </strong>
            </div>
        </Container>
    )
}