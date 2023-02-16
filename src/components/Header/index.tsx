import { ContainerHeader, ContainerBody, Location, MapPinIcon, CartContainer, ShoppingCartIconStyled } from "./styles"
import LogoPng from "../../assets/logo.png"


export function Header() {
  return (
    <ContainerHeader>
      <img src={LogoPng} alt="Coffee Delivery" />

      <ContainerBody>
        <Location>
          <MapPinIcon /> Londrina, PR
        </Location>

        <CartContainer>
          <ShoppingCartIconStyled />
        </CartContainer>
      </ContainerBody>
    </ContainerHeader>
  );
}