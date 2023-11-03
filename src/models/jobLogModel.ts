import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Relation,
} from "typeorm";
import { Job } from "./jobModel";

@Entity()
export class Joblog {
  @PrimaryGeneratedColumn()
  log_id: number;

  @Column()
  job_id: number;

  @Column()
  user_id: number;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date | null;

  @Column()
  incident_type: string;

}
