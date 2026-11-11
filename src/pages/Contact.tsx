function Contact() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-8 text-center">

               <img src='/public/email-logo-100.png' alt='Email Logo' className='w-8 h-8 inline-block ml-2 m-4' />
                
               <a href="mailto: shopshoply01@gmail.com" className="text-blue-500 hover:underline">
                     shopshoply01@gmail.com
                </a>
                <hr/>

                <img src='/public/facebook-logo-100.png' alt='Facebook Logo' className='w-8 h-8 inline-block ml-2 m-4' />
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    ShopShoply
                </a>
                <hr/>
                <img src='/public/instagram-logo-100.png' alt='Instagram Logo' className='w-8 h-8 inline-block ml-2 m-4' />
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    @shopshoply
                </a>

                <hr/>
                <img src='/public/X-logo-100.png' alt='Twitter Logo' className='w-8 h-8 inline-block ml-2 m-4' />
                <a href="https://X.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    @shopshoply
                </a>
                
            </p>
        </div>
    );
}

export default Contact;