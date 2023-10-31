import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Material {
  @PrimaryGeneratedColumn()
  materialId: number;

  @Column()
  materialType: string;

}
