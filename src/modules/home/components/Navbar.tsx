import React, { useState } from 'react';
import { CurrencyDollar, QuestionMark, Shield } from '@phosphor-icons/react';


const Navbar: React.FC = () => {
  const [doctorName, setDoctorName] = useState('Dr. Joe Mama');
  const [creditsLeft, setCreditsLeft] = useState(0);
  const [profilePhoto, setProfilePhoto] = useState('/Avatar.png');

  return (
    <header className="w-full px-24 py-4 flex items-center justify-between bg-white">
      <img src="/public/rdxlogo.png" alt="rdx Logo" />
      <div className="flex items-center justify-end gap-6">
        <div className='flex gap-2 items-center text-amber-500 text-sm font-medium'>
          <CurrencyDollar size={24} /> {creditsLeft} Credits left
        </div>
        <div className='flex gap-2.5 items-center'>
          <p className='text-lg font-semibold capitalize'>{doctorName}</p>
          <img src={profilePhoto} alt={doctorName} className='rounded-full' />
        </div>
        <div className='flex gap-2'>
          <button className='bg-[#CFDFF9] flex items-center justify-between aspect-square cursor-pointer p-2 rounded-md'><Shield size={24} /></button>
          <button className='bg-[#CFDFF9] flex items-center justify-between aspect-square cursor-pointer p-2 rounded-md'><QuestionMark size={24} /></button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;