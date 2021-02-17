
window.addEventListener("load", function () {
    var artyom = new Artyom();

        artyom.addCommands({
          indexes: ["Hallo", "Guten Morgen", "Guten Tag"],
          action: function () {
            const answer =
              'Hey, wie geht es dir heute?';
              document.getElementById("answer").innerHTML = answer;
        artyom.say(answer);
}
})
artyom.addCommands({
  indexes: ["Was habe ich heute noch zu tun"],
  action: function () {
    const answer =
      'Du hast deine Aufgaben für heute bereits erledigt.';
      document.getElementById("answer").innerHTML = answer;
artyom.say(answer);
}
});
/*artyom.addCommands({
  indexes: ["Link für Interface Design"],
  action: function () {
    const answer =
      '<a href="https://app.alfaview.com/#/join/hochschule-furtwangen-furtwangen-university/caadd74b-9b3a-46a8-9ad3-a6589aff15a5/09eaeaa2-4265-4346-8a4a-00940ad0051b">Alfaview DM-17</a>';
      document.getElementById("answer").innerHTML = answer;
artyom.say(answer);
}
}); */
artyom.when("NOT_COMMAND_MATCHED", function(){
  const answer =
    'Das habe ich leider nicht verstanden. Kannst du dich bitte wiederholen?';
    document.getElementById("answer").innerHTML = answer;
artyom.say(answer);
});

artyom.addCommands({
  indexes: ["Zeige meine Termine für diese Woche an" , "Zeige meine Termine für diesen Monat an"],
  action: function () {
    const answer =
      'Hier wird dein Terminkalender angezeigt.';
      document.getElementById("answer").innerHTML = answer;
      artyom.say(answer);
    const image = "<img src=image.JPG></img>"
document.getElementById("showImage").innerHTML = image;
}
});
artyom.addCommands({
  indexes: ["Danke"],
  action: function () {
    const answer =
      'Kein Problem.';
      document.getElementById("answer").innerHTML = answer;
artyom.say(answer);
}
});
artyom.addCommands({
  indexes: ["Tschüss", "Ciao", "Bis bald"],
  action: function () {
    const answer =
      'Auf Wiedersehen! Schönen Tag noch.';
      document.getElementById("answer").innerHTML = answer;
artyom.say(answer);
}
});
artyom.addCommands({
  indexes: ["Was habe ich diese Woche noch für Abgaben"],
  action: function () {
    const answer =
      'Die Abgabe in Typografie steht noch aus.';
      document.getElementById("answer").innerHTML = answer;
artyom.say(answer);
}
});
artyom.addCommands({
  indexes: ["Wann ist die nächste Veranstaltung"],
  action: function () {
    const answer =
      'Um 9 Uhr 45 hast du eine Vorlesung in Interface Design.';
      document.getElementById("answer").innerHTML = answer;
artyom.say(answer);
}
});
artyom.addCommands({
  indexes: ["Welche Aufgaben sind heute prioritär"],
  action: function () {
    const answer =
      'Heute solltest du dich mit Interface Design beschäftigen.';
      document.getElementById("answer").innerHTML = answer;
artyom.say(answer);
}
});
artyom.addCommands({
    //The smart property of the command needs to be true
    smart:true,
    indexes: ["In welchem Raum findet * statt"],
    action: function(i, wildcard){
        // Speak alterable value
        const answer =
           wildcard + 'findet im Raum DM-18 statt.';
        artyom.say(answer, wildcard);
        document.getElementById("answer").innerHTML = answer, wildcard;
    }
});
artyom.addCommands({
    //The smart property of the command needs to be true
    smart:true,
    indexes: ["Wie lange habe ich für * noch Zeit"],
    action: function(i, wildcard){
        // Speak alterable value
        const answer =
          'Du hast für' + wildcard + 'noch 2 Tage Zeit.';
        artyom.say(answer, wildcard);
        document.getElementById("answer").innerHTML = answer, wildcard;
    }
});

artyom.addCommands({
    //The smart property of the command needs to be true
    smart:true,
    indexes: ["Wiederhole *"],
    action: function(i, wildcard){
        // Speak alterable value
        artyom.say(wildcard);
        document.getElementById("answer").innerHTML = wildcard;
    }
});

artyom.addCommands({
    //The smart property of the command needs to be true
    smart:true,
    indexes: ["Lies die Mail von * vor"],
    action: function(i, wildcard){
        // Speak alterable value
        const answer =
          'Mail von' + wildcard + 'wird vorgelesen.';
        artyom.say(answer, wildcard);
        document.getElementById("answer").innerHTML = answer, wildcard;
    }
});
artyom.addCommands({
    //The smart property of the command needs to be true
    smart:true,
    indexes: ["Bis wann muss ich die Aufgabe in * abgeben"],
    action: function(i, wildcard){
        // Speak alterable value
        const answer =
          'Bis zum nächsten Mittwoch musst du die Aufgabe in' + wildcard + 'abgeben';
        artyom.say(answer, wildcard);
        document.getElementById("answer").innerHTML = answer, wildcard;
    }
});

artyom.addCommands({
    //The smart property of the command needs to be true
    smart:true,
    indexes: ["Erstelle Aufgabe *"],
    action: function(i, wildcard){
        // Speak alterable value
        const answer =
          'Aufgabe' + wildcard + 'wurde erstellt.';
        artyom.say(answer, wildcard);
        document.getElementById("answer").innerHTML = answer, wildcard;
    }
});

    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
    const answer =
      'Willkommen zu Tanins Sprachassistenten. Kann ich dir heute behilflich sein?';
    artyom.say(answer);
    artyom.redirectRecognizedTextOutput(function (recognized, isFinal) {
      if (isFinal) {
      } else {
        console.log(recognized);
      }
    });

});
