export const Company = () => (
  <section id="company" className="section mt-10 sm:mt-20">
    <div className="border border-blue-4 rounded-2xl py-4 px-5 sm:py-6 sm:px-8">
      <h1 className="text-blue text-xl font-bold leading-7">About Company</h1>
      <div className="flex flex-col-reverse md:flex-row pt-6 gap-x-7 ">
        <div className="flex">
          <p className="my-4 w-full text-blue-1 text-sm font-normal leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quibusdam sit eligendi earum, nisi
            voluptas impedit totam blanditiis cupiditate laborum. Doloremque dolore perspiciatis, reprehenderit ipsum
            necessitatibus error ea. Eius praesentium odit similique dolorum voluptatem officia! In tenetur recusandae
            placeat ducimus expedita aut, quaerat earum officiis error dicta perferendis ex deleniti suscipit dolor
            voluptatibus natus corporis distinctio vel rem minus culpa. Accusantium, ab? Libero facere eum natus itaque
            accusantium pariatur autem!
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full  justify-center items-center">
          <img src="/images/demo-company.svg" alt="Demo company" className="w-20 h-20" />
          <h5 className="text-md font-bold">Google News!</h5>
        </div>
      </div>
    </div>
  </section>
)
