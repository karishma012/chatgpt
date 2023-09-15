// pages/index.tsx

import Link from 'next/link';

export default function page() {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>Click the button to go to the Page</p>
      <Link href="/">
        <button className='text-red-800 bg-blue-800'>Go to Page</button>
      </Link>
    </div>
  );
}


