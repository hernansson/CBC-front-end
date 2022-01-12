import CompanyCard from './CompanyCard';
import ContactsCard from './ContactsCard';
import SupportTicketsCard from './SupportTicketsCard';
import CarriersCard from './CarriersCard';
import VendorsCard from './VendorsCard';
import AttachmentsCard from './AttachmentsCard';
import NewLeaves from './NewLeaves';
import PendingLeaves from './PendingLeaves';
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
  {
    title: 'New Leaves',
    titleLink: '+ Add',
    link: '',
    info: <NewLeaves />,
  },
  {
    title: 'Pending Leaves',
    titleLink: '+ Add',
    link: '',
    info: <PendingLeaves />,
  },
];
