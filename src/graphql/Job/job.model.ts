import { IncidentType } from "../../types";

export type Job = {
  job_id: number;
  device_id: number;
  user_id: number;
  start_date: Date;
  end_date?: Date;
  incidentType?: IncidentType;
  status: string;
  filepath: string;
};
