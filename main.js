console.log("coucou")
//selectioner les divs contenant les infos
const firstNameDiv = document.querySelector("#first-name");
const lastNameDiv = document.querySelector("#last-name");
const emailDiv = document.querySelector("#email");
const jobDiv = document.querySelector("#job");
//reccuperer l'imput du form
const input = document.querySelector("#search-input");

//chercher l'élément form
const form = document.querySelector("#search-form");
//mettre un listner sur ce form avec submit
form.addEventListener("submit", (event) => {
    // annuler le comportement par défaut du form
    event.preventDefault();
    //recuperer sur l'API avec email les infos que l'on veut display
    fetch(`https://person.clearbit.com/v1/people/email/${input.value}`, {
        headers: {
          Authorization: 'Bearer sk_ebac5f9cf33d3f89d0c17d0c895b42ba'
        }
      })
        .then(response => response.json())
        .then((data) => {
            console.dir(data)
            //injecter a l'interieur des divs les infos
            const firstName = data.name.givenName;
            const lastName = data.name.familyName;
            const email = data.email;
            const job = data.employment.title;
            firstNameDiv.innerText = firstName;
            lastNameDiv.innerText = lastName;
            emailDiv.innerText = email;
            jobDiv.innerText = job;
        });
});

