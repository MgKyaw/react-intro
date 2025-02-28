// const h1 = <h1>Hello world</h1>;

// // JSX Element
// <p>Hello World</p>

// const myArticle = <article></article>;

// const p1 = <p id="large">foo</p>;
// const p2 = <p id="small">bar</p>;

// const myDiv = (<div><h1>Hello world</h1></div>);

// const blog = (
//     <div>
//       <img src="pics/192940u73.jpg" />
//       <h1>
//         Welcome to Dan's Blog!
//       </h1>
//       <article>
//         Wow I had the tastiest sandwich today. I <strong>literally</strong> almost freaked out.
//       </article>
//     </div>
//   );

// import React from 'react';
// import { createRoot } from 'react-dom/client';

// // Copy code here:
// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<h1>Hello world</h1>);    
     
// import React from 'react';
// import { createRoot } from 'react-dom/client';

// // Write code here:
// const container = document.getElementById('container');
// const root = createRoot(container);
// root.render(<h1>Hello world</h1>);

// import React from 'react';
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container);
// // Write code here:
// const myList = (
//     <ul>
//       <li>a</li>
//       <li>b</li>
//       <li>c</li>
//     </ul>
//     );

// root.render(myList);

// import React from 'react';
// import { createRoot } from 'react-dom/client'

// const container = document.getElementById('app');
// const root = createRoot(container);
// // Write code here:
// const myDiv = <div className="big">I AM A BIG DIV</div>;

// root.render(myDiv);

// const profile = (
//     <div>
//       <h1>John Smith</h1>
//       <img src="images/john.png" />
//       <article>
//         My name is John Smith.
//         <br />
//         I am a software developer.
//         <br />
//         I specialize in creating React applications.
//       </article>
//     </div>
//   );

// import React from 'react';
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container);
// // Write code here:
// // root.render(<h1>2 + 3</h1>); // output => 2 + 3
// root.render(<h1>{2 + 3}</h1>);  // output => 5

// import React from 'react';
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container);
// // Write code here:
// const math = <h1>2 + 3 = {2 + 3}</h1>;
// root.render(math);

// import React from 'react';
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container);

// const theBestString = 'This text was accessed through a javascript variable';

// root.render(<h1>{theBestString}</h1>);

// import React from 'react';
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container);
// const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// // Declare new variable here:
// const gooseImg = <img src={goose} />;
// root.render(gooseImg);

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty"
        onClick = {makeDoggy} />
);

root.render(kitty);
