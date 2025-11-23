import React from 'react'
import image from '../../public/ignatus.jpeg'

const DrIgnatus = () => {
  return (
    <section className="px-4 md:px-12 lg:px-24 py-8">
      <div className="bg-gray-50 shadow-sm  p-6 md:p-10 flex flex-col md:flex-row gap-10">

        {/* PROFILE */}
        <div className="flex gap-6 md:w-1/3">
          <img 
            src={image} 
            alt="Dr Ignatus" 
            className="h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-gray-200 shadow-md object-cover"
          />

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              Dr. Ignatus
            </h1>
            <p className="text-gray-500 font-medium">CEO & Founder</p>
          </div>
        </div>

        {/* INFORMATION */}
        <div className="md:w-2/3 space-y-4 text-gray-700 leading-relaxed">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro facere ut quo dolorem
            recusandae, optio eligendi deserunt ipsam est? Ipsa neque error, iste excepturi eligendi modi et
            quos nobis. Corporis quia culpa itaque assumenda facere sunt minima quaerat velit aliquid saepe
            vel provident neque est officiis amet dolore architecto hic, quo nobis beatae, quod molestiae.
            Ea accusamus quas obcaecati? Eos consequatur, sed quae quia dolorem, consectetur, officia neque
            voluptatem eaque corrupti totam dignissimos expedita ullam libero blanditiis culpa dolor laborum
            ducimus ex ipsum! Esse recusandae neque voluptas numquam voluptates.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro vitae deserunt in doloribus
            similique non totam amet deleniti recusandae culpa nisi numquam inventore, quam at iusto libero.
            Dolore, aut eveniet? Voluptate quo eum cum amet dolorem non consequuntur sit provident ratione.
            A rerum animi aperiam commodi reprehenderit dolorem aut perspiciatis molestias nulla minus.
            Nobis, dolorum! Provident perferendis nisi illum distinctio?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minus ratione eius doloribus aut quia 
            dolorum? Adipisci, ducimus sunt molestiae tenetur velit minus itaque ab perferendis repellat 
            facilis, officia saepe!
          </p>
        </div>

      </div>
    </section>
  )
}

export default DrIgnatus
