import { DBOperations, IDBOperations } from "../../db/pgOperations";
import { DeviceLog } from "./deviceLog.model";

interface IDeviceLogDao {
  getDeviceLogsData(
    filter_object: Record<string, unknown>
  ): Promise<DeviceLog[]>;
}

export class DeviceLogDao implements IDeviceLogDao {
  private pg: IDBOperations;

  constructor() {
    this.pg = new DBOperations();
  }

  async getDeviceLogsData(
    filter_object: Record<string, number>
  ): Promise<DeviceLog[]> {
    try {
      const { device_id }: Record<string, number> = filter_object;
      return this.pg.getDeviceLogsData(device_id);
    } catch (error) {
      console.log(error);
    }
  }

  async createJobLog(logData: Record<string, any>): Promise<any> {
    try {
      const { device_id, occured_at, status, change_description } = logData;
      if (!device_id || !occured_at || !status)
        throw new Error("Mandatory fields missing while creating job log!");
      return this.pg.createDeviceLog(
        device_id,
        occured_at,
        status,
        change_description
      );
    } catch (error) {
      return { error: error.message };
    }
  }
}
