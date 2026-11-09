import BookingDetailScreen from '@/components/screens/BookingDetailScreen';

export default function JobDetail({ params }) {
  return <BookingDetailScreen id={params.id} perspective="provider" />;
}
