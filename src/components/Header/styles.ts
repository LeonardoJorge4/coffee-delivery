import styled from 'styled-components'
import { MapPin, ShoppingCart } from "phosphor-react";

export const ContainerHeader = styled.header`
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerBody = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  padding: .5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['purple-light']};

  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme['purple-dark']};
`;

export const MapPinIcon = styled(MapPin)`
  color: ${({ theme }) => theme['purple']};
  margin-right: 4px;
  font-size: 22px;
`;

export const CartContainer = styled.div`
  height: 38px;
  padding: .5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['yellow-light']};
`;

export const ShoppingCartIconStyled = styled(ShoppingCart)`
  font-size: 22px;
  color: ${({ theme }) => theme['yellow-dark']};
`;