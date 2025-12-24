import { useState } from 'react'

function Certifications({ image, title, issuer, date, description }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* CARD */}
      <div
        className="bg-white border border-gray-200 rounded-xl p-5
                   hover:shadow-lg transition-all duration-300
                   flex flex-col cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-contain mb-4 rounded bg-gray-50 p-2"
        />

        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mb-2">
          {issuer} • {date}
        </p>

        <p className="text-sm text-gray-600 leading-relaxed flex-grow">
          {description}
        </p>
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70
                     flex items-center justify-center px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3
                         text-gray-500 hover:text-gray-800 text-xl"
            >
              ✕
            </button>

            {/* IMAGE */}
            <img
              src={image}
              alt={title}
              className="w-full max-h-[70vh] object-contain mb-4"
            />

            {/* ACTIONS */}
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-gray-900">
                {title}
              </h4>

              <a
                href={image}
                download
                className="px-4 py-2 bg-indigo-600 text-white
                           rounded hover:bg-indigo-700 transition"
              >
                Tải về
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Certifications
