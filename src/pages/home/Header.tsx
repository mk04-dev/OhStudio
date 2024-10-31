import React from "react";

function Header() {
	const buttonClass = "px-2 text-xs lg:py-1 lg:px-4 2xl:text-xl lg:text-base md:text-sm hover:bg-gray-200/50 rounded-full";
    const btnDefault = "text-gray-900 dark:text-white dark:hover:bg-gray-700";
	const btnActive = "text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-white";
    return (
		<div className="flex w-full justify-center sticky top-1 lg:top-6 md:top-4 sm:top-2 z-10">
			<div className="inline-flex rounded-full h-7 2xl:h-12 lg:h-10 md:h-9 gap-1 bg-stone-400/50 p-1 dark:bg-gray-500/50" role="group">
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
