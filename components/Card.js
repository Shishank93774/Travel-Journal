import React from 'react';

export default function Card (props) {
    const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props.item;
    return (
        <div className="main--card">
            <img src={imageUrl} />
            <div className="main--content">
                <section className="content--location">
                <img src="../assets/location.png" />
                    <p>{location}</p>
                    <a href={googleMapsUrl}>View on Google Maps</a>
                </section>
                <section className="content--title">
                    <h2>{title}</h2>
                </section>
                <section className="content--timeline">
                    <h4>{startDate} - {endDate}</h4>
                </section>
                <section className="content--description">
                    <p>{description}</p>
                </section>
            </div>
        </div>
    );
}