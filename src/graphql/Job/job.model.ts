export type Job = {
  jobId: number;
  deviceId: number;
  userId: number;
  startDate: Date;
  endDate: Date;
  status: string;
  filePath: string;
};
