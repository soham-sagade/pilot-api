import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Relation } from "typeorm";
import { Job } from "./jobModel";

@Entity()
export class Joblogs {
  @PrimaryGeneratedColumn()
  logId: number;

  @Column()
  jobId: number;

  @Column()
  userId: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date | null;

  @Column()
  incidentType: string;

  @ManyToOne(() => Job, (job) => job.joblogs)
  job: Relation<Job>;
}
