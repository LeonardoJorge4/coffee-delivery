import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import HomeBannerPng from "../../assets/home-banner.png";
import { CardCoffee } from "../../components/CardCoffee";

import {
  Container,
  SectionBanner,
  ContainerBanner,
  ContainerTitle,
  Title,
  Subtitle,
  Functionality,
  ContainerFunctionalities,
  TitleFunctionality,
  IconsBackground,
  IconBackgroundProps,
  SectionCoffees,
  CoffeeTitle,
  ContainerCardsCoffee,
} from "./styles";

interface FunctionalitiesProps {
  title: string;
  Icon: JSX.Element;
  background: IconBackgroundProps["background"];
}

export function Home() {
  const functionalities: FunctionalitiesProps[] = [
    {
      title: "Compra simples e segura",
      Icon: <ShoppingCart />,
      background: "yellowDark",
    },
    {
      title: "Embalagem mantém o café intacto",
      Icon: <Package />,
      background: "baseText",
    },
    {
      title: "Entrega rápida e rastreada",
      Icon: <Timer />,
      background: "yellow",
    },
    {
      title: "O café chega fresquinho até você",
      Icon: <Coffee />,
      background: "purple",
    },
  ];

  return (
    <Container>
      <SectionBanner>
        <ContainerBanner>
          <ContainerTitle>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a<br />
              qualquer hora
            </Subtitle>
          </ContainerTitle>

          <ContainerFunctionalities>
            {functionalities.map((item) => (
              <Functionality key={item.title}>
                <IconsBackground background={item.background}>
                  {item.Icon}
                </IconsBackground>
                <TitleFunctionality>{item.title}</TitleFunctionality>
              </Functionality>
            ))}
          </ContainerFunctionalities>
        </ContainerBanner>

        <img src={HomeBannerPng} alt="Coffee Delivery" />
      </SectionBanner>

      <SectionCoffees>
        <CoffeeTitle>Nossos cafés</CoffeeTitle>

        <ContainerCardsCoffee>
          {/* <CardCoffee coffee={} /> */}
        </ContainerCardsCoffee>
      </SectionCoffees>
    </Container>
  );
}
