import styled from "@emotion/styled";
import { useTheme } from "next-themes";

const ToggleButton = styled.button`
  --toggle-width: 2.7rem;
  --toggle-height: 1.35rem;
  --toggle-padding: 0.5px;
  --toggle-width-lg: 3.5rem;
  --toggle-height-lg: 1.75rem;
  --toggle-padding-lg: 2px;
  --color-bg-toggle: ${(p) =>
    p.activeTheme === "dark" ? "#AFB5C0" : "#EEEFF2"};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  @media (min-width: 1024px) {
    width: var(--toggle-width-lg);
    height: var(--toggle-height-lg);
    padding: var(--toggle-padding-lg);
  }
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-bg-toggle);
  transition: background 0.25s ease-in-out;
`;

const ToggleThumb = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: white;
  transition: transform 0.25s ease-in-out;
  transform: ${(p) =>
    p.activeTheme === "dark"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
  @media (min-width: 1024px) {
    top: var(--toggle-padding-lg);
    left: var(--toggle-padding-lg);
    width: calc(var(--toggle-height-lg) - (var(--toggle-padding-lg) * 2));
    height: calc(var(--toggle-height-lg) - (var(--toggle-padding-lg) * 2));
    transform: ${(p) =>
      p.activeTheme === "dark"
        ? "translate3d(calc(var(--toggle-width-lg) - var(--toggle-height-lg)), 0, 0)"
        : "none"};
  }
`;

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

const ThemeSelector = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <ToggleButton
      type="button"
      onClick={() =>
        theme == THEMES.DARK ? setTheme(THEMES.LIGHT) : setTheme(THEMES.DARK)
      }
      activeTheme={currentTheme}
    >
      <ToggleThumb activeTheme={currentTheme} />
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#4F5665"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#4F5665"
          className="lg:w-6 lg:h-6 w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#4F5665"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#4F5665"
          className="lg:w-6 lg:h-6 w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      </span>
    </ToggleButton>
  );
};

export default ThemeSelector;
