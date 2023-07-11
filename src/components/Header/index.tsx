import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
