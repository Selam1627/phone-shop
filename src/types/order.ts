import type { CartItem } from './cart'

export interface Customer {
  name: string
  email: string
  address: string
}

export interface Order {
  id: string
  items: CartItem[]
  customer: Customer
  /** Total in euro cents */
  total: number
  createdAt: string
}
