import React from 'react';

const SectionTitle = ({ title, subtitle, centered = false, light = false }) => (
  <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-stone-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`leading-relaxed ${light ? 'text-stone-300' : 'text-stone-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;