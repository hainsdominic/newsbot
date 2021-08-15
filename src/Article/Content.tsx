import { interpolate, useCurrentFrame } from 'remotion';

export const Content: React.FC<{
	contentText: string;
}> = ({ contentText }) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<div
			style={{
				fontFamily: 'Helvetica, Arial',
				fontSize: 40,
				textAlign: 'center',
				position: 'absolute',
				top: 230,
				width: '100%',
				opacity,
			}}
		>
			{contentText}
		</div>
	);
};
