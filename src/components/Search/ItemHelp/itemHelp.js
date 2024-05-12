import React, {useEffect, useState} from 'react';
import './itemHelp.css'
import {getAnnouncements} from "../../../api";

const ItemHelp = () => {
    const [data, setData] = useState([]);

    function loadData() {
        getAnnouncements().then(response => {
            setData(response)
        })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(() => {
        loadData()
    }, []);

    return data.map(el => (
        <div className="helper11">
            <div className="divided">
                <div className="leftSection11">
                    <div className="item1">
                        <span className="itemText">ПІБ</span>
                        <span className="itemNumber">{el.fullNameOfPerson}</span>
                    </div>
                    <div className="item1">
                        <span className="itemText">Локація</span>
                        <span className="itemNumber">{el.location}</span>
                    </div>
                    <div className="item1">
                        <span className="itemText">Дата</span>
                        <span className="itemNumber">{el.seemLastTime}</span>
                    </div>
                    <div className="item1">
                        <span className="itemText">Опис</span>
                    </div>
                    <div>
                        <p className="quoteContent1">{el.description}
                        </p>
                    </div>
                </div>
                <div className="rightSection11">
                    <img src={el.imageUrl} alt="Extra" className="extraImage" />
                    <div className="learnMore">
                        <a style={{textDecoration:"none"}} target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdRWj3_xzwZqIqPjAZqArglOBlHE_gfLvz_lOPJkK21C2wuHA/viewform"><p className="learnMoreText">Відгукнутись</p></a>
                        <img src="/arrow2.svg" alt="Arrow" className="arrowIcon" />
                    </div>
                </div>
            </div>
        </div>)
    );
};

export default ItemHelp;
