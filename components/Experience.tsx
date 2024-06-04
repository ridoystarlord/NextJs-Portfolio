import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <div className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black py-5 md:py-20">
        <div className="container md:px-0">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-orange-500">
              Professional Experience
            </h2>
            <h3 className="mt-2 text-4xl font-bold text-white">
              Where I Works so far
            </h3>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-gray-800 p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-white">
                Full Stack Developer
              </h3>
              <p className="text-gray-400">
                Bevy Commerce (Remote) | May 2023 – Present
              </p>
              <ul className="mt-4 list-inside list-disc text-gray-300">
                <li>Build Shopify Custom & Public APP</li>
                <li>Complete a full project from scratch to production</li>
                <li>
                  Works on a public app which will connect dropshipping
                  businesses
                </li>
                <li>Implement 50+ Features</li>
                <li>Improve the performance of existing Shopify App.</li>
                <li>Collaborated with both UX/UI teams.</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-gray-800 p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-white">
                Junior Software Engineer
              </h3>
              <p className="text-gray-400">
                Workspace Infotech Limited | November 2021 – April 2023
              </p>
              <ul className="mt-4 list-inside list-disc text-gray-300">
                <li>Works on ongoing Existing Next.js projects</li>
                <li>Implements 50+ Features in existing projects</li>
                <li>
                  Complete a full backend from scratch to production with
                  Hono(Cloudflare Serverless) and mongodb
                </li>
                <li>Collaborated with both UX/UI and API teams</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-10 hidden opacity-50 md:block">
          <img src="/services-1.png" alt={`Background Icon`} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
