/*
    Pricing table component with three pricing plans. Each plan includes title, price, features, and a button.
*/
'use client';

interface Plan {
    title: string;
    price: number;
    features: string[];
}

const plans: Plan[] = [
    {
        title: 'Basic',
        price: 10,
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
        title: 'Pro',
        price: 20,
        features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
        title: 'Premium',
        price: 30,
        features: [
            'Feature 1',
            'Feature 2',
            'Feature 3',
            'Feature 4',
            'Feature 5',
        ],
    },
];

const PricingTable = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {plans.map((plan, index) => (
                <div
                    key={plan.title}
                    className="flex flex-col justify-between gap-4 p-4 border border-gray-200 rounded-lg bg-white dark:bg-transparent shadow-lg" data-aos='fade-up' data-aos-delay={index * 100}
                >
                    <h3 className="font-bold res-heading-sm">{plan.title}</h3>
                    <p className="font-bold res-paragraph">${plan.price}</p>
                    <ul>
                        {plan.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                    <button className="bg-gray-500 text-white font-bold rounded-md p-2">
                        Select Plan
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PricingTable;
