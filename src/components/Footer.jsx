const Footer = () => {
    return <>
        <div className="py-5 bg-gray-100 flex justify-between px-72">
            <div>
                <p>
                    @2024 Ankur Patel <span>All Rights Reserved</span>
                </p>
            </div>
            <div className="space-x-5">
                <a href="/about" className="hover:underline">About</a>
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
                <a href="/licence" className="hover:underline">Licensing</a>
                <a href="/contact" className="hover:underline">Contact</a>
            </div>
        </div>
    </>
}

export default Footer;