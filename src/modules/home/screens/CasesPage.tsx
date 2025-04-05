import ApplicationCard from "../components/applicationCard"
import Navbar from "../components/Navbar"

const CasesPage = () => {
  return (
    <div className="h-svh bg-gray-100">
      <Navbar />
      {/* Wrapper Div */}
      <div className="px-24 pt-8 space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">New Case</h2>
          <p className="text-sm text-gray-400">Choose Application</p>
        </div>
        <div className="flex items-stretch justify-center gap-6">
          <ApplicationCard image="/case1.png" title="Germline Proband" onClick={() => { }} />
          <ApplicationCard image="/case2.png" title="Germline Trio" onClick={() => { }} />
          <ApplicationCard image="/case2.png" title="Somatic Analysis" onClick={() => { }} />
        </div>
      </div>
    </div>
  )
}

export default CasesPage