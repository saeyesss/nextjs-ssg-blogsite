import Image from 'next/image';

export default function DisplayPicture() {
  return (
    <section className='w-full mx-auto'>
      <Image
        src='/images/gato.jpg'
        width={200}
        height={200}
        alt='Gato'
        priority={true}
        className='border-4 border-black dark:border-slate-500 drop-shadow-xl
              shadow-black rounded-full mx-auto mt-8'
      />
    </section>
  );
}
