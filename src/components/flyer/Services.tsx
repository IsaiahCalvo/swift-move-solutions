import React from 'react';

const services = [
    "Professional Moving",
    "Junk Removal",
    "Property Cleanouts",
    "Furniture Delivery",
    "Professional Install",
    "Site Preparation",
    "Contractor Support"
];

const Services: React.FC = () => {
    return (
        <ul className="space-y-6">
            {services.map((service, index) => (
                <li key={index} className="flex items-center group">
                    <div className="w-1.5 h-1.5 bg-[#F98805] rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                    <span className="text-lg md:text-xl font-medium tracking-tight text-[#F7FAFC]">{service}</span>
                </li>
            ))}
        </ul>
    );
};

export default Services;
