import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

interface IIotApi {
  updateIotDeviceStatus(deviceId: number, status: string): boolean;
}

export class IotApi implements IIotApi {
  updateIotDeviceStatus(deviceId: number, status: string): boolean {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    let iotDevices,
      responseStatus = true;
    const setResponse = (value) => (responseStatus = value);
    const filePath = path.join(__dirname, "/iotDevice.json");
    fs.readFile(filePath, (err, data) => {
      iotDevices = JSON.parse(data.toString());
      iotDevices[deviceId.toString()].status = status;
      const iotDevicesString = JSON.stringify(iotDevices);
      fs.writeFile(filePath, iotDevicesString, "utf8", (err) => {
        if (err) return setResponse(false);
      });
    });
    return responseStatus;
  }
}
