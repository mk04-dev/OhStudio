import React from "react";

interface Props {
    title: string;
    type: 'image' | 'video';
    src: string;
}
function Container(props: Props) {
    const {title, type, src} = props;
	return (
		<div className="container relative bg-gray-100 rounded-xl overflow-hidden hover">
			<div className="container-mark">
                <div className="container-mark-title">{title}</div>
				<div className="container-mark-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-5"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
					</svg>
				</div>
			</div>
			<div className="container-meta">
				{type === 'video' ? (
                    <video
					loop
					autoPlay
					playsInline
					muted
					src={src}
					className="w-full h-full block object-cover object-center"
				></video>
                ): (
                    <img src={src} className="w-full h-full block object-cover object-center"></img>
                )}
			</div>
		</div>
	);
}

export default React.memo(Container);
