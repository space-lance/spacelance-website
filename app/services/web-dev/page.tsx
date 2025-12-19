import { Rocket, Cpu, Cloud, Shield, BarChart, Satellite } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Services | Spacelance",
  description: "Advanced AI, SaaS and Space-tech solutions by Spacelance."
};

const services = [
  {
    title: "AI Product Development",
    desc: "End-to-end AI systems from data pipelines to production-ready models.",
    icon: <Cpu />
  },
  {
    title: "SaaS & Web Platforms",
    desc: "High-performance SaaS products using Next.js, React and cloud-native stacks.",
    icon: <Rocket />
  },
  {
    title: "Space-Tech Systems",
    desc: "Tools for space traffic management, simulation and data visualization.",
    icon: <Satellite />
  },
  {
    title: "Cloud & APIs",
    desc: "Scalable backend systems with secure REST & GraphQL APIs.",
    icon: <Cloud />
  },
  {
    title: "Security Engineering",
    desc: "Authentication, authorization and data protection best practices.",
    icon: <Shield />
  },
  {
    title: "Analytics Dashboards",
    desc: "Real-time analytics with beautiful, actionable dashboards.",
    icon: <BarChart />
  }
];

export default function ServicesPage() {
  return (
    <main className="px-6 py-20 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Services
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          We build mission-critical AI and software platforms for startups and enterprises.
        </p>
      </section>

      {/* Grid */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard
            key={s.title}
            title={s.title}
            description={s.desc}
            icon={s.icon}
          />
        ))}
      </section>

      {/* Process */}
      <section className="mt-28 text-center">
        <h2 className="text-3xl font-semibold mb-6">How We Work</h2>
        <div className="grid gap-8 md:grid-cols-4 text-left max-w-5xl mx-auto">
          {[
            ["Discover", "Understand your problem & goals"],
            ["Design", "Architecture & UX planning"],
            ["Build", "Agile development & testing"],
            ["Launch", "Deploy, monitor & scale"]
          ].map(([t, d]) => (
            <div key={t}>
              <h3 className="font-semibold mb-2">{t}</h3>
              <p className="text-sm text-neutral-400">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-28 text-center">
        <div className="rounded-3xl bg-indigo-600 px-8 py-14">
          <h3 className="text-3xl font-bold mb-4">Let’s build something powerful</h3>
          <p className="mb-6 text-indigo-100">
            Have an idea? We’ll help you turn it into a scalable product.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
