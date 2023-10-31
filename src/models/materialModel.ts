import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class material {
  @PrimaryGeneratedColumn()
  materialId: number;

  @Column()
  materialType: string;

}
