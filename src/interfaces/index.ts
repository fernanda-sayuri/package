export interface IListGroups {
  groupId: number;
  signatureTypeId: number;
  groupTypeId: number;
  name: string;
  title: string;
  description: string;
};

export interface IListChannel {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  channelName: string;
  channelNumber: number;
  imageUrl: string;
  images: Record<string, any> | null;
  isAdult: boolean;
  isHd: boolean;
  isPayTv: boolean;
  isTv: boolean;
  group: string;
  groupList: Record<string, any> | null;
  category: string;
  isSimulcast: boolean;
  metaTitle: string;
  metaDescription: string;
  mainChannel: string;
  mainPrograms: string;
}

export interface IOrder {
  id: number;
  user: IUser;
  createdAt: string;
  status: IOrderStatus;
  adress: IAddress;
  amount: number;
}

export interface IUser {
  id: number;
  fullName: string;
  gender: string;
  gsm: string;
  createdAt: string;
  addresses: IAddress[];
}

export interface IOrderStatus {
  id: number;
  text: "Pending" | "Ready" | "On The Way" | "Delivered" | "Cancelled";
}

export interface IAddress {
  text: string;
  coordinate: [string, string];
}

export interface IChartDatum {
  date: string;
  value: string;
}

export interface IChart {
  data: IChartDatum[];
  total: number;
  trend: number;
}

export interface IProduct {
  id: number;
  name: string;
  isActive: boolean;
  description: string;
  createdAt: string;
  price: number;
  category: ICategory;
  stock: number;
}

export interface ICategory {
  id: number;
  title: string;
  isActive: boolean;
}

export type TTab = {
  id: number;
  label: string;
  content: JSX.Element;
};
