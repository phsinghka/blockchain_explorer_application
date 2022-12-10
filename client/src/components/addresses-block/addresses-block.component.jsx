import { Link } from 'react-router-dom';
const AddressBlock = ({ addressesData }) => {
  return (
    <div className='list-group'>
      {addressesData.map((address) => (
        <div key={address} className='list-group-item'>
          <p>
            <b>Address : </b>
            <Link to={address}>{address}</Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default AddressBlock;
