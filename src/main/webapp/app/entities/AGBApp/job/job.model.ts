import { ITask } from 'app/entities/AGBApp/task/task.model';
import { IEmployee } from 'app/entities/AGBApp/employee/employee.model';

export interface IJob {
  id: number;
  jobTitle?: string | null;
  minSalary?: number | null;
  maxSalary?: number | null;
  tasks?: Pick<ITask, 'id' | 'title'>[] | null;
  employee?: Pick<IEmployee, 'id'> | null;
}

export type NewJob = Omit<IJob, 'id'> & { id: null };
