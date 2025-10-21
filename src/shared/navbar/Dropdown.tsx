const Dropdown = () => {
    const products = [
        { icon: '☁️', title: 'Cloud Servers', desc: 'Powerful enterprise-class cloud infrastructure' },
        { icon: '🖥️', title: 'Cloud Desktop', desc: 'Secured virtual desktop secure environment' },
        { icon: '🔒', title: 'Virtual Private Cloud', desc: 'Set up an isolated private cloud environment' },
        { icon: '🛡️', title: 'Cloud Firewall', desc: 'Safeguard your cloud servers against threats' },
        { icon: '⚖️', title: 'Load Balancers', desc: 'Prevent server overload and maximize performance' },
        { icon: '💾', title: 'Block Storage', desc: 'Effortlessly add block storage to your servers' },
        { icon: '🏢', title: 'Reseller Hosting', desc: 'Provide hosting services to your clients' },
        { icon: '🖥️', title: 'Virtual Dedicated Servers', desc: 'Fully dedicated resources with peak performance' },
        { icon: '⚙️', title: 'Cloud API', desc: 'Master your cloud through powerful automation' },
    ];

    return (
        <div className="grid grid-cols-3 gap-8 p-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
                <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                        {product.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                    <p className="text-gray-600 text-sm">{product.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default Dropdown;