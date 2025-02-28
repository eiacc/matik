import { Link, useLocation } from "react-router";

function NotFound() {
  const location = useLocation()
  const previousRoute = location.state?.from || 'unknown';

  return (
    <div className="bg-black min-h-screen grid place-items-center text-white">
      <div>
        <h1 className="heading text-3xl font-bold">Error 404</h1>
        { previousRoute !== 'unknown' ? <Link to={previousRoute} /> : null }
      </div>
    </div>
  )
}

export default NotFound;