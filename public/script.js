$('#submit').on('click', function (event) {
  //create new object for new profile
  //this will be added to the friends array in friends.js
  // event.preventDefault();
  var newProfile = { scores: [] };
  newProfile.name = $('#name').val();
  newProfile.photo = $('#photo').val();
  newProfile.scores.push($('#q1').val());
  newProfile.scores.push($('#q2').val());
  newProfile.scores.push($('#q3').val());
  newProfile.scores.push($('#q4').val());
  newProfile.scores.push($('#q5').val());
  newProfile.scores.push($('#q6').val());
  newProfile.scores.push($('#q7').val());
  newProfile.scores.push($('#q8').val());
  newProfile.scores.push($('#q9').val());
  newProfile.scores.push($('#q10').val());
  if (newProfile.name) {
    $.ajax('/api/friendslist', {
      method: "post",
      type: "json",
      data: newProfile
    }).then(function (bestMatch) {
      // add html for matched person
      $('#modalMatchImage').html("");
      $('#modalMatchName').html("");
      $('#modalMatchImage').append('<img src="'+ bestMatch.photo + '" alt="' + bestMatch.name + '">')
      $('#modalMatchName').append(bestMatch.name);
      $('#matchModal').modal('show');
    });
  } else {
    alert('Please add your name');
  }

});