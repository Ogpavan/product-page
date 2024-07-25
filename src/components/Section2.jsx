import React from 'react'

function Section2() {
  return (
    <div className='max-w-[1200px] mx-auto mt-10 container md:w-5/6'>
        <div className=' my-10 '>
    <h1 className='open-sans-bold text-2xl py-5 mb-3 rounded-md px-3 mt-5 bg-slate-100'> Device Specifications</h1>
    <div className='flex gap-5 flex-wrap px-3 '>
        <span className='border-[1px] border-gray-500 rounded-lg p-5 open-sans-semibold'>Intel i5 8-core laptops (upto 10th gen)

</span>
<span className='border-[1px] border-gray-500 rounded-lg p-5 open-sans-semibold'>14" FullHD display 

</span>
<span className='border-[1px] border-gray-500 rounded-lg p-5 open-sans-semibold'>16-24 GB Memory (DDR4 RAM)
</span>
<span className='border-[1px] border-gray-500 rounded-lg p-5 open-sans-semibold'>SSD storage 256GB - 512 GB
</span>

<span className='border-[1px] border-gray-500 rounded-lg p-5 open-sans-semibold'>
Backlit keyboard, HD webcam

</span>
</div>
        </div>


        <div className=' my-10'>
    <h1 className='open-sans-bold text-2xl py-5 mb-3 bg-slate-100 px-3 rounded-md mt-3'>Plan includes</h1>
    <div className='flex gap-5 flex-wrap px-3'>
        <span className='border-[1px] border-gray-500 rounded-lg p-5 open-sans-semibold'>Data backup (Google drive/ Onedrive)

</span>
<span className='border-[1px] border-gray-500 rounded-lg p-5 open-sans-semibold'>Microsoft 365/ Google workspaces 

</span>
<span className='border-[1px] border-gray-500 rounded-lg p-5 open-sans-semibold'>Genuine Windows 10/11 Preloaded
</span>
<span className='border-[1px] border-gray-500 rounded-lg p-5 open-sans-semibold'>On-site service guarantee within 24
</span>
 
</div>
        </div>




        <div className='open-sans-bold text-2xl py-5 mt-5 mb-3 bg-slate-100 px-3 rounded-md'>Recommended for Workflows like</div>
        <ul className='list-disc ml-10 space-y-3'>
          <li>Browse multiple tabs at once - Outlok, Gmail, Linkedin, Slack, Youtube etc</li>
          <li>High quality video meetings on zoom, Microsoft teams, Gmeet (with support for screen share and record meeting).</li>
          <li>Work with multiple excel sheets, PowerPoint slides or Word documents.</li>
          <li>Install any other apps required for your work or play like whatsapp, instagram, adobe acrobat etc.</li>
        </ul>
    </div>
  )
}

export default Section2