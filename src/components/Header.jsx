import { FaGithub } from "react-icons/fa"
function Header() {
    return (
        <div className="flex flex-row justify-between items-center px-6 py-2 h-16  shadow-md">
            <h1 className=" font-mono text-2xl font-bold sm:text-3xl">
                <span className="text-purple-500">_</span>AlgoSearch
            </h1>
            <button className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-sm hover:bg-white hover:text-purple-500 hover:border hover:shadow-md transition-colors duration-300 border-purple-500 shadow-sm ">
                Visualize ✨
            </button>
            <a href="#" className="text-4xl hidden sm:block">
                <FaGithub />
            </a>
        </div>
    )
}

export default Header
