import React from 'react'
import chu from '../chu.PNG';

function Home() {
    return (
        <div className="milieu"> 
            <div className="partie1">
                <h3>Hôpital des Spécialités</h3>
                <p>C’est un hôpital à vocation générale. Il est le plus grand des cinq hôpitaux du CHU Hassan II en termes de superficie, de capacité litière et même en termes de la diversité des spécialités qu’il abrite, tant médicales que chirurgicales.
                La prise en charge au sein de l’hôpital des spécialités concerne essentiellement les adultes. La prise en charge des enfants de moins de 15ans reste exceptionnelle, et ce, dans certaines disciplines telle la neurochirurgie.
                L’hôpital dispose de 19 services hospitaliers dont 10 chirurgicaux et 8 médicaux. Outre le service des urgences munis de soins intensifs, bloc opératoire et radiologie, il dispose également de deux Réanimations polyvalentes et deux blocs opératoires centraux.</p>
            </div>
            <img src={chu} />
       </div>

    )
}
export default Home;