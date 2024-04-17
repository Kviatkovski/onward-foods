import Link from 'next/link';

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <p>
        <Link href='/meals/page-1'>Page 1</Link>
      </p>
      <p>
        <Link href='/meals/page-2'>Page 2</Link>
      </p>
    </main>
  );
}
