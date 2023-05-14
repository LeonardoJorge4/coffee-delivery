import {
  AmountCoffee,
  BaseContainerConfirmPrices,
  ButtonChangeAmountCoffee,
  ButtonConfirmOrder,
  ButtonRemoveCoffee,
  CoffeeCheckoutPrice,
  CoffeeImage,
  CoffeeTitle,
  Container,
  ContainerActions,
  ContainerChangeAmountCoffee,
  ContainerCoffeeCheckout,
  ContainerConfirmPrices,
  IconMinus,
  IconPlus,
  IconTrash,
  Title,
  TitleButtonRemoveCoffee,
  TotalAmount,
  TotalItens,
} from './styles';

import AmericanPng from '../../../../assets/coffees/american.png';

export function SelectedCoffees() {
  return (
    <div>
      <Title>Cafés selecionados</Title>

      <Container>
        <ContainerCoffeeCheckout>
          <CoffeeImage src={AmericanPng} />

          <div>
            <CoffeeTitle>Expresso Tradicional</CoffeeTitle>

            <ContainerActions>
              <ContainerChangeAmountCoffee>
                <ButtonChangeAmountCoffee>
                  <IconMinus />
                </ButtonChangeAmountCoffee>

                <AmountCoffee>1</AmountCoffee>

                <ButtonChangeAmountCoffee>
                  <IconPlus />
                </ButtonChangeAmountCoffee>
              </ContainerChangeAmountCoffee>

              <ButtonRemoveCoffee>
                <IconTrash />
                <TitleButtonRemoveCoffee>REMOVER</TitleButtonRemoveCoffee>
              </ButtonRemoveCoffee>
            </ContainerActions>
          </div>

          <CoffeeCheckoutPrice>R$ 9,90</CoffeeCheckoutPrice>
        </ContainerCoffeeCheckout>

        <ContainerConfirmPrices>
          <BaseContainerConfirmPrices>
            <TotalItens>Total de itens</TotalItens>
            <TotalItens>R$ 29,70</TotalItens>
          </BaseContainerConfirmPrices>

          <BaseContainerConfirmPrices>
            <TotalItens>Entrega</TotalItens>
            <TotalItens>R$ 3,50</TotalItens>
          </BaseContainerConfirmPrices>

          <BaseContainerConfirmPrices>
            <TotalAmount>Total</TotalAmount>
            <TotalAmount>R$ 33,20</TotalAmount>
          </BaseContainerConfirmPrices>

          <ButtonConfirmOrder>CONFIRMAR PEDIDO</ButtonConfirmOrder>
        </ContainerConfirmPrices>
      </Container>
    </div>
  );
}
