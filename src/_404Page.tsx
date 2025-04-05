import { Link } from "react-router"
const _404Page = () => {
  return (
    <div className="w-full h-screen py-20 pt-28 flex flex-col justify-between items-stretch">
      <div className="text-center space-y-6">
        <h2 className="text-5xl font-medium">Page not found</h2>
        <p>Uh oh, we can't seem to find the page you're looking for. Try going<br />
          back to the previous page or see our Help Center for more information</p>
        <Link to={"/"} className="block bg-primary max-w-max mx-auto text-white px-4 py-2.5 rounded-lg font-medium cursor-pointer">
          Back to Home
        </Link>
      </div>
      <img src="_404.png" alt="404" className="w-full" />
    </div>
  )
}

export default _404Page