import { CoverageLine, SubmissionStatus } from 'enums';
import Contact from './contact';
import { Organization } from './organization';
import { User } from './user';

export interface Submission {
  id: string;
  createdAt: Date;
  deletedAt: Date | null;
  updatedAt: Date;
  organizationId: string;
  organization?: Organization;
  userId: string;
  user?: User;
  limit?: number;
  reachedLimit: number;
  insuredName: string;
  boxFolderId: string;
  industry: string;
  insuredAddress: string;
  coverageLine: CoverageLine;
  dueDate?: Date;
  status: SubmissionStatus;
  retailer: Contact;
  // TODO:Delete after integration with submission backend modal (After talked with @ross-igolkin)
  userEmail: string;
  organizationName: string;
}
