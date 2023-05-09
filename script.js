/*-------------------------------
-------------------------------*/

/* -------------------------------------------*/
/* BACKGROUND COLOR PALLETTES
#264653 / 38,70,83      / 197°,37%,24%    -Blue
#2A9D8F / 42,157,144    / 173°, 58%, 39%  -Light Blue
#E9C46A / 233, 196, 106 / 43°, 74%, 66%   -Yellow
#F4A261 / 244, 162, 97  / 27°, 87%, 67%   -Orange
#E76F51 / 231, 111, 81  / 12°, 76%, 61%   -Dark Orange

#FFCDB2 / 255, 205, 178 / 21°, 100%, 85%  -Salmon 1
#FFB4A2 / 255, 180, 162 / 12°, 100%, 82%  -Salmon 2
#E5989B / 229, 152, 155 / 358°, 60%, 75%  -Pink
#B5838D / 181, 131, 141 / 348°, 25%, 61%  -Dark Pink
#6D6875 / 109, 104, 117 / 263°, 6%, 43%   -Violetish

#FFB997 / 255, 185, 151 / 20°, 100%, 80%  -Muted Orange
#F67E7D / 246, 126, 125 / 0°, 87%, 73%    -Flamingo
#843B62 / 132, 59, 98   / 328°, 38%, 37%  -Purple
#0B032D / 11, 3, 45     / 251°, 87%, 9%   -Dark Blue
#74546A / 116, 84, 106  / 319°, 16%, 39%  -Off Violet
*//* -------------------------------------------*/

// Setting up constants
const opacity1 = ",0.17"; // controls the opacity of the color filter added onto the background-image.
const opacity2 = ",0.33";
const palette = [[38,70,83],[42,157,144],[233, 196, 106],[244, 162, 97],[231, 111, 81],[255, 205, 178],[255, 180, 162],[229, 152, 155],[181, 131, 141],[109, 104, 117],[255, 185, 151],[246, 126, 125],[132, 59, 98],[11, 3, 45],[116, 84, 106]];      
const links = ["https://images.unsplash.com/photo-1527039257570-2d493710cdae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80","https://images.unsplash.com/photo-1544018579-6b3f89e57b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1930&q=80","https://images.unsplash.com/photo-1584936684506-c3a7086e8212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1030&q=80","https://images.unsplash.com/photo-1555580142-c49aa98ada01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80","https://images.unsplash.com/photo-1567939909368-a5e368dbc954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80","https://images.unsplash.com/photo-1542878447-e2b6df2526fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80","https://images.unsplash.com/flagged/photo-1556790335-76dcee7ae1f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1097&q=80"];

var backgrounds = [];

for (let i=0; i < palette.length; i++) {
  for (let j=0; j < palette.length; j++) {
    for (let k=0; k < links.length; k++) {
      backgrounds.push(`-webkit-gradient(linear,left top,left bottom,from(rgba(${palette[i].toString() + opacity1})),to(rgba(${palette[j].toString() + opacity2}))),url(${links[k]})`)
    }
  }
}

    /*
      background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(249, 96, 16, 0.25)),to(rgba(250, 246, 245, 0.4))),url(https://i.imgur.com/ntED7Np.png); 
    
*/

// Wrap all the code in a IIFE to prevent the global scope pollution;
;(function() {
  "use strict";
  
  // Quotes Collection, thanks to inc.com & entrepreneur.com
  var quotes = [{
      "quote": "The way to get started is to quit talking and begin doing.",
      "author": "Walt Disney"
    },
       {
      "quote": "Fear is the disease. Hustle is the antidote.",
      "author": "Travis Kalanick"
    },
       {
      "quote": "The question I ask myself almost every day is, 'Am I doing the most important thing I could be doing?'",
      "author": "Mark Zuckerburg"
    },
       {
      "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
      "author": "Chinese proverb"
    },
       {
      "quote": "I attribute my success to this: I never gave or took any excuse.",
      "author": "Florence Nightingale"
    },
       {
      "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
      "author": "Amelia Earhart"
    },
       {
      "quote": "Do or do not. There is no try.",
      "author": "Yoda"
    },
       {
      "quote": "Twenty years from now, you will be more disappointed by the things that you didn't do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
      "author": "Mark Twain"
    },
       {
      "quote": "When I let go of what I am, I become what I might be.",
      "author": "Lao Tzu"
    },                
       {
      "quote": "The most common way people give up their power is by thinking they don't have any.",
      "author": "Alice Walker"
    },                
       {
      "quote": "Life is what happens to you while you're busy making other plans.",
      "author": "John Lennon"
    },
       {
      "quote": "Eighty percent of success is showing up.",
      "author": "Woody Allen"
    },
       {
      "quote": "Build your own dreams, or someone else will hire you to build theirs.",
      "author": "Farrah Gray"
    },
       {
      "quote": "It is never too late to be what you might have been.",
      "author": "George Eliot"
    },
       {
      "quote": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
      "author": "Henry Ford"
    },
       {
      "quote": "You can't fall if you don't climb. But there's no joy in living your whole life on the ground.",
      "author": "Unknown"
    },
       {
      "quote": "Challenges are what make life interesting, and overcoming them is what makes life meaningful.",
      "author": "Joshua Marine"
    },
       {
      "quote": "If you want to lift yourself up, lift up someone else.",
      "author": "Booker T. Washington"
    },
       {
      "quote": "Formal education will make you a living; self-education will make you a fortune.",
      "author": "Jim Rohn"
    },
       {
      "quote": "Rarely have I seen a situation where doing less than the other guy is a good strategy.",
      "author": "Jimmy Spithill"
    },
       {
      "quote": "Your time is limited, so don't waste it living someone else's life.",
      "author": "Steve Jobs"
    },
       {
      "quote": "The best revenge is massive success.",
      "author": "Frank Sinatra"
    },
       {
      "quote": "My biggest motivation? Just to keep challenging myself. I see life almost like one long university education that I never had -- every day I'm learning something new.",
      "author": "Richard Branson"
    },
       {
      "quote": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      "author": "Maya Angelou"
    },
       {
      "quote": "The two most important days in your life are the day you are born and the day you find out why.",
      "author": "Mark Twain"
    },
       {
      "quote": "Whatever you can do, or dream you can, begin it. Boldness has genius, power, and magic in it.",
      "author": "Johann Wolfgang von Goethe"
    },
       {
      "quote": "Life shrinks or expands in proportion to one's courage.",
      "author": "Anais Nin"
    },
       {
      "quote": "There is only one way to avoid criticism: Do nothing, say nothing, and be nothing.",
      "author": "Aristotle"
    },
       {
      "quote": "Do what you can, where you are, with what you have.",
      "author": "Teddy Roosevelt"
    },
       {
      "quote": "Everything you've ever wanted is on the other side of fear.",
      "author": "George Addair"
    },
       {
      "quote": "Fall seven times and stand up eight.",
      "author": "Japanese proverb"
    },
       {
      "quote": "Two roads diverged in a wood, and I, I took the one less traveled by, and that has made all the difference.",
      "author": "Robert Frost"
    },
       {
      "quote": "I am not a product of my circumstances. I am a product of my decisions.",
      "author": "Stephen Covey"
    },
       {
      "quote": "It's hard to do a really good job on anything you don't think about in the shower.",
      "author": "Paul Graham"
    }, 
       {
      "quote": "What's money? A man is a success if he gets up in the morning and goes to bed at night, and in between does what he wants to do.",
      "author": "Bob Dylan"
    },
       {
      "quote": "A person who never made a mistake never tried anything new.",
      "author": "Albert Einstein"
    }, 
       {
      "quote": "The person who says it cannot be done should not interrupt the person who is doing it.",
      "author": "Chinese proverb"
    },
       {
      "quote": "You miss 100 percent of the shots you don't take.",
      "author": "Wayne Gretzky"
    },
       {
      "quote": "It always seems impossible until it's done.",
      "author": "Nelson Mandela"
    },
       {
      "quote": "It does not matter how slowly you go as long as you do not stop.",
      "author": "Confucius"
    },
       {
      "quote": "If you do what you've always done, you'll get what you've always gotten.",
      "author": "Tony Robbins"
    },                
       {
      "quote": "Success is walking from failure to failure with no loss of enthusiasm.",
      "author": "Winston Churchill"
    },
       {
      "quote": "You may be disappointed if you fail, but you are doomed if you don't try.",
      "author": "Beverly Sills"
    },
       {
      "quote": "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
      "author": "Booker T. Washington"
    },
       {
      "quote": "Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them.",
      "author": "Vaibhav Shah"
    },                
       {
      "quote": "Remember, no one can make you feel inferior without your consent.",
      "author": "Eleanor Roosevelt"
    },                
       {
      "quote": "The question isn't who is going to let me; it's who is going to stop me.",
      "author": "Ayn Rand"
    },
       {
      "quote": "The only way to do great work is to love what you do.",
      "author": "Steve Jobs"
    },
       {
      "quote": "Timing, perseverance, and 10 years of trying will eventually make you look like an overnight success.",
      "author": "Biz Stone"
    },
       {
      "quote": "Nothing is impossible, the word itself says “I’m possible”!",
      "author": "Audrey Hepburn"
    },
       {
      "quote": "Whether you think you can or you think you can’t, you’re right.",
      "author": "Henry Ford"
    },
       {
      "quote": "Perfection is not attainable, but if we chase perfection we can catch excellence.",
      "author": "Vince Lombardi"
    },
       {
      "quote": "Life is 10 percent what happens to me and 90 percent of how I react to it.",
      "author": "Charles Swindoll"
    },
       {
      "quote": "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
      "author": "Oprah Winfrey"
    },
       {
      "quote": "None of us is as smart as all of us.",
      "author": "Ken Blanchard"
    },
       {
      "quote": "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.",
      "author": "Jimmy Dean"
    },
       {
      "quote": "Believe you can and you’re halfway there.",
      "author": "Theodore Roosevelt"
    },
       {
      "quote": "To handle yourself, use your head; to handle others, use your heart.",
      "author": "Eleanor Roosevelt"
    },
       {
      "quote": "Too many of us are not living our dreams because we are living our fears.",
      "author": "Les Brown"
    },
       {
      "quote": "Alone, we can do so little; together we can do so much.",
      "author": "Helen Keller"
    },
       {
      "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
      "author": "Napoleon Hill"
    },
       {
      "quote": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
      "author": "Mark Twain"
    },
       {
      "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      "author": "Michael Jordan"
    },
       {
      "quote": "Strive not to be a success, but rather to be of value.",
      "author": "Albert Einstein"
    },
       {
      "quote": "I am not a product of my circumstances. I am a product of my decisions.",
      "author": "Stephen Covey"
    },
       {
      "quote": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
      "author": "Henry Ford"
    },
       {
      "quote": "The most common way people give up their power is by thinking they don’t have any.",
      "author": "Alice Walker"
    },
       {
      "quote": "Teamwork is the ability to work together toward a common vision, the ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.",
      "author": "Andrew Carnegie"
    },
       {
      "quote": "Don’t judge each day by the harvest you reap but by the seeds that you plant.",
      "author": "Robert Louis Stevenson"
    }, 
       {
      "quote": "The real opportunity for success lies within the person and not in the job.",
      "author": "Zig Ziglar"
    },
       {
      "quote": "Change your thoughts and you change your world.",
      "author": "Norman Vincent Peale"
    }, 
    { "quote": "Imagination is not a luxury, it's a necessity for creating a better world.", "author": "Little B." },
{ "quote": "Your imagination is the key to unlocking doors that lead to success.", "author": "reImagine" },
{ "quote": "Imagination is the fuel that drives creativity.", "author": "Little B." },
{ "quote": "The only limit to your imagination is the limit you set for yourself.", "author": "reImagine" },
{ "quote": "Imagination is the bridge between what is and what could be.", "author": "Little B." },
{ "quote": "Imagination is the canvas where reality is painted.", "author": "reImagine" },
{ "quote": "Imagination is the foundation on which innovation is built.", "author": "Little B." },
{ "quote": "With imagination, there are no boundaries, only possibilities.", "author": "reImagine" },
{ "quote": "Imagination is the spark that ignites the fire of change.", "author": "Little B." },
{ "quote": "Your imagination can take you places you never thought possible.", "author": "reImagine" },
{ "quote": "Imagination is the voice of our dreams.", "author": "Little B." },
{ "quote": "The power of imagination is the power to create a better future.", "author": "reImagine" },
{ "quote": "Imagination is the light that guides us through the darkness.", "author": "Little B." },
{ "quote": "The true magic of life lies in the power of our imagination.", "author": "reImagine" },
{ "quote": "Imagination is the seed from which greatness grows.", "author": "Little B." },
{ "quote": "Without imagination, we are but mere mortals.", "author": "reImagine" },
{ "quote": "The greatest achievements of humanity were born out of the wildest imaginations.", "author": "Little B." },
{ "quote": "Imagination is the doorway to infinite possibility.", "author": "reImagine" },
{ "quote": "Our imagination defines our reality.", "author": "Little B." },
{ "quote": "Imagination is the key that unlocks the door to a better tomorrow.", "author": "reImagine" },
       {
      "quote": "There is no royal road to anything. One thing at a time, all things in succession. That which grows fast, withers as rapidly. That which grows slowly, endures.",
      "author": "Josiah Gilbert Holland"
    },
       {
      "quote": "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",
      "author": "William James"
    },
       {
      "quote": "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
      "author": "Dalai Lama"
    },
       {
      "quote": "You can’t use up creativity. The more you use, the more you have.",
      "author": "Maya Angelou"
    },
       {
      "quote": "I have learned over the years that when one’s mind is made up, this diminishes fear.",
      "author": "Rosa Parks"
    },
       {
      "quote": "I would rather die of passion than of boredom.",
      "author": "Vincent van Gogh"
    },
       {
      "quote": "A truly rich man is one whose children run into his arms when his hands are empty.",
      "author": "Unknown"
    },
       {
      "quote": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
      "author": "Leonardo da Vinci"
    },
       {
      "quote": "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
      "author": "Erma Bombeck"
    },
       {
      "quote": "The quickest way to double your money is to fold it over and put it back in your pocket.",
      "author": "Will Rogers"
    },       
       {
      "quote": "Certain things catch your eye, but pursue only those that capture the heart.",
      "author": "Ancient Indian Proverb"
    },
       {
      "quote": "When I hear somebody sigh, ‘Life is hard,’ I am always tempted to ask, ‘Compared to what?’",
      "author": "Sydney Harris"
    },
       {
      "quote": "Everything has beauty, but not everyone can see.",
      "author": "Confucius"
    },
       {
      "quote": "Nurture your mind with great thoughts. To believe in the heroic makes heroes.",
      "author": "Benjamin Disraeli"
    },
       {
      "quote": "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down “happy”. They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
      "author": "John Lennon"
    },
       {
      "quote": "The only person you are destined to become is the person you decide to be.",
      "author": "Ralph Waldo Emerson"
    },
       {
      "quote": "We can’t help everyone, but everyone can help someone.",
      "author": "Ronald Reagan"
    },
       {
      "quote": "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
      "author": "Plato"
    },
       {
      "quote": "Nothing will work unless you do.",
      "author": "Maya Angelou"
    },
       {
      "quote": "I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
      "author": "Mother Teresa"
    },
       {
      "quote": "What we achieve inwardly will change outer reality.",
      "author": "Plutarch"
    }
     ],            
      
    // Finished Background Collection      
    colors = [...backgrounds],  
      
    // Random number Constructor
    // Generate a random number within a provided
    // range a stores the last value, so the next value
    // doesn't match the previous
    Random = function Random(max) {
      var prev, next;
      this.max = max;
      this.generate = function generate() {
        while(prev === next) 
          next = Math.floor(Math.random() * this.max);
        prev = next;
        return next;
      };
    },
      
    // Opens a new tweet window with the quote shown on 
    // screen and some other parameters.
    // https://dev.twitter.com/web/intents
    composeTweet = function composeTweet(text) {
      // My tweet object
      var tweet = {
        url: "https://twitter.com/intent/tweet?",
        via: "via=SpenserWellen&",
        hashtags: "hashtags=motivation,inspiration&",
        related: "related=@freecodecamp&",
        text: "text=" + '"' +  $('.quote__body').html().replace(/<br>|\s/g, '+'), //edit tweet here???
        author: '"' + escape("\n- " + $('.quote__cite').html().replace(/<br>|\s/g, '+') + "\n\n")
      };
      
      // Open the tweet window
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Examples
      return window.open(
        tweet.url + tweet.hashtags + tweet.related + tweet.text + tweet.author,
        "Tweet This Quote",
        "resizable,scrollbars,status,width=550px,height=420px"
      );
    },
      
    randomQuote = new Random(quotes.length),  // Random instance for quote
    randomColor = new Random(colors.length),  // Random instance for colors     
   // randomImage = new Random(images.legth),   // Random instance for images  
      
    // Main app function
    // Generates Quotes and app themes
    newQuote = function newQuote(e) {
      var
        // Get a quote and a theme
        quote = quotes[randomQuote.generate()],
        color = colors[randomColor.generate()],
          
        // Cache some DOM Elements
        $page = $('#page'),
        $button = $page.find('.new-quote'),
        $quote = $page.find('.quote'),
        $quoteFooter = $quote.find('.quote__footer'),
        $footerLinks = $('.page-footer a'),
          
        // Test if the quote has an author 
        hasAuthor = !!quote.author;
      
      // Replace the old quote with a new one
      $quote
        .find('.quote__body')
        .html( quote.quote );      
      
      // Change  the theme
      $page.css('background-image', color);
      //$page.css('background-color', color);
      $button.css('color', color);
      $footerLinks.css('color', color);
      
      // Some quotes have author
      // others not
      if ( hasAuthor ) {
        // Put the text and
        // show the footer
        $quoteFooter
          .find('.quote__cite')
          .text( '– ' + quote.author + ' –')
          .html( quote.author )
          .end()
          .show();      
        
      } else {
        // hide the footer
        $quoteFooter.hide()
      }

    },
    
    // Buttons functionality
    registerHandlers = function registerHandlers() {
      $(document)
        .on('click', '.new-quote', newQuote)
        .on('click', '.tweet', composeTweet);
    },
      
    // Initialization using IIFE
    init = function init(){
      registerHandlers();
      newQuote();
    }(); // <- look at this!
  
})();
