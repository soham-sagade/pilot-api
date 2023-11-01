import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Relation } from "typeorm";
import { Userdata } from "./userModel";
import { Network } from "./networkModel";
import { Material } from "./materialModel";

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  deviceId: number;

  @Column()
  materialId: number;

  @Column()
  networkId: number;

  @Column()
  name: string;

  @Column()
  serialNumber: string;

  @Column()
  uuid: string;

  @Column()
  status: string;

  @Column()
  createdAt: Date;

  @Column()
  temperature: number;

  @Column()
  manufacturer: string;

  @Column()
  availableMaterial: number;

  @Column()
  humidity: number;

  @Column()
  printingTime: number;

  @ManyToOne(() => Network, (network) => network.devices)
  network: Relation<Network>;

  @ManyToOne(() => Material, (material) => material.devices)
  material: Relation<Material>;
}
