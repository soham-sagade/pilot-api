import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Relation,
} from "typeorm";
import { Job } from "./jobModel";
import { Network } from "./networkModel";

@Entity()
export class Userdata {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  user_name: string;

  @Column()
  user_password: string;

  @Column()
  role: string;

  @Column()
  user_email: string;

  @Column()
  created_at: string;

  // @OneToMany(() => Job, (job) => job.user)
  // jobs: Relation<Job>[];

  // @OneToMany(() => Network, (network) => network.user)
  // networks: Relation<Network>[];
}
