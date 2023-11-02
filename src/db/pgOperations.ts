import { Device } from "../models/deviceModel";
import { AppDataSource } from "../../dbConnection";
import { UpdateResult } from "typeorm";

export interface IDBOperations {
  getDeviceData(network_id: number, device_id: number): Promise<Device>;
}

export class DBOperations implements IDBOperations {
  async getDeviceData(network_id: number, device_id: number): Promise<Device> {
    const deviceData: Device = await AppDataSource.manager.findOneBy(Device, {
      network_id,
      device_id,
    });
    return deviceData;
  }

}
