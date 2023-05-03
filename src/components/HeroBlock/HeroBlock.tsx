const HeroBLock = () => {
  return (
    <div className="bg-white dark:bg-gray-900 h-4/6">
    <div className="flex flex-col md:flex-row justify-end md:justify-center bg-cover bg-img h-full">
      <div className="w-full">
      </div>
      <div className="flex py-6 items-center bg-pink-200 w-full md:w-3/6 md:max-w-md px-6 mx-auto opacity-80 ">
        <div className="flex-1">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Koučingas</h2>
            <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
          </div>
          <div className="mt-8">
            <form className=''>
              <div>
                <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>
              <div className="mt-6">
                <button
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Registruokis!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroBLock