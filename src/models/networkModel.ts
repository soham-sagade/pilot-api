import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Network {
  @PrimaryGeneratedColumn()
  networkId: number;

  @Column()
  name: string;

  @Column()
  userId: number;

}
