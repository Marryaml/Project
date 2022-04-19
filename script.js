let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('nav-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
})

//Form Validation

document.getElementById('Sign In').addEventListener('submit', function(event) {
    event.preventDefault();

    let errors = {};
    let form = event.target;
    
    let user = document.querySelector('[name="user"]');

    if (user.length < 7 || user == " " ){
        errors.user = 'The name must contain at least 7 characters';
    }

    let password = document.getElementById('password').value;

    let Checkbox = document.getElementById('ACbox').checked;

    if (!Checkbox) {
        errors.agree = 'Accept to the Terms and Conditions';
    }

    form.querySelectorAll('.error-text').forEach(item => {
        item.textContent = '';
    })

    for (let item in errors) {
        let errorPlaceholder = document.getElementById('error_' + item);

        if (errorPlaceholder) {
            errorPlaceholder.textContent = errors[item];
        }
    }

    if(Object.keys(errors).length == 0) {
        form.submit();
    }

});


// //  სერვერიდან ინფორმაციია჻჻
let Photos =  document.querySelector('.api');

let result = document.getElementById('result')
let filter = document.getElementById('filter')
let listItems = [];


let cPage = 1;

function getUsers(cPage) {
    fetch('https://reqres.in/api/users?page=' + cPage, {
        method: 'GET'
    })
    .then(function(x) {
        if (x.status !== 200) {
            throw 'error';         
        }
        return x.json();
    })
// ჯავა სკრიპტის შეცდომის შემთხვევაში

    // .then(function(x) {

    //     // var fragment = document.createDocumentFragment();

    //     xData.data.forEach(element => {
    //         let li = document.createElement('li');
    //         li.textContent = element.photos;

    //         fragment.appendChild(li);
    //     });
  

    //     document.getElementById('users-list').appendChild(fragment);
    // })

    .then(function(x) {
        console.log(x.data);
        xpage(x.data)
        
    })

//     .catch(function(error) {

// // სტატუსკოდების რენდერის ლოგიკა
//         if (error == 404) {
//             let p = document.createElement('p');
//             p.textContent = 'Page not found';

//             document.getElementById('api').appendChild(p)
//         } else {
//             let p = document.createElement('p');
//             p.textContent = 'Server Error';

//             document.getElementById('api').appendChild(p)
//         }

//     })
}

function xpage(x){
    x.forEach(element => {
        let div = document.createElement('div')
        div.classList.add('Photos')

        let img = document.createElement('img')
        img.src = element.avatar
        let li  =  document.createElement('li')
        li.textContent = element.first_name;

        div.appendChild(img)
        div.appendChild(li)

        Photos.appendChild(div)
        
    });
}
// filter
function filterData(searchItem){
    listItems.forEach((item)=>{
        console.log(item)
        if(item.innerText.toLowerCase().includes(searchItem.toLowerCase())){
            item.classList.remove('active');
        }else{
            item.classList.add('active')
        }
    })
}

filter.addEventListener('input',(event)=>{
    filterData(event.target.value)
})




document.getElementById('loadmore').addEventListener('click', function() {
    cPage += 1;
    getUsers(cPage);
})

getUsers(cPage);



// // slider

// let data = [
//     {
//         id: 1,
//         imageUrl: 'https://www.pexels.com/photo/photo-of-tent-at-near-trees-2422265/',
//         title: 'image-title1',
//         url: 'https://google.com'
//     },

//     {
//         id: 2,
//         imageUrl: 'https://www.pexels.com/photo/six-camping-tents-in-forest-699558/',
//         title: 'image-title2',
//         url: 'https://google.com'
//     },
//     {
//         id: 3,
//         imageUrl: 'https://www.pexels.com/photo/photo-of-blue-and-yellow-lighted-dome-tent-surrounded-by-plants-during-night-time-712067/',
//         title: 'image-title3',
//         url: 'https://google.com'

//     },
//     {
//         id: 4,
//         imageUrl: 'https://www.pexels.com/photo/green-tent-on-top-of-mountain-803226/',
//         title: 'image-title4',
//         url: 'https://google.com'
//     }
// ]




// let arrowLeft = document.getElementById('arrow-left-button');
// let arrowRight = document.getElementById('arrow-right-button');
// let sliderContent = document.getElementById('slider-content');


// let sliderIndex = 0;

// function createAtag(item) {
//     let tag = document.createElement('a');
//     tag.setAttribute('href', item.url);
//     tag.setAttribute('class', 'slide');

//     return tag;
// }

// function createH2tag(item){
//     let tagtitle = document.createElement('h2');
//     tagtitle.setAttribute('class', 'title');
//     tagtitle.append(item.title);

//     return tagtitle;
// }

// function createImgtag(item) {
//     let tagImage = document.createElement('img');
//     tagImage.setAttribute('src', item.imageUrl);
//     tagImage.setAttribute('alt', item.title);

//     return tagImage;
// }



// function setSlide(){
//     sliderContent.innerHTML = ' ';
//     let slideItem = createAtag(data[sliderIndex]);
//     let h2Tag = createH2tag(data[sliderIndex]);
//     let imgTag = createImgtag(data[sliderIndex]);

//     slideItem.appendChild(imgTag);
//     slideItem.appendChild(h2Tag);

//     sliderContent.appendChild(slideItem);

  

//     console.log(slideItem);




//     arrowLeft.addEventListener('click', function(){
//         if (sliderIndex <= 0){
//             sliderIndex =  data.length - 1;
//             setSlide();
//             return;
//         }

//         sliderIndex--;
//         setSlide();   
//     });

//     arrowRight.addEventListener('click', function(){
//         if (sliderIndex >=  data.length - 1) {
//             sliderIndex = 0;
//             setSlide();
//             return;
//         }

//         sliderIndex++;
//         setSlide();

//     });

//     arrowLeft.addEventListener('click', arrowLeftClick);
//     arrowRight.addEventListener('click', arrowRightClick);

//     setInterval( () =>{
//         arrowRightClick();

//     },  3000);


//     setSlide();

// }




//  სლაიდერი....

let data = [
    {
        id: 1,
        imageUrl: 'images/1.jpg',
        title: 'Tour 1',
        url: 'https://google.com'
    },
    {
        id: 2,
        imageUrl: 'images/2.jpg',
        title: 'Tour 2',
        url: 'https://google.com'
    },
    {
        id: 3,
        imageUrl: 'images/3.jpg',
        title: 'Tour 3',
        url: 'https://google.com'
    },
    {
        id: 4,
        imageUrl: 'images/4.jpg',
        title: 'Tour 4',
        url: 'https://google.com'
    }

]

let arrowLeft = document.getElementById('arrow-left-button');
let arrowRight = document.getElementById('arrow-right-button');
let sliderContent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName('dot');


let sliderIndex = 0;

function createAtag(item) {
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.setAttribute('class', 'slide');

    return tag;
}

function createH2tag(item) {
    let tagtitle = document.createElement('h2');
    tagtitle.setAttribute('class', 'title');
    tagtitle.append(item.title);

    return tagtitle;
}

function createImgtag(item) {
    let tagImage = document.createElement('img');
    tagImage.setAttribute('src',  item.imageUrl);
    tagImage.setAttribute('alt', item.title);

    return tagImage;
}

function createDots(item) {
    let dots = document.createElement('div');
    dots.setAttribute('class', 'dots');

    data.forEach( (element) => {
        let dotElement = document.createElement('div');
        dotElement.setAttribute('class', 'dot');
        dotElement.setAttribute('data-id', element.id - 1);

        dotElement.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }

        dots.appendChild(dotElement);
    });

    console.log(dots);

    return dots;
}

function CurrentDotActive() {
    dotsList[sliderIndex].classList.add('active');
}

function setSlide() {
    sliderContent.innerHTML = ' ';
    let slideItem = createAtag(data[sliderIndex]);
    let h2Tag = createH2tag(data[sliderIndex]);
    let imgTag = createImgtag(data[sliderIndex]);
    let dots = createDots();

    slideItem.appendChild(imgTag);
    slideItem.appendChild(h2Tag);

    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    CurrentDotActive();

    console.log(slideItem);
}

function arrowleftClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }

    sliderIndex--;
    setSlide();
}

function arrowRightClick() {
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }

    sliderIndex++;
    setSlide();
}

arrowLeft.addEventListener('click', arrowleftClick)
arrowRight.addEventListener('click', arrowRightClick);



setSlide();






