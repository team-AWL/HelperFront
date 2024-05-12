import React, {useEffect, useState} from 'react';
import './itemHelp.css'
import {getAnnouncements} from "../../../api";

const ItemHelp = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAnnouncements().then(response => {
            setData(response)
        })
            .catch(error => {
                console.log(error);
            });
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
                        <span className="quoteContent1">{el.description}</span>
                </div>
                <div className="rightSection11">
                    <img src={el.imageUrl} alt="Extra" className="extraImage" />
                    <div className="learnMore">
                        <p className="above-photo" style={{width: '9rem'}}>Відгукнутись</p>
                        <img src="/arrow2.svg" alt="Arrow" className="arrowIcon" />
                    </div>
                </div>
            </div>
        </div>)
    );
};

export default ItemHelp;
