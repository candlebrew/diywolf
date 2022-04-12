function offspringMarkingsCalculate() {
// MARKINGS
var rollDice = 0;

var mMarking1Color = document.getElementById("mMark1Col");
var mMarking1Shape = document.getElementById("mMark1Shp");
var mMarking2Color = document.getElementById("mMark2Col");
var mMarking2Shape = document.getElementById("mMark2Shp");
var mMarking3Color = document.getElementById("mMark3Col");
var mMarking3Shape = document.getElementById("mMark3Shp");
var mMarking4Color = document.getElementById("mMark4Col");
var mMarking4Shape = document.getElementById("mMark4Shp");
var mMarking5Color = document.getElementById("mMark5Col");
var mMarking5Shape = document.getElementById("mMark5Shp");
var mMarking6Color = document.getElementById("mMark6Col");
var mMarking6Shape = document.getElementById("mMark6Shp");
var mMarking7Color = document.getElementById("mMark7Col");
var mMarking7Shape = document.getElementById("mMark7Shp");
var mMarking8Color = document.getElementById("mMark8Col");
var mMarking8Shape = document.getElementById("mMark8Shp");
var mMarking9Color = document.getElementById("mMark9Col");
var mMarking9Shape = document.getElementById("mMark9Shp");
var mMarking10Color = document.getElementById("mMark10Col");
var mMarking10Shape = document.getElementById("mMark10Shp");
var fMarking1Color = document.getElementById("fMark1Col");
var fMarking1Shape = document.getElementById("fMark1Shp");
var fMarking2Color = document.getElementById("fMark2Col");
var fMarking2Shape = document.getElementById("fMark2Shp");
var fMarking3Color = document.getElementById("fMark3Col");
var fMarking3Shape = document.getElementById("fMark3Shp");
var fMarking4Color = document.getElementById("fMark4Col");
var fMarking4Shape = document.getElementById("fMark4Shp");
var fMarking5Color = document.getElementById("fMark5Col");
var fMarking5Shape = document.getElementById("fMark5Shp");
var fMarking6Color = document.getElementById("fMark6Col");
var fMarking6Shape = document.getElementById("fMark6Shp");
var fMarking7Color = document.getElementById("fMark7Col");
var fMarking7Shape = document.getElementById("fMark7Shp");
var fMarking8Color = document.getElementById("fMark8Col");
var fMarking8Shape = document.getElementById("fMark8Shp");
var fMarking9Color = document.getElementById("fMark9Col");
var fMarking9Shape = document.getElementById("fMark9Shp");
var fMarking10Color = document.getElementById("fMark10Col");
var fMarking10Shape = document.getElementById("fMark10Shp");

var mMark1 = document.getElementById("mMark1").checked;
if (mMark1 == true) {
    var mMark1Col = mMarking1Color.options[mMarking1Color.selectedIndex].value;
    var mMark1Shp = mMarking1Shape.options[mMarking1Shape.selectedIndex].value;
    var mMark1Op = document.getElementById("mMark1Op").value;
}
var mMark2 = document.getElementById("mMark2").checked;
if (mMark2 == true) {
var mMark2Col = mMarking2Color.options[mMarking2Color.selectedIndex].value;
var mMark2Shp = mMarking2Shape.options[mMarking2Shape.selectedIndex].value;
var mMark2Op = document.getElementById("mMark2Op").value;
}
var mMark3 = document.getElementById("mMark3").checked;
if (mMark3 == true) {
    var mMark3Col = mMarking3Color.options[mMarking3Color.selectedIndex].value;
    var mMark3Shp = mMarking3Shape.options[mMarking3Shape.selectedIndex].value;
    var mMark3Op = document.getElementById("mMark3Op").value;
}
var mMark4 = document.getElementById("mMark4").checked;
if (mMark4 == true) {
    var mMark4Col = mMarking4Color.options[mMarking4Color.selectedIndex].value;
    var mMark4Shp = mMarking4Shape.options[mMarking4Shape.selectedIndex].value;
    var mMark4Op = document.getElementById("mMark4Op").value;
}
var mMark5 = document.getElementById("mMark5").checked;
if (mMark5 == true) {
    var mMark5Col = mMarking5Color.options[mMarking5Color.selectedIndex].value;
    var mMark5Shp = mMarking5Shape.options[mMarking5Shape.selectedIndex].value;
    var mMark5Op = document.getElementById("mMark5Op").value;
}
var mMark6 = document.getElementById("mMark6").checked;
if (mMark6 == true) {
    var mMark6Col = mMarking6Color.options[mMarking6Color.selectedIndex].value;
    var mMark6Shp = mMarking6Shape.options[mMarking6Shape.selectedIndex].value;
    var mMark6Op = document.getElementById("mMark6Op").value;
}
var mMark7 = document.getElementById("mMark7").checked;
if (mMark7 == true) {
    var mMark7Col = mMarking7Color.options[mMarking7Color.selectedIndex].value;
    var mMark7Shp = mMarking7Shape.options[mMarking7Shape.selectedIndex].value;
    var mMark7Op = document.getElementById("mMark7Op").value;
}
var mMark8 = document.getElementById("mMark8").checked;
if (mMark8 == true) {
    var mMark8Col = mMarking8Color.options[mMarking8Color.selectedIndex].value;
    var mMark8Shp = mMarking8Shape.options[mMarking8Shape.selectedIndex].value;
    var mMark8Op = document.getElementById("mMark8Op").value;
}
var mMark9 = document.getElementById("mMark9").checked;
if (mMark9 == true) {
    var mMark9Col = mMarking9Color.options[mMarking9Color.selectedIndex].value;
    var mMark9Shp = mMarking9Shape.options[mMarking9Shape.selectedIndex].value;
    var mMark9Op = document.getElementById("mMark9Op").value;
}
var mMark10 = document.getElementById("mMark10").checked;
if (mMark10 == true) {
    var mMark10Col = mMarking10Color.options[mMarking10Color.selectedIndex].value;
    var mMark10Shp = mMarking10Shape.options[mMarking10Shape.selectedIndex].value;
    var mMark10Op = document.getElementById("mMark10Op").value;
}
var fMark1 = document.getElementById("fMark1").checked;
if (fMark1 == true) {
    var fMark1Col = fMarking1Color.options[fMarking1Color.selectedIndex].value;
    var fMark1Shp = fMarking1Shape.options[fMarking1Shape.selectedIndex].value;
    var fMark1Op = document.getElementById("fMark1Op").value;
}
var fMark2 = document.getElementById("fMark2").checked;
if (fMark2 == true) {
var fMark2Col = fMarking2Color.options[fMarking2Color.selectedIndex].value;
var fMark2Shp = fMarking2Shape.options[fMarking2Shape.selectedIndex].value;
var fMark2Op = document.getElementById("fMark2Op").value;
}
var fMark3 = document.getElementById("fMark3").checked;
if (fMark3 == true) {
    var fMark3Col = fMarking3Color.options[fMarking3Color.selectedIndex].value;
    var fMark3Shp = fMarking3Shape.options[fMarking3Shape.selectedIndex].value;
    var fMark3Op = document.getElementById("fMark3Op").value;
}
var fMark4 = document.getElementById("fMark4").checked;
if (fMark4 == true) {
    var fMark4Col = fMarking4Color.options[fMarking4Color.selectedIndex].value;
    var fMark4Shp = fMarking4Shape.options[fMarking4Shape.selectedIndex].value;
    var fMark4Op = document.getElementById("fMark4Op").value;
}
var fMark5 = document.getElementById("fMark5").checked;
if (fMark5 == true) {
    var fMark5Col = fMarking5Color.options[fMarking5Color.selectedIndex].value;
    var fMark5Shp = fMarking5Shape.options[fMarking5Shape.selectedIndex].value;
    var fMark5Op = document.getElementById("fMark5Op").value;
}
var fMark6 = document.getElementById("fMark6").checked;
if (fMark6 == true) {
    var fMark6Col = fMarking6Color.options[fMarking6Color.selectedIndex].value;
    var fMark6Shp = fMarking6Shape.options[fMarking6Shape.selectedIndex].value;
    var fMark6Op = document.getElementById("fMark6Op").value;
}
var fMark7 = document.getElementById("fMark7").checked;
if (fMark7 == true) {
    var fMark7Col = fMarking7Color.options[fMarking7Color.selectedIndex].value;
    var fMark7Shp = fMarking7Shape.options[fMarking7Shape.selectedIndex].value;
    var fMark7Op = document.getElementById("fMark7Op").value;
}
var fMark8 = document.getElementById("fMark8").checked;
if (fMark8 == true) {
    var fMark8Col = fMarking8Color.options[fMarking8Color.selectedIndex].value;
    var fMark8Shp = fMarking8Shape.options[fMarking8Shape.selectedIndex].value;
    var fMark8Op = document.getElementById("fMark8Op").value;
}
var fMark9 = document.getElementById("fMark9").checked;
if (fMark9 == true) {
    var fMark9Col = fMarking9Color.options[fMarking9Color.selectedIndex].value;
    var fMark9Shp = fMarking9Shape.options[fMarking9Shape.selectedIndex].value;
    var fMark9Op = document.getElementById("fMark9Op").value;
}
var fMark10 = document.getElementById("fMark10").checked;
if (fMark10 == true) {
    var fMark10Col = fMarking10Color.options[fMarking10Color.selectedIndex].value;
    var fMark10Shp = fMarking10Shape.options[fMarking10Shape.selectedIndex].value;
    var fMark10Op = document.getElementById("fMark10Op").value;
}

var mMarkingsTotal = [0, mMark1,mMark2,mMark3,mMark4,mMark5,mMark6,mMark7,mMark8,mMark9,mMark10];
var mColorTotal = [0, mMark1Col,mMark2Col,mMark3Col,mMark4Col,mMark5Col,mMark6Col,mMark7Col,mMark8Col,mMark9Col,mMark10Col];
var mShapeTotal = [0, mMark1Shp,mMark2Shp,mMark3Shp,mMark4Shp,mMark5Shp,mMark6Shp,mMark7Shp,mMark8Shp,mMark9Shp,mMark10Shp];
var mOpTotal = [0, mMark1Op,mMark2Op,mMark3Op,mMark4Op,mMark5Op,mMark6Op,mMark7Op,mMark8Op,mMark9Op,mMark10Op];
var fMarkingsTotal = [0, fMark1,fMark2,fMark3,fMark4,fMark5,fMark6,fMark7,fMark8,fMark9,fMark10];
var fColorTotal = [0, fMark1Col,fMark2Col,fMark3Col,fMark4Col,fMark5Col,fMark6Col,fMark7Col,fMark8Col,fMark9Col,fMark10Col];
var fShapeTotal = [0, fMark1Shp,fMark2Shp,fMark3Shp,fMark4Shp,fMark5Shp,fMark6Shp,fMark7Shp,fMark8Shp,fMark9Shp,fMark10Shp];
var fOpTotal = [0, fMark1Op,fMark2Op,fMark3Op,fMark4Op,fMark5Op,fMark6Op,fMark7Op,fMark8Op,fMark9Op,fMark10Op];

 
var len = 11;

for (i = 1; i < len; i++) {
    noMarking(i);
    if (mMarkingsTotal[i] == true || fMarkingsTotal[i] == true) {
        if (mMarkingsTotal[i] == true && fMarkingsTotal[i] == true) {
            rollDice = Math.floor(Math.random() * (10 - 1 + 1) + 1);
            if (rollDice <= 6) {
                rollDice = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                if (rollDice == 1) {
                    // USE FATHER'S MARKING
                    offspringMarking(i,mColorTotal[i],mShapeTotal[i],mOpTotal[i],fOpTotal[i]);
                } else {
                    // USE MOTHER'S MARKING
                    offspringMarking(i,fColorTotal[i],fShapeTotal[i],mOpTotal[i],fOpTotal[i]);
                }
            } else {
                // NO MARKING
                noMarking(i);
            }
        } else if (mMarkingsTotal[i] == true) {
            rollDice = Math.floor(Math.random() * (10 - 1 + 1) + 1);
            if (rollDice <= 6) {
                // USE FATHER'S MARKING
                offspringMarking(i,mColorTotal[i],mShapeTotal[i],mOpTotal[i],0);
            } else {
                // NO MARKING
                noMarking(i);
            }
        } else if (fMarkingsTotal[i] == true) {
            rollDice = Math.floor(Math.random() * (10 - 1 + 1) + 1);
            if (rollDice <= 6) {
                // USE MOTHER'S MARKING
                offspringMarking(i,fColorTotal[i],fShapeTotal[i],0,fOpTotal[i]);
            } else {
                // NO MARKING
                noMarking(i);
            }
        } else {
            alert("Undefined marking result (line XXX). Please alert developer.");
        }
    } else {
        // NO MARKING
        noMarking(i);
    }
}

}

function offspringMarking(slot,color,shape,maleO,femaleO) {
    var ColorsArray = [0, "auburn","beige","black","brown","cream","darkbrown","deira","dinar","doubloon","ducat","gray","honey","red","sepia","silver","sterling","tuff","white","yellow","zircon"];
    var ShapesArray = [0, "agouti","back","backedgepatch","backhalfpatch","backheavypatch","backpatch","backstripe","bellystripe","blanket","blanketticking","blaze","bottoms","butcher","cape","capeticking","carnage","cheekfluff","chest","cheststripe","cross","dilution","dorsal","eartips","elbowpatch","elbows","eyebrows","forehead","fullmask","fullrump","grizzle","halfcape","halfcapeticking","halfdorsal","halfmask","halfsaddle","halfsocks","halfstripe","headstripe","heavyhusky","highlights","husky","innerear","inuitunders","invertedagouti","invertedcross","irish","lighthusky","limbs","lowbottoms","mantle","marbledunders","mask","mediumhusky","merle","merlepatches","muzzle","muzzlepatch","neck","neckband","neckstripe","nosebridge","noseline","patchyunders","paws","predator","rump","rumpedge","rumppatch","rumpstripe","saddle","saddleticking","shaded","shepherd","shepherdheavy","shoulderpatch","shoulders","smoke","smudge","smudgeheavy","socks","spectacles","stainedlimbs","tailtip","tamaskanunders","throat","throatpatch","toes","trim","tuxedo","underbelly","underfur","unders","undersides","urajiro"];
    var markingID = "offspringMarking" + slot;
    
    var offspringMarking = document.getElementById(markingID);
    offspringMarking.src = "img/markings/" + ColorsArray[color] + ShapesArray[shape] + ".png";
    
    // OPACITY CALCULATED AND AFFECTED HERE
    var opac = 0;
    opac = Math.floor((Number(maleO) + Number(femaleO)) / 2);
    rollDice = Math.round(Math.random() * (10.5 - (-10.5) + 1) + (-10.5));
    opac = opac + rollDice;
    if (opac >= 101) {
        opac = 100;
    }
    opac = opac / 100;
    offspringMarking.style.opacity = opac;
}

function noMarking(slot) {
    var markingID = "offspringMarking" + slot;
    var offspringMarking = document.getElementById(markingID);
    offspringMarking.src = "img/blank.png";
    offspringMarking.style.opacity = 1;
}