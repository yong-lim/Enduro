$(function() {
  $('.form-control').focus(formFocus);
});

function formFocus() {
  $('#alert-field')
    .removeClass()
    .addClass('hidden');
}

function postEnduroMarch23(e) {
  e.preventDefault();

  console.log("in postEnduroMarch23");
  console.log("Team:", e.target['team'].value);
  console.log("raceclass:", e.target['raceclass'].value);
  console.log("phone1:", e.target['phone1'].value);
  console.log("phone2:", e.target['phone2'].value);
  console.log("emergency1:", e.target['emergency1'].value);
  console.log("emergency2:", e.target['emergency2'].value);
  console.log("e.hill1:", e.target[name='hill1'].value);
  console.log("e.hill2:", e.target[name='hill2'].value);
  console.log("e.enduro1:", e.target[name='enduro1'].value);
  console.log("e.enduro2:", e.target[name='enduro2'].value);
  
  const POST_URL = 'https://script.google.com/macros/s/AKfycbw8dXqyJYlhqy7z403yd8GmIzQz2Y__yyzRSZ_47JgJJOj36rxODMxydLWxBuqPFHab/exec'
  const postRequest = {
    team       : e.target['team'].value,
    raceclass  : e.target['raceclass'].value,
    name1      : e.target['name1'].value,
    name2      : e.target['name2'].value,
    phone1     : e.target['phone1'].value,
    phone2     : e.target['phone2'].value,
    emergency1 : e.target['emergency1'].value,
    emergency2 : e.target['emergency2'].value,
    hill1      : e.target[name='hill1'].value,
    hill2      : e.target[name='hill2'].value,
    enduro1    : e.target[name='enduro1'].value,
    enduro2    : e.target[name='enduro2'].value
  };

  if(POST_URL) {
    $.post(POST_URL, JSON.stringify(postRequest))
      .then(res => {
        e.target.reset();
        $('#alert-field')
          .removeClass()
          .addClass(`alert alert-${res.code}`)
          .text(res.msg);
      });

    $('#alert-field')
      .removeClass()
      .html('<progress></progress>')
      .removeClass('hidden');
  } else {
    alert('You must set the POST_URL variable with your script ID');
  }
}

function changeSubject(e) {
  if(e.target.value === 'Other') {
    $('#subject-select').removeClass('col-xs-12')
      .addClass('col-xs-6');
    $('#hidden-other-subject').removeClass('hidden');
  } else {
    $('#subject-select').removeClass('col-xs-6')
      .addClass('col-xs-12');

    $('#hidden-other-subject').addClass('hidden');
  }
}





