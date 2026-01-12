import React from 'react';

const Badge = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center gap-2 bg-brand-primary/20 border border-brand-primary/30 backdrop-blur-sm px-4 py-2 rounded-full text-amber-600 text-sm font-semibold mb-6">
    {Icon && <Icon size={16} />}
    {text}
  </div>
);

export default Badge;