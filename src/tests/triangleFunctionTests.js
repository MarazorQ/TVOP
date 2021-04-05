const isEquilateral = (a, b, c) =>{
    let result = false
    if (a === b && a === c){
        result = true
    }
    return result
}
const isTriangle = (a, b, c) =>{
    let result = true
    if ((a < b + c) && (b < a + c) && (c < a + b)){
        result = false
    }
    return result
}
const isVersatile = (a, b, c) =>{
    let result = false
    if (a !== b && a !== c && b !== c && !isTriangle(a,b,c)){
        result = true
    }
    return result
}
const isIsosceles = (a, b, c) =>{
    let result = false
    if (a === b || b === c || a === c){
        result = true
    }
    return result
}
 export const typeOfTriangle = (a, b, c) =>{
    if (a === 0 || b === 0 || c === 0){
        return "Фигура не является треугольлником, диапазон допустимых значений для сторон [1-999999999]"
    }else{
        let res = { 
            equilateral: "",
            noTriangle: "",
            versatile: "",
            isosceles: ""
        }
        let triangleType = ''
        res.equilateral = isEquilateral(a, b, c)
        res.noTriangle = isTriangle(a, b, c)
        res.versatile = isVersatile(a, b, c)
        res.isosceles = isIsosceles(a, b, c)
        
        if (res.equilateral){
            triangleType = "Равносторонний"
        }else if (res.noTriangle){
            triangleType = "Фигура не является треугольником. Сумма любых двух сторон должна быть больше третьей"
        }else if (res.versatile){
            triangleType = "Неравносторонний"
        }else if (res.isosceles){
            triangleType = "Равнобедренный"
        }
        return triangleType
    }
    
}
// module.exports = isEquilateral
// module.exports = isTriangle
// module.exports = isVersatile
// module.exports = isIsosceles
