import React from 'react';
const Summary = React.lazy(() => import('../views/summary'));
const Info = React.lazy(() => import('../views/info'));
const Certificate = React.lazy(() => import('../views/certificate'));

var indexRoutes = [
    { path: "/certificate", name: "Certificate", component: Certificate },
    { path: "/info", name: "Info", component: Info },
    { path: "/", name: "Summary", component: Summary },
];

export default indexRoutes;
