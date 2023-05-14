import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ContainerOrder = styled.div`
  max-width: 640px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-family: 'Baloo 2', sans-serif;
  color: ${({ theme }) => theme['base-subtitle']};
  margin-bottom: 15px;
`;

export const ContainerAddress = styled.section`
  padding: 40px;
  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
`;

export const ContainerPaymentOptions = styled(ContainerAddress)`
  margin-top: 12px;
`;

export const HeaderAddress = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconMap = styled(MapPinLine)`
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme['yellow-dark']};
`;

export const AddressTitle = styled.p`
  line-height: 130%;
  color: ${({ theme }) => theme['base-subtitle']};
`;

export const AddressDescription = styled.p`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${({ theme }) => theme['base-text']};
`;

export const ContainerFields = styled.div`
  display: grid;
  grid-template-columns: 200px 276px 60px;
`;

export const Input = styled.input`
  outline: none;
  font-size: 0.875rem;
  padding: 12px;
  color: ${({ theme }) => theme['base-label']};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ theme }) => theme['base-button']};
  background-color: ${({ theme }) => theme['base-input']};

  &:focus {
    border-color: ${({ theme }) => theme['yellow-dark']};
    color: ${({ theme }) => theme['base-text']};
  }
`;

export const ContainerSelectedCoffees = styled.div`
  max-width: 448px;
`;

export const HeaderPaymentOptions = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
`;

export const IconDollar = styled(CurrencyDollar)`
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.purple};
`;

export const PaymentDescription = styled(AddressDescription)``;

export const PaymentTitle = styled(AddressTitle)``;

export const ContainerPayment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const CardPayment = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  gap: 12px;
  background-color: ${({ theme }) => theme['base-button']};
`;

export const PaymentOption = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme['base-text']};
`;

export const IconCreditCard = styled(CreditCard)`
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.purple};
`;

export const IconMoney = styled(Money)`
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.purple};
`;

export const IconBank = styled(Bank)`
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.purple};
`;
