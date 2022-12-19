import { Helmet } from 'react-helmet-async';

const GuestLayout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <title>Laravel</title>
      </Helmet>

      <div className="font-sans text-gray-900 antialiased">{children}</div>
    </div>
  );
};

export default GuestLayout;
