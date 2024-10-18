// app/page.tsx
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Choose a Country</h2>
      <ul className="space-y-8">
        <li>
          <Link className='className="block bg-blue-600 text-white text-2xl font-semibold py-3 px-5 rounded hover:bg-blue-500 transition duration-300"' href="/pakistan">
           
              Pakistan
            
          </Link>
        </li>
        <li>
          <Link className="block bg-green-600 text-white text-2xl font-semibold py-3 px-5 rounded hover:bg-green-500 transition duration-300" href="/india">
            
              India
            
          </Link>
        </li>
        <li>
          <Link className="block bg-red-600 text-white text-2xl font-semibold py-3 px-5 rounded hover:bg-red-500 transition duration-300" href="/china">
            
              China
          
          </Link>
        </li>

        <li>
          <Link className="block bg-yellow-600 text-white text-2xl font-semibold py-3 px-5 rounded hover:bg-red-500 transition duration-300" href="/japan">
            
              Japan
          
          </Link>
        </li>

        
      </ul>
    </div>
  );
};

export default Home;
