import { useState, useEffect } from 'react'

export default function useFavoriteBlog() {
  const [favorite, setFavorite] = useState(() =>
    localStorage.getItem('favorite_blog')
  )

  useEffect(() => {
    if (favorite) localStorage.setItem('favorite_blog', favorite)
  }, [favorite])

  return [favorite, setFavorite]
}
