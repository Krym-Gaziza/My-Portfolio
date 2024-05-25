import React from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = true; 

    if (!isAuthenticated) {
      return <div>Please log in to view this content.</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
