import React, { useState, useEffect } from 'react';
import { packagesData, sriLankanPlaces, carOptions, hotelTypes } from '../data/tourData';

const PackagesSkeleton = () => (
    <div className="bg-gray-100 py-12 pt-36 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <div className="h-10 bg-gray-300 rounded w-1/2 mx-auto"></div>
                <div className="mt-4 h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                        <div className="w-full h-56 bg-gray-300"></div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                            <div className="mt-4 flex flex-col space-y-2">
                                <div className="h-10 bg-gray-300 rounded-full"></div>
                                <div className="h-10 bg-gray-200 border border-gray-300 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const Packages = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulate a 1 second loading time

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <PackagesSkeleton />;
    }

    return (
        <div className="bg-gray-100 py-12 pt-36">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Tour Packages</h2>
                    <p className="mt-4 text-lg text-gray-500">Explore the best of Sri Lanka with our curated tour packages.</p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {packagesData.map((pkg) => (
                        <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                            <img src={pkg.image} alt={pkg.title} className="w-full h-56 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-gray-900">{pkg.title}</h3>
                                <p className="mt-2 text-gray-600 flex-grow">{pkg.description}</p>
                                <div className="mt-4">
                                    <p className="text-sm text-gray-600">Duration: {pkg.duration} days</p>
                                    <p className="text-sm text-gray-600">Route: {pkg.route.join(' → ')}</p>
                                </div>
                                <div className="mt-4 flex flex-col space-y-2">
                                    <button
                                        className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300"
                                    >
                                        Request Quote
                                    </button>
                                    <button
                                        className="bg-white text-black border border-black px-4 py-2 rounded-full hover:bg-gray-100 transition duration-300"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Packages;