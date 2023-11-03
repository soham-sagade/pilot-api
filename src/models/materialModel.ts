import { Entity, PrimaryGeneratedColumn, Column, Relation, OneToMany } from "typeorm";
import { Device } from "./deviceModel";

@Entity()
export class Material {
  @PrimaryGeneratedColumn()
  material_id: number;

  @Column()
  material_type: string;

  // @OneToMany(() => Device, (devices) => devices.material)
  // devices: Relation<Device>[];

}
