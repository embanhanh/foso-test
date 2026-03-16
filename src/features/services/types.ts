export type ServiceCategoryType =
  | "COMBO"
  | "MEDICURE"
  | "PEDICURE"
  | "EFFECT"
  | "DRINKS";

export interface ServiceDetail {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface ServiceCategory {
  id: string;
  type: ServiceCategoryType;
  title: string;
  services: ServiceDetail[];
}
