import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
