import jumboImage from '../assets/images-casan/jumbotron.webp'
import '../style.css'
import { Dropdown } from 'flowbite';

function Jumbotron() {
  return (
    <div className="w-full h-fit xl:h-80 flex flex-col xl:flex-row gap-2">
      <div className="w-full xl:w-1/2 bg-slate-100 h-80 xl:h-full rounded shadow-s jumbo-bg-image flex flex-col p-5 xl:p-7 justify-between">
         <h2 className="font-bold text-3xl  text-white">Temukan kosan dengan Casan biar harimu berkesan</h2>
        <div className="w-full flex gap-3 flex-col xl:flex-row">
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-3 text-center inline-flex font-medium items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Lokasi<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          
          <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-32 xl:w-36 dark:bg-gray-700">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
          </div>
        </div>
      </div>
      
      <div className="w-full xl:w-1/2 h-full flex flex-col xl:flex-row gap-3 items-end">
        <div className="w-full xl:w-1/2 h-52 xl:h-40 bg-slate-100 rounded shadow-sm"></div>
        <div className="w-full xl:w-1/2 h-52 xl:h-40 bg-slate-100 rounded shadow-sm"></div>
      </div>
    </div>
  );
}

export default Jumbotron