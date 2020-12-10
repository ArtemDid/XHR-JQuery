var isEditMode = false;

$("[name = 'Send']").click((e) => {
  const movieURL = `https://sv443.net/jokeapi/v2/joke/${$("[name = 'selectCategories']").val()}`;

  // $.get(movieURL, (data) => {
  //   if(isEditMode){
  //     $(".content").children('p').remove();
  //   }
  //   console.dir(data);
  //   console.dir(data.setup);
  //   isEditMode = true;
  //   if (data.setup) {
  //     $(".content").append(
  //       `<p><b>Setup: </b> ${data.setup}</p>
  //      <p><b>Delivery: </b> ${data.delivery}</p>`
  //     );
  //   }
  //   else {
  //     $(".content").append(
  //       `<p><b>Joke: </b> ${data.joke}</p>`
  //     );
  //   }
  // })



$.ajax({
    type: "GET",
    url: movieURL,
    success: (data)=> { 
      if(isEditMode){
        $(".content").children('p').remove();
      }
      console.dir(data);
      console.dir(data.setup);
      isEditMode = true;
      if (data.setup) {
        $(".content").append(
          `<p><b>Setup: </b> ${data.setup}</p>
         <p><b>Delivery: </b> ${data.delivery}</p>`
        );
      }
      else {
        $(".content").append(
          `<p><b>Joke: </b> ${data.joke}</p>`
        );
      }
     },
    dataType: "json"
});
})
