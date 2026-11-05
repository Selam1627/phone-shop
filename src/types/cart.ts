import type { Phone } from './phone'

export interface CartItem {
  phoneId: Phone['id']
  quantity: number
}
