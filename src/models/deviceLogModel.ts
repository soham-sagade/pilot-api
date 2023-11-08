import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";


@Entity()
export class DeviceLog {
  @PrimaryGeneratedColumn()
  log_id: number;

  @Column()
  device_id: number;

  @Column()
  occurred_at: Date;

  @Column()
  status: string;

  @Column()
  change_description: string;
}
