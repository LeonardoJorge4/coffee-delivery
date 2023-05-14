import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import {
  Container,
  Header,
  Image,
  Tag,
  Body,
  Title,
  Description,
  Footer,
  Price,
  Quantity,
  Button,
  ButtonCart,
} from "./styles";

interface CoffeeProps {
  id: string;
  tags: string[];
  title: string;
  description: string;
  price: string;
}

interface CardCoffeeProps {
  coffee: CoffeeProps;
}

export function CardCoffee({ coffee }: CardCoffeeProps) {
  const [amount, setAmount] = useState(0);
  const { setCartCoffeeAmount } = useCart();

  function handleIncrementCoffee() {
    setAmount((state) => state + 1);
  }

  function handleDecrementCoffee() {
    setAmount((state) => state - 1);
  }

  function handleAddCoffeeToCart() {
    setCartCoffeeAmount((oldState: number) => oldState + amount);
    setAmount(0);
  }

  return (
    <Container>
      <Header>
        <Image />

        {coffee.tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </Header>

      <Body>
        <Title>{coffee.title}</Title>
        <Description>{coffee.description}</Description>
      </Body>

      <Footer>
        <Price>{coffee.price}</Price>

        <Quantity>
          <Button onClick={handleDecrementCoffee}>
            <Minus size={32} />
          </Button>

          {amount}

          <Button onClick={handleIncrementCoffee}>
            <Plus size={32} />
          </Button>
        </Quantity>

        <ButtonCart onClick={handleAddCoffeeToCart}>
          <ShoppingCartSimple size={32} />
        </ButtonCart>
      </Footer>
    </Container>
  );
}
