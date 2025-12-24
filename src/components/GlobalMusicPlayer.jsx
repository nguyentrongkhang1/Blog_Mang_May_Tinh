import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

function GlobalMusicPlayer() {
  const audioRef = useRef(null)
  const location = useLocation()

  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  /* ===== BẬT NHẠC SAU CLICK ĐẦU TIÊN ===== */
  useEffect(() => {
    const enableAudio = async () => {
      try {
        audioRef.current.volume = volume
        await audioRef.current.play()
        setPlaying(true)
        setReady(true)
      } catch {}
      window.removeEventListener('click', enableAudio)
    }

    window.addEventListener('click', enableAudio, { once: true })
    return () => window.removeEventListener('click', enableAudio)
  }, [])

  /* ===== RESET NHẠC KHI ĐỔI ROUTE ===== */
  useEffect(() => {
    if (!ready) return
    const audio = audioRef.current
    audio.pause()
    audio.currentTime = 0
    audio.play()
    setPlaying(true)
  }, [location.pathname])

  /* ===== CẬP NHẬT PROGRESS ===== */
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateProgress = () => {
      setProgress(audio.currentTime)
      setDuration(audio.duration || 0)
    }

    audio.addEventListener('timeupdate', updateProgress)
    audio.addEventListener('loadedmetadata', updateProgress)

    return () => {
      audio.removeEventListener('timeupdate', updateProgress)
      audio.removeEventListener('loadedmetadata', updateProgress)
    }
  }, [])

  /* ===== ACTIONS ===== */
  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      audio.play()
    }
    setPlaying(!playing)
  }

  const changeVolume = (e) => {
    const v = Number(e.target.value)
    setVolume(v)
    audioRef.current.volume = v
  }

  const seek = (e) => {
    const time = Number(e.target.value)
    audioRef.current.currentTime = time
    setProgress(time)
  }

  const formatTime = (t) => {
    if (!t) return '0:00'
    const m = Math.floor(t / 60)
    const s = Math.floor(t % 60)
    return `${m}:${s < 10 ? '0' : ''}${s}`
  }

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/audio/bensound-youngandfree.mp3" type="audio/mpeg" />
      </audio>

    {/* ULTRA MICRO DARK MUSIC PLAYER */}
{ready && (
  <div
    className="fixed bottom-2 left-2 z-50
               bg-black/50 backdrop-blur
               rounded-full shadow-sm
               px-2 py-[4px]
               w-[200px]
               opacity-60 hover:opacity-100 transition"
  >
    {/* PROGRESS BAR */}
    <input
      type="range"
      min="0"
      max={duration}
      value={progress}
      onChange={seek}
      className="w-full h-[1px] accent-indigo-400 opacity-60"
    />

    {/* CONTROLS */}
    <div className="flex items-center justify-between mt-[1px] text-[8px] text-gray-300">
      <span className="opacity-50">
        {formatTime(progress)}
      </span>

      <div className="flex items-center gap-1.5">
        <button
          onClick={togglePlay}
          className="w-3.5 h-3.5 flex items-center justify-center
                     rounded-full bg-indigo-500/70
                     text-white text-[8px]
                     hover:bg-indigo-500 transition"
        >
          {playing ? '❚❚' : '▶'}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={changeVolume}
          className="w-8 h-[1px] accent-indigo-400 opacity-50"
        />
      </div>
    </div>
  </div>
)}
    </>
  )
}

export default GlobalMusicPlayer
