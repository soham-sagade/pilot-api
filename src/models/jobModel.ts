import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  jobId: number;

  @Column()
  deviceId: number;

  @Column()
  userId: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date | null;

  @Column()
  status: string;

  @Column()
  filePath: string;

}
