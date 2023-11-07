import incomeImg from '../../assets/entrada.svg'
import outcomeImg from '../../assets/saida.svg'
import totalImg from '../../assets/total.svg'
import { Container } from "./styles";
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {

    const { transactions } = useTransactions()
    // Essa seria uma das formas para criar 3 variaveis diferentes para cada lugar do Summary: Entrada, Saída e Total
    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if (transaction.type === 'deposit') {
    //       return acc + transaction.amount;
    //     } 

    //     return acc
    // }, 0)

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0, 
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                      }).format(summary.deposits)
                    }
                </strong>
            </div>
            <div>
                <header>
                    <p>Saída</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                      }).format(summary.withdraws)
                    }
                </strong>
            </div>
            <div className='highlighted-card'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                      }).format(summary.total)
                    }
                </strong>
            </div>
        </Container>
    )
}