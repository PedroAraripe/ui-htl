interface IPrice {
  symbol: string,
  currency: string,
  value: number
}

export interface IPreview {
  url: string,
  id: number
}

export interface IHotelCardPreview {
  id: number,
  title: string,
  receiver: string,
  previews: IPreview[],
  currentOpen: Boolean,
  monthToOpen: string,
  price?: IPrice,
  location: string
}