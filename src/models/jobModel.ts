import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class job {
  @PrimaryGeneratedColumn()
  jobId: number;

  @Column()
  deviceId: number;

  @Column()
  userId: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date | null;

  @Column()
  status: string;

  @Column()
  filePath: string;

}
