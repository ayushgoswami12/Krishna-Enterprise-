import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
// import Navbar from "../HomePage/Navbar";

// Include the Google Material Icons stylesheet in your component
const GoogleIconsStylesheet = () => (
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=map" />
);

const ContactCopy = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_905g9ks', 'template_5kekbwd', form.current, 'Jb4FfYuJQW1UbD-tq')
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
                setLoading(false);
                setSent(true);
                setTimeout(() => setSent(false), 3000); // Reset after 3 seconds
            }, (error) => {
                console.log('FAILED...', error.text);
                setLoading(false);
            });
    };

    return (
        <>
            <GoogleIconsStylesheet />
            <div className="flex flex-col items-center justify-center min-h-screen p-2 pt-4 bg-gray-100 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                    <div className="md:w-1/2 p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-teal-600">Contact Us</h2>
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="number">Contact Number:</label>
                                <input
                                    type="text"
                                    name="number"
                                    id="number"
                                    required
                                    className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="message">Message:</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <svg
                                            className="animate-spin h-5 w-5 text-white mx-auto"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 017-7.93V4a8 8 0 100 16v-1.07A8.001 8.001 0 014 12z"
                                            ></path>
                                        </svg>
                                    ) : (
                                        'Send'
                                    )}
                                </button>
                            </div>
                            {sent && (
                                <div className="text-center text-green-500 mt-4">
                                    Email sent successfully!
                                </div>
                            )}
                        </form>
                    </div>
                    <div className="md:w-1/2 p-6 bg-gray-800 text-white rounded-lg shadow-md">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-teal-400">Our Information</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold sm:text-2xl">Address:</h3>
                                <p>PLOT NO. 87, BHAGYALAXMI SEAT METAL, HARI OM IND. AREA, Kotharia, Gujarat 360022</p>
                                <p>RAJKOT</p>
                            </div>
                            <div>
                                <h3 className="font-bold sm:text-2xl">Phone Number:</h3>
                                <p>+919106243213</p>
                            </div>
                            <div>
                                <h3 className="font-bold sm:text-2xl">Email:</h3>
                                <p>info@Krishnafastmake.com</p>
                            </div>
                            <div className="pt-6 text-center">
                                <a
                                    href="https://www.google.com/maps/dir//PLOT+NO.+87,+BHAGYALAXMI+SEAT+METAL,+HARI+OM+IND.+AREA,+Kotharia,+Gujarat+360022/@22.242512,70.7229353,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39584b15f1111327:0x3176e5489ce96942!2m2!1d70.8053369!2d22.2425328?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center space-x-2"
                                >
                                    <span
                                        className="material-symbols-outlined h-6 w-6 text-teal-400 hover:text-teal-200 transition duration-150 ease-in-out"
                                        style={{ fontSize: '1.5rem' }}
                                    >
                                        map
                                    </span>
                                    <span className="text-teal-400 hover:text-teal-200 transition duration-150 ease-in-out">
                                        Google Maps
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactCopy;
