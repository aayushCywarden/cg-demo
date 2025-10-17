import { ResponsiveLayout } from './components/ResponsiveLayout.tsx'
import { SystemsTable } from './components/SystemTable.tsx'
import { HealthOverview } from './components/HealthOverview.tsx'

function App() {

  return (
    <ResponsiveLayout>
      <HealthOverview />
      <SystemsTable />
    </ResponsiveLayout>
  )
}

export default App
