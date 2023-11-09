import { DeviceLogDao } from "./deviceLog.dao";
import { DeviceLog } from "./deviceLog.model";

export const deviceLogQueries = {
  getDevicelogsData: async (parent, args, context, info) => {
    try {
      const filterData = args.filterObject;
      const dao = new DeviceLogDao();
      const deviceData: DeviceLog[] = await dao.getDeviceLogsData(filterData);
      return deviceData;
    } catch (error) {
      console.log(error);
    }
  },
};


