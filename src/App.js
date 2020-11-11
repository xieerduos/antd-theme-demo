/**
 * @file App.js
 */
import {useState, useEffect} from 'react';
import './App.css';
import {Button} from 'antd';

const THEME_RED = '#f00';
const THEME_BLUE = '#1890ff';

export default function App() {
    const [theme, setTheme] = useState(THEME_BLUE);

    useEffect(() => {
        window.less.modifyVars({
            '@primary-color': theme
        });
        // effect
        return () => {};
    }, [theme]);

    return (
        <div className="App">
            <Button type="primary">当前主题颜色：{theme}</Button>
            <hr />
            <Button onClick={() => setTheme(THEME_RED)} type="default">
                主题红色: {THEME_RED}
            </Button>

            <Button onClick={() => setTheme(THEME_BLUE)} type="default">
                主题蓝色:{THEME_BLUE}
            </Button>
        </div>
    );
}
