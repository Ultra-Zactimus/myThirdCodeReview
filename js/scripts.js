function mrRoboto() {

  let storing = [$("input#translate").val()];
  let converting = storing.toString();
  let robofying = converting.split("");
  let kotobaArray = ['0', 'beep', 'boop', "Won't you be my neighbor?", 4, 5];

  for (let i = 0; i < robofying.length; i++) {

    if (robofying[i].includes(9)) {
      kotobaArray.push(6, 7, 8, 9);
      let roboKoto = kotobaArray.join(", ");
      return alert(roboKoto);

    } else {

      for (let i = 0; i < robofying.length; i++) {

        if (robofying[i].includes(8)) {
          kotobaArray.push(6, 7, 8);
          let roboKoto = kotobaArray.join(", ");
          return alert(roboKoto);

        } else {

          for (let i = 0; i < robofying.length; i++) {

            if (robofying[i].includes(7)) {
              kotobaArray.push(6, 7);
              let roboKoto = kotobaArray.join(", ");
              return alert(roboKoto);

            } else {

              for (let i = 0; i < robofying.length; i++) {

                if (robofying[i].includes(6)) {
                  kotobaArray.push(6);
                  let roboKoto = kotobaArray.join(", ");
                  return alert(roboKoto);

                } else {

                  for (let i = 0; i < robofying.length; i++) {

                    if (robofying[i].includes(5)) {
                      let roboKoto = kotobaArray.join(", ");
                      return alert(roboKoto);

                    } else {

                      for (let i = 0; i < robofying.length; i++) {

                        if (robofying[i].includes(4)) {
                          return alert(kotobaArray[4]);

                        } else {

                          for (let i = 0; i < robofying.length; i++) {

                            if (robofying[i].includes(3)) {
                              return alert(kotobaArray[3]);

                            } else {

                              for (let i = 0; i < robofying.length; i++) {

                                if (robofying[i].includes(2)) {
                                  return alert(kotobaArray[2]);

                                } else {

                                  for (let i = 0; i < robofying.length; i++) {

                                    if (robofying[i].includes(1)) {
                                      return alert(kotobaArray[1]);

                                    } else {

                                      for (let i = 0; i < robofying.length; i++) {

                                        if (robofying[i].includes(0)) {
                                          return alert(kotobaArray[0]);

                                        } else {

                                          return alert("Mr. Robogers: \"You have entered an invalid Input! BEEP! BOOP!\nONLY UNDERSTAND NUMBERS!\n TrY aGa1n N3iGhBoR! \"");

                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }

                        }
                      }

                    }

                  }
                }
              }
            }
          }
        }
      }
    }
  }
}


                function resetInput() {
                  robofying.reset();
                }


                $(document).ready(function() {

                  $("form#roboNum").submit(function(event) {

                    mrRoboto();
                    resetInput();

                    event.preventDefault();

                  });

                });
