import Link from 'next/link';

function HomePage() {
  return (
    <>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href='/news/nexjs-is-a-great-framework'>NextJS is grate</Link>
        </li>
        <li>NextJS is grate</li>
      </ul>
    </>
  );
}

export default HomePage;
