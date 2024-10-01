import Image from 'next/image';

export default function Home() {
  return (
      <div className="homeContainer">
        <div className="childContainer">
          Hey,
          <br />
          My Name is <span className="pinkColor">Muskaan</span>
          <br />I am Frontend Developer
        </div>
        <div className="childContainer">
          <Image src="/main.png" width={200} height={4000} alt='profile pic' className="rounded-image" />
        </div>
      </div>
  );
}