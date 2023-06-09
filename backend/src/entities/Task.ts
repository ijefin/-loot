import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks")
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "boolean" })
  done: boolean;

  @Column({ type: "text" })
  status: string;
}
