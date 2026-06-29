import React from 'react';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-16 border-b pb-8">
          <h1 className="text-4xl font-bold mb-2">Layth Gharbia</h1>
          <p className="text-xl text-blue-600 font-medium">AI Engineer</p>
        </header>

        {/* About */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 border-l-4 border-blue-500 pl-4">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            I am 24 year old living in Denton, Texas. I just graduated with a degree in Computer Science. I am currently in the field and am specializing in AI engineering.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 border-l-4 border-blue-500 pl-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'JavaScript'].map((skill) => (
              <span key={skill} className="bg-white border px-4 py-2 rounded-full shadow-sm text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 border-l-4 border-blue-500 pl-4">Projects</h2>
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-xl font-bold mb-2">Doctor Finder</h3>
            <p className="text-gray-700 mb-4">
              A web app designed to help patients find doctors suited to their needs such as any specific injuries or disease. Additionally, helps patients find doctors that accept their insurance or even speak their native language. Role was in the front end work on the design and layout of the web app.
            </p>
            <p className="text-sm text-gray-500 mb-4 font-mono">Next.js, React, Firebase</p>
            <a 
              href="https://capstone2024-five.vercel.app" 
              className="text-blue-600 hover:underline font-medium"
              target="_blank"
            >
              View Live Site →
            </a>
          </div>
        </section>

        {/* Contact */}
        <footer className="mt-20 border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4 border-l-4 border-blue-500 pl-4 text-gray-900">Contact</h2>
          <div className="flex flex-col gap-2 text-lg">
            <p>Email: <span className="font-medium">laythgha17@gmail.com</span></p> 
            <p>GitHub: <a href="https://github.com/laythgha" className="text-blue-600 hover:underline">github.com/laythgha</a></p>
          </div>
        </footer>

      </div>
    </main>
  );
}
