import React from 'react';

export default function InspectionDetailPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>Inspection Detail</h1>
      <p>Placeholder: details for inspection with id: {params.id}</p>
    </main>
  );
}


