import { Device } from "../../models/deviceModel";
// import { Device } from "./device.model";

interface IDeviceDao {
  getDeviceData(filter_object: Record<string, unknown>): Device;
  updateDeviceStatus(action_object: Record<string, unknown>): any;
}

export class DeviceDao implements IDeviceDao {
  getDeviceData(filter_object: Record<string, unknown>): any {
    // return new Device();
  }
  updateDeviceStatus(action_object: Record<string, unknown>): any {}
}
