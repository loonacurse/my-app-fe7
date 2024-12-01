import React, { useState, useRef } from "react";

function MainContent() {
    const [isBgColor1, setBgColor1] = useState(false);
    const [isBgColor2, setBgColor2] = useState(false);
    const imageRef = useRef(null);
    
        const addImage = () => {
            const imageContainer = document.getElementById("image-container");
            
            if (!imageContainer.querySelector("img")) {
                const anchor = document.createElement("a");
                anchor.href = "https://lviv.travel/?srsltid=AfmBOophe-sUkqf4Fi67RUXSRuwY0CTXStx908J743NFqE5YykrK0K9_";

                const img = document.createElement("img");
                img.src = "https://aws-travel-guide.s3.eu-west-1.amazonaws.com/default_image_size/603fc39c503d9_03%20%D0%9B%D1%8C%D0%B2%D1%96%D0%B2.jpg";
                img.alt = "Sample Image";
                img.style.width = "50%"; 
                anchor.appendChild(img);
                imageContainer.appendChild(anchor);

            }
        };

    const increaseImage = () => {
        const img = document.querySelector("#image-container img");
        if (img) {
            const currentWidth = img.clientWidth;
            img.style.width = (currentWidth + 100) + "px"; // збільшує ширину на 20px
        }
    };

    const decreaseImage= () => {
        const img = document.querySelector("#image-container img");
        if (img) {
            const currentWidth = img.clientWidth;
            img.style.width = (currentWidth - 100) + "px"; 
        }
    };

    const removeImage = () => {
        const img = document.querySelector("#image-container img");
        if (img) {
            img.remove();
        }
    };

    return (
    <div >
        <div id="image-container">
        <p>Місце народження: 19 жовтня, 2004 року, с. Липова Долина</p>
            <p>Освіта: Липоводолинська спеціалізована школа, с. Липова Долина;</p>
            <p
                id="demo"
                onClick={() => setBgColor1(!isBgColor1)} 
                className={isBgColor1 ? "bg-color1" : ""}
            >
                &emsp; НТУУ "КПІ", м. Київ
            </p>
            <p
                id="demo1"
                onClick={() => setBgColor2(!isBgColor2)} 
                className={isBgColor2 ? "bg-color2" : ""}
            >
                Хоббі:
            </p>
            <ul>
                <li>Фотографувати</li>
                <li>Робити макіяж</li>
                <li>Вишивати хрестиком</li>
            </ul>
            <p>Улюблені фільми:</p>
            <ol>
                <li>Реквієм за мрією</li>
                <li>Острів проклятих</li>
                <li>Інтерстеллар</li>
            </ol>
            <p>
                Львів — це чарівне місто з багатою історією та унікальною архітектурою, яке зачаровує туристів з усього світу. 
                Вузькі вулички, старовинні кам'яниці, затишні кав'ярні та неймовірна атмосфера роблять його ідеальним місцем для 
                прогулянок і відпочинку. Особливо вражають такі місця, як площа Ринок, Оперний театр та Високий замок, звідки відкривається 
                неймовірний вид на місто. Львів приваблює своїм культурним різноманіттям, автентичними ресторанами та гостинністю, залишаючи 
                незабутні враження.
            </p>
            <p>Ось кілька цікавих фактів про Львів:</p>
            <ul>
                <li>
                    Львівська площа Ринок — це серце міста, і її забудова є прикладом ренесансної архітектури. Більшість будівель на площі були збудовані в XVI-XVII століттях.
                </li>
                <li>
                    Львів — місто кави. Існує легенда, що саме у Львові вперше почали варити каву на всій території України. Тут є багато кав'ярень, і навіть проходить фестиваль кави, присвячений цьому напою.
                </li>
                <li>
                    Оперний театр у Львові вважається одним з найкрасивіших театрів Європи. Він збудований у стилі ренесансу та бароко, і його внутрішній інтер'єр вражає розкішшю.
                </li>
                <li>
                    Львів — місто левів. У Львові налічується понад 4,500 зображень левів у вигляді скульптур, барельєфів та елементів декору. Лев є символом міста і присутній на його гербі.
                </li>
            </ul>
            <a id="a" href="https://lviv.travel/?srsltid=AfmBOophe-sUkqf4Fi67RUXSRuwY0CTXStx908J743NFqE5YykrK0K9_">
                <img id="imageContainer"
                    ref={imageRef}
                    src="https://aws-travel-guide.s3.eu-west-1.amazonaws.com/default_image_size/603fc39c503d9_03%20%D0%9B%D1%8C%D0%B2%D1%96%D0%B2.jpg" 
                    alt="Lviv" 
                    style={{ width: "50%", height: "auto" }}
                />
            </a>     
            </div>    
            <div id="buttons-container">
            <button onClick={addImage}>Додати</button>
            <button onClick={increaseImage}>Збільшити</button>
            <button onClick={decreaseImage}>Зменшити</button>
            <button onClick={removeImage}>Видалити</button>
        </div>            
    </div>
    )
}

export default MainContent
