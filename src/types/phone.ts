export interface Phone {
  id: string
  brand: string
  model: string
  /** Price in euro cents, to avoid floating point rounding */
  price: number
  imageUrl: string
  description: string
  storageGb: number
  ramGb: number
  screenInches: number
  color: string
  stock: number
}
