import React from "react";

function Header() {
	const buttonClass = "px-6 py-2 text-md hover:bg-gray-200/50 rounded-full";
    const btnDefault = "text-gray-900 dark:text-white dark:hover:bg-gray-700";
	const btnActive = "text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-white";
    return (
		<div className="flex w-full justify-center sticky top-8 h-24 z-10">
			<div className="inline-flex rounded-full h-12 gap-1 bg-stone-400/50 p-1 dark:bg-gray-500/50" role="group">
				<button type="button" className={`${buttonClass} ${true ? btnActive: btnDefault}`}>
					Home
				</button>
				<button type="button" className={`${buttonClass} ${false ? btnActive: btnDefault}`}>
					Profile
				</button>
				<button type="button" className={`${buttonClass} ${false ? btnActive: btnDefault}`}>
					Contact
				</button>
			</div>
		</div>
	);
}

export default React.memo(Header);
