export default function ClientMarquee() {
  return (
    <div data-reveal className="mb-20 overflow-hidden">
      <div className="flex gap-12 animate-marquee w-max">
        {[...Array(24)].map((_, i) => (
          <div 
            key={i} 
            className="w-32 h-16 rounded-xl glass flex items-center justify-center text-gray-500 font-display font-bold text-sm shrink-0"
          >
            Client {(i % 12) + 1}
          </div>
        ))}
      </div>
    </div>
  );
}