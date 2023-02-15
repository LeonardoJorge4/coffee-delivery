import { ContainerHeader, Location, MapPinIcon } from "./styles"
import LogoPng from "../../assets/logo.png"


export function Header() {
  return (
    <ContainerHeader>
      <img src={LogoPng} alt="Coffee Delivery" />

      <div>
        <Location>
          <MapPinIcon /> Londrina, PR
        </Location>
      </div>
    </ContainerHeader>
  );
}