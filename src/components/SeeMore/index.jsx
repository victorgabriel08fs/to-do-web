const SeeMore = ({ setPostsPerPage, postsPerPage }) => {
    return (
        <div className="flex justify-center"><button className="mt-5" onClick={() => { setPostsPerPage(postsPerPage + 10) }}>See more</button></div>
    );
}

export default SeeMore;