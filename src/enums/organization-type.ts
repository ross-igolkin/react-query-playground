import { ContactRole } from './contact-role';

export enum OrganizationType {
  Broker = 'Broker',
  Capitola = 'Capitola',
  Carrier = 'Carrier',
  Retailer = 'Retailer',
}

export const ContactRoleToOrganizationTypeMap: {
  [role in ContactRole]: OrganizationType;
} = {
  [ContactRole.Underwriter]: OrganizationType.Carrier,
  [ContactRole.SubmissionBox]: OrganizationType.Carrier,
  [ContactRole.Retailer]: OrganizationType.Retailer,
};
