export type Device = {
  deviceId: number;
  materialId: number;
  networkId: number;
  name: string;
  serialNumber: string;
  uuid: string;
  status: string;
  createdAt: Date;
  temperature: number;
  manufacturer: string;
  availableMaterial: string;
  humidity: number;
  printingTime: number;
};
