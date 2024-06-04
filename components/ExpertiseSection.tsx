import { Code, Database, Layers3 } from 'lucide-react';

const ExpertiseSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-20 text-white">
      <div className="container text-center md:px-0">
        {/* <h2 className="mb-12 text-4xl font-bold">My Expertise</h2> */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="group">
            <div className="relative mx-auto mb-4 flex h-24 w-24 items-center justify-center">
              {/* <FaCode className="text-custom-orange group-hover:animate-pulseCircle text-6xl" /> */}
              <Code size={64} color="#ea580c" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold">
              Front-End Development
            </h3>
            <p className="text-gray-300">
              Crafting responsive, interactive, and user-friendly interfaces
              with modern frameworks and tools.
            </p>
          </div>
          <div className="group">
            <div className="relative mx-auto mb-4 flex h-24 w-24 items-center justify-center">
              {/* <FaDatabase className="text-custom-green group-hover:animate-pulseCircle text-6xl" /> */}
              <Database size={48} color="#a4fcc4" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold">
              Back-End Development
            </h3>
            <p className="text-gray-300">
              Building robust and scalable server-side applications with secure
              databases and efficient APIs.
            </p>
          </div>
          <div className="group">
            <div className="relative mx-auto mb-4 flex h-24 w-24 items-center justify-center">
              {/* <FaLayerGroup className="text-custom-yellow group-hover:animate-pulseCircle text-6xl" /> */}
              <Layers3 size={48} color="#a855f7" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold">
              Full-Stack Solutions
            </h3>
            <p className="text-gray-300">
              Integrating front-end and back-end technologies to deliver
              seamless and comprehensive web solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
