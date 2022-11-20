let form = document.querySelector("form")
let input = document.querySelector("input")
let template = document.querySelector("template").content
let card = document.querySelector(".card")
const parent = document.querySelector(".parent")
let text = document.querySelector(".text")
let h3 = document.querySelector(".text_h3")
let rating = document.querySelector(".rating")
let result;
let index = 0
let tugri = 0
let notugri = 0
let filter = []
function renders(savollar) {
    result = savollar[index]
    if(index === savollar.length-1){
        parent.remove()
        if(tugri > 7){
            text.classList.add("textBlock")
            h3.textContent = `Tabriklaymiz siz Shohijahonning eng yaqin kishilaridansiz qancha reyting to'plaganingizni Shohijahonga ham aytishingizni so'raymiz `
            rating.textContent = `REYTING = ${tugri} `
        }else if(tugri === 6){
            text.classList.add("textBlock")
            h3.textContent = `Tabriklaymiz siz Shohijahonning qadrdon kishilaridansiz qancha reyting to'plaganingizni Shohijahonga ham aytishingizni so'raymiz`
            rating.textContent = `REYTING = ${tugri} `
        }else if(3 < tugri || 5 > tugri){
            text.classList.add("textBlock")
            h3.textContent = `Hursand bo'lishingiz mumkin siz Shohijahonni tanishlaridansiz qancha reyting to'plaganingizni Shohijahonga ham aytishingizni so'raymiz`
            rating.textContent = `REYTING = ${tugri} `
        }else if(1< tugri || 3 > tugri){
            text.classList.add("textBlock")
            h3.textContent = `Qatnashganingiz uchun rahmat qancha reyting to'plaganingizni Shohijahonga ham aytishingizni so'raymiz `
            rating.textContent = `REYTING = ${tugri} `
        }else if(tugri === 0){
            text.classList.add("textBlock")
            h3.textContent = `Sizning reytingingiz passiv reytingingizni Shohijahonga ham aytishingizni so'raymiz `
            rating.textContent = `REYTING = ${tugri} `
        }
    }else{
        console.log("davom etyapti")
    }
    parent.innerHTML = null
    let clone = template.cloneNode(true)
    let cards = clone.querySelector(".card")
    let savolText = clone.querySelector(".savol")
    savolText.textContent = result.savol
    let junat = clone.querySelector(".junat")
    junat.addEventListener("click", junats)
    let array = result.variantlar
    for(let i = 0; i<array.length; i++){
       console.log(array[i]) 
        let li = document.createElement("li")
        let button = document.createElement("button")
        button.appendChild(document.createTextNode(array[i]))
        button.className = 'btns'
        li.appendChild(button)
        cards.appendChild(li)
        li.addEventListener("click", handleClick)
    }
    parent.appendChild(clone)
}
renders(savollar)
console.log(result)
let lilar = document.querySelector("lilar")
function handleClick(e){
    let btn = e.target
    let nishon = e.target.closest(".btns")
    if(nishon){
        filter = [nishon]
        let text = e.target.textContent
        nishon.disabled = true
        if(text === result.javob){
            btn.style.background = "green"
            tugri++
            btn.style.color = "#fff"
            console.log(tugri)
        }else{
            btn.style.background = "red"
            btn.style.color = "#fff"
            console.log(false)
            notugri++
            console.log(notugri)
        }
    }else{
        console.log(false)
    }
    let buttonlar = document.querySelectorAll(" li button")
    for(let i = 0; i<buttonlar.length; i++){
        console.log(buttonlar[i])
        buttonlar[i].disabled = true
    }
}
let arraySavol = [`savol`, "savol", "savol", "savol", "savol"]
function junats(){
    console.log("ishladi")
    index++
    if(filter.length === 0){
        alert("variant tanla")

    }else{
        renders(savollar)
    }

}
