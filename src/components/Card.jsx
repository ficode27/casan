
function Cards({srcImage, title}) {
  return (
    <div className="w-full xl:w-96 h-72 bg-slate-100 shrink-0 flex flex-col rounded-lg p-3 shadow-sm">
      <img src={srcImage} className="w-full h-40 object-cover rounded-lg" />
      <div className="mt-3 flex flex-col items-start">
        <h3 className="font-bold">{title}</h3>
        <button type="button" class="py-2.5 px-5  mt-7 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 self-end">Pesan</button>
      </div>
    </div>
  )
}

export default Cards