const possibleResults = {}

possibleResults.thirtyRock = {
    tough: [
        'assets/thirty/tough01.gif',
        'assets/thirty/tough02.gif',
        'assets/thirty/tough03.gif',
        'assets/thirty/tough04.gif'
    ],

    inspo: [
        'assets/thirty/inspo01.gif',
        'assets/thirty/inspo02.gif',
        'assets/thirty/inspo03.gif',
        'assets/thirty/inspo04.gif'
    ],

    snark: [
        'assets/thirty/snark01.gif',
        'assets/thirty/snark02.gif',
        'assets/thirty/snark03.gif'
    ],
    advice: [
        'assets/thirty/advice01.gif',
        'assets/thirty/advice02.gif',
        'assets/thirty/advice03.gif',
        'assets/thirty/advice04.gif'
    ],
    cant: [
        'assets/thirty/cant01.gif',
        'assets/thirty/cant02.gif',
        'assets/thirty/cant03.gif',
        'assets/thirty/cant04.gif',        
        'assets/thirty/cant05.gif'
    ],
    yay: [
    'assets/thirty/yay01.gif',        
    'assets/thirty/yay02.gif',
    'assets/thirty/yay03.gif',
    'assets/thirty/yay04.gif',
    'assets/thirty/yay05.gif'       
    ]
},

possibleResults.arrestedDevelopment = {
    tough: [
        'assets/arrested/tough01.gif',
        'assets/arrested/tough02.gif',
        'assets/arrested/tough03.gif',
        'assets/arrested/tough04.gif'
    ],

    inspo: [
        'assets/arrested/inspo01.gif',
        'assets/arrested/inspo02.gif',
        'assets/arrested/inspo03.gif'
    ],

    snark: [
        'assets/arrested/snark01.gif',
        'assets/arrested/snark02.gif',
        'assets/arrested/snark03.gif',
        'assets/arrested/snark04.gif'
    ],

    advice: [
        'assets/arrested/advice01.gif',
        'assets/arrested/advice02.gif',
        'assets/arrested/advice03.gif',
        'assets/arrested/advice04.gif',
        'assets/arrested/advice05.gif'
    ],

    cant: [
        'assets/arrested/cant01.gif',
        'assets/arrested/cant02.gif',
        'assets/arrested/cant03.gif',
        'assets/arrested/cant04.gif',
        'assets/arrested/cant05.gif'
    ],

    yay: [
        'assets/arrested/yay01.gif',
        'assets/arrested/yay02.gif'
    ]
},

possibleResults.brooklynNineNine = {
    tough: [
        'assets/brooklyn/tough01.gif',
        'assets/brooklyn/tough02.gif',
        'assets/brooklyn/tough03.gif',
        'assets/brooklyn/tough04.gif',
        'assets/brooklyn/tough05.gif'
    ],
    inspo: [
        'assets/brooklyn/inspo01.gif',
        'assets/brooklyn/inspo02.gif',
        'assets/brooklyn/inspo03.gif',
        'assets/brooklyn/inspo04.gif'
    ],
    snark: [
        'assets/brooklyn/snark01.gif',
        'assets/brooklyn/snark02.gif',
        'assets/brooklyn/snark03.gif',
        'assets/brooklyn/snark04.gif'
    ],
    advice: [
        'assets/brooklyn/advice01.gif',
        'assets/brooklyn/advice02.gif',
        'assets/brooklyn/advice03.gif',
        'assets/brooklyn/advice04.gif',
        'assets/brooklyn/advice05.gif'
    ],
    cant: [
        'assets/brooklyn/cant01.gif',
        'assets/brooklyn/cant02.gif',
        'assets/brooklyn/cant03.gif',
        'assets/brooklyn/cant04.gif'
    ],
    yay: [
        'assets/brooklyn/yay01.gif',
        'assets/brooklyn/yay02.gif'
    ]
},

possibleResults.theOffice = {  
    tough: [
        'assets/office/tough01.gif',
        'assets/office/tough02.gif',
        'assets/office/tough03.gif',
        'assets/office/tough04.gif',
        'assets/office/tough05.gif'
    ],
    
    inspo: [
        'assets/office/inspo01.gif',
        'assets/office/inspo02.gif'
    ],
    
    snark: [
        'assets/office/snark01.gif',
        'assets/office/snark02.gif',
        'assets/office/snark03.gif',
        'assets/office/snark04.gif',
        'assets/office/snark05.gif'
    ],
    
    advice: [
        'assets/office/advice01.gif',
        'assets/office/advice02.gif',
        'assets/office/advice03.gif'
    ],
    
    cant: [
        'assets/office/cant01.gif',
        'assets/office/cant02.gif',
        'assets/office/cant03.gif'
    ],
    
    yay: [
        'assets/office/yay01.gif',
        'assets/office/yay02.gif',
        'assets/office/yay03.gif',
        'assets/office/yay04.gif'
    ]
},

possibleResults.parksAndRec = {
    tough: [
        'assets/parks/tough01.gif',
        'assets/parks/tough02.gif',
        'assets/parks/tough03.gif',
        'assets/parks/tough04.gif',
        'assets/parks/tough05.gif'
    ],
    
    inspo: [
        'assets/parks/inspo01.gif',
        'assets/parks/inspo02.gif',
        'assets/parks/inspo03.gif',
        'assets/parks/inspo04.gif'
    ],
    
    snark: [
        'assets/parks/snark01.gif',
        'assets/parks/snark02.gif',
        'assets/parks/snark03.gif',
        'assets/parks/snark04.gif',
        'assets/parks/snark05.gif'
    ],
    
    advice: [
        'assets/parks/advice01.gif',
        'assets/parks/advice02.gif',
        'assets/parks/advice03.gif',
        'assets/parks/advice04.gif'
    ],
    
    cant: [
        'assets/parks/cant01.gif',
        'assets/parks/cant02.gif',
        'assets/parks/cant03.gif',
        'assets/parks/cant04.gif'
    ],
    
    yay: [
        'assets/parks/yay01.gif',
        'assets/parks/yay02.gif',
        'assets/parks/yay03.gif',
        'assets/parks/yay04.gif'
    ]
};


$(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const show = $('input[name=tv]:checked').val();
        
        const feeling = $('input[name=feels]:checked').val();

        $('.slide-content').detach();

        for (let x in possibleResults) {
            if (x === show) {
                for (let y in possibleResults[show]) {
                    if (y === feeling) {
                        const finalChoice = (possibleResults[show][feeling]);
                        const randomGif = finalChoice[Math.floor(Math.random()*finalChoice.length)];
                        const image = $('<img>').attr('src', randomGif);

                        const refreshButton = `<a href="index.html" class="button button--refresh">Gif Me Another</a>`

                        $('ul.results').append(image, refreshButton);
                    };
                };
            };
        };
    });
   $('a').on('click', function(){
       $('a').removeClass('slider-nav--active');
       $(this).addClass('slider-nav--active');
   });
});

// make the link copied to clipboard when clicked

// alert the user that their link has been copied





// when user clicks that specific nav link

// add a class of 'active' to that particular anchor

// move the slider-nav before and after elements over that link