import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import HomeBannerPng from '../../assets/home-banner.png'

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
} from './styles'

interface FunctionalitiesProps {
  title: string;
  Icon: JSX.Element;
  background: IconBackgroundProps['background']
}

export function Home() {
  const functionalities: FunctionalitiesProps[] = [
    {
      title: 'Compra simples e segura',
      Icon: <ShoppingCart />,
      background: 'yellowDark'
    },
    {
      title: 'Embalagem mantém o café intacto',
      Icon: <Package />,
      background: 'baseText'
    },
    {
      title: 'Entrega rápida e rastreada',
      Icon: <Timer />,
      background: 'yellow'
    },
    {
      title: 'O café chega fresquinho até você',
      Icon: <Coffee />,
      background: 'purple'
    }
  ]

  return (
    <Container>
      <SectionBanner>
        <ContainerBanner>
          <ContainerTitle>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a<br />qualquer hora</Subtitle>
          </ContainerTitle>

          <ContainerFunctionalities>
            {
              functionalities.map((item) => (
                <Functionality>
                  <IconsBackground background={item.background}>
                    {item.Icon}
                  </IconsBackground>
                  <TitleFunctionality>{item.title}</TitleFunctionality>
                </Functionality>
              ))
            }
          </ContainerFunctionalities>
        </ContainerBanner>

        <img src={HomeBannerPng} alt="Coffee Delivery" />
      </SectionBanner>
    </Container>
  );
}