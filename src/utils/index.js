import { WHATSAPP_API_URL } from "../constants";

export const getPriceInLocalString = (price) => {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
    }).format(price);
};

export const getNumberInLocalString = (number) => {
    return new Intl.NumberFormat("en-IN", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(number);
};


export const getNumberInStringFormat = (price) => {
    if (isNaN(price)) {
        return "N/A";
    }
    const num = Number(price);
    if (num >= 10000000) { // 1 Crore
        return (num / 10000000).toFixed(2) + " Cr";
    }
    if (num >= 100000) { // 1 Lakh
        return (num / 100000).toFixed(2) + " Lakh";
    }

    if (num >= 1000) { // 1 Thousand to 99.9 K
        return (num / 1000).toFixed(0) + "K";
    }

    return `${num.toLocaleString('en-IN')}`;
}

export const getOrdinalNumber = (number) => {
    if (isNaN(number)) {
        return number; // Or handle as an error/default
    }
    const n = parseInt(number, 10);
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const getTitleCase = (str) => {
    return str.charAt(0).toUpperCase() + str?.replaceAll('-', ' ').slice(1)
}

export const handleSellingEnquiry = () => {
    const message = `Hi,
I would like to sell/exchange my car. Please find the details below:
- Name:
- Phone:
- Car make / model:
- Year:
- Mileage (km):
- Expected price:
- Additional notes:
- Images/Documents: (Please attach when sending the message)
`;
    const encoded = encodeURIComponent(message);
    const url = `${WHATSAPP_API_URL}&text=${encoded}`;
    window.open(url, '_blank');
}

export const handleMailEnquiry = () => {
    const recipient = 'sriganeshautocarsudupi@gmail.com';
    window.location.href = `mailto:${recipient}`;
}

export const handleWhatsappEnquiry = (message) => {
    const defaultMessage = `Hello,
I would like to inquire about your services.`;

    const messageToSend = message ? message : defaultMessage;

    const encoded = encodeURIComponent(messageToSend);
    const url = `${WHATSAPP_API_URL}&text=${encoded}`;
    window.open(url, '_blank');
}