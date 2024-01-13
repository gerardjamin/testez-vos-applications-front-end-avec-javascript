/**
 * 
 * @param {string} name 
 */
// export const sayHello = (name,surname) => {
//     if(!name && !surname) {
//         return "Hello, World"
//     }
//     if (name && !surname) {
//         return `Hello, ${name}`
//     }
//     if (!name && surname) {
//         return `Hello, ${surname}`
//     }
//     if(name && surname) {
//         return `Hello, ${name} ${surname}`
//     }   
// }

export const sayHello = (name, surname) => {
    const greeting = name && surname ? `Hello, ${name} ${surname}` :
                     name ? `Hello, ${name}` :
                     surname ? `Hello, ${surname}` :
                     "Hello, World";

    return greeting;
};
