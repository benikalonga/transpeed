import BookingDetailScreen from '@/components/screens/BookingDetailScreen';

export default function RiderTripDetail({ params }) {
  return <BookingDetailScreen id={params.id} perspective="rider" />;
}
