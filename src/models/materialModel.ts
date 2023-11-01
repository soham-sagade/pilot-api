import { Entity, PrimaryGeneratedColumn, Column, Relation, OneToMany } from "typeorm";
import { Device } from "./deviceModel";

@Entity()
export class Material {
  @PrimaryGeneratedColumn()
  materialId: number;

  @Column()
  materialType: string;

  @OneToMany(() => Device, (devices) => devices.material)
  devices: Relation<Device>[];

}
