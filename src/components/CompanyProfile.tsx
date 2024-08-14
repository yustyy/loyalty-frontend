import React from 'react';

interface CompanyProfileProps {
  companyType: string;
  email: string;
  phoneNumber: string;
  address: string;
  industry: string;
  // Corporate Company Fields
  companyName?: string;
  taxNumber?: string;
  registrationDate?: string;
  contactPersonFirstName?: string;
  contactPersonLastName?: string;
  contactPersonEmail?: string;
  contactPersonPhoneNumber?: string;
  numberOfEmployees?: string;
  companyWebsite?: string;
  // Individual Company Fields
  firstName?: string;
  lastName?: string;
  birthDate?: string;
}

const CompanyProfile: React.FC<CompanyProfileProps> = (props) => {
  return (
    <div className="bg-gray-900 bg-opacity-90 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-extrabold mb-4">{props.companyType === 'corporate' ? props.companyName : `${props.firstName} ${props.lastName}`}</h1>
      <p className="text-gray-400 mb-2">{props.industry}</p>
      <p className="text-gray-500 mb-2">{props.email}</p>
      <p className="text-gray-500 mb-2">{props.phoneNumber}</p>
      <p className="text-gray-500 mb-4">{props.address}</p>

      {props.companyType === 'corporate' ? (
        <>
          <p className="text-gray-500 mb-2">Tax Number: {props.taxNumber}</p>
          <p className="text-gray-500 mb-2">Registration Date: {props.registrationDate}</p>
          <p className="text-gray-500 mb-2">Contact Person: {props.contactPersonFirstName} {props.contactPersonLastName}</p>
          <p className="text-gray-500 mb-2">Contact Email: {props.contactPersonEmail}</p>
          <p className="text-gray-500 mb-2">Contact Phone: {props.contactPersonPhoneNumber}</p>
          <p className="text-gray-500 mb-2">Number of Employees: {props.numberOfEmployees}</p>
          <p className="text-gray-500 mb-2">Company Website: {props.companyWebsite}</p>
        </>
      ) : (
        <>
          <p className="text-gray-500 mb-2">Birth Date: {props.birthDate}</p>
        </>
      )}
    </div>
  );
};

export default CompanyProfile;
