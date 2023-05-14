import { createContext, ReactNode, useContext, useState } from "react";

interface CartContextProps {
  cartCoffeeAmount: number
  setCartCoffeeAmount: (value: number) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartCoffeeAmount, setCartCoffeeAmount] = useState(0)

  return (
    <CartContext.Provider
      value={{
        cartCoffeeAmount,
        setCartCoffeeAmount
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}