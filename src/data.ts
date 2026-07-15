export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services', dropdown: true },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES_TREE = {
  Corporates: {
    path: '/services/corporates',
    items: [
      { label: 'Health Camp', path: '/corporates/health-camp' },
      { label: 'Corporate Day Out', path: '/corporates/corporate-day-out' },
      { label: 'Corporate Booking', path: '/corporates/corporate-booking' },
      { label: 'Corporate Events', path: '/corporates/corporate-events' },
      { label: 'Corporate Stress Busters', path: '/corporates/corporate-stress-busters' },
      { label: 'Corporate Gifting', path: '/corporates/corporate-gifting' },
      { label: 'Refreshments', path: '/corporates/refreshments' },
    ],
  },
  'For Students': {
    path: '/for-students',
    items: [
      { label: 'Stress Buster For Students', path: '/for-students/student-stress-busters' },
      { label: 'School Events', path: '/for-students/school-events' },
    ],
  },
  'For Apartments': {
    path: '/for-apartments',
    items: [
      { label: 'Stress Buster Activities For Community', path: '/for-apartments/stress-buster-activities-for-community' },
      { label: 'Community Events', path: '/for-apartments/community-events' },
    ],
  },
};

export const TEAM_MEMBERS = [
  { name: 'Shashidhar SP', role: 'Founder & CEO', img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Yashas M', role: 'Director of Operations', img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Priya A', role: 'Chief Wellness Officer', img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Nagesh K', role: 'Business Development', img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Deepak P', role: 'Logistics & Operations', img: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Abhishek LR', role: 'Project Management', img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export const STATS = [
  { label: 'Cities', value: 10, suffix: '+' },
  { label: 'Activities', value: 1000, suffix: '+' },
  { label: 'Corporates', value: 600, suffix: '+' },
  { label: 'Schools', value: 1000, suffix: '+' },
  { label: 'Communities', value: 2000, suffix: '+' },
];

export const BENEFITS = [
  { num: '01', title: 'Boost Energy', desc: 'Re-energize employees and students with fun, engaging activities that refresh minds and lift moods.', img: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { num: '02', title: 'Team Spirit', desc: 'Encourage teamwork, bonding, and collaboration through shared joyful experiences.', img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { num: '03', title: 'Reduce Stress', desc: 'Help participants relax, unwind, and find balance with activities designed to ease daily pressure.', img: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { num: '04', title: 'Inspire Creativity', desc: 'Spark fresh ideas and confidence by promoting self-expression and out-of-the-box thinking.', img: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export const TESTIMONIALS = [
  { name: 'Mr. Bharath Ganesh S', text: 'JSB enhanced our community cricket tournament with amazing experiences. They helped us connect with great brands and elevated the community sport to a very professional level with creativity. Their attention to detail and ability to drive the event is unmatchable.' },
  { name: 'Ms. Kavitha (Principal – Springwood School)', text: "JSB's student wellness program was a hit! Their activities beautifully balanced fun with learning, helping children express themselves freely and feel more confident. It was heartwarming to see every child smile and participate with joy." },
  { name: 'Mr. Shashidhar (HR – Unispirit Pvt Ltd)', text: 'Our Diwali gifting through JSB was a wonderful experience. The sweet boxes and snack hampers were beautifully curated and personalized with our company branding. Employees loved the thoughtful touch.' },
  { name: 'Mr. Santosh N (Corporate Employee)', text: "I had the pleasure of working with JSB Corporate Wellness to organize a series of employee wellness activities, and the experience was nothing short of exceptional! The Zumba and yoga sessions were not only fun and engaging but also incredibly effective in reducing stress and boosting team morale. JSB's team was professional, well-organized, and took care of every detail. I highly recommend JSB Corporate Wellness for any company looking to invest in their employee's health and happiness!" },
];

export const GOOGLE_REVIEWS = [
  { name: 'Sangeetha Param', text: 'It is great collaborating with JSB...' },
  { name: 'Kajal Kumari', text: 'Working at JSB has been an incredible experience!...' },
  { name: 'Sharan Gowda', text: 'I love being part of JSB!...' },
  { name: 'preetham bhatt', text: 'JSB Corporate Wellness offers a positive, inclusive culture...' },
  { name: 'Abhishek', text: 'JSB values both personal and professional development...' },
  { name: 'Chirag C', text: 'Working at JSB Corporate Wellness has been an incredibly rewarding experience... The company truly cares about both its clients and its employees...' },
  { name: 'Santosh N', text: 'I had the pleasure of working with JSB Corporate Wellness to organize a series of employee wellness activities...' },
];

export const GALLERY_IMAGES = [
  { src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'corporate wellness' },
  { src: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'yoga' },
  { src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'team building' },
  { src: 'https://images.pexels.com/photos/8434631/pexels-photo-8434631.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'kids activities' },
  { src: 'https://images.pexels.com/photos/8434639/pexels-photo-8434639.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'community events' },
  { src: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'corporate wellness' },
  { src: 'https://images.pexels.com/photos/3762989/pexels-photo-3762989.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'yoga' },
  { src: 'https://images.pexels.com/photos/7045545/pexels-photo-7045545.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'kids activities' },
  { src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'community events' },
];

export const BLOG_POSTS = [
  { title: '5 Ways to Reduce Workplace Stress', excerpt: 'Simple, effective strategies for a healthier office environment.', tag: 'Corporate' },
  { title: 'The Science of Play in Education', excerpt: 'Why unstructured play matters more than ever in schools.', tag: 'Students' },
  { title: 'Building Community Through Events', excerpt: 'How apartment communities are transforming with wellness activities.', tag: 'Community' },
  { title: 'Zumba: More Than Just a Workout', excerpt: 'The mental health benefits of dance-based fitness.', tag: 'Wellness' },
  { title: 'Mindfulness in the Boardroom', excerpt: 'Bringing meditation practices to corporate leadership.', tag: 'Corporate' },
  { title: 'Kids & Yoga: A Natural Pairing', excerpt: 'Why children benefit enormously from early yoga practice.', tag: 'Students' },
  { title: 'The Art of Corporate Gifting', excerpt: 'Thoughtful gifts that employees actually want.', tag: 'Corporate' },
  { title: 'Community Sports Days Done Right', excerpt: 'Planning memorable community sports events.', tag: 'Community' },
  { title: 'Creative Expression in Schools', excerpt: 'How mime and storytelling boost student confidence.', tag: 'Students' },
  { title: 'Wellness Runs: A Community Affair', excerpt: 'Organizing impactful community wellness runs.', tag: 'Community' },
  { title: 'Festive Events That Bring People Together', excerpt: 'Celebrating diversity through community festivals.', tag: 'Community' },
  { title: 'The ROI of Employee Wellness', excerpt: 'Measuring the business impact of wellness programs.', tag: 'Corporate' },
  { title: 'School Annual Days Reimagined', excerpt: 'Modern approaches to traditional school celebrations.', tag: 'Students' },
  { title: 'Karaoke Nights for Team Bonding', excerpt: 'Why singing together builds stronger teams.', tag: 'Corporate' },
  { title: 'Outdoor Adventures for Urban Kids', excerpt: 'Reconnecting children with nature through structured activities.', tag: 'Students' },
];

export const CORPORATE_ACTIVITIES = [
  'Squid Games', 'Soft Archery', 'Domino', 'Mini Golf', 'Drums', 'Balloon Blast',
  'Olympics', 'Beat Buzzer', 'Jungle', 'Snake Pit', 'Synergizer', 'Giant Jenga',
];

export const CORPORATE_STATS = [
  { label: 'Team Outings Delivered', value: 50 },
  { label: 'Corporate Clients', value: 20 },
  { label: 'Activity Formats', value: 10 },
  { label: 'Cities Covered', value: 5 },
];

export const STUDENT_ACTIVITIES = [
  { title: 'Story Telling', desc: 'Interactive storytelling sessions that spark imagination and build communication skills.', icon: 'BookOpen' },
  { title: 'Zumba', desc: 'High-energy dance fitness that keeps kids moving, laughing, and healthy.', icon: 'Music' },
  { title: 'Mime', desc: 'Silent expression through body language, teaching the art of non-verbal communication.', icon: 'Drama' },
  { title: 'Magic', desc: 'Mind-bending magic shows that inspire wonder and creative thinking.', icon: 'Sparkles' },
  { title: 'Karaoke', desc: 'Singing sessions that build confidence and let every voice shine.', icon: 'Mic' },
  { title: 'Bushie Day', desc: 'A full day of outdoor fun, games, and adventure activities.', icon: 'Trees' },
];

export const SCHOOL_EVENTS = [
  { title: 'Sports Day', desc: 'Full-scale sports events with races, team games, and celebrations.', icon: 'Trophy' },
  { title: 'Annual Day', desc: 'Spectacular annual celebrations with performances and awards.', icon: 'Star' },
  { title: 'Festive Events', desc: 'Cultural festivals celebrating diversity and tradition.', icon: 'PartyPopper' },
  { title: 'Carnival', desc: 'Fun-filled carnivals with games, food stalls, and entertainment.', icon: 'Ticket' },
  { title: 'Graduation', desc: 'Memorable graduation ceremonies marking milestones.', icon: 'GraduationCap' },
  { title: 'PTM', desc: 'Engaging parent-teacher meetings with interactive activities.', icon: 'Users' },
];

export const COMMUNITY_ACTIVITIES = [
  { title: 'Wellness Run', desc: 'Community runs that bring neighbors together for fitness and fun.', icon: 'Activity' },
  { title: 'Zumba', desc: 'Group dance fitness sessions for all ages and fitness levels.', icon: 'Music' },
  { title: 'Mime', desc: 'Expressive mime workshops for community members.', icon: 'Drama' },
  { title: 'Magic', desc: 'Mesmerizing magic shows for the whole community.', icon: 'Sparkles' },
  { title: 'Karaoke', desc: 'Community karaoke nights that spark joy and connection.', icon: 'Mic' },
  { title: 'Bushie Day', desc: 'Outdoor adventure days packed with activities for everyone.', icon: 'Trees' },
];

export const COMMUNITY_EVENTS = [
  { title: 'Sports Day', desc: 'Community sports tournaments and family-friendly games.', icon: 'Trophy' },
  { title: 'Festive Events', desc: 'Seasonal celebrations that bring the community together.', icon: 'PartyPopper' },
  { title: 'Carnival', desc: 'Full-scale community carnivals with rides, games, and food.', icon: 'Ticket' },
  { title: 'Promotional Events', desc: 'Branded promotional events for community engagement.', icon: 'Megaphone' },
];

export const CONTACT_INFO = {
  phone: '+91 63668 70253',
  email: 'admin@jsbteam.com',
  email2: 'priya@jsbteam.com',
  address: '14, 1st Floor, AMS Layout, Jelly Machine Circle, Vidyaranyapura, Bengaluru, Karnataka 560097',
};
