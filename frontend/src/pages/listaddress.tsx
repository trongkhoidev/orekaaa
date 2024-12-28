import { useRouter } from 'next/router';
import ListAddressOwner from '../components/ListAddressOwner';

const ListAddressPage = () => {
    const router = useRouter();
    const { page } = router.query;

    if (!page) {
        return <div>Loading...</div>;
    }

    const pageNumber = parseInt(page as string, 10);
    const finalPage = isNaN(pageNumber) ? 1 : pageNumber;

    return (
        <div>
            <ListAddressOwner ownerAddress="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" page={finalPage} />
        </div>
    );
};

// // export default ListAddressPage;
// import React from 'react';
// import ListAddressOwner from '../components/ListAddressOwner';  // Import component của owner
// import { useRouter } from 'next/router';

// const ListAddressOwnerPage = ({ ownerAddress }: { ownerAddress: string }  ) => {
//   return <ListAddressOwner ownerAddress={ownerAddress} page={1} />;
// };

export default ListAddressOwner;