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
				textAlign: 'justify',
				position: 'absolute',
				top: 400,
				display: 'flex',
				justifyContent: 'center',
				opacity,
			}}
		>
			<p style={{ width: '90%' }}>{contentText}</p>
		</div>
	);
};
