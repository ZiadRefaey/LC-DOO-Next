import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <>
      <form
        className={`flex items-center justify-center bg-white cursor-text w-[600px]  rounded-full py-2 px-4 transition-all duration-500`}
      >
        <CiSearch className="size-7 mr-1" />
        <input
          type="text"
          className="outline-0 w-full bg-inherit"
          placeholder="Enter your search tearms..."
        />
      </form>
    </>
  );
}
