import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class device {
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

}
