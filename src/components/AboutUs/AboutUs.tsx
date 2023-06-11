import React from 'react';
import c from './AboutUs.module.css';

export const AboutUs = () => {


    return (
        <div className={c.container_main}>
            <div className={c.text}>
                <span>Kiek save prisimenu,vis kažką kuriu...
Esu baigusi dailę,surengusi keletą personalinių parodų.
Buvau susižavėjusi tapyba ant silko,dabar kilo noras išbandyti akrilo galimybes drobėje.
Mintys kyla stebint aplinką,gamtą...
Žąvi spalvų deriniai,linijų žaismas.Mano kūryboje vyrauja didelės,stilizuotos gėlės,bet nevegiu isbandyti ir abstrakcijos elementų paveiksluose...
Darbai pritaikyti šiuolaikiniam interjerui ,tiek piesiniu,tirk ir spalvomis.

</span>
            </div>
            <div className={c.photo}>
                <img
                    src="https://i0.wp.com/ispudingai.lt/wp-content/uploads/2023/05/regina-begcanova.jpg?fit=300%2C300&ssl=1"
                    alt=""/>
            </div>
        </div>


    )
}