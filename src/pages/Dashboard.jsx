/* eslint-disable react/no-unescaped-entities */
import AppLayout from '@/components/Layouts/AppLayout';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  return (
    <AppLayout header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}>
      <Helmet>
        <title>Laravel - Dashboard</title>
      </Helmet>

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">You're logged in!</div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
