export interface IBasicRoutes {
  id: number;
  name: string;
  isCurrent?: Boolean,
  meta: {
    title: string,
    icon: string
  }
};