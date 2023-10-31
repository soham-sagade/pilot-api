import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Relation } from "typeorm";
import { Job } from "./jobModel";
import { Network } from "./networkModel";

@Entity()
export class Userdata {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  userName: string;

  @Column()
  userPassword: string;

  @Column()
  role: string;

  @Column()
  userEmail: string;

  @Column()
  createdAt: string;

  @OneToMany(() => Job, (job) => job.user)
  jobs: Relation<Job>[];

  @OneToMany(() => Network, (network) => network.user)
  networks: Relation<Network>[];
}
