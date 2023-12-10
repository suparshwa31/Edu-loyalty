import React from 'react';


const Content = () => {
    return (
        <div className="content p-4">
            <h2>Welcome to your PFW!</h2>
        </div>
    );
};

const DashboardDummy = () => {
    return (
        <div className="dashboard d-flex">
            <div className="main flex-grow-1">
                <Content />
            </div>
        </div>
    );
};

export default DashboardDummy;
 