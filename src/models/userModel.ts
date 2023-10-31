import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class user_info {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_name: string;

  @Column()
  password: string;
}
