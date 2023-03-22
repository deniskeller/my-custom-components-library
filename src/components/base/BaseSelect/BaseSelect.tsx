//@ts-nocheck
import React, { KeyboardEvent } from 'react';
import styles from './BaseSelect.module.scss';

interface Props {
	placeholder?: string;
	className?: string;
	label?: string;
	options: ISelectItem[];
	multiple?: boolean;
	// onChange?: () => void;
}

interface ISelectItem {
	[key: string]: string;
}

const BaseSelect: React.FC<Props> = ({
	placeholder,
	className = '',
	options,
	multiple,
	label,
	onChange,
}) => {
	const [values, setValues] = React.useState<ISelectItem[]>([]);
	const [focusedValue, setFocusedValue] = React.useState(-1);
	const [isFocused, setIsFocused] = React.useState(false);
	const [isOpen, setIsOpen] = React.useState(false);
	const [typed, setTyped] = React.useState('');

	const onFocus = () => {
		setIsFocused(true);
	};

	const onBlur = () => {
		if (multiple) {
			setFocusedValue(-1);
			setIsFocused(false);
			setIsOpen(false);
		} else {
			const value = values[0];
			let focusedValue = -1;

			if (value) {
				focusedValue = options.findIndex((option) => option.value === value);
			}
			setFocusedValue(focusedValue);
			setIsFocused(false);
			setIsOpen(false);
		}
	};

	const onKeyDown = (e: KeyboardEvent) => {
		switch (e.key) {
			case ' ':
				e.preventDefault();
				if (isOpen) {
					if (multiple) {
						if (focusedValue !== -1) {
							const [...values2] = values;
							const value = options[focusedValue].value;
							const index = values2.indexOf(value);

							if (index === -1) {
								values2.push(value);
							} else {
								values2.splice(index, 1);
							}
							setValues(values2);
							onChange(values2);
						}
					}
				} else {
					setIsOpen(true);
				}
				break;
			case 'Escape':
			case 'Tab':
				if (isOpen) {
					e.preventDefault();
					setIsOpen(false);
				}
				break;
			case 'Enter':
				setIsOpen(!isOpen);
				break;
			case 'ArrowDown':
				e.preventDefault();

				if (focusedValue < options.length - 1) {
					setFocusedValue(focusedValue++);

					if (multiple) {
						setFocusedValue(focusedValue);
					} else {
						setValues([options[focusedValue].value]);
						onChange([options[focusedValue].value]);
						setFocusedValue(focusedValue);
					}
				}
				break;
			case 'ArrowUp':
				e.preventDefault();

				if (focusedValue > 0) {
					setFocusedValue(focusedValue--);

					if (multiple) {
						setFocusedValue(focusedValue);
					} else {
						setValues([options[focusedValue].value]);
						onChange([options[focusedValue].value]);
						setFocusedValue(focusedValue);
					}
				}
				break;
			default:
				if (/^[a-z0-9]$/i.test(e.key)) {
					const char = e.key;

					setTimeout(() => {
						setTyped('');
					}, 1000);

					const typed2 = typed + char;
					const re = new RegExp(`^${typed2}`, 'i');
					const index = options.findIndex((option) => re.test(option.value));

					if (index === -1) {
						setTyped(typed2);
					}

					if (multiple) {
						setFocusedValue(index);
						setTyped(typed2);
					} else {
						setValues([options[index].value]);
						onChange([options[index].value]);
						setFocusedValue(index);
						setTyped(typed2);
					}
				}
				break;
		}
	};

	const onClick = () => {
		setIsOpen(!isOpen);
	};

	const onDeleteOption = (e) => {
		const { value } = e.currentTarget.dataset;

		const [...values2] = values;
		const index = values2.indexOf(value);

		values2.splice(index, 1);

		setValues(values2);
		onChange(values2);
	};

	const onHoverOption = (e: React.ChangeEvent<HTMLElement>) => {
		const { value } = e.currentTarget.dataset;
		const index = options.findIndex((option) => option.value === value);

		setFocusedValue(index);
	};

	const onClickOption = (e) => {
		const { value } = e.currentTarget.dataset;
		// console.log('value: ', value);

		if (!multiple) {
			setValues([value]);
			setIsOpen(false);
			onChange(value);
		} else {
			const [...values2] = values;
			const index = values2.indexOf(value);

			if (index === -1) {
				values2.push(value);
			} else {
				values2.splice(index, 1);
			}

			setValues(values2);
			onChange(values2);
		}
	};

	const stopPropagation = (e) => {
		e.stopPropagation();
	};

	const renderValues = () => {
		if (values.length === 0) {
			return <div className={styles.Placeholder}>{placeholder}</div>;
		}

		if (multiple) {
			return values.map((value, index) => {
				return (
					<span
						key={index}
						onClick={stopPropagation}
						className={`${styles.Multiple} ${styles.Value}`}
					>
						<>
							{value}
							<span
								data-value={value}
								onClick={onDeleteOption}
								className={styles.Delete}
							>
								<X />
							</span>
						</>
					</span>
				);
			});
		}

		return <div className={styles.Value}>{values[0]}</div>;
	};

	const renderOptions = () => {
		if (!isOpen) {
			return null;
		}

		return <div className={styles.Options}>{options.map(renderOption)}</div>;
	};

	const renderOption = (option: ISelectItem | string, index: number) => {
		const { value } = option;

		const selected = values.includes(value);

		// let className = 'option';
		// if (selected) className += ' selected';
		// if (index === focusedValue) className += ' focused';

		return (
			<div
				key={value}
				data-value={value}
				className={`${styles.Option} ${selected ? styles.Selected : null} ${
					index === focusedValue ? styles.Focused : null
				}`}
				onMouseOver={onHoverOption}
				onClick={onClickOption}
			>
				{multiple ? (
					<span className={styles.Checkbox}>{selected ? <Check /> : null}</span>
				) : null}
				{value}
			</div>
		);
	};

	// React.useEffect(() => {
	//   console.log('values inside: ', values);
	//   onChange(values);
	// }, [values, onChange]);

	return (
		<div
			className={`${styles.Select} ${className}`}
			tabIndex={0}
			onFocus={onFocus}
			onBlur={onBlur}
			onKeyDown={onKeyDown}
		>
			<label className={styles.Label}>{label}</label>
			<div className={styles.Selection} onClick={onClick}>
				{renderValues()}
				<span className={styles.Arrow}>
					{isOpen ? <ChevronUp /> : <ChevronDown />}
				</span>
			</div>
			{renderOptions()}
		</div>
	);
};

export default BaseSelect;

const ChevronDown = () => (
	<svg viewBox='0 0 10 7' width={10} height={7} fill='currentColor'>
		<path
			d='M2.08578644,6.5 C1.69526215,6.89052429 1.69526215,7.52368927 2.08578644,7.91421356 C2.47631073,8.30473785 3.10947571,8.30473785 3.5,7.91421356 L8.20710678,3.20710678 L3.5,-1.5 C3.10947571,-1.89052429 2.47631073,-1.89052429 2.08578644,-1.5 C1.69526215,-1.10947571 1.69526215,-0.476310729 2.08578644,-0.0857864376 L5.37867966,3.20710678 L2.08578644,6.5 Z'
			transform='translate(5.000000, 3.207107) rotate(90.000000) translate(-5.000000, -3.207107) '
		/>
	</svg>
);

const ChevronUp = () => (
	<svg viewBox='0 0 10 8' width={10} height={8} fill='currentColor'>
		<path
			d='M2.08578644,7.29289322 C1.69526215,7.68341751 1.69526215,8.31658249 2.08578644,8.70710678 C2.47631073,9.09763107 3.10947571,9.09763107 3.5,8.70710678 L8.20710678,4 L3.5,-0.707106781 C3.10947571,-1.09763107 2.47631073,-1.09763107 2.08578644,-0.707106781 C1.69526215,-0.316582489 1.69526215,0.316582489 2.08578644,0.707106781 L5.37867966,4 L2.08578644,7.29289322 Z'
			transform='translate(5.000000, 4.000000) rotate(-90.000000) translate(-5.000000, -4.000000) '
		/>
	</svg>
);

const X = () => (
	<svg viewBox='0 0 16 16' width={12} height={12} fill='currentColor'>
		<path d='M2 .594l-1.406 1.406.688.719 5.281 5.281-5.281 5.281-.688.719 1.406 1.406.719-.688 5.281-5.281 5.281 5.281.719.688 1.406-1.406-.688-.719-5.281-5.281 5.281-5.281.688-.719-1.406-1.406-.719.688-5.281 5.281-5.281-5.281-.719-.688z' />
	</svg>
);

const Check = () => (
	<svg viewBox='0 0 16 16' width={12} height={12} fill='currentColor'>
		<path
			d='M13 .156l-1.406 1.438-5.594 5.594-1.594-1.594-1.406-1.438-2.844 2.844 1.438 1.406 3 3 1.406 1.438 1.406-1.438 7-7 1.438-1.406-2.844-2.844z'
			transform='translate(0 1)'
		/>
	</svg>
);
