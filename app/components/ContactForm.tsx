import React from 'react';

const ContactForm = () => {
    return (
        <div className="max-w-lg mx-auto">
            <form className="space-y-4 bg-white dark:bg-transparent border-2 border-gray-300 p-12 shadow-lg" data-aos="fade-up">
                <div>
                    <label htmlFor="name" className="block font-bold">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border border-gray-300 rounded-lg p-2 dark:bg-transparent"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-bold">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border border-gray-300 rounded-lg p-2 dark:bg-transparent"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block font-bold">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full border border-gray-300 rounded-lg p-2 dark:bg-transparent"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-gray-500 text-white font-bold rounded-md p-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
