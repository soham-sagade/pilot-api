import { DBOperations, IDBOperations } from "../../db/pgOperations";
import { Device } from "../../models/deviceModel";
// import { Device } from "./device.model";

interface IDeviceDao {
  getDeviceData(filter_object: Record<string, unknown>): Promise<Device>;
  updateDeviceStatus(action_object: Record<string, unknown>): any;
}

export class DeviceDao implements IDeviceDao {
  private pg: IDBOperations;
  constructor() {
    this.pg = new DBOperations();
  }
  async getDeviceData(filter_object: Record<string, number>): Promise<Device> {
    try {
      const { networkId, deviceId }: Record<string, number> = filter_object;
      return this.pg.getDeviceData(networkId, deviceId);
    } catch (error) {
      console.log(error);
    }
  }
  updateDeviceStatus(action_object: Record<string, unknown>): any {}
}
