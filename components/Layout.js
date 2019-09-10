export default function Layout ({ children }) {
  return (
    <>
      {children}
      <style jsx global>{`
        body {
          font-family: Roboto, sans-serif;
          width: auto;
          color: #e1e1e1;
          background: #282828;
        }
      `}</style>
    </>
  )
}
