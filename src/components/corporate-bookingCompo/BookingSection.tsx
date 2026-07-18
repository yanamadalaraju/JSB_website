import ContactForm from '../../components/ContactForm';

export default function BookingSection() {
  return (
    <div data-reveal className="max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <div className="eyebrow mb-2">Book now</div>
        <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-tight">Reserve your date</h2>
      </div>
      <ContactForm />
    </div>
  );
}