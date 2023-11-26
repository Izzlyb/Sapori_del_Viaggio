
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
  
      <Hero />

      <HomeMenu />

      <section className="text-center my-16">
        <SectionHeaders 
              subHeader={"Our Story"}
              mainHeader={"About Us"} />

        <div className="text-[#000]/75 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Commodi ullam, officiis culpa vel placeat cupiditate eum 
            saepe sit assumenda voluptate optio labore exercitationem, 
            ducimus totam laboriosam magnam obcaecati, sapiente in 
            quaerat. 
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora illo recusandae asperiores rem perferendis tempore!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, ab.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
              subHeader={"Don\'t hesitate"}
              mainHeader={"Contact Us"} />
        <div className="mt-5 text-[#000]/70">
          <a href="tel:+4678312324" className="text-3xl">
            +46 732 231 689
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center mt-16 text-[#000]/85">
        &copy; 2023 All rights reserved
      </footer>
    </>
  )
}
