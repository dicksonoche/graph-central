import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Image from "@/node_modules/next/image";

export default async function Home() {
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
      </div>
    </main>
  );
}
