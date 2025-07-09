import React from "react";
import { Link, useLocation } from "react-router-dom";

const AC = () => {

    const location = useLocation();

    const sidebarItems = [
        { label: "PAINT SERVICES", path: "/services/paint-services" },
        { label: "AC SERVICE", path: "/services/ac-service" },
        { label: "MOT", path: "/services/mot" },
        { label: "MECHANICAL REPAIRS", path: "/services/mechanical-repairs" },
        { label: "BODY/SMART REPAIRS", path: "/services/body-smart-repairs" },
        { label: "SERVICE", path: "/services/service" },
        { label: "DIAGNOSTICS", path: "/services/diagnostics" },
        { label: "DENTS/SCRATCHES", path: "/services/dent-repair" },
    ];

    return (
        <div className="flex flex-col-reverse lg:flex-row px-4 lg:px-16 py-10 mt-20 gap-8 w-full max-w-screen-xl mx-auto">

            {/* Sidebar */}
            <aside className="w-full lg:w-1/3">
                <h2 className="text-base font-medium text-gray-500 uppercase mb-4 lg:-ml-10">Browse Services</h2>
                <ul className="space-y-4 text-lg lg:text-xl ml-10 lg:-ml-0">
                    {sidebarItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                className={`block pl-2 transition-all duration-150 ${location.pathname === item.path
                                    ? "font-semibold border-l-4 border-yellow-500 text-black"
                                    : "text-gray-700 hover:text-black"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content */}
            <main className="w-full lg:w-2/3 text-gray-800">
                <h1 className="text-2xl lg:text-4xl font-bold mb-4 uppercase tracking-wide">
                    Keeping you comfortable <br /> all year round
                </h1>

                <p className="mb-6 text-sm lg:text-base">
                    At Nikita we excel at AC servicing because of our expertise, attention to detail,
                    and commitment to quality. Our skilled technicians are trained to diagnose and repair all types
                    of air conditioning systems, ensuring optimal performance and efficiency. We use the latest tools
                    and techniques to quickly identify issues, recharge refrigerants, and perform thorough system checks.
                    By prioritizing customer satisfaction and staying up-
                    to-date with industry standards, we guarantee your AC runs smoothly, keeping you comfortable all year round
                </p>

                <h2 className="text-xl lg:text-2xl font-semibold mb-4">OUR PROCESS</h2>
                <ol className="list-decimal pl-6 space-y-2 text-sm lg:text-base">
                    <li>Check Pressures</li>
                    <li>Analyse Refrigerant</li>
                    <li>Recover/Remove refrigerant from the system</li>
                    <li>Leak testing with Oxygen-free Nitrogen</li>
                    <li>15-20 minutes minimum Evacuate (deep vacuum) the system to remove moisture (can be longer, depends how much moisture is within your system)</li>
                    <li>System Recharge (re-gas) as per manufacturers specifications</li>
                    <li>Replace PAG oils as required</li>
                    <li>Ultra Violet leak detection Dye (only if necessary)</li>
                    <li>Test high and low pressures</li>
                    <li>Test temperature at the air vents</li>
                </ol>

                <div className="border-l-4 border-yellow-500 p-4 text-sm lg:text-base mt-10 mb-6">
                    <p className="text-xl">
                        <strong>Pro Tip: </strong>
                        To keep your AC running efficiently, it's important to regularly replace or clean the air filter.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default AC;
