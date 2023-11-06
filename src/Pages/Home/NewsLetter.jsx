

const NewsLetter = () => {
    return (
        <div className="hero h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/3vBXvgg/hotel-2.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Subscribe to our NewsLetter</h1>



                    <form>
                        <input type="email" name="" placeholder="Enter Your Email" className="h-8 p-4 w-64" id="" />
                        <input type="submit" className="h-8 text-white bg-[#0cc4b0] hover:bg-[#09ad9b] w-24" value="Subscribe" />
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;