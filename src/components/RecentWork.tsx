import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Deck winch retrofit',
    description: 'Efficient transportation of goods across international waters',
    image: '/project1.jpg',
    category: 'Engineering'
  },
  {
    id: 2,
    title: 'Pump & valve package (UAE)',
    description: 'Pump & valve package (UAE)',
    image: '/project2.jpg',
    category: 'Supply'
  },
  {
    id: 3,
    title: 'RFQ portal for spares',
    description: 'RFQ portal for spares',
    image: '/project3.jpg',
    category: 'E-Commerce'
  }
];

export default function RecentWork() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Work & Supply Highlights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our latest projects and see how we're making waves in the maritime industry.</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-blue-400 text-sm font-bold">{project.category}</span>
                <h3 className="text-2xl font-medium text-gray-900 mt-2 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors text-lg font-medium">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
