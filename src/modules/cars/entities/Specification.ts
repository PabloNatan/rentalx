import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity()
class Specification {
  @PrimaryColumn()
  id?: string;

  @Column('varchar', { nullable: false })
  name: string;

  @Column('varchar', { nullable: false })
  description: string;

  @CreateDateColumn()
  created_at: Date;
}

export { Specification };
