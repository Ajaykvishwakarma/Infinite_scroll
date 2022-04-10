let container = document.getElementById("container");
// let child = document.getElementById("child")
let limit = 25;
let page = 1;
let getPhotos = async () =>{
    try {
let res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}$_page=${page}`)
let data = await res.json()
AppendData(data)
    }catch(e){
      console.log(e)
      
    }

}

function AppendData (data){
data.forEach(({id,title,url})=>{
    
    let div1  = document.createElement('div')
    div1.setAttribute('class', 'div1')
    let id_p = document.createElement('span')
    id_p.innerText ="    "+id
    

    let title1 = document.createElement('p')
    title1.innerText = title
    let image = document.createElement('img')
    image.src =url
    title1.append(id_p)

    // console.log(image)
   div1.append(title1,image)
//    child.append(div1)
   container.append(div1)
  
})
}
getPhotos()

function showData(){

getPhotos()
    // page++;
    console.log("Hii")

}

window.addEventListener('scroll', () => {
     const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
     if(scrollTop + clientHeight > scrollHeight-1){ 
        showData();
    }
  }
)