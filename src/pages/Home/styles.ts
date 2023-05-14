import styled from 'styled-components'

const FUNCTIONALITIES_BG_COLORS = {
  yellowDark: 'yellow-dark',
  baseText: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const

export interface IconBackgroundProps {
  background: keyof typeof FUNCTIONALITIES_BG_COLORS
}

export const Container = styled.main`
  width: 100%;
`;

export const SectionBanner = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 98px 0;
`;

export const ContainerBanner = styled.div`
  height: 100%;
`;

export const ContainerTitle = styled.div`
  margin-bottom: 66px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme['base-title']};
  font-size: 3rem;
  font-family: 'Baloo 2', sans-serif;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme['base-subtitle']};
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 130%;
`;

export const ContainerFunctionalities = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const Functionality = styled.div`
  gap: 12px;
  display: flex;
  align-items: center;
`;

export const IconsBackground = styled.div<IconBackgroundProps>`
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 100%;
  color: ${({ theme }) => theme['white']};
  background-color: ${({ theme, background }) => theme[FUNCTIONALITIES_BG_COLORS[background]]};
`;

export const TitleFunctionality = styled.span`
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 130%;
`;

export const SectionCoffees = styled.div``;

export const CoffeeTitle = styled.h2`
  color: ${({ theme }) => theme['base-subtitle']};
  font-size: 2rem;
  font-family: 'Baloo 2', sans-serif;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  margin: 32px 0;
`;

export const ContainerCardsCoffee = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
`;

