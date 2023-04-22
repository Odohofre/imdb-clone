import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <nav className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4 space-x-4">
      <NavBarItem title="Trending" param="fetchTrending" />
      <NavBarItem title="Top Rated" param="FetchTopRated" />
    </nav>
  );
}
