import type { ReactNode } from "react";

interface ActionButtonProps {
	children: ReactNode;
	onClick: () => void;
}

function ActionButton({ children, onClick }: ActionButtonProps) {
	return (
		<button
			onClick={onClick}
			className="
				p-2
				rounded-lg
				hover:bg-[#d2d4dc]
				transition
			"
		>
			{children}
		</button>
	);
}

export default ActionButton;