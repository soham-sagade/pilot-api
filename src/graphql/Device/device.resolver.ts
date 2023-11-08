import { DeviceDao } from "./device.dao";
import { Device } from "./device.model";

export const deviceQueries = {
  getDeviceData: async (parent, args, context, info) => {
    try {
      const filterData = args.filterObject;
      const dao = new DeviceDao();
      const deviceData: Device = await dao.getDeviceData(filterData);
      return deviceData;
    } catch (error) {
      console.log(error);
    }
  },

  getAllDevices: async (parent, args, context, info) => {
    try {
      const dao = new DeviceDao();
      const deviceData: Array<Device> = await dao.getAllDeviceData(args.filterObject.network_id);
      return deviceData;
    } catch (error) {
      console.log(error);
    }
  }

  
};
