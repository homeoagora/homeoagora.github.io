$(document).ready(function(){
 var params = {};

if (location.search) {
    var parts = location.search.substring(1).split('&');

    for (var i = 0; i < parts.length; i++) {
        var nv = parts[i].split('=');
        if (!nv[0]) continue;
        params[nv[0]] = nv[1] || true;
    }
}

 i18n.setLng(params.lang, function(t) { 
     $(".nav").i18n();
     $('.subtitulo').text($.t('app.title'));
     $('.descripcion').text($.t('app.made_in'));
     $('.descripcion1').text($.t('greywrap.description_1'));
     $('.descripcion2').text($.t('greywrap.description_2'));
     $('.descripcion3').text($.t('greywrap.description_3'));
     $('.descripcion4').text($.t('greywrap.description_4'));
     $('.about1').text($.t('about.about_description_1'));
     $('.about2').text($.t('about.about_description_2'));
     $('.about3').text($.t('about.about_description_3'));
     $('.interview').text($.t('about.interviewe_title'));
     $('.question1').text($.t('questions.question1'));
     $('.question2').text($.t('questions.question2'));
     $('.question3').text($.t('questions.question3'));
     $('.question4').text($.t('questions.question4'));
     $('.question5').text($.t('questions.question5'));
     $('.question6').text($.t('questions.question6'));
     $('.question7').text($.t('questions.question7'));
     $('.question8').text($.t('questions.question8'));
     $('.question9').text($.t('questions.question9'));
     $('.question10').text($.t('questions.question10'));
     $('.question11').text($.t('questions.question11'));
     $('.question12').text($.t('questions.question12'));
     $('.question13').text($.t('questions.question13'));
     $('.question14').text($.t('questions.question14'));
     $('.question15').text($.t('questions.question15'));
     $('.answer1').text($.t('answers.answer1'));
     $('.answer2').text($.t('answers.answer2'));
     $('.answer3').text($.t('answers.answer3'));
     $('.answer4').text($.t('answers.answer4'));
     $('.answer5').text($.t('answers.answer5'));
     $('.answer6').text($.t('answers.answer6'));
     $('.answer7').text($.t('answers.answer7'));
     $('.answer8').text($.t('answers.answer8'));
     $('.answer9').text($.t('answers.answer9'));
     $('.answer10').text($.t('answers.answer10'));
     $('.answer11').text($.t('answers.answer11'));
     $('.answer12').text($.t('answers.answer12'));
     $('.answer13').text($.t('answers.answer13'));
     $('.answer14').text($.t('answers.answer14'));
     $('.answer15').text($.t('answers.answer15'));
     
  });
 });