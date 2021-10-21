let data = [
    {
        name: 'Casey',
        age: '25'
    },
    {
        name: 'Emma',
        age: '21'
    },
    {
        name: 'Jason',
        age: '28'
    },
    {
        name: 'Heather',
        age: '46'
    },
    {
        name: 'Marcel',
        age: '44'
    },
    {
        name: 'Louie',
        age: '7'
    }
];

const info = document.querySelector('#info');
let details = data.map(function(item) { 
    return '<div>' + item.name + ' ' + item.age + '</div>';
    
});

info.innerHTML = details.join('\n');
