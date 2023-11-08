import EventEmitter from "events";
import { deviceLogRepository } from "../../dbConnection";
import { DeviceStatus, statusDescMap } from "../types";

// Create a custom class that extends EventEmitter
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("tempChangeEvent", onTempChangeEvent);

function callEvent() {
  myEmitter.emit("tempChangeEvent");
}

async function onTempChangeEvent(){
    const deviceLogCreated = deviceLogRepository.create({
        device_id: 1,
        occurred_at: new Date(),
        status: Math.random() * 10 > 5 ? DeviceStatus.TMPCHNG : DeviceStatus.HMDTCHNG,
        change_description: statusDescMap[DeviceStatus.HMDTCHNG]
    });
    await deviceLogRepository.save(deviceLogCreated);
};


export default callEvent;
