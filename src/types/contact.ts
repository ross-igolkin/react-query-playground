import { ContactRole } from 'enums';

export type Contact = {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phoneNumber?: string;
  role: ContactRole;
  organizationId: string;
  userId: string;
  organizationName: string;
};

export interface ContactCreate {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  role: ContactRole;
  organizationId: string;
  // only userAdmin should specify which userId he wants to create contact for
  userId?: string;
}

export default Contact;
