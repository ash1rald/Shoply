import { Link } from 'react-router-dom';

function About() {
    return (
        <div text-center className="max-w-4xl mx-auto p-4">
            <h1 className="text-5xl font-bold text-center font-serif">About Shoply</h1>
            <h2 className="text-2xl font-semibold mt-4 indent-8 font-serif">Technology made simple.</h2>
            <div>
                <p className="indent-8 text-xl">Shoply is a modern online store dedicated to technology, electronics, and computer accessories.</p>
                <p className="indent-8 text-xl">We believe that finding the right technology should be simple, convenient, and enjoyable. That's why we bring together products for gaming setups, workspaces, and everyday use — from PC components and peripherals to monitors and accessories.</p>
            </div>
            <h2 className="text-2xl font-semibold mt-4 indent-8 font-serif">Our Mission</h2>
            <div>
                <p className="indent-8 text-xl">Our mission is to make technology accessible through a simple shopping experience, carefully selected products, and a modern approach to online retail.</p>
                <p className="indent-8 text-xl">We want every customer to find the right products to match their needs and interests.</p>
            </div>
            <div className="mt-4">
                <h2 className="text-2xl font-semibold indent-8 font-serif">Why Shoply?</h2>
                <ul className="list-disc list-inside indent-8 font-serif text-xl">
                    <li>Curated Selection: We carefully select products to ensure quality and relevance.</li>
                    <li>Customer-Centric Approach: Your satisfaction is our priority, and we strive to provide excellent service.</li>
                    <li>Modern Shopping Experience: Our platform is designed for ease of use, making your shopping experience seamless.</li>
                </ul>
            </div>
            <div className="mt-4">
                <h2 className="text-2xl font-semibold indent-8 font-serif">More Than Just a Store</h2>
                <p className="indent-8 text-xl">At Shoply, technology is more than just products. It's about creativity, productivity, entertainment, and endless possibilities.</p> <br/>
                <p className="indent-8 font-bold font-serif">Shoply — Your Space for Technology.</p>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link

                to="/"
                className=" bg-blue-600 text-white px-5 py-2 rounded-lg font-medium shadow-sm hover:bg-blue-700 hover:shadow-md active:scale-95 transition text-center"
                >
                    Back to Home
                </Link>
                <Link
                to="/products"
                className=" bg-blue-600 text-white px-5 py-2 rounded-lg font-medium shadow-sm hover:bg-blue-700 hover:shadow-md active:scale-95 transition text-center"
                >
                    Browse Products
                </Link>
            </div>
        </div>
    );
}
   


export default About;