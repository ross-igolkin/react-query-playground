import { OrganizationType } from '../enums/organization-type';

export interface Organization {
  id: string;
  name: string;
  type: OrganizationType;
}
