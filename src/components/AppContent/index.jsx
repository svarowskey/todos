import React from 'react';
import 'components/AppContent/index.scss';

export default function AppContent({ ...props }) {
    return(
        <main id="app-content" {...props} />
    );
}
