import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Relation } from "typeorm";
import { Userdata } from "./userModel";
import { Device } from "./deviceModel";

@Entity()
export class Network {
  @PrimaryGeneratedColumn()
  network_id: number;

  @Column()
  name: string;

  @Column()
  user_id: number;

  // @ManyToOne(() => Userdata, (user) => user.networks)
  // user: Relation<Userdata>;

  // @OneToMany(() => Device, (devices) => devices.network)
  // devices: Relation<Device>[];


}
