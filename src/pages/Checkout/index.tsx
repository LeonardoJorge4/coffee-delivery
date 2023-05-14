import { SelectedCoffees } from './components/SelectedCoffees';
import {
  Container,
  ContainerOrder,
  Title,
  ContainerAddress,
  ContainerPaymentOptions,
  HeaderAddress,
  AddressTitle,
  AddressDescription,
  ContainerFields,
  Input,
  ContainerPayment,
  CardPayment,
  IconMap,
  PaymentTitle,
  IconDollar,
  PaymentDescription,
  HeaderPaymentOptions,
  IconCreditCard,
  IconMoney,
  IconBank,
  PaymentOption,
} from './styles';

export function Checkout() {
  return (
    <Container>
      <ContainerOrder>
        <Title>Complete seu pedido</Title>

        <ContainerAddress>
          <HeaderAddress>
            <IconMap />

            <div>
              <AddressTitle>Endereço de Entrega</AddressTitle>
              <AddressDescription>
                Informe o endereço onde deseja receber seu pedido
              </AddressDescription>
            </div>
          </HeaderAddress>

          <ContainerFields>
            <Input
              type="text"
              placeholder="CEP"
            />
            <Input
              type="text"
              placeholder="Rua"
            />
            <Input
              type="text"
              placeholder="Número"
            />
            <Input
              type="text"
              placeholder="Complemento"
            />
            <Input
              type="text"
              placeholder="Bairro"
            />
            <Input
              type="text"
              placeholder="Cidade"
            />
            <Input
              type="text"
              placeholder="UF"
            />
          </ContainerFields>
        </ContainerAddress>

        <ContainerPaymentOptions>
          <HeaderPaymentOptions>
            <IconDollar />

            <div>
              <PaymentTitle>Pagamento</PaymentTitle>
              <PaymentDescription>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </PaymentDescription>
            </div>
          </HeaderPaymentOptions>

          <ContainerPayment>
            <CardPayment>
              <IconCreditCard />
              <PaymentOption>CARTÃO DE CRÉDITO</PaymentOption>
            </CardPayment>

            <CardPayment>
              <IconMoney />
              <PaymentOption>CARTÃO DE DÉBITO</PaymentOption>
            </CardPayment>

            <CardPayment>
              <IconBank />
              <PaymentOption>DINHEIRO</PaymentOption>
            </CardPayment>
          </ContainerPayment>
        </ContainerPaymentOptions>
      </ContainerOrder>

      <SelectedCoffees />
    </Container>
  );
}
