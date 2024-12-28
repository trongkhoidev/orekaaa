// import React from 'react';
// import { useRouter } from 'next/router';
// import Owner from '../components/Owner';

// const OwnerPage = () => {
//   const router = useRouter();
//   const { address } = router.query; // Lấy địa chỉ từ query params

//   return <Owner address={address as string} />;
// };

// export default OwnerPage;

import React from 'react';
import Owner from '../components/Owner';  // Import component của owner

const OwnerPage = () => {
  return <Owner address="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" />;
};

export default OwnerPage;
