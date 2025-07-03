import React from 'react'


function App() {

}
export default App


export const contacts = [
    { 
        id: 1,
        name: 'Compañero juan',
        photo: 'https://example.com/photo1.jpg',
        messages:[
        { id: 1, text: 'Hola Lucas, ¿cómo estás?', sent: false },
        { id: 2, text: 'Hola, yo estoy bien, haceindo el trabajo final de FrontEnd', sent: true },
        { id: 3, text: '¿Y vos?', sent: true },
        { id: 4, text: 'Yo también, es un desafío bastante grande', sent: false},
        ]

    },

    { 
        id: 2,
        name: 'Morena',
        photo: 'https://example.com/photo2.jpg',
        messages:[
            { id: 1, text: 'Holaa como estas?, seguiste practicando con los tatuajes?', sent: false },
            { id: 2, text: 'Sii, es un lindo proyecto para hacer juntos 💕', sent: true },
            { id: 3, text: 'la verdad que si mi amor, me gustaa', sent: false },
        ]
    },

    { 
        id: 3, 
        name: 'Matias',
        photo: 'https://example.com/photo3.jpg',
        messages:[
            { id: 1, text: 'Hola Lucas, ¿cómo va el proyecto?', sent: false },
            { id: 2, text: 'Estoy bien, estoy haciendo el trabajo final de FrontEnd y la verdad que esta muy dificil', sent: true },
            { id: 3, text: 'Entiendo, es un desafío interesante, pero con dedicación vas a lograrlo', sent: true },
        ]
    },

    { 
        id: 4,
        name: 'Lauti', 
        photo: 'https://example.com/photo4.jpg', 
        messages: [
            { id: 1, text: 'Buenos diass, como va el estudio?', sent: false },
            { id: 2, text: 'Dificilisimo la verdad, aprobame porfavor 😔', sent: true },
            { id: 3, text: 'Jajaja, hace lo posible que capaz zafas', sent: false },
        ] 
    },

    { 
        id: 5, 
        name: 'Diego',
        photo: 'https://example.com/photo5.jpg',
        messages: [
            {id: 1, text: 'Hola hijo, ¿todo bien en casa?', sent: false },
            { id: 2, text: 'Si papá, todo bien, ¿y vos?', sent: true },
            { id: 3, text: 'Todo bien, solo que estoy preocupado por el trabajo final de FrontEnd', sent: true },
            { id: 4, text: 'No te preocupes, con esfuerzo y dedicación lo vas a lograr', sent: false },

        ]  
    },

]