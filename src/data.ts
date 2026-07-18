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
  {
    tag: "#CORPORATEWELLNESS",
    title: "How JSB Is Changing the Way Companies Think About Employee Wellness",
    excerpt: "How JSB Is Changing the Way Companies Think About Employee Wellness For years, corporate wellness meant long talks, serious presentations,",
    date: "December 16, 2025",
  },
  {
    tag: "BREATHING EXERCISES AT WORK",
    title: "From Desk to De-Stress: 5 Quick Hacks to Refresh Your Workday",
    excerpt: "From Desk to De-Stress: 5 Quick Hacks to Refresh Your Workday Long hours at a desk can drain energy, reduce",
    date: "December 15, 2025",
  },
  {
    tag: "CORPORATE EVENTS",
    title: "Why Creative Play Is the Most Underrated Stress Buster for Adults",
    excerpt: "Why Creative Play Is the Most Underrated Stress Buster for Adults As children, being creative comes naturally — we draw,",
    date: "December 1, 2025",
  },
  {
    tag: "CORPORATE WELLNESS",
    title: "Best Corporate Day Out Activities in India | Just Stress Busters",
    excerpt: "Why Just Stress Busters Is the Perfect Partner for Your Corporate Day Out Plan a fun, stress-free corporate day out",
    date: "November 28, 2025",
  },
  {
    tag: "BANGALORE WELLNESS EVENTS",
    title: "The Science of Stress",
    excerpt: "How Simple Play Can Reboot Your Mind Discover how playful activities and movement-based games can lower stress hormones, enhance mood,",
    date: "November 11, 2025",
  },
  {
    tag: "DESK YOGA",
    title: "The Silent Crisis: Suicides, Stress & Mental Health in India's Corporate Culture",
    excerpt: "Introduction Behind the glittering towers of India’s corporate hubs lies a growing crisis — employee burnout, mental health breakdowns, and",
    date: "June 27, 2025",
  },
  {
    tag: "CORPORATE WELLNESS",
    title: "How Laughter and Play Can Revitalize Your Office: The Magic of Pranks and Games",
    excerpt: "In the fast-paced world of corporate life, stress has become an inevitable part of the equation. Deadlines loom, meetings pile",
    date: "December 25, 2024",
  },
  {
    tag: "YOGA",
    title: "Why choose Yoga?",
    excerpt: "In a world bustling with constant activity, stress, and distractions, yoga stands as a beacon of tranquility and holistic well-being.",
    date: "November 14, 2024",
  },
  {
    tag: "ZUMBA",
    title: "Zumba and its benefits",
    excerpt: "Why Zumba is a great alternative to traditional fitness programs: Ready to try it? Start with these three simple moves.",
    date: "November 14, 2024",
  },
  {
    tag: "HEALTH CHECK-UP",
    title: "Importance of Health Check-Up",
    excerpt: "In the fast-paced corporate world, where deadlines and targets often take center stage, the well-being of employees is a critical",
    date: "November 14, 2024",
  },
  {
    tag: "MARATHON",
    title: "JSB's Epic Marathon Journey with Subex",
    excerpt: "Hey there, fitness enthusiasts! We’re thrilled to share the incredible journey we embarked on with Subex, a dynamic corporation committed",
    date: "November 14, 2024",
  },
  {
    tag: "FITNESS CHALLENGES",
    title: "Energizing the journey: Pre-Marathon Fitness Challenges by JSB with Subex",
    excerpt: "As the countdown to the Subex Marathon began, the excitement in the air was palpable. At JSB, we believe in",
    date: "November 14, 2024",
  },
  {
    tag: "STRESS BUSTER ACTIVITIES",
    title: "10 Effective Stress Buster Activities for the Workplace",
    excerpt: "In today’s fast-paced corporate world, where deadlines loom and expectations run high, managing stress has become a critical aspect of",
    date: "November 14, 2024",
  },
  {
    tag: "CORPORATE EVENTS",
    title: "Celebrating Creativity and Dreams at Springwood Academy: A Day of Fun and Inspiration",
    excerpt: "At Just Stress Buster (JSB), we recently had the pleasure of organizing a vibrant Music Carnival for Springwood Academy, a",
    date: "November 14, 2024",
  },
  {
    tag: "HEART HEALTH",
    title: "Inactivity in the Workplace: A Silent Heart Health Threat",
    excerpt: "In India’s fast-paced corporate world, employees often find themselves glued to their desks for hours, leading to an alarming rise",
    date: "November 14, 2024",
  },
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


export const PRODUCTS = [
  {
    id: 1,
    name: 'Premium Festive Hamper',
    price: 2499,
    category: 'Hampers',
    image:
      'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    name: 'Luxury Dry Fruit Box',
    price: 1999,
    category: 'Hampers',
    image:
      'https://images.pexels.com/photos/5946973/pexels-photo-5946973.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    name: 'Classic Sweet Box',
    price: 799,
    category: 'Sweets',
    image:
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    name: 'Assorted Mithai Pack',
    price: 999,
    category: 'Sweets',
    image:
      'https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    name: 'Wellness Kit Deluxe',
    price: 1499,
    category: 'Wellness',
    image:
      'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    name: 'Relaxation Gift Set',
    price: 1299,
    category: 'Wellness',
    image:
      'https://images.pexels.com/photos/6621463/pexels-photo-6621463.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 7,
    name: 'Healthy Snack Box',
    price: 699,
    category: 'Snacks',
    image:
      'https://images.pexels.com/photos/669727/pexels-photo-669727.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 8,
    name: 'Crunchy Treat Pack',
    price: 899,
    category: 'Snacks',
    image:
      'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 9,
    name: 'Executive Gift Hamper',
    price: 2999,
    category: 'Hampers',
    image:
      'https://images.pexels.com/photos/7045545/pexels-photo-7045545.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 10,
    name: 'Organic Wellness Combo',
    price: 1799,
    category: 'Wellness',
    image:
      'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 11,
    name: 'Premium Chocolate Box',
    price: 1199,
    category: 'Sweets',
    image:
      'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 12,
    name: 'Snack Delight Hamper',
    price: 1399,
    category: 'Snacks',
    image:
      'https://images.pexels.com/photos/669726/pexels-photo-669726.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];