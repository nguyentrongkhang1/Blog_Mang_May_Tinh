import { useRef, useState } from 'react'

function ReadingMusic() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.volume = 0.3
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleMusic}
        className="bg-white shadow-lg rounded-full px-4 py-2
                   text-sm font-medium text-gray-700
                   hover:bg-gray-100 transition"
      >
        {playing ? '⏸ Tạm dừng nhạc' : '▶ Phát nhạc'}
      </button>

      <audio ref={audioRef} loop>
            <source src="/audio/bensound-youngandfree.mp3" type="audio/mpeg" />
    </audio>

    </div>
  )
}

export default ReadingMusic
