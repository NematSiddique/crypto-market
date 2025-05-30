import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { toggleOpen } from 'app/slices/menuSlice';
// import { useAppDispatch } from 'hooks/redux';
import { useThemeContext } from 'src/theme/ThemeProvider';
import { useTheme } from 'styled-components';
import {
	NavbarWrapper,
	NavbarContent,
	LogoWrapper,
	ThemeButton,
} from 'components/Navbar/Navbar.styled';

const Navbar = () => {
	// const dispatchMenu = useAppDispatch();
	const [, dispatch] = useThemeContext();
	const { name } = useTheme();

	const logoSrc = name === 'light' ? '/blackCryptoMarket.svg' : '/whiteCryptoMarket.svg';

	// const handleToggleMenu = (): void => {
	// 	// dispatchMenu(toggleOpen());
	// };

	const handleToggleTheme = () => {
		dispatch('toggle');
	};

	return (
		<NavbarWrapper>
			<NavbarContent>
				<LogoWrapper>
					<Link href="/">
						<Image src={logoSrc} alt="Logo" width={250} height={90} />
					</Link>
				</LogoWrapper>
				<ThemeButton onClick={handleToggleTheme}>
					<FontAwesomeIcon
						fontSize={18}
						icon={name === 'light' ? faMoon : faSun}
					/>
				</ThemeButton>
			</NavbarContent>
		</NavbarWrapper>
	);
};

export default Navbar;