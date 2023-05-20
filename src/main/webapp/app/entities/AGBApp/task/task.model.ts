import { IJob } from 'app/entities/AGBApp/job/job.model';

export interface ITask {
  id: number;
  title?: string | null;
  description?: string | null;
  jobs?: Pick<IJob, 'id'>[] | null;
}

export type NewTask = Omit<ITask, 'id'> & { id: null };
