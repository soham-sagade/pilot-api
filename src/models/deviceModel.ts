import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Relation,
} from "typeorm";
import { Userdata } from "./userModel";
import { Network } from "./networkModel";
import { Material } from "./materialModel";

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  device_id: number;

  @Column()
  material_id: number;

  @Column()
  network_id: number;

  @Column()
  name: string;

  @Column()
  serial_number: string;

  @Column()
  uuid: string;

  @Column()
  status: string;

  @Column()
  created_at: Date;

  @Column()
  temperature: number;

  @Column()
  manufacturer: string;

  @Column()
  available_material: number;

  @Column()
  humidity: number;

  @Column()
  printing_time: number;

  // @ManyToOne(() => Network, (network) => network.devices)
  // network: Relation<Network>;

  // @ManyToOne(() => Material, (material) => material.devices)
  // material: Relation<Material>;
}
