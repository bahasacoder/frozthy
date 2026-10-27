// app/some-client-component.tsx (or in a page with 'use client')
'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function SomeClientComponent() {
  const params = useParams<{ slug: string }>();

  useEffect(() => {
    console.log('Current slug:', params.slug);
  }, [params.slug]);

  return <p>Current Post Slug: {params.slug}</p>;
}
