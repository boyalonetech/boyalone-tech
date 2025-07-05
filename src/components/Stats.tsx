import React from 'react'

const Stats = () => {
  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mt-10">
        <div className="bg-[#f5f8ff] p-6 rounded shadow">
          <h2 className="text-3xl text-blue-500 font-bold">2K+</h2>
          <p className="text-gray-600">Websites Developed</p>
        </div>
        <div className="bg-[#f5f8ff] p-6 rounded shadow">
          <h2 className="text-3xl text-blue-500 font-bold">5+</h2>
          <p className="text-gray-600">Years of Experience</p>
        </div>
        <div className="bg-[#f5f8ff] p-6 rounded shadow">
          <h2 className="text-3xl text-blue-500 font-bold">4K</h2>
          <p className="text-gray-600">Completed Projects</p>
        </div>
      </div>
    </div>
  );
}

export default Stats
