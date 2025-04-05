import React from 'react';

interface ApplicationCardProps {
  image: string;
  title: string;
  onClick: () => void; // Changed to PascalCase (onClick) to follow React convention
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ image, title, onClick }) => {
  return (
    <div className="bg-white rounded-2xl px-5 pb-6 grow max-w-2xs hover:shadow-md">
      <img src={image} alt={title} className='w-full object-scale-down max-w-64 mx-auto -my-4' />
      {/* Remove the -my-6 FOR photos with NO THICK WHITE PADDINGS */}
      <p className='text-center text-2xl mb-3 font-semibold'>{title}</p>
      <button onClick={onClick} className="w-full cursor-pointer bg-primary text-white font-semibold rounded-md px-4 py-1.5 ">
        Confirm
      </button>
    </div>
  );
};

export default ApplicationCard;