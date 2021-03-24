const equilateral = (a, b, c) =>{
    let result = ""
    if (a === b && a === c){
        result = true
        if (a === 0 || b === 0 || c === 0){
            result = false
        }
    }else{
        result = false
    }
    return result
}
const noTriangle = (a, b, c) =>{
    if ((a < b + c) && (b < a + c) && (c < a + b)){
        return true
    }else{
        return false
    }
}
const versatile = (a, b, c) =>{
    let result = ""
    if (a !== b && a !== c && b !== c){
        result = true
    }else{
        result = false
    }
    return result
}
const isosceles = (a, b, c) =>{
    let result = ""
    if (a === b || b === c || a === c){
        result = true
    }else{
        result = false
    }
    return result
}
export const typeOfTriangle = (a, b, c) =>{
    if (a === 0 || b === 0 || c === 0){
        return "Фигура не является треугольлником"
    }else{
        let res = { 
            equilateral: "",
            noTriangle: "",
            versatile: "",
            isosceles: ""
        }
        let triangleType = ''
        res.equilateral = equilateral(a, b, c)
        res.noTriangle = noTriangle(a, b, c)
        res.versatile = versatile(a, b, c)
        res.isosceles = isosceles(a, b, c)
        
        if (res.equilateral){
            triangleType = "Равносторонний"
        }else if (res.noTriangle){
            triangleType = "Фигура не является треугольником"
        }else if (res.versatile){
            triangleType = "Разносторонний"
        }else if (res.isosceles){
            triangleType = "Равнобедренный"
        }
        return triangleType
    }
    
}
// module.exports = equilateral
// module.exports = noTriangle
// module.exports = versatile
// module.exports = isosceles
// module.exports = typeOfTriangle