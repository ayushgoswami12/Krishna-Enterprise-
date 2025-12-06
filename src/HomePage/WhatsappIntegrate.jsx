import React, { useState, useEffect } from 'react';
import WhatsAppModal from './WhatsAppModal'; // Adjust the import path as needed

function WhatsappIntegrate() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open the modal 2 seconds after the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000); // 2000 milliseconds = 2 seconds

    // Cleanup the timer if the component unmounts before the timer finishes
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="mainHero" className="flex pt-24">
        {/* Other content */}
        
        {/* WhatsApp Modal */}
        <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </>
  );
}

export default WhatsappIntegrate;