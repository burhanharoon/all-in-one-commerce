import './App.css';
import data from './csvjson.json'

const App = () => {
  return (
    <div className=''>

      <div className='bg-[#f2f2f2e6] p-4 pt-14 fixed h-screen w-[22rem]'>
        <div className='flex gap-4 flex-col'>
          <input type="text" placeholder="Search..." class="input input-bordered w-full" />
          <div className='flex gap-2 flex-wrap'>
            <input type="text" placeholder="$ Min" class="input input-bordered w-20" />
            <input type="text" placeholder="$ Max" class="input input-bordered w-20" />
            <button class="btn btn-active btn-ghost">Go</button>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Available in Stock</span>
              <input type="checkbox" class="checkbox checkbox-primary" />
            </label>
          </div>
        </div>

      </div>

      <div className='grid grid-cols-1 p-4 gap-8 ml-[22rem]'>
        {data.map(product =>
          <div className='flex gap-8 items-center'>
            <img className='bg-black w-32 sm:w-40 h-32 sm:h-40 rounded-lg' src={product.Images} alt='product' />
            <div className='flex flex-col gap-2'>
              <h1 className='font-semibold text-base sm:text-lg text-zinc-600'>{product.Name}</h1>
              <p className='text-zinc-400 text-sm sm:text-base truncate w-32 md:w-72'>{product.Description}</p>
              <p className='text-zinc-400'>Price: {product['Unit cost']}</p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
