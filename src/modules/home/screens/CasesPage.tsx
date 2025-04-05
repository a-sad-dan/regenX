import AnalysisTable from "../components/AnalysisTable"
import ApplicationCard from "../components/applicationCard"
import Navbar from "../components/Navbar"
import { Eye } from "@phosphor-icons/react"

const CasesPage = () => {
  const columns = [
    { label: 'Modified', accessor: 'modified' },
    { label: 'Analysis', accessor: 'analysis' },
    { label: '#Samples', accessor: 'samples' },
    { label: 'Status', accessor: 'status' },
    { label: 'Assignment', accessor: 'assignment' },
    { label: 'Subject', accessor: 'subject' },
    {
      label: '', // Empty header for the action column
      accessor: 'action',
      render: () => (
        <a href="#" className="text-blue-600 hover:underline font-medium">
          Analyse
        </a>
      ),
    },
  ];
  const dummyData = [
    {
      modified: '2025-04-05',
      analysis: 'Blood Test',
      samples: 3,
      status: 'Pending',
      assignment: 'Dr. Ahmed',
      subject: 'Patient A',
    },
    {
      modified: '2025-04-03',
      analysis: 'Urine Analysis',
      samples: 2,
      status: 'Completed',
      assignment: 'Dr. Zainab',
      subject: 'Patient B',
    },
    {
      modified: '2025-04-01',
      analysis: 'X-Ray Review',
      samples: 1,
      status: 'In Review',
      assignment: 'Dr. Omar',
      subject: 'Patient C',
    },
    {
      modified: '2025-04-03',
      analysis: 'Urine Analysis',
      samples: 2,
      status: 'Completed',
      assignment: 'Dr. Zainab',
      subject: 'Patient B',
    },
    {
      modified: '2025-04-03',
      analysis: 'Urine Analysis',
      samples: 2,
      status: 'Completed',
      assignment: 'Dr. Zainab',
      subject: 'Patient B',
    },
    {
      modified: '2025-04-03',
      analysis: 'Urine Analysis',
      samples: 2,
      status: 'Completed',
      assignment: 'Dr. Zainab',
      subject: 'Patient B',
    },
  ];



  return (
    <div className="h-full bg-gray-100">
      <Navbar />
      {/* Wrapper Div */}
      <div className="max-w-7xl px-5 pt-8 pb-6 space-y-4 mx-auto">
        <div className="pb-2">
          <h2 className="text-2xl font-semibold">New Case</h2>
          <p className="text-sm text-gray-400">Choose Application</p>
        </div>
        <div className="flex items-stretch justify-center gap-6">
          <ApplicationCard image="/case1.png" title="Germline Proband" onClick={() => { }} />
          <ApplicationCard image="/case2.png  " title="Germline Trio" onClick={() => { }} />
          <ApplicationCard image="/case2.png" title="Somatic Analysis" onClick={() => { }} />
        </div>
        <h2 className="text-2xl font-semibold ">My Cases</h2>
        <AnalysisTable
          data={dummyData}
          columns={columns}
          pageInfo={{ current: 1, total: 5 }}
          onPageChange={(page) => console.log('Go to page:', page)}
          onSearchChange={(query) => console.log('Search:', query)}
        />

      </div>
    </div>
  )
}

export default CasesPage