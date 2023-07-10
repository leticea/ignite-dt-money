import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <table>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td width="50%">Hambúrguer</td>
              <td>- R$ 59,00</td>
              <td>Alimentação</td>
              <td>10/04/2023</td>
            </tr>
            <tr>
              <td width="50%">Aluguel do apartamento</td>
              <td>- R$ 1.200,00</td>
              <td>Casa</td>
              <td>27/03/2023</td>
            </tr>
          </tbody>
        </table>
      </TransactionsContainer>
    </div>
  );
}
