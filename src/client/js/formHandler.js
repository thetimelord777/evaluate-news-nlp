

function handleSubmit(event) {


    let requestOptions;

    event.preventDefault()

    // check what text was put into the form field and create a form data for  the API call
    let formText = document.getElementById('name').value
    const result = document.getElementById('results');

    console.log(js.checkForName(formText));

    async function API_KEY () {
      let results =  await fetch('http://localhost:3000/callAPI',{ 
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({formText})
      })

      let x = await results.json(); 
      
      console.log("here");
      console.log(results, "\n", x);

      result.innerText = 
      `Subjectivity: ${x.subjectivity}
       Agreement: ${x.agreement}
       Irony: ${x.irony}
       multiple snippets:
       [1]: ${x.sentence_list[0].text}
       [2]: ${x.sentence_list[1].text}
       [3]: ${x.sentence_list[2].text}
       [4]: ${x.sentence_list[3].text}
       [5]: ${x.sentence_list[4].text}
       [6]: ${x.sentence_list[5].text}
       [7]: ${x.sentence_list[6].text}`;
       return x;
    }

    API_KEY();
   /* 
    //calls the api function to create and update the requestOptions var (data for the next api call)
    //then calls the meaningCloud api and processes the results.
    API_KEY().then(()=>{ const response = fetch(endPoint, requestOptions)
   .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => {return body;})
  .catch(error => console.log('error', error))

  const sendResult = async () => {
      const a = await response;
      console.log(a);
      result.innerText = 
      `Subjectivity: ${a.subjectivity}
       Agreement: ${a.agreement}
       Irony: ${a.irony}
       multiple snippets:
       [1]: ${a.sentence_list[0].text}
       [2]: ${a.sentence_list[1].text}
       [3]: ${a.sentence_list[2].text}
       [4]: ${a.sentence_list[3].text}
       [5]: ${a.sentence_list[4].text}
       [6]: ${a.sentence_list[5].text}
       [7]: ${a.sentence_list[6].text}`;
       return a;
  }

  sendResult();})*/
}


export { handleSubmit }

