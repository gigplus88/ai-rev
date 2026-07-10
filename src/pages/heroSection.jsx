import React from 'react'
const images = [
  "https://images.unsplash.com/photo-1777704621927-d5d0e022c0a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1783425515876-7c5e49b9947e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
];
export default function HeroSection() {
  return (
    <div>
            <section id="home" className="app-container pt-24 pb-12 overflow-hidden sm:overflow-visible ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/*left Content */}
                <div className="space-y-8">
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight dark:text-white">
                    <span className="gradient-text">Artificial Intelligence </span>
                    <br />
                    for a Smarter Future
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                   Discover how AI is transforming industries and improving lives
                  worldwide. Our cutting-edge solutions harness the power of machine
                  learning to solve complex problems.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a className='btn-primary' href="#">Explore AI Solutions</a>
                    <a className='btn-outline' href="#">Learn More</a>
                  </div>

                   <div className="pt-4 flex items-center space-x-4">
                      <div className="flex -space-x-2">
                        {images.map((img, i) => (
                          <img 
                          key={i}
                          className="avatar"
                          src={img}
                          alt={`User ${i + 1}`} />
                        ))}
                      </div>
                      <p className="text-sm font-medium text-gray-600">
                        Trusted by{" "}
                        <span className="text-primary font-bold">10,000+</span> people
                        worldwide
                      </p>
                   </div>
                </div>

                
                {/*right Content */}
                <div className="relative w-full h-80 md:h-[600px]">
                    <img 
                    src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop"
                    className="w-full h-full object-cover rounded-2xl"
                    alt='hero section' />
                    <div className="absolute w-32 h-32 rounded-full bg-secondary/20 -bottom-6 -left-6 blur-xl"></div>
                    <div className="absolute w-32 h-32 rounded-full bg-accent/20 -top-6 -right-6 blur-xl"></div>
                  </div>
              </div>
            </section>
    </div>
  )
}
