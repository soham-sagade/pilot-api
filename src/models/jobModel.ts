import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Relation,
} from "typeorm";
import { Userdata } from "./userModel";
import { Joblogs } from "./jobLogsModel";

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

  @ManyToOne(() => Userdata, (user) => user.jobs)
  user: Relation<Userdata>;

  @OneToMany(() => Joblogs, (joblog) => joblog.job)
  joblogs: Relation<Joblogs>[];
}
