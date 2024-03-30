import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Image from "@/node_modules/next/image";
import { fetchProjects } from "@/utils/index";

export default async function Home() {

  const allProjects = await fetchProjects()

  console.log(allProjects)

  const isDataEmpty = !Array.isArray(allProjects) || allProjects.length <1 || !allProjects

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            All Projects
          </h1>
          <p>Explore various ...</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="category" />
            <CustomFilter title="status" />
            <CustomFilter title="timeframe" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            Projects availabe
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">No results</h2>
            <p>{allProjects?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
