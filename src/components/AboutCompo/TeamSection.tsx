import { TEAM_MEMBERS } from '../../data';

export default function TeamSection() {
  return (
    <div className="mb-20">
      <div data-reveal className="text-center mb-10">
        <div className="eyebrow mb-2">Meet the team</div>
        <h2 className="font-display font-bold text-white text-3xl md:text-4xl tracking-tight">The people behind the smiles.</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.name} data-reveal className="group">
            <div className="rounded-2xl overflow-hidden mb-3 aspect-square">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <h3 className="font-display font-bold text-white text-sm tracking-tight">{member.name}</h3>
            <p className="text-xs text-accent-from font-mono mt-0.5">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}