import CompanyCard from './CompanyCard';
import ContactsCard from './ContactsCard';
import SupportTicketsCard from './SupportTicketsCard';
import CarriersCard from './CarriersCard';
import VendorsCard from './VendorsCard';
import AttachmentsCard from './AttachmentsCard';
export const cards = [
  { title: 'Company', titleLink: 'Manage', link: '', info: <CompanyCard /> },
  { title: 'Contacts', titleLink: '+ Add', link: '', info: <ContactsCard /> },
  {
    title: 'Support Tickets',
    titleLink: '+ Add',
    link: '',
    info: <SupportTicketsCard />,
  },
  { title: 'Carriers', titleLink: '+ Add', link: '', info: <CarriersCard /> },
  { title: 'Vendors', titleLink: '+ Add', link: '', info: <VendorsCard /> },
  {
    title: 'Attachments',
    titleLink: '+ Add',
    link: '',
    info: <AttachmentsCard />,
  },
];
