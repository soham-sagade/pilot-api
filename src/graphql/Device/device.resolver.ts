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
      const rest = `{
	"MTConnectDevices": {
		"Header": {
			"_creationTime": "2023-11-16T11:36:45Z",
			"_sender": "ssys2K10055",
			"_instanceId": "1690564943",
			"_version": "1.4.0.10",
			"_assetBufferSize": "1024",
			"_assetCount": "0",
			"_bufferSize": "131072"
		},
		"Devices": {
			"Device": {
				"Description": {
					"_manufacturer": "Stratasys",
					"_model": "F450mc",
					"_serialNumber": "K10055",
					"__text": "F450 FDM Additive Manufacturing Machine"
				},
				"DataItems": {
					"DataItem": [
						{
							"_category": "EVENT",
							"_id": "avail",
							"_name": "Availability",
							"_type": "AVAILABILITY"
						},
						{
							"_category": "EVENT",
							"_id": "_dev_asset_chg",
							"_type": "ASSET_CHANGED"
						},
						{
							"_category": "EVENT",
							"_id": "_dev_asset_rem",
							"_type": "ASSET_REMOVED"
						}
					]
				},
				"Components": {
					"Axes": {
						"Components": {
							"Linear": [
								{
									"DataItems": {
										"DataItem": [
											{
												"_category": "SAMPLE",
												"_id": "m1TAct",
												"_name": "ActualTemperature",
												"_nativeUnits": "CELSIUS",
												"_subType": "ACTUAL",
												"_type": "TEMPERATURE",
												"_units": "CELSIUS"
											},
											{
												"_category": "SAMPLE",
												"_id": "m1TCom",
												"_name": "CommandedTemperature",
												"_nativeUnits": "CELSIUS",
												"_subType": "COMMANDED",
												"_type": "TEMPERATURE",
												"_units": "CELSIUS"
											},
											{
												"_category": "EVENT",
												"_id": "m1Material",
												"_name": "CurrentMaterial",
												"_type": "MATERIAL"
											},
											{
												"_category": "EVENT",
												"_id": "m1MaterialId",
												"_name": "CurrentMaterialId",
												"_type": "PART_ID"
											},
											{
												"_category": "SAMPLE",
												"_id": "m1TipOdometer",
												"_name": "Odometer",
												"_nativeUnits": "CUBIC_MILLIMETER",
												"_subType": "ACTUAL",
												"_type": "VOLUME_SPATIAL",
												"_units": "CUBIC_MILLIMETER"
											},
											{
												"_category": "EVENT",
												"_id": "m1Tip",
												"_name": "Tip",
												"_type": "TOOL_ASSET_ID"
											}
										]
									},
									"_id": "modelExtruder1",
									"_name": "ModelExtruder"
								},
								{
									"DataItems": {
										"DataItem": [
											{
												"_category": "SAMPLE",
												"_id": "s1TAct",
												"_name": "ActualTemperature",
												"_nativeUnits": "CELSIUS",
												"_subType": "ACTUAL",
												"_type": "TEMPERATURE",
												"_units": "CELSIUS"
											},
											{
												"_category": "SAMPLE",
												"_id": "s1TCom",
												"_name": "CommandedTemperature",
												"_nativeUnits": "CELSIUS",
												"_subType": "COMMANDED",
												"_type": "TEMPERATURE",
												"_units": "CELSIUS"
											},
											{
												"_category": "EVENT",
												"_id": "s1Material",
												"_name": "CurrentMaterial",
												"_type": "MATERIAL"
											},
											{
												"_category": "EVENT",
												"_id": "s1MaterialId",
												"_name": "CurrentMaterialId",
												"_type": "PART_ID"
											},
											{
												"_category": "SAMPLE",
												"_id": "s1TipOdometer",
												"_name": "Odometer",
												"_nativeUnits": "CUBIC_MILLIMETER",
												"_subType": "ACTUAL",
												"_type": "VOLUME_SPATIAL",
												"_units": "CUBIC_MILLIMETER"
											},
											{
												"_category": "EVENT",
												"_id": "s1Tip",
												"_name": "Tip",
												"_type": "TOOL_ASSET_ID"
											}
										]
									},
									"_id": "supportExtruder1",
									"_name": "SupportExtruder"
								},
								{
									"DataItems": {
										"DataItem": {
											"_category": "SAMPLE",
											"_id": "x1Act",
											"_name": "ActualPosition",
											"_nativeUnits": "MILLIMETER",
											"_subType": "ACTUAL",
											"_type": "POSITION",
											"_units": "MILLIMETER"
										}
									},
									"_id": "x1",
									"_name": "X"
								},
								{
									"DataItems": {
										"DataItem": {
											"_category": "SAMPLE",
											"_id": "y1Act",
											"_name": "ActualPosition",
											"_nativeUnits": "MILLIMETER",
											"_subType": "ACTUAL",
											"_type": "POSITION",
											"_units": "MILLIMETER"
										}
									},
									"_id": "y1",
									"_name": "Y"
								},
								{
									"DataItems": {
										"DataItem": {
											"_category": "SAMPLE",
											"_id": "z1Act",
											"_name": "ActualPosition",
											"_nativeUnits": "MILLIMETER",
											"_subType": "ACTUAL",
											"_type": "POSITION",
											"_units": "MILLIMETER"
										}
									},
									"_id": "z1",
									"_name": "Z"
								}
							]
						},
						"_id": "axes",
						"_name": "Axes"
					},
					"Systems": {
						"Components": {
							"Feeder": [
								{
									"DataItems": {
										"DataItem": [
											{
												"_category": "EVENT",
												"_id": "mb1LoadState",
												"_name": "LoadState",
												"_subType": "LOADED",
												"_type": "EQUIPMENT_MODE"
											},
											{
												"_category": "SAMPLE",
												"_id": "mb1InitialVolume",
												"_name": "InitialVolume",
												"_nativeUnits": "CUBIC_MILLIMETER",
												"_type": "CAPACITY_SPATIAL",
												"_units": "CUBIC_MILLIMETER"
											},
											{
												"_category": "SAMPLE",
												"_id": "mb1CurrentVolume",
												"_name": "CurrentVolume",
												"_nativeUnits": "CUBIC_MILLIMETER",
												"_subType": "ACTUAL",
												"_type": "VOLUME_SPATIAL",
												"_units": "CUBIC_MILLIMETER"
											},
											{
												"_category": "EVENT",
												"_id": "mb1Mat",
												"_name": "MaterialName",
												"_type": "MATERIAL"
											},
											{
												"_category": "EVENT",
												"_id": "mb1MatId",
												"_name": "MaterialId",
												"_type": "PART_ID"
											},
											{
												"_category": "EVENT",
												"_id": "mb1SerialNumber",
												"_name": "SerialNumber",
												"_type": "SERIAL_NUMBER"
											},
											{
												"_category": "EVENT",
												"_id": "mb1MfgDate",
												"_name": "ManufacturingDate",
												"_type": "PART_ID"
											},
											{
												"_category": "EVENT",
												"_id": "mb1MfgLot",
												"_name": "ManufacturingLot",
												"_type": "PART_ID"
											}
										]
									},
									"_id": "modelBay1",
									"_name": "ModelBay1"
								},
								{
									"DataItems": {
										"DataItem": [
											{
												"_category": "EVENT",
												"_id": "mb2LoadState",
												"_name": "LoadState",
												"_subType": "LOADED",
												"_type": "EQUIPMENT_MODE"
											},
											{
												"_category": "SAMPLE",
												"_id": "mb2InitialVolume",
												"_name": "InitialVolume",
												"_nativeUnits": "CUBIC_MILLIMETER",
												"_type": "CAPACITY_SPATIAL",
												"_units": "CUBIC_MILLIMETER"
											},
											{
												"_category": "SAMPLE",
												"_id": "mb2CurrentVolume",
												"_name": "CurrentVolume",
												"_nativeUnits": "CUBIC_MILLIMETER",
												"_subType": "ACTUAL",
												"_type": "VOLUME_SPATIAL",
												"_units": "CUBIC_MILLIMETER"
											},
											{
												"_category": "EVENT",
												"_id": "mb2Mat",
												"_name": "MaterialName",
												"_type": "MATERIAL"
											},
											{
												"_category": "EVENT",
												"_id": "mb2MatId",
												"_name": "MaterialId",
												"_type": "PART_ID"
											},
											{
												"_category": "EVENT",
												"_id": "mb2SerialNumber",
												"_name": "SerialNumber",
												"_type": "SERIAL_NUMBER"
											},
											{
												"_category": "EVENT",
												"_id": "mb2MfgDate",
												"_name": "ManufacturingDate",
												"_type": "PART_ID"
											},
											{
												"_category": "EVENT",
												"_id": "mb2MfgLot",
												"_name": "ManufacturingLot",
												"_type": "PART_ID"
											}
										]
									},
									"_id": "modelBay2",
									"_name": "ModelBay2"
								},
								{
									"DataItems": {
										"DataItem": [
											{
												"_category": "EVENT",
												"_id": "sb1LoadState",
												"_name": "LoadState",
												"_subType": "LOADED",
												"_type": "EQUIPMENT_MODE"
											},
											{
												"_category": "SAMPLE",
												"_id": "sb1InitialVolume",
												"_name": "InitialVolume",
												"_nativeUnits": "CUBIC_MILLIMETER",
												"_type": "CAPACITY_SPATIAL",
												"_units": "CUBIC_MILLIMETER"
											},
											{
												"_category": "SAMPLE",
												"_id": "sb1CurrentVolume",
												"_name": "CurrentVolume",
												"_nativeUnits": "CUBIC_MILLIMETER",
												"_subType": "ACTUAL",
												"_type": "VOLUME_SPATIAL",
												"_units": "CUBIC_MILLIMETER"
											},
											{
												"_category": "EVENT",
												"_id": "sb1Mat",
												"_name": "MaterialName",
												"_type": "MATERIAL"
											},
											{
												"_category": "EVENT",
												"_id": "sb1MatId",
												"_name": "MaterialId",
												"_type": "PART_ID"
											},
											{
												"_category": "EVENT",
												"_id": "sb1SerialNumber",
												"_name": "SerialNumber",
												"_type": "SERIAL_NUMBER"
											},
											{
												"_category": "EVENT",
												"_id": "sb1MfgDate",
												"_name": "ManufacturingDate",
												"_type": "PART_ID"
											},
											{
												"_category": "EVENT",
												"_id": "sb1MfgLot",
												"_name": "ManufacturingLot",
												"_type": "PART_ID"
											}
										]
									},
									"_id": "supportBay1",
									"_name": "SupportBay1"
								},
								{
									"DataItems": {
										"DataItem": [
											{
												"_category": "EVENT",
												"_id": "sb2LoadState",
												"_name": "LoadState",
												"_subType": "LOADED",
												"_type": "EQUIPMENT_MODE"
											},
											{
												"_category": "SAMPLE",
												"_id": "sb2InitialVolume",
												"_name": "InitialVolume",
												"_nativeUnits": "CUBIC_MILLIMETER",
												"_type": "CAPACITY_SPATIAL",
												"_units": "CUBIC_MILLIMETER"
											},
											{
												"_category": "SAMPLE",
												"_id": "sb2CurrentVolume",
												"_name": "CurrentVolume",
												"_nativeUnits": "CUBIC_MILLIMETER",
												"_subType": "ACTUAL",
												"_type": "VOLUME_SPATIAL",
												"_units": "CUBIC_MILLIMETER"
											},
											{
												"_category": "EVENT",
												"_id": "sb2Mat",
												"_name": "MaterialName",
												"_type": "MATERIAL"
											},
											{
												"_category": "EVENT",
												"_id": "sb2MatId",
												"_name": "MaterialId",
												"_type": "PART_ID"
											},
											{
												"_category": "EVENT",
												"_id": "sb2SerialNumber",
												"_name": "SerialNumber",
												"_type": "SERIAL_NUMBER"
											},
											{
												"_category": "EVENT",
												"_id": "sb2MfgDate",
												"_name": "ManufacturingDate",
												"_type": "PART_ID"
											},
											{
												"_category": "EVENT",
												"_id": "sb2MfgLot",
												"_name": "ManufacturingLot",
												"_type": "PART_ID"
											}
										]
									},
									"_id": "supportBay2",
									"_name": "SupportBay2"
								}
							],
							"Electrical": [
								{
									"DataItems": {
										"DataItem": [
											{
												"_category": "EVENT",
												"_id": "ecb1BoardFirmwareVersion",
												"_name": "Ecb1BoardFirmwareVersion",
												"_type": "SERIAL_NUMBER"
											},
											{
												"_category": "EVENT",
												"_id": "ecb2BoardFirmwareVersion",
												"_name": "Ecb2BoardFirmwareVersion",
												"_type": "SERIAL_NUMBER"
											},
											{
												"_category": "EVENT",
												"_id": "headType",
												"_name": "Type",
												"_type": "PART_ID"
											}
										]
									},
									"_id": "headBoard",
									"_name": "HeadBoard"
								},
								{
									"DataItems": {
										"DataItem": {
											"_category": "EVENT",
											"_id": "mioBoardFirmwareVersion",
											"_name": "FirmwareVersion",
											"_type": "SERIAL_NUMBER"
										}
									},
									"_id": "mioBoard",
									"_name": "MioBoard"
								},
								{
									"DataItems": {
										"DataItem": [
											{
												"_category": "EVENT",
												"_id": "mdb1DriveBlockFirmwareRevision",
												"_name": "Revision",
												"_type": "SERIAL_NUMBER"
											},
											{
												"_category": "EVENT",
												"_id": "mdb1DriveBlockFirmwareVersion",
												"_name": "FirmwareVersion",
												"_type": "SERIAL_NUMBER"
											},
											{
												"_category": "EVENT",
												"_id": "mdb1DriveBlockManufacturingYear",
												"_name": "ManufacturingYear",
												"_type": "PART_ID"
											},
											{
												"_category": "EVENT",
												"_id": "mdb1DriveBlockManufacturingWeek",
												"_name": "ManufacturingWeek",
												"_type": "PART_ID"
											},
											{
												"_category": "EVENT",
												"_id": "mdb1DriveBlockSerialNumber",
												"_name": "SerialNumber",
												"_type": "SERIAL_NUMBER"
											}
										]
									},
									"_id": "modelDriveBlock1",
									"_name": "ModelDriveBlock1"
								},
								{
									"DataItems": {
										"DataItem": [
											{
												"_category": "EVENT",
												"_id": "mdb2DriveBlockFirmwareRevision",
												"_name": "Revision",
												"_type": "SERIAL_NUMBER"
											},
											{
												"_category": "EVENT",
												"_id": "mdb2DriveBlockFirmwareVersion",
												"_name": "FirmwareVersion",
												"_type": "SERIAL_NUMBER"
											},
											{
												"_category": "EVENT",
												"_id": "mdb2DriveBlockManufacturingYear",
												"_name": "ManufacturingYear",
												"_type": "PART_ID"
											},
											{
												"_category": "EVENT",
												"_id": "mdb2DriveBlockManufacturingWeek",
												"_name": "ManufacturingWeek",
												"_type": "PART_ID"
											},
											{
												"_category": "EVENT",
												"_id": "mdb2DriveBlockSerialNumber",
												"_name": "SerialNumber",
												"_type": "SERIAL_NUMBER"
											}
										]
									},
									"_id": "modelDriveBlock2",
									"_name": "ModelDriveBlock2"
								},
								{
									"DataItems": {
										"DataItem": [
											{
												"_category": "EVENT",
												"_id": "sdb1DriveBlockFirmwareRevision",
												"_name": "Revision",
												"_type": "SERIAL_NUMBER"
											},
											{
												"_category": "EVENT",
												"_id": "sdb1DriveBlockFirmwareVersion",
												"_name": "FirmwareVersion",
												"_type": "SERIAL_NUMBER"
											},
											{
												"_category": "EVENT",
												"_id": "sdb1DriveBlockManufacturingYear",
												"_name": "ManufacturingYear",
												"_type": "PART_ID"
											},
											{
												"_category": "EVENT",
												"_id": "sdb1DriveBlockManufacturingWeek",
												"_name": "ManufacturingWeek",
												"_type": "PART_ID"
											},
											{
												"_category": "EVENT",
												"_id": "sdb1DriveBlockSerialNumber",
												"_name": "SerialNumber",
												"_type": "SERIAL_NUMBER"
											}
										]
									},
									"_id": "supportDriveBlock1",
									"_name": "SupportDriveBlock1"
								},
								{
									"DataItems": {
										"DataItem": [
											{
												"_category": "EVENT",
												"_id": "sdb2DriveBlockFirmwareRevision",
												"_name": "Revision",
												"_type": "SERIAL_NUMBER"
											},
											{
												"_category": "EVENT",
												"_id": "sdb2DriveBlockFirmwareVersion",
												"_name": "FirmwareVersion",
												"_type": "SERIAL_NUMBER"
											},
											{
												"_category": "EVENT",
												"_id": "sdb2DriveBlockManufacturingYear",
												"_name": "ManufacturingYear",
												"_type": "PART_ID"
											},
											{
												"_category": "EVENT",
												"_id": "sdb2DriveBlockManufacturingWeek",
												"_name": "ManufacturingWeek",
												"_type": "PART_ID"
											},
											{
												"_category": "EVENT",
												"_id": "sdb2DriveBlockSerialNumber",
												"_name": "SerialNumber",
												"_type": "SERIAL_NUMBER"
											}
										]
									},
									"_id": "supportDriveBlock2",
									"_name": "SupportDriveBlock2"
								},
								{
									"_id": "power",
									"_name": "Power"
								}
							],
							"Enclosure": [
								{
									"DataItems": {
										"DataItem": [
											{
												"_category": "SAMPLE",
												"_id": "ovenAct",
												"_name": "OvenActualTemperature",
												"_nativeUnits": "CELSIUS",
												"_subType": "ACTUAL",
												"_type": "TEMPERATURE",
												"_units": "CELSIUS"
											},
											{
												"_category": "SAMPLE",
												"_id": "ovenCom",
												"_name": "OvenCommandedTemperature",
												"_nativeUnits": "CELSIUS",
												"_subType": "COMMANDED",
												"_type": "TEMPERATURE",
												"_units": "CELSIUS"
											}
										]
									},
									"_id": "oven",
									"_name": "Oven"
								},
								{
									"DataItems": {
										"DataItem": [
											{
												"_category": "EVENT",
												"_id": "doorOpenState",
												"_name": "OpenState",
												"_type": "DOOR_STATE"
											},
											{
												"_category": "EVENT",
												"_id": "doorLockState",
												"_name": "LockState",
												"_type": "ACTUATOR_STATE"
											}
										]
									},
									"_id": "door",
									"_name": "Door"
								},
								{
									"DataItems": {
										"DataItem": [
											{
												"_category": "EVENT",
												"_id": "coverOpenState",
												"_name": "OpenState",
												"_type": "DOOR_STATE"
											},
											{
												"_category": "EVENT",
												"_id": "coverLockState",
												"_name": "LockState",
												"_type": "ACTUATOR_STATE"
											}
										]
									},
									"_id": "cover",
									"_name": "Cover"
								}
							],
							"Pneumatic": {
								"DataItems": {
									"DataItem": {
										"_category": "EVENT",
										"_id": "innerVacuumState",
										"_name": "InnerVacuumState",
										"_type": "ACTUATOR_STATE"
									}
								},
								"_id": "platen",
								"_name": "Platen"
							}
						},
						"_id": "systems",
						"_name": "Systems"
					},
					"Controller": {
						"DataItems": {
							"DataItem": [
								{
									"_category": "EVENT",
									"_id": "swVersion",
									"_name": "Version",
									"_type": "SERIAL_NUMBER"
								},
								{
									"_category": "EVENT",
									"_id": "swBuildVersion",
									"_name": "Build",
									"_type": "SERIAL_NUMBER"
								},
								{
									"_category": "EVENT",
									"_id": "licensedMaterials",
									"_name": "LicensedMaterials",
									"_type": "MATERIAL"
								}
							]
						},
						"Components": {
							"Path": {
								"DataItems": {
									"DataItem": [
										{
											"_category": "EVENT",
											"_id": "pathExecution",
											"_name": "PathExecution",
											"_type": "EXECUTION"
										},
										{
											"_category": "EVENT",
											"_id": "pathProgram",
											"_name": "PathProgram",
											"_type": "PROGRAM"
										},
										{
											"_category": "EVENT",
											"_id": "materialName",
											"_name": "MaterialName",
											"_type": "MATERIAL"
										},
										{
											"_category": "EVENT",
											"_id": "tipName",
											"_name": "TipName",
											"_type": "TOOL_ASSET_ID"
										},
										{
											"_category": "EVENT",
											"_id": "layers",
											"_name": "Layers",
											"_subType": "TARGET",
											"_type": "MATERIAL_LAYER"
										},
										{
											"_category": "SAMPLE",
											"_id": "estTime",
											"_name": "EstimatedTime",
											"_nativeUnits": "SECOND",
											"_subType": "OPERATING",
											"_type": "EQUIPMENT_TIMER",
											"_units": "SECOND"
										},
										{
											"_category": "SAMPLE",
											"_id": "submissionTime",
											"_name": "SubmissionTime",
											"_nativeUnits": "SECOND",
											"_type": "CLOCK_TIME"
										},
										{
											"_category": "SAMPLE",
											"_id": "elaTime",
											"_name": "ElapsedTime",
											"_nativeUnits": "SECOND",
											"_subType": "OPERATING",
											"_type": "EQUIPMENT_TIMER",
											"_units": "SECOND"
										},
										{
											"_category": "EVENT",
											"_id": "curLayer",
											"_name": "CurrentLayer",
											"_subType": "ACTUAL",
											"_type": "MATERIAL_LAYER"
										},
										{
											"_category": "EVENT",
											"_id": "currentJobGuid",
											"_name": "GUID",
											"_type": "PART_ID"
										},
										{
											"_category": "EVENT",
											"_id": "cmbLock",
											"_name": "IsLocked",
											"_type": "PROGRAM_COMMENT"
										}
									]
								},
								"_id": "path",
								"_name": "Path"
							}
						},
						"_id": "controller",
						"_name": "Controller"
					}
				},
				"_id": "_dev",
				"_iso841Class": "6",
				"_name": "F450mc",
				"_sampleInterval": "1000",
				"_uuid": "ssys2K10055"
			}
		},
		"_xmlns:m": "urn:mtconnect.org:MTConnectDevices:1.5",
		"_xmlns": "urn:mtconnect.org:MTConnectDevices:1.5",
		"_xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
		"_xsi:schemaLocation": "urn:mtconnect.org:MTConnectDevices:1.5 /schemas/MTConnectDevices_1.5.xsd"
	}
}`;
      const info = JSON.parse(rest);
      const device = { ...info.MTConnectDevices.Devices.Device};
      const deviceInfo = JSON.parse(deviceData[0].device_info);
      const modifiedDeviceData = {
        ...deviceInfo,
        name: device.Description._model,
        serial_number: device.Description._serialNumber,
        description: device.Description.__text,
      };
      const newDeviceData = deviceData.map((device) => ({
        ...device,
        device_info: JSON.stringify(modifiedDeviceData),
      }));

      return newDeviceData;
    } catch (error) {
      console.log(error);
    }
  },
};
