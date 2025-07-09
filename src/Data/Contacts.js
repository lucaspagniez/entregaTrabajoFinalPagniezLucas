import React from 'react'


function App() {

}
export default App


export const contacts = [
    { 
        id: 1,
        name: 'Compañero juan',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC2JHqzP6ybSEoxHQ7A4PbgKUiooix4fnCoQ&s',
        messages:[
        { id: 1, text: 'Hola Lucas, ¿cómo estás?', sent: false, time:'19:00' },
        { id: 2, text: 'Hola, yo estoy bien, haceindo el trabajo final de FrontEnd', sent: true, time:'19:01', seenStatus:'seen' },
        { id: 3, text: '¿Y vos?', sent: true, time:'19:02', seenStatus:'seen' },
        { id: 4, text: 'Yo también, es un desafío bastante grande', sent: false, time:'19:03' },
        ]
    },

    { 
        id: 2,
        name: 'Morena',
        photo: 'https://cdn.milenio.com/uploads/media/2022/07/17/pinky-gomezpalatina-simple-vista-honor.jpg',
        messages:[
            { id: 1, text: 'Holaa como estas?, seguiste practicando con los tatuajes?', sent: false, time:'18:00' },
            { id: 2, text: 'Sii, es un lindo proyecto para hacer juntos 💕', sent: true, time:'18:01', seenStatus:'seen' },
            { id: 3, text: 'la verdad que si mi amor, me gustaa', sent: false, time:'18:02'},
        ],

    },

    { 
        id: 3, 
        name: 'Matias profe',
        photo: 'https://st4.depositphotos.com/3584053/20875/i/950/depositphotos_208750514-stock-photo-teacher-on-pensive-face-muscular.jpg',
        messages:[
            { id: 1, text: 'Hola Lucas, ¿cómo va el proyecto?', sent: false, time:'17:00' },
            { id: 2, text: 'Estoy bien, estoy haciendo el trabajo final de FrontEnd y la verdad que esta muy dificil', sent: true, time:'17:01', seenStatus:'seen' },
            { id: 3, text: 'Entiendo, es un desafío interesante, pero con dedicación vas a lograrlo', sent: false, time:'17:02' },
        ],

    },

    { 
        id: 4,
        name: 'Lauti tutor', 
        photo: 'https://i.pinimg.com/originals/3d/54/31/3d54314e04abb33c00a1e4c293c75382.jpg', 
        messages: [
            { id: 1, text: 'Buenos diass, como va el estudio?', sent: false, time:'13:00' },
            { id: 2, text: 'Dificilisimo la verdad, aprobame porfavor 😔', sent: true, time:'13:01', seenStatus:'seen' },
            { id: 3, text: 'Jajaja, hace lo posible que capaz zafas', sent: false, time:'13:02' },
        ],
    },

    { 
        id: 5, 
        name: 'Diego',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiM9egY7TZfPs306pORtMhrEULvHDvLIZZyA&s',
        messages: [
            {id: 1, text: 'Hola hijo, ¿todo bien en casa?', sent: false, time:'10:00' },
            { id: 2, text: 'Si papá, todo bien, ¿y vos?', sent: true, time:'10:01', seenStatus:'seen' },
            { id: 3, text: 'Todo bien, solo que estoy preocupado por el trabajo final de FrontEnd', sent: true, time:'10:02', seenStatus:'seen' },
            { id: 4, text: 'No te preocupes, con esfuerzo y dedicación lo vas a lograr', sent: false, time:'10:03' },
        ],
    },


]