import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class network {
  @PrimaryGeneratedColumn()
  networkId: number;

  @Column()
  name: string;

  @Column()
  userId: number;

}
