import Posts from './components/Posts';

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p className='dark:text-white mt-12 mb-12 text-3xl text-center'>
        Hello👋
        <br />
        <span className='whitespace-nowrap'>
          I&apos;m <span className='font-bold'>Shreyas</span>
        </span>
      </p>
      <Posts />
    </main>
  );
}
