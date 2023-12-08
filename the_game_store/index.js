const games = [
    {
        image: 'images/test1.png',
        title: 'Airplane',
        desc: 'you are airplane',
        tipe: 'a',
    },
    {
        image: 'images/testtest.png',
        title: 'c Flip Dobrável',
        desc: 'test4',
        tipe: 'c',
    },
    {
        image: 'images/test1.png',
        title: 'a Flip Dobrável',
        desc: 'test4',
        tipe: 'a',
    },
    {
        image: 'images/testtest.png',
        title: 'b Flip Dobrável',
        desc: 'test4',
        tipe: 'b',
    },
    {
        image: 'images/testtest.png',
        title: 'c Flip Dobrável',
        desc: 'test4',
        tipe: 'c',
    },
    {
        image: 'images/test1.png',
        title: 'a Flip Dobrável',
        desc: 'test4',
        tipe: 'a',
    },
    {
        image: 'images/testtest.png',
        title: 'b Flip Dobrável',
        desc: 'test4',
        tipe: 'b',
    },
    {
        image: 'images/test1.png',
        title: 'a Flip Dobrável',
        desc: 'test4',
        tipe: 'a',
    },
    {
        image: 'images/testtest.png',
        title: 'b Flip Dobrável',
        desc: 'test4',
        tipe: 'b',
    },
];
const categories = [...new Set(games.map((item) => {return item}))]

const display = (items) => {
    document.getElementById('body').innerHTML = items.map((item) => {
        var{image,title,desc} = item;
        return(
            `
                <button class="content">
                    <div>
                        <img src="${image}" class="img">
                    </div>

                    <div class="desc">
                        <h1>${title}</h1>
                        <p>${desc}</p>
                    </div>
                </button>
            `
        )
    }).join('')
};
display(categories);