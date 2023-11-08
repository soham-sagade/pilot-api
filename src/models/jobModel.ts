import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Relation,
} from "typeorm";
import { Userdata } from "./userModel";
import { Joblog } from "./jobLogModel";
import { Device } from "./deviceModel";

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  job_id: number;

  @Column()
  device_id: number;

  @Column()
  user_id: number;

  @Column()
  start_date: Date;

  @Column()
  end_date?: Date | null;

  @Column()
  status: string;

  @Column()
  filepath: string;

  // @ManyToOne(() => Userdata, (user) => user.jobs)
  // user: Relation<Userdata>;

  // @OneToMany(() => Joblogs, (joblog) => joblog.job)
  // joblogs: Relation<Joblogs>[];

  // @ManyToOne(() => Device, (device) => device.jobs)
  // device: Relation<Device>;
}
