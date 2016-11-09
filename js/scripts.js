var triangle1Area = getTriangleArea(10, 15),
    triangle2Area = getTriangleArea(5, 8),
    triangle3Area = getTriangleArea(12, 20);

function getTriangleArea(a, h) {
    if ((a<=0) || (h<=0)) {
        console.log('Nieprawidłowe dane');
    }
    return a*h/2;
}

console.log('Pole pierwszego trójkąta: ' + triangle1Area);
console.log('Pole drugiego trójkąta: ' + triangle2Area);
console.log('Pole trzeciego trójkąta: ' + triangle3Area);