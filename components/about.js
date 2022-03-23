import Image from 'next/image'

export default function About() {
  return (
    <section className="mb-32">
      <h2 className="mb-16 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          About
        </h2>
      <div className="md:grid md:grid-cols-3 md:gap-x-16 lg:gap-x-8">
      <div>
          <Image
            className="rounded-3xl"
            src="/assets/img/header.jpg"
            alt={`Cover Image for`}
            layout="responsive"
            width={900}
            height={900}
          />
        </div>
        <div className="col-span-2">
          <h3 className="text-center md:text-left text-4xl mt-5 ">
            Quisque laoreet ipsum ultricies pulvinar sagittis. Vivamus lorem mi, semper ac nunc a, vehicula mattis eros. Sed pellentesque orci sodales ligula sollicitudin feugiat.
          </h3>
          <h4 className="text-center md:text-left text-lg mt-5 ">
            Aliquam hendrerit, est in pharetra rutrum, augue enim tempor augue, et laoreet massa neque vel odio. Cras et justo in massa egestas aliquam sed in leo. Nullam ut lectus a nulla convallis consectetur. Morbi aliquam sodales ante, et pellentesque dolor. Quisque laoreet ipsum ultricies pulvinar sagittis. Vivamus lorem mi, semper ac nunc a, vehicula mattis eros. Sed pellentesque orci sodales ligula sollicitudin feugiat. Morbi interdum finibus lacus eget hendrerit.
          </h4>
        </div>
      </div>
    </section>
  )
}
