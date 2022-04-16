let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('nav-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
})

//  სერვერიდან ინფორმაციია჻჻

let cPage = 1;

function getUsers(page) {
    fetch('https://reqres.in/api/users?page=' + page, {
        method: 'GET'
    })
    .then(function(x) {
        if (x.status !== 200) {
            throw 'error';         
        }
        return x.json();
    })
// ჯავა სკრიპტის შეცდომის შემთხვევაში

    .then(function(xData) {

        var fragment = document.createDocumentFragment();

        xData.data.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element.photos;

            fragment.appendChild(li);
        });
  

        document.getElementById('users-list').appendChild(fragment);
    })
    .catch(function(error) {

// სტატუსკოდების რენდერის ლოგიკა
        if (error == 404) {
            let p = document.createElement('p');
            p.textContent = 'Page not found';

            document.getElementById('api').appendChild(p)
        } else {
            let p = document.createElement('p');
            p.textContent = 'Server Error';

            document.getElementById('api').appendChild(p)
        }

    })
}

document.getElementById('loadmore').addEventListener('click', function() {
    cPage += 1;
    getUsers(cPage);
})

getUsers(cPage);


// slider

let data = [
    {
        id: 1,
        imageUrl: 'https://www.pexels.com/photo/photo-of-tent-at-near-trees-2422265/',
        title: 'image-title1',
        url: 'https://google.com'
    },

    {
        id: 2,
        imageUrl: 'https://www.pexels.com/photo/six-camping-tents-in-forest-699558/',
        title: 'image-title2',
        url: 'https://google.com'
    },
    {
        id: 3,
        imageUrl: 'https://www.pexels.com/photo/photo-of-blue-and-yellow-lighted-dome-tent-surrounded-by-plants-during-night-time-712067/',
        title: 'image-title3',
        url: 'https://google.com'

    },
    {
        id: 4,
        imageUrl: 'https://www.pexels.com/photo/green-tent-on-top-of-mountain-803226/',
        title: 'image-title4',
        url: 'https://google.com'
    }
]




let arrowLeft = document.getElementById('arrow-left-button');
let arrowRight = document.getElementById('arrow-right-button');
let sliderContent = document.getElementById('slider-content');


let sliderIndex = 0;

function createAtag(item) {
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.setAttribute('class', 'slide');

    return tag;
}

function createH2tag(item){
    let tagtitle = document.createElement('h2');
    tagtitle.setAttribute('class', 'title');
    tagtitle.append(item.title);

    return tagtitle;
}

function createImgtag(item) {
    let tagImage = document.createElement('img');
    tagImage.setAttribute('src', item.imageUrl);
    tagImage.setAttribute('alt', item.title);

    return tagImage;
}



function setSlide(){
    sliderContent.innerHTML = ' ';
    let slideItem = createAtag(data[sliderIndex]);
    let h2Tag = createH2tag(data[sliderIndex]);
    let imgTag = createImgtag(data[sliderIndex]);

    slideItem.appendChild(imgTag);
    slideItem.appendChild(h2Tag);

    sliderContent.appendChild(slideItem);

  

    console.log(slideItem);




    arrowLeft.addEventListener('click', function(){
        if (sliderIndex <= 0){
            sliderIndex =  data.length - 1;
            setSlide();
            return;
        }

        sliderIndex--;
        setSlide();   
    });

    arrowRight.addEventListener('click', function(){
        if (sliderIndex >=  data.length - 1) {
            sliderIndex = 0;
            setSlide();
            return;
        }

        sliderIndex++;
        setSlide();

    });

    arrowLeft.addEventListener('click', arrowLeftClick);
    arrowRight.addEventListener('click', arrowRightClick);

    setInterval( () =>{
        arrowRightClick();

    },  3000);


    setSlide();

}







