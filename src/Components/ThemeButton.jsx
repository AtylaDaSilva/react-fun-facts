import { React } from 'react';
import '../css/App.css';
import '../css/ThemeButton.css';

export default function ThemeButton(props) { 
    const theme = props.theme;
    return (
        <div className={"theme-button-area inline-block" + (theme === 'dark' ? ' theme-button-area-dark' : ' theme-button-area-light')}>
            <span>Light</span>
            <div
                role='button'
                className={"theme-button inline-block" + (theme === 'dark' ? " theme-button-dark" : " theme-button-light")}
                onClick={() => {
                    return props.callbacks.handleThemeButtonClick();
                }}
            >
                <div className={ "theme-button-slider" + (theme==='dark' ? " theme-button-slider-dark" : " theme-button-slider-light") }></div>
            </div>
            <span>Dark</span>
        </div>
    );
}