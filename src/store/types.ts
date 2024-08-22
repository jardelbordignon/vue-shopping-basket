export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export type ProductInBag = Product & {
  quantity: number
}

export type State = {
  products: Product[]
  productsInBag: ProductInBag[]
}

export type Getters = {
  products(state: State): Product[]
}

export type Mutations<S = State> = {
  loadProducts(state: S, products: Product[]): void
}

export type Actions = {
  loadProducts(context: {
    commit: (mutation: keyof Mutations, products: Product[]) => void
  }): Promise<void>
}
