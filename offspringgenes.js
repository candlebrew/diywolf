function offspringCalculate() {
var mColor = document.getElementById("mColor");
var fColor = document.getElementById("fColor");
var mShade = document.getElementById("mShade");
var fShade = document.getElementById("fShade");
var mRarity = document.getElementById("mRarity");
var fRarity = document.getElementById("fRarity");

var mCol = mColor.options[mColor.selectedIndex].value;
var fCol = fColor.options[fColor.selectedIndex].value;
var mSh = mShade.options[mShade.selectedIndex].value;
var fSh = fShade.options[fShade.selectedIndex].value;
var mRar = mRarity.options[mRarity.selectedIndex].value;
var fRar = fRarity.options[fRarity.selectedIndex].value;

var oCol = 0;
var oSh = 0;
var oRar = 0;
var oBase = 0;
var oBaseKey = 0;

var rollDice = 0;

// Calculate offspring color
if (mCol == 1 && fCol == 1) {
// COOL + COOL
    oCol = 1;
} else if (mCol == 4 && fCol == 4) {
    oCol = 4;
} else if (mCol == 3 && fCol == 3) {
    oCol = 3;
} else if (mCol == 1 && fCol == 2 || mCol == 2 && fCol == 1) {
// COOL + MUTED
    rollDice = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if (rollDice <= 43) {
        oCol = 1;
    } else if (rollDice <= 93) {
        oCol = 2;
    } else {
        oCol = 3;
    }
} else if (mCol == 1 && fCol == 3 || mCol == 3 && fCol == 1) {
// COOL + MONO
    rollDice = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if (rollDice <= 47) {
        oCol = 1;
    } else {
        oCol = 3;
    }
} else if (mCol == 4 && fCol == 2 || mCol == 2 && fCol == 4) {
// MUTED + WARM
    rollDice = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if (rollDice <= 36) {
        oCol = 2;
    } else if (rollDice <= 66) {
        oCol = 3;
    } else {
        oCol = 4;
    }
} else if (mCol == 4 && fCol == 3 || mCol == 3 && fCol == 4) {
// MONO + WARM
    oCol = Math.floor(Math.random() * (3 - 1 + 1) + 1);
} else if (mCol == 2 && fCol == 2) {
// MUTED + MUTED
    rollDice = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
    if (rollDice <= 25) {
        oCol = 1;
    } else if (rollDice <= 75) {
        oCol = 3;
    } else if (rollDice <= 225) {
        oCol = 4;
    } else {
        oCol = 2;
    }
} else if (mCol == 1 && fCol == 4 || mCol == 4 && fCol == 1) {
// COOL + WARM
    rollDice = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if (rollDice <= 33) {
        oCol = 1;
    } else if (rollDice <= 55) {
        oCol = 2;
    } else if (rollDice <= 70) {
        oCol = 3;
    } else {
        oCol = 4;
    }
} else if (mCol == 2 && fCol == 3 || mCol == 3 && fCol == 2) {
// MUTED + MONO
    rollDice = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if (rollDice <= 48) {
        oCol = 2;
    } else {
        oCol = 3;
    }
} else {
    window.alert("Undefined color combination. Please window.alert developer. mCol =" + mCol + "fCol =" + fCol + "(offspringgenes:Line 181)");
    }

// Calculate offspring shade
if (mSh == 1 && fSh == 1) {
// LIGHT + LIGHT
    oSh = 1;
} else if (mSh == 3 && fSh == 3) {
// DARK + DARK
    oSh = 3;
} else if (mSh == 1 && fSh == 2 || mSh == 2 && fSh == 1) {
// LIGHT + MEDIUM
    oSh = Math.floor(Math.random() * (2 - 1 + 1) + 1);
} else if (mSh == 3 && fSh == 2 || mSh == 2 && fSh == 3) {
// MEDIUM + DARK
    oSh = Math.floor(Math.random() * (3 - 2 + 1) + 2);
} else if (mSh == 2 && fSh == 2) {
// MEDIUM + MEDIUM
    oSh = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    if (oSh >= 3) {
        oSh = oSh - 1;
    }
} else if (mSh == 1 && fSh == 3 || mSh == 3 && fSh == 1) {
// LIGHT + DARK
    rollDice = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    if (rollDice <= 3) {
        oSh = 1;
    } else if (rollDice <= 6) {
        oSh = 3;
    } else {
        oSh = 2;
    }
} else {
    window.alert("Undefined shade combination. Please window.alert developer. mSh =" + mSh + "fSh =" + fSh + "(offspringgenes:Line 129)");
    }

// Calculate offspring rarity
if (mRar == 1 && fRar == 1) {
// I + I
    oRar = 1;
} else if (mRar == 3 && fRar == 3) {
// III + III
// No stats available for this.
    rollDice = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if (rollDice <= 50) {
        oRar = 1;
    } else if (rollDice <= 90) {
        oRar = 2;
    } else {
        oRar = 3;
    }
} else if (mRar == 1 && fRar == 2 || mRar == 2 && fRar == 1) {
// I + II
    rollDice = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    if (rollDice >= 8) {
        oRar = 2;
    } else {
        oRar = 1;
    }
} else if (mRar == 1 && fRar == 3 || mRar == 3 && fRar == 1) {
// I + III
// No stats available for this.
    rollDice = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if (rollDice <= 74) {
        oRar = 1;
    } else if (rollDice <= 99) {
        oRar = 2;
    } else {
        oRar = 3;
    }
} else if (mRar == 2 && fRar == 3 || mRar == 3 && fRar == 2) {
// II + III
// No stats available for this.
    rollDice = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if (rollDice <= 49) {
        oRar = 1;
    } else if (rollDice <= 99) {
        oRar = 2;
    } else {
        oRar = 3;
    }
} else if (mRar == 2 && fRar == 2) {
// II + II
    oRar = Math.floor(Math.random() * (2 - 1 + 1) + 1);
} else {
    window.alert("Undefined rarity combination. Please window.alert developer. mRar =" + mRar + "fRar =" + fRar + "(offspringgenes:Line 181)");
    }

// Calculate offspring base
if (oCol == 1) {
    if (oRar == 3) {
        oBaseKey = 1;
    } else if (oRar == 2) {
        oBaseKey = 3;
        oBase = oBase + 27;
    } else if (oRar == 1) {
        oBaseKey = 2;
        oBase = oBase + 3;
    } else {
        window.alert("Undefined rarity and color combination (line 195). Please window.alert developer. Rarity =" + oRar + "Color=" + oCol + "mRar =" + mRar + "fRar =" + fRar);
    }
} else {
    if (oRar == 1) {
        oBaseKey = 4;
        oBase = oBase + 36;
        if (oCol == 3) {
            oBase = oBase + 12;
        } else if (oCol == 4) {
            oBase = oBase + 24;
        }
    } else if (oRar == 2) {
        oBaseKey = 5;
        oBase = oBase + 72;
        if (oCol == 3) {
            oBase = oBase + 15;
        } else if (oCol == 4) {
            oBase = oBase + 30;
        }
    } else if (oRar == 3) {
        oBaseKey = 2;
        oBase = oBase + 9;
        if (oCol == 3) {
            oBase = oBase + 6;
        } else if (oCol == 4) {
            oBase = oBase + 12;
        }
    } else {
        window.alert("Undefined rarity and color combination (line 223). Please window.alert developer. Rarity =" + oRar + "Color=" + oCol + "mRar =" + mRar + "fRar =" + fRar);
    }

}

rollDice = Math.floor(Math.random() * (oBaseKey - 1 + 1) + 1);

oBase = oBase + rollDice;

if (oCol != 1 && oSh != 1) {
    oBase = oBase + oBaseKey;
    if (oSh == 3) {
        oBase = oBase + oBaseKey;
    }
}
 
var offspringBase = document.getElementById("offspringBase");
var allBases = ["blank", "opal","grulla","serpentine","glaucous","honeydew","blue","khaki","marengo","skarn","teardrop","zircon","lily","pearl","seal","bronze","argent","chromium","stripedflint","flint","iridium","slate","piasa","tombac","mojave","wulfenite","pyrope","realgar","lavender","pale","sky","diorite","galena","maltese","denim","lilac","nocturne","apricot","beige","creamlighter","shell","cream","creamdarker","honey","willow","caramel","chestnut","chocolate","darkbrown","dust","quartz","snow","white","ashen","birch","graylighter","howlite","gray","graydarker","jet","black","goldenrod","goldlighter","magnolia","tumbleweed","brass","gold","golddarker","red","amber","brown","henna","liver","almond","buff","feldspar","isabel","peach","antler","blonde","sandy","tuff","vanilla","cocoa","ebony","oroide","pecan","sepia","siqoq","melchior","nepheline","titanium","rime","acanthite","chert","silver","steele","sterling","biotite","obsidian","onyx","pewter","sphalerite","arkose","calcite","ducat","jacinthe","yellow","doubloon","rust","saffron","sulphur","tawny","auburn","dinar","dravit","russet","sarder"];
offspringBase.src = "img/bases/" + allBases[oBase] + ".png";  

offspringMarkingsCalculate();

}

function testButton() {
    alert("Button pushed!");
}