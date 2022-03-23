import React from "react";
import Daily from '../Daily/Daily';
import './Homepage.css';
import { useState } from 'react';
import TeamChoose from '../TeamChoose/TeamChoose';

const Homepage = ({handlePage}) => {
    const [dailyStickersVisibility, setDailyStickersVisibility] = useState(false);

    return (
        <>
            {dailyStickersVisibility ? (<><Daily /><div onClick={() => setDailyStickersVisibility(!dailyStickersVisibility)} className="gray_window" /></>) : null}
            <button className="button_hidden button_item" />
            <section id="section">
                <div className="homepage">
                    <div className="homepage_title">
                        <h1 className="homepage_heading">trendyol</h1>
                        <h2 className="homepage_heading-item">tech</h2>
                    </div>
                    <h3 className="homepage_name">sticker album</h3>
                </div>
                <button className="get_stickers" onClick={() => setDailyStickersVisibility(!dailyStickersVisibility)}>GET YOUR DAILY STICKERS</button>
            </section>
            <button className="button_item next_page" onClick={() => handlePage(<TeamChoose handlePage={handlePage}/>)} />
        </>

    )
}

export default Homepage;
