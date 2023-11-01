export type Device = {
  device_id: number;
  material_id: number;
  network_id: number;
  name: string;
  serial_number: string;
  uuid: string;
  status: string;
  created_at: Date;
  temperature: number;
  manufacturer: string;
  available_material: number;
  humidity: number;
  printing_time: number;
};
