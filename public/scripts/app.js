console.log('app.js connected');

let editorOpen = false;

history.scrollRestoration = "manual";


/*Displays Book (used at initial load and after one has been added to the database)*/
const render = (book) => {
  let partOfSeries = " ";
  let keywordList = "";
  let reasonList = "";
  if (book.isPartofSeries) {
    partOfSeries = " ";
  } else {
    partOfSeries = " not ";
  }
  /* Sets up dropdown menus */

  for (let j = 0; j < book.keywords.length; j++) {
    keywordList += `<li>${book.keywords[j]}</li>`
  }

  for (let j = 0; j < book.reasonsForRecommendation.length; j++) {
    reasonList += `<li>${book.reasonsForRecommendation[j]}</li>`
  }
  return `
    <li class="book" id=${book._id}>
    <div class="bookHeader">
      <div class="bookTitleAndAuthor">
        <h2 class="title">${book.title}</h2> by <span class="author">${book.author}</span>
      </div>
      <div class="buttons">
        <i class="edit fas fa-pen-square"></i>
        <i class="delete fas fa-minus-square"></i>
        <i class="seeMore fas fa-caret-down"></i>
      </div>
    </div>


      <div class="dropdown">
        <h3>Summary:</h3>
        <p class="summary">
        ${book.summary}
        </p>
        <p>
          This book is${partOfSeries}part of a series.
        </p>
        <h3>Why You Should Read This:</h3>
        <ul class="reasons">
          ${reasonList}
        </ul>
        <h3>Keywords:</h3>
        <ul class="keywords">
          ${keywordList}
        </ul>
      </div>
    </li>
    `;
}

const formatPosting = (formName) => {
  let yesNoValue = false;
  //Takes in if yes or no was chosen in form.
  if ($(`#${formName}PartOfSeries:checked`).val()) yesNoValue = true;
  //Turns keyword string into array of Keywords
  let keywords = $(`#${formName}Keywords`).val().split(',');
  //Turns reasons string into array of resons
  let reasons = $(`#${formName}Reasons`).val().split(',');

  let title = $(`#${formName}Title`).val();
  let author = $(`#${formName}Author`).val();
  if (title == "") title = 'Untitled';
  if (author == "") author = "Author Unknown";

  let summary = $(`#${formName}Text`).val();
  if (!summary) summary = "None";


  return posting = {

    title: title,
    author: author,
    summary: summary,
    isPartofSeries: yesNoValue,
    keywords: keywords,
    reasonsForRecommendation: reasons
  };
}

/* Displays All Books */
$.ajax({
  method: 'GET',
  url: '/api/books',
  success: (response) => {
    console.log(response);
    for (let i = 0; i < response.length; i++) {
      $('.recommendedBooks').append(render(response[i]));
    }
  }
});

/* Adds a User Recommendation to the database*/
$('#addBook').on('submit', (e) => {
  let url = '/api/books';

  let posting = formatPosting('addBook');

  let queryString = `/api/books?title=${posting.title}&author=${posting.author}&summary=${posting.summary}isPartofSeries=${posting.isPartofSeries}&keywords=${posting.keywords}&reasonsForRecommendation=${posting.reasonsForRecommendation}`;
  $.ajax({
    method: 'POST',
    url: queryString,
    data: posting,
    success: () => {
      console.log('submitted');
      $('.recommendedBooks').append(render(posting));
    },
    error: (err) => {
      console.log(err);
    }
  });
});

/* Displays profile information */

$.ajax({
  method: 'GET',
  url: '/api/profile',
  success: (response) => {
    console.log(response);
    $('.profilePic').html(`
      <h1 class="name">${response.name}</h1>
      <img src='${response.image}'/>
      `);
    $('.profileInfo').html(`
      <li>${response.currentCity}</li>
      <li><a href='${response.personalSiteLink}'>Website</a></li>
      <li><a href='${response.portfolioSiteLink}'>Portfolio</a></li>
      `);
    for (let i = 0; i < response.socialMedia.length; i++) {
      $('.socialLinks').append(`
        <li>
        <a href='${response.socialMedia[i].link}'><i class="social fab fa-${response.socialMedia[i].platform}"></i></a>
        </li>
        `);
    }
    $('.socialLinks').append(`
        <li><a href='mailto:${response.email}'><i class="far fa-envelope"></i></a>
      `);
    for (let i = 0; i < response.wheelhouse.length; i++) {
      $('.wheelhouseItems').append(`<li>${response.wheelhouse[i]}</li>`)
    }
  },
  error: () => {
    console.log(err);
  }
});

/* Adds click listener to dropdown menus */
$(document).on('click', '.seeMore', function(e) {
  e.stopPropagation();
  console.log('clicked');
  //Toggles the nearest dropdown
  $(this).parents('.bookHeader').siblings('.dropdown').slideToggle();
});

/* Edits Book Information On Click*/

$(document).on('click', '.edit', function(e) {
  if (editorOpen == true) {
    return;
  }
  editorOpen = true;
  //targets the nearest dropdown
  let currentBook = $(this).parents('.book');
  let currentDropdown = currentBook.find('.dropdown');

  let title = currentBook.find('.title').html();
  let author = currentBook.find('.author').html();
  let summary = currentBook.find('.summary').html();
  console.log(summary)

  let keywordElms = currentBook.find('.keywords').children();
  console.log(keywordElms);
  let reasonElms = currentBook.find('.reasons').children();

  let keywords = "";
  let reasons = "";
  for (let i = 0; i < keywordElms.length; i++) {
    let keyword = ($(keywordElms[i]).html());
    if (i == keywordElms.length - 1) {
      keywords += keyword;
    } else {
      keywords += keyword + ', ';
    }
  }

  for (let i = 0; i < reasonElms.length; i++) {
    let reason = ($(reasonElms[i]).html());
    if (i == reasonElms.length - 1) {
      reasons += reason;
    } else {
      reasons += reason + ', ';
    }
  }
  currentBook.html(`
    <form id="editor">
      <input id="editorTitle" value="${title}" name="title" type="text" />
      <input id="editorAuthor" value="${author}" name="author" type="text" />

      <textarea id="editorText" name="summary">${summary}</textarea>


        <div class="yesNo">

          <label for="isPart">Is this book part of a series?</label>
          <input id="editorPartOfSeries" type="checkbox" name="isPart" />

        </div>

      <textarea id="editorKeywords" name="keywords">${keywords}</textarea>
      <textarea id="editorReasons" name="reasonsForRecommendation">${reasons}</textarea>

      <input id="submit" type="submit" value="submit"/>
      </form>
    `);

});

$(document).on('submit', '#editor', (e) => {
    e.preventDefault();
    editorOpen = false;
  let currentBook = $('#editor').parents('.book');
  let editedId = currentBook.attr('id');
  let posting = formatPosting('editor');
  posting._id = editedId;

  let queryString = `/api/books/${editedId}`;

  $.ajax({
    method: 'PUT',
    url: queryString,
    data: posting,
    success: () => {
      $(`#editor`).parents('.book').remove();
      $('.recommendedBooks').append(render(posting));
    },
    error: (err) => {
      console.log(err);
    }
  });
});

$(document).on('click', '.delete', (e) => {
    e.preventDefault();
  console.log('clicked');

  let deletedId = $(e.target).parents('.book').attr('id');
  console.log(deletedId);

  let queryString = `/api/books/${deletedId}`;
  $.ajax({
    method: 'DELETE',
    url: queryString,
    success: () => {
      $(`#${deletedId}`).remove();
    },
    error: (err) => {
      console.log(err);
    }
  });
});
