export default function History() {
  return (
    <section className="mb-32">
      <h2 className="mb-16 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          A Brief History
        </h2>
      <div className="md:grid md:grid-cols-7 grid-rows-3">
        <div className="md:col-start-5 md:col-span-3">
          <HistoryItem company="PagerDuty" title="Software Engineer" start="20" end="Now" />
        </div>
        <div className="md:col-start-3 md:col-span-2">
          <HistoryItem company="iA Financial" title="Software Engineer" start="20" end="20" />
        </div>
        <div className="md:col-start-1 md:col-span-2">
          <HistoryItem company="Dubois Chemicals" title="Developer" start="19" end="20" />
        </div>
      </div>
    </section>
  )
}

function HistoryItem({company, title, start, end}) {
  return (
    <div className="bg-neutral-800 p-6 rounded-3xl mb-5">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-lg">{company}</h1>
          <p className="text-sm">{title}</p>
        </div>
        <div className="text-right text-2xl">
          {start} - {end}
        </div>
      </div>
    </div>
  )
}