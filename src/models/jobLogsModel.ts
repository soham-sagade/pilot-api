import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class jobLogs {
  @PrimaryGeneratedColumn()
  logId: number;

  @Column()
  jobId: number;

  @Column()
  userId: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date | null;

  @Column()
  incidentType: string;

}
