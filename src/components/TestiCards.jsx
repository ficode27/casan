function TestiCards({fullName, username, texts}) {
  return (
    <div className="w-full h-40  bg-slate-100 p-5">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-300"></div>
         <div className="text-[12px] font-bold">
            <h4 className="mb-0">{fullName}</h4>
            <p className="mt-0">@{username}</p>
         </div>
      </div>
        <div className="text-sm mt-3">
          <p>
            {texts}
         </p>
        </div>
    </div>
    
  )
}

export default TestiCards