import { useEffect } from 'react'

// Memasang file CSS khusus halaman saat halaman tampil, lalu mencopotnya saat pindah.
function usePageCss(daftarFile) {
  useEffect(() => {
    const links = daftarFile.map((href) => {
      const el = document.createElement('link')
      el.rel = 'stylesheet'
      el.href = href
      document.head.appendChild(el)
      return el
    })
    return () => links.forEach((el) => el.remove())
  }, [daftarFile.join(',')])
}

export default usePageCss
