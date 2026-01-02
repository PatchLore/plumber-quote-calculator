import React from 'react';

type PageProps = {
  params: {
    id: string
  }
}

export default function InspectionDetailPage({ params }: PageProps) {
  return (
    <main>
      <h1>Inspection Detail</h1>
      <p>Placeholder: details for inspection with id: {params.id}</p>
    </main>
  );
}


