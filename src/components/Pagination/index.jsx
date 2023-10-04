const Pagination = ({ currentPage, setCurrentPage, pagesNumber, take, count }) => {
    const itens = [];
    for (let i = (pagesNumber > 10 ? currentPage : 1); i <= (pagesNumber > 10 ? currentPage + 9 : pagesNumber) && i <= pagesNumber; i++) {
        itens.push(<button className={currentPage === i ? "relative inline-flex bg-indigo-600 items-center rounded-md px-2 py-2 text-white ring-1 ring-inset ring-gray-300 hover:bg-indigo-400 focus:z-20 focus:outline-offset-0" : "relative inline-flex items-center rounded-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"} key={i}
            onClick={() => setCurrentPage(i)}
        >{i}</button>);
    }

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">

            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing
                        <span className="font-medium mx-1">{(currentPage * take) - (take - 1)}</span>
                        to
                        <span className="font-medium mx-1">{(currentPage * take)}</span>
                        of
                        <span className="font-medium mx-1">{count}</span>
                        results
                    </p>
                </div>
                <div>
                    <nav className="isolate gap-3 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <button onClick={() => { currentPage === 1 ? (console.log(1)) : setCurrentPage(currentPage - 1) }} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <span className="sr-only">Previous</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        {itens}
                        <button onClick={() => { currentPage === pagesNumber ? (console.log(1)) : setCurrentPage(currentPage + 1) }} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <span className="sr-only">Next</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </div>

    );
};

export default Pagination;