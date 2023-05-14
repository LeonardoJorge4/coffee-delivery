import { Minus, Plus, Trash } from 'phosphor-react';
import styled from 'styled-components';

export const Container = styled.section`
  padding: 40px;
  background-color: ${({ theme }) => theme['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 44px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-family: 'Baloo 2', sans-serif;
  color: ${({ theme }) => theme['base-subtitle']};
  margin-bottom: 15px;
`;

export const ContainerCoffeeCheckout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};
`;

export const CoffeeImage = styled.img`
  width: 64px;
  height: 64px;
`;

export const CoffeeTitle = styled.span`
  color: ${({ theme }) => theme['base-subtitle']};
`;

export const ContainerActions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const ContainerChangeAmountCoffee = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  gap: 8px;
  background-color: ${({ theme }) => theme['base-button']};
`;

const DefaultButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 6px;
  gap: 4px;
  background-color: ${({ theme }) => theme['base-button']};
  outline: none;
  border: none;
  cursor: pointer;
`;

export const ButtonChangeAmountCoffee = styled(DefaultButton)``;

export const ButtonRemoveCoffee = styled(DefaultButton)`
  padding: 8px;
`;

export const IconMinus = styled(Minus)`
  width: 14px;
  height: 14px;
  color: ${({ theme }) => theme['purple']};
`;

export const IconPlus = styled(Plus)`
  width: 14px;
  height: 14px;
  color: ${({ theme }) => theme['purple']};
`;

export const AmountCoffee = styled.span`
  color: ${({ theme }) => theme['base-title']};
`;

export const IconTrash = styled(Trash)`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme['purple']};
`;

export const TitleButtonRemoveCoffee = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme['base-text']};
  text-transform: uppercase;
`;

export const CoffeeCheckoutPrice = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme['base-text']};
`;

export const ContainerConfirmPrices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BaseContainerConfirmPrices = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalItens = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['base-text']};
`;

export const TotalAmount = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${({ theme }) => theme['base-subtitle']};
`;

export const ButtonConfirmOrder = styled.button`
  border: none;
  outline: none;
  padding: 12px;
  margin-top: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['yellow']};
  text-align: center;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  color: ${({ theme }) => theme['white']};
`;
