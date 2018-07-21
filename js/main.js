let mail = [];

function mailClick() {
  this.addClass('Hiding');
}

function updateTextInputOne() {
  const r1 = $('.input-field-five').val();
  const r2 = r1.toString();
  const r3 = r2 - 20000;
  const r4 = r2 - -40000;
  $('#range-val-one').text('$' + r3);
  $('#range-val-oneb').text('$' + r4);
}

function updateTextInputTwo() {
  const r1 = $('.input-field-six').val();
  const r2 = r1.toString();
  const r3 = r2 - 20000;
  const r4 = r2 - -40000;
  $('#range-val-two').text('$' + r3);
  $('#range-val-twob').text('$' + r4);
}

function updateTextInputThree() {
  const r1 = $('.input-field-eleven').val();
  const r2 = r1.toString();
  const r3 = r2 - 20000;
  const r4 = r2 - -40000;
  $('#range-val-three').text('$' + r3);
  $('#range-val-threeb').text('$' + r4);
}

function updateRangeOne() {
  $('.input-field-five').val($('#range-val-one').text())
}

function updateRangeTwo() {
  $('.input-field-six').val($('#range-val-two').text())
}

function updateRangeThree() {
  $('.input-field-eleven').val($('#range-val-three').text())
}


function step1() {
  $('.two').removeClass('step');
  $('.one').addClass('step');
  mail.push($('.input-field-one').val());
  console.log(mail);
}

function step2() {
  $('.three').removeClass('step');
  $('.two').addClass('step');
  mail.push($('.input-field-two').val());
  console.log(mail);
  // console.log($('.input-field-two').val());
  // mailInfo.push($('.input-field-two').val());
}

function step3a() {
  $('.four').removeClass('step');
  $('.three').addClass('step');
  mail.push($('.input-field-three-a').text());
  console.log(mail);
  $('.input-field-three-a').addClass('active');
}

function step3b() {
  $('.four').removeClass('step');
  $('.three').addClass('step');
  mail.push($('.input-field-three-b').text());
  console.log(mail);
  $('.input-field-three-b').addClass('active');
}

function step4a() {
  $('.five').removeClass('step');
  $('.four').addClass('step');
  $('.input-field-four-a').addClass('active');
  mail.push($('.input-field-four-a').text());
  console.log(mail);
}

function step4b() {
  $('.five').removeClass('step');
  $('.four').addClass('step');
  // $('.input-field-four-b').addClass('active');
  mail.push($('.input-field-four-b').text());
  console.log(mail);
}

function step4c() {
  $('.five').removeClass('step');
  $('.four').addClass('step');
  $('.input-field-four-c').addClass('active');
  mail.push($('.input-field-four-c').text());
  console.log(mail);
}

function step4d() {
  $('.five').removeClass('step');
  $('.four').addClass('step');
  $('.input-field-four-d').addClass('active');
  mail.push($('.input-field-four-d').text());
  console.log(mail);
}

function step5() {
  $('.six').removeClass('step');
  $('.five').addClass('step');
  // console.log($('.input-field-five').val());
  mail.push($('.input-field-five').val());
  console.log(mail);
}

function step6() {
  $('.eleven').removeClass('step');
  $('.six').addClass('step');
  mail.push($('.input-field-six').val());
  // console.log($('.input-field-six').val());
  console.log(mail);
}

function step6p() {
  $('.seven').removeClass('step');
  $('.six').addClass('step');
  mail.push($('.input-field-six').val());
  // console.log($('.input-field-six').val());
  console.log(mail);
}

function step11() {
  $('.twelve').removeClass('step');
  $('.eleven').addClass('step');
  // console.log($('.input-field-eleven').val());
  mail.push($('.input-field-eleven').val());
  console.log(mail)
}

function step12() {
  $('.seven').removeClass('step');
  $('.twelve').addClass('step');
  // console.log($('.input-field-twelve').text());
  mail.push($('.input-field-twelve').val());
  console.log(mail)
}

function step7a() {
  $('.eight').removeClass('step');
  $('.seven').addClass('step');
  $('.input-field-seven-a').addClass('active');
  mail.push($('.input-field-seven-a').text());
  console.log(mail);
}

function step7b() {
  $('.eight').removeClass('step');
  $('.seven').addClass('step');
  $('.input-field-seven-b').addClass('active');
  mail.push($('.input-field-seven-b').text());
  console.log(mail);
}

function step7c() {
  $('.eight').removeClass('step');
  $('.seven').addClass('step');
  $('.input-field-seven-c').addClass('active');
  mail.push($('.input-field-seven-c').text());
  console.log(mail);
}

function step7d() {
  $('.eight').removeClass('step');
  $('.seven').addClass('step');
  $('.input-field-seven-d').addClass('active');
  mail.push($('.input-field-seven-d').text());
  console.log(mail);
}

function step7e() {
  $('.eight').removeClass('step');
  $('.seven').addClass('step');
  $('.input-field-seven-e').addClassss('active');
  mail.push($('.input-field-seven-e').text());
  console.log(mail);
}

function step8() {
  $('.nine').removeClass('step');
  $('.eight').addClass('step');
  mail.push($('.input-field-eight').val());
  console.log(mail);
}

function step9p() {
  $('.ten').removeClass('step');
  $('.nine').addClass('step');
  mail.push($('.input-field-nine').val());

  const name = $('.input-field-one').val();
  const state = $('.input-field-two').val();
  const renttype = $('.input-field-three-a.active').text() + $('.input-field-three-b.active').text();
  const proptype = $('.input-field-four-a.active').text() + $('.input-field-four-b.active').text() + $('.input-field-four-c.active').text() + $('.input-field-four-d.active').text();
  const reqmoney = $('.input-field-eleven').val();
  // const propzip = $('.input-field-twelve').val();
  const curloan = $('.input-field-five').val();
  const propval = $('.input-field-six').val();
  const credit = $('.input-field-seven-a.active').text() + $('.input-field-seven-b.active').text() + $('.input-field-seven-c.active').text() + $('.input-field-seven-d.active').text() + $('.input-field-seven-e.active').text();
  const email = $('.input-field-eight').val();
  const phone = $('.input-field-nine').val();

$.ajax({
  url: "../php/mailtest.php",
  type: "POST",
  data: {
    // name: mail[0],
    // state: mail[1],
    // renttype: mail[2],
    // proptype: mail[3],
    // curloan: mail[4],
    // propval: mail[5],
    // reqmoney: mail[6],
    // propzip: mail[7],
    // credit: mail[8],
    // email: mail[9],
    // phone: mail[10]
    name: name,
    state: state,
    renttype: renttype,
    proptype: proptype,
    curloan : curloan,
    propval: propval,
    reqmoney: reqmoney,
    // propzip: propzip,
    credit: credit,
    email: email,
    phone: phone
  },
  dataType: 'json'
  // success: function(data) {
    // alert('OK');
  // }
})
}

function step9r() {
  $('.ten').removeClass('step');
  $('.nine').addClass('step');
  mail.push($('.input-field-nine').val());

  // const email = {};

  //  email.name = $('.input-field-one').val();
  //  email.state = $('.input-field-two').val();
  //  email.renttype = $('.input-field-three-a.active').text() + $('.input-field-three-b.active').text();
  //  email.proptype = $('.input-field-four-a.active').text() + $('.input-field-four-b.active').text() + $('.input-field-four-c.active').text() + $('.input-field-four-d.active').text();
  //  email.curloan = $('.input-field-five').val();
  //  email.propval = $('.input-field-six').val();
  //  email.credit = $('.input-field-seven-a.active').text() + $('.input-field-seven-b.active').text() + $('.input-field-seven-c.active').text() + $('.input-field-seven-d.active').text() + $('.input-field-seven-e.active').text();
  //  email.reqmoney = $('.input-field-eleven').val();
  //  email.propzip = $('.input-field-twelve').val();
  //  email.email = $('.input-field-eight').val();
  //  email.phone = $('.input-field-nine').val();


  const name = $('.input-field-one').val();
  const state = $('.input-field-two').val();
  const renttype = $('.input-field-three-a.active').text() + $('.input-field-three-b.active').text();
  const proptype = $('.input-field-four-a.active').text() + $('.input-field-four-b.active').text() + $('.input-field-four-c.active').text() + $('.input-field-four-d.active').text();
  const curloan = $('.input-field-five').val();
  const propval = $('.input-field-six').val();
  const credit = $('.input-field-seven-a.active').text() + $('.input-field-seven-b.active').text() + $('.input-field-seven-c.active').text() + $('.input-field-seven-d.active').text() + $('.input-field-seven-e.active').text();
  const reqmoney = $('.input-field-eleven').val();
  const propzip = $('.input-field-twelve').val();
  const email = $('.input-field-eight').val();
  const phone = $('.input-field-nine').val();

  // $.ajax({
  //   const data = email,
  //   type: 'POST',
  //   async: true,
  //   url: '../php/mailtest.php',
  //   data: JSON.stringify(data),
  //   // data: {
  //   //   name: name,
  //   //   state: state,
  //   //   renttype: renttype,
  //   //   proptype: proptype,
  //   //   curloan : curloan,
  //   //   propval: propval,
  //   //   reqmoney: reqmoney,
  //   //   propzip: propzip,
  //   //   credit: credit,
  //   //   email: email,
  //   //   phone: phone
  //   // },
  //   datatype: 'json',
  //   cache: true,
  //   global: false,
  //   success: function(data) {
  //       if(data == 'success'){
  //           console.log(data);
  //       } else {
  //           $('.no-config').show();
  //           console.log(data);
  //       }

  //   }
  // })


$.ajax({
  url: "./mailtest.php",
  type: "POST",
  data: {
    // name: mail[0],
    // state: mail[1],
    // renttype: mail[2],
    // proptype: mail[3],
    // curloan: mail[4],
    // propval: mail[5],
    // reqmoney: mail[6],
    // propzip: mail[7],
    // credit: mail[8],
    // email: mail[9],
    // phone: mail[10]
    name: name,
    state: state,
    renttype: renttype,
    proptype: proptype,
    curloan : curloan,
    propval: propval,
    reqmoney: reqmoney,
    propzip: propzip,
    credit: credit,
    email: email,
    phone: phone
  },
  dataType: 'json'
  // success: function(data) {
    // alert('OK');
  // }
});
}
