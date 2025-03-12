import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
	children: ReactNode | ReactNode[];
}

const BasePortal: React.FC<Props> = ({ children }) => {
	const [container] = useState(() => document.createElement('div'));

	useEffect(() => {
		document.body.appendChild(container);
		return () => {
			document.body.removeChild(container);
		};
	}, [container]);

	return createPortal(children, container);
};

export default BasePortal;
