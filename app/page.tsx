import Hello from '@/app/components/Hello';
const Home = () => {
  console.log('What type of a component is this?');
  return (
    <>
      <div className="text-5xl underline">Welcome to Next.js</div>
      <Hello />
    </>
  );
};

export default Home;
