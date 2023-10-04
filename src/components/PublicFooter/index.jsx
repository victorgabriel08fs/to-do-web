const PublicFooter = () => {
    return (
        <footer className="py-4 flex justify-center font-semi items-center bg-gradient-to-r from-[#fff] from-50% to-[#e2ce8b] to-50%">
            Built with ReactJS+NodeJS by
            <a
                href="https://victordev-portfolio.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="text-palette-primary font-bold px-1"
            >
                Victor Gabriel
            </a>
        </footer>
    );
}

export default PublicFooter;