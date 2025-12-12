import type {Plan} from "../../data/Plan.ts";

interface PlanCardProps {
    plan: Plan,
    isActive?: boolean,
    onSelect?: () => void
}

export const PlanCard = ({plan, isActive, onSelect}: PlanCardProps) => {
    return (
        <div
            onClick={onSelect}
            className={`
                cursor-pointer rounded-2xl p-8 border transition-all duration-300
                bg-slate-800/60 backdrop-blur
                ${isActive ? 'border-secondary-light shadow-xl scale-[1.03]' : 'border-gray-700 hover:border-secondary-dark'}
            `}
        >
            <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
            </h3>

            <p className="text-gray-300 mb-6">{plan.description}</p>

            <div className="flex items-end gap-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 text-lg">/month</span>
            </div>

            <ul className="mt-6 space-y-2 text-gray-300">
                {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        {feature.name}
                    </li>
                ))}
            </ul>

            <button
                className={`w-full mt-8 py-3 rounded-lg font-medium transition-all
                    ${isActive
                    ? 'bg-secondary text-white hover:bg-secondary-light'
                    : 'bg-slate-700/60 text-gray-200 hover:bg-slate-600'}
                `}
            >
                {isActive ? 'Selected' : 'Choose Plan'}
            </button>
        </div>
    )
}