export const MapItem = () => {
    const mapStyle = {
        position: "relative",
        textAlign: "right",
        width: "100%",
        height: "400px",
    };

    const canvasStyle = {
        overflow: "hidden",
        background: "none",
        width: "100%",
        height: "400px",
    };

    const iframeStyle = {
        height: "400px",
        width: "100%",
        border: 0,
    };

    return (
        <div style={mapStyle}>
            <div style={canvasStyle}>
                <iframe
                    style={iframeStyle}
                    src="https://maps.google.com/maps?width=600&height=400&hl=en&q=sri ganesh auto cars udupi&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    loading="lazy"
                    allowFullScreen
                    title="Sri Ganesh Auto Cars Map"
                ></iframe>
            </div>
        </div>
    );
}
