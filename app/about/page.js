
// pages/about.js
import Image from 'next/image'

export default function About() {
  return (
    <main className="max-w-7xl mx-auto p-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg mb-12">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-gray-600">Discover our story and what drives us forward</p>
      </section>

      {/* Company Info Section */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/company-image.jpg"
            alt="Company Team"
            width={500}
            height={300}
            priority
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600">
            Founded in [year], we've been committed to delivering excellence
            in [your industry]. Our journey began with a simple idea: [your mission].
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Innovation', description: 'Pushing boundaries in everything we do' },
            { title: 'Quality', description: 'Delivering excellence in every project' },
            { title: 'Integrity', description: 'Building trust through honest practices' },
            { title: 'Collaboration', description: 'Working together to achieve more' }
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'John Doe', role: 'CEO', image: '/team/john.jpg' },
            { name: 'Jane Smith', role: 'CTO', image: '/team/jane.jpg' },
            // Add more team members as needed
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center bg-gray-50 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">Interested in learning more? We'd love to hear from you.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg transition-colors">
          Contact Us
        </button>
      </section>
    </main>
  )
}