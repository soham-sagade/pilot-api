import { DBOperations, IDBOperations } from "../../db/pgOperations";
import { Device } from "../../models/deviceModel";
import { updateDeviceRecord } from "../../types";
// import { Device } from "./device.model";

interface IDeviceDao {
  getDeviceData(filter_object: Record<string, unknown>): Promise<Device>;
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

  async getAllDeviceData(network_id: number): Promise<Array<Device>> {
    try {
      return this.pg.getAllDeviceData(network_id);
    } catch (error) {
      console.log(error);
    }
  }
}
