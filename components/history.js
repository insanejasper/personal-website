export default function History() {
  const workHistory = [
    {
      name: 'HashiCorp',
      title: 'Software Engineer',
      start: '2022',
      end: null,
      descriptions: [
        // 'Collaborated closely across many different product development teams to validate and pressure test our design, APIs, and user/developer experience.',
        // 'Displayed leadership on various multi-team projects including re-platforming legacy Ember code to React as well as deploying our services to the EU service region.',
        // 'Coached and mentored other engineers/interns at various levels to drive technical excellence within the team.'
      ]
    },
    {
      name: 'PagerDuty',
      title: 'Software Engineer',
      start: '2020',
      end: '2022',
      descriptions: [
        'Collaborated closely across many different product development teams to validate and pressure test our design, APIs, and user/developer experience.',
        'Displayed leadership on various multi-team projects including re-platforming legacy Ember code to React as well as deploying our services to the EU service region.',
        'Coached and mentored other engineers/interns at various levels to drive technical excellence within the team.'
      ]
    },
    {
      name: 'iA Financial',
      start: '2020',
      title: 'Software Engineer',
      end: '2020',
      descriptions: [
        'Re-platforming new app with best-practices using Javascript, Node, React, Docker, and AWS while maintaining a client-focused mindset',
        'Wrote workable code with PHP, C#, and MSSQL in order to maintain Invisor\'s legacy flagship application',
        'Effectively communicated with team members while also taking on a leadership role in some mission-critical decisions during the re-platforming'
      ]
    },
    {
      name: 'Dubois',
      start: '2019',
      title: 'Full Stack Developer',
      end: '2020',
      descriptions: [
        'Coordinated code changes and deployments with co-worker using Google\’s App Engine, Cloud Storage, Stackdriver, and VM as well as MongoDB\’s Atlas.',
        'Proactively took leadership with several projects and client facing tasks while maintaining organization and code output.',
        'Implemented a testing pipeline in Express with Jest as well as a CI/CD workflow with GitHub Actions and Google Cloud to ensure code was delivered quickly and with minimal bugs.'
      ]
    }
  ];
  return (
    <section className="mb-32">
      <h2 className="mb-16 text-6xl md:text-7xl font-bold tracking-tighter leading-tight font-serif">
        A Brief History
      </h2>
      <div className="md:grid md:grid-cols-5 grid-rows-3">
        {workHistory.map((history, index) => (
          <div key={history.name} className={(index % 2 === 0) ? 'md:col-span-3' : 'md:col-start-3 md:col-span-3'}>
            <HistoryItem
              index={index}
              company={history.name}
              title={history.title}
              start={history.start}
              end={history.end}
              descriptions={history.descriptions}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

function HistoryItem({index, company, title, start, end, descriptions}) {
  return (
    <div className={`bg-neutral-200 dark:bg-neutral-800 p-6 mb-12 ${(index % 2 === 0) ? 'border-r-4' : 'border-l-4'} border-pink-500`}>
      <div className="grid grid-cols-2 mb-5">
        <div>
          <h1 className="text-2xl">{company}</h1>
          <p className="text-sm text-pink-500">{title}</p>
        </div>
        <div className="text-right text-2xl">
          {start} {end ? '-' : '~'} {end}
        </div>
      </div>
      <div>
        <ul>
          {descriptions.map(description => (
            <li key={description} className="list-disc ml-4">{description}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}