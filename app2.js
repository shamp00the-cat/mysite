let data1 = [
    {
        name: 'Take a seat',
    }
];

let data2 = [

        {
            name: 'Play a game',
        }
    
];


const info = document.querySelector('#info');
let details1 = data1.map(function(item) { 
    return '<div>' + item.name +  '</div>';
    
});

let details2 = data2.map(function(item) { 
    return '<div>' + item.name +  '</div>';
    
});

