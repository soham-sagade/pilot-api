import pg from "pg";
import { Device } from "../models/deviceModel";
import { AppDataSource } from "../../dbConnection";

export interface IDBOperations {
  getDeviceData(networkId: number, deviceId: number): Promise<Device>;
}

export class DBOperations implements IDBOperations {
  async getDeviceData(network_id: number, device_id: number): Promise<Device> {
    const deviceData = await AppDataSource.manager.findOneBy(Device, {
      network_id,
      device_id,
    });
    return deviceData;
  }
}
