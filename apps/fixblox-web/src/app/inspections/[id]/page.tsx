import React from 'react';

type PageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function InspectionDetailPage({ params }: PageProps) {
  const resolved = await params

  return (
    <main>
      <h1>Inspection Detail</h1>
      <p>Placeholder: details for inspection with id: {resolved.id}</p>
    </main>
  );
}


