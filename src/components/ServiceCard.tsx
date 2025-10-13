import React from 'react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
  className?: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  className = '',
}) => {
  return (
    <div 
      className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
