import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { EcosystemDiagram } from '../ecosystem/EcosystemDiagram';

export const EcosystemPreview: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/80 dark:bg-dark-900/40 border-y border-slate-200 dark:border-white/5 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="THE ECOSYSTEM"
          title="One ecosystem. Many possibilities."
          subtitle="NextGen Technologies is designed to branch into distinct technological domains. Rather than forcing everything into one app, we cultivate focused platforms under one cohesive banner."
          center={true}
          className="mb-14"
        />

        <EcosystemDiagram />
      </div>
    </section>
  );
};
