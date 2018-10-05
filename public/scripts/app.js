console.log('app.js connected');

$('#addBook').on('submit', (e)=>{
  e.preventDefault();
  let url = '/api/books';
  let yesNoValue = false;
  //Takes in if yes or no was chosen in form.
  if($('#isPartOfSeries:checked').val()) yesNoValue = true;
  //Turns keyword string into array of Keywords
  let keywords = $('#addBookKeywords').val().split(',');
  //Turns reasons string into array of resons
  let reasons = $('#addBookReasons').val().split(',');



  let posting = {
    title: $('#addBookTitle').val(),
    author: $('#addBookAuthor').val(),
    summary: $('#addBookSummary').val(),
    isPartOfSeries: yesNoValue,
    keywords: keywords,
    reasonsForRecommendation: reasons
  };

  let queryString = `/api/books?title=${posting.title}&author=${posting.author}&summary=${posting.summary}isPartOfSeries=${posting.isPartOfSeries}&keywords=${posting.keywords}&reasonsForRecommendation=${posting.reasonsForRecommendation}`;
  $.ajax({
    method:'POST',
    url: queryString,
    data: queryString,
    success: ()=>{console.log('submitted')},
    error: (err)=>{console.log(err)}
  });
  console.log(queryString);
});
