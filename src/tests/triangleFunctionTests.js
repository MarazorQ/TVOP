const equilateral = (a, b, c) =>{
    let result = ""
    if (a === b && a === c && b === c ){
        result = true
    }else{
        result = false
    }
    return result
}
const noTriangle = (a = 1, b = 1, c = 1) =>{
    let result = ""
    if ((a + b > c) && (b + c > a) && (a + c > b)){
        result = true
    }else{
        result = false
    }
    return result
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
    if (a == b || b == c || a == c){
        result = true
    }else{
        result = false
    }
    return result
}
export const typeOfTriangle = (a, b, c) =>{
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