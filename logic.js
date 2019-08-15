

function thaum() {
    $("#overwrite").html("<p>Thaumaturgy - once per day</p>");
    $("#overwrite").append("<p>You manifest a minor wonder, a sign of supernatural power, within range (30 ft). You create one of the following magical effects within range:</p>");
    $("#overwrite").append("<p>• Your voice booms up to three times as loud as normal for 1 minute.</p>");
    $("#overwrite").append("<p>• You cause flames to flicker, brighten, dim, or change color for 1 minute.</p>");
    $("#overwrite").append("<p>• You cause harmless tremors in the ground for 1 minute.</p>");
    $("#overwrite").append("<p>• You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.</p>");
    $("#overwrite").append("<p>• You instantaneously cause an unlocked door or window to fly open or slam shut.</p>");
    $("#overwrite").append("<p>• You alter the appearance of your eyes for 1 minute. If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action.</p>");
}

function burning() {
    $("#overwrite").html("<p>Burning Hands</p>");
    $("#overwrite").append("<p>As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15 ft cone must make a dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.</p>");
}

function chill() {
    $("#overwrite").html("<p>Chill Touch</p>");
    $("#overwrite").append("<p>You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).</p>");
}

function eldritch() {
    $("#overwrite").html("<p>Eldritch Blast</p>");
    $("#overwrite").append("<p>A beam of crackling energy streak toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage. The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.</p>");
}

function protection() {
    $("#overwrite").html("<p>Protection From Good and Evil</p>");
    $("#overwrite").append("<p>Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead. The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.</p>");
}

function darkone() {
    $("#overwrite").html("<p>Dark One's Blessing</p>");
    $("#overwrite").append("<p>Gain 4 temp HPs when you reduce a hostile creature to 0 HPs.</p>");
}

function hellish() {
    $("#overwrite").html("<p>Hellish Resistance</p>");
    $("#overwrite").append("<p>Resistance to fire damage.</p>");
}

function infernal() {
    $("#overwrite").html("<p>Infernal Legacy</p>");
    $("#overwrite").append("<p>You know thaumaturgy and can cast  once per day. CHA is the spellcasting ability.</p>");
}

function quarterstaff() {
    $("#overwrite").html("<img style='max-width: 300px' src='./images/quarterstaff.png'></img>");
}

function crossbow() {
    $("#overwrite").html("<img style='max-width: 300px' src='./images/crossbow.png'></img>");
}

function dagger() {
    $("#overwrite").html("<img style='max-width: 300px; max-height: 300px;' src='./images/dagger.png'></img>");
}

function playDiceSound(){
      

    var audio = document.getElementById("audio");
    audio.pause();
    audio.currentTime = 0;
    audio.volume = 0.2;
    audio.play();
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function rolld4() {
    let diceImage;
    playDiceSound();
    $("#overwrite").html("<h1>D4 Rolled</h1>");
    $("#overwrite").append("<h2>Result:</h2>");
    let rolled = randomIntFromInterval(1,4);

    
        if (rolled == 1) {
            diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/1dieSpecial.png'></img>"
        }
        if (rolled == 2) {
            diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/2dieSpecial.png'></img>"
        }
        if (rolled == 3) {
            diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/3dieSpecial.png'></img>"
        }
        if (rolled == 4) {
            diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/4dieSpecial.png'></img>"
        }
    
    $("#overwrite").append(diceImage);
    $("#overwrite").append("<h1>" + rolled + "</h1>");
}

function rolld6() {
    playDiceSound();
    $("#overwrite").html("<h1>D6 Rolled</h1>");
    $("#overwrite").append("<h2>Result:</h2>");
    let rolled = randomIntFromInterval(1,6);

    if (rolled == 1) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/1dieSpecial.png'></img>"
    }
    if (rolled == 2) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/2dieSpecial.png'></img>"
    }
    if (rolled == 3) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/3dieSpecial.png'></img>"
    }
    if (rolled == 4) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/4dieSpecial.png'></img>"
    }
    if (rolled == 5) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/5dieSpecial.png'></img>"
    }
    if (rolled == 6) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/6dieSpecial.png'></img>"
    }
    
    $("#overwrite").append(diceImage);
    $("#overwrite").append("<h1>" + rolled + "</h1>");
}

function rolld8() {
    playDiceSound();
    $("#overwrite").html("<h1>D8 Rolled</h1>");
    $("#overwrite").append("<h2>Result:</h2>");
    let rolled = randomIntFromInterval(1,8);

    if (rolled == 1) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/1dieSpecial.png'></img>"
    }
    if (rolled == 2) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/2dieSpecial.png'></img>"
    }
    if (rolled == 3) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/3dieSpecial.png'></img>"
    }
    if (rolled == 4) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/4dieSpecial.png'></img>"
    }
    if (rolled == 5) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/5dieSpecial.png'></img>"
    }
    if (rolled == 6) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/6dieSpecial.png'></img>"
    }
    if (rolled == 7) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/7dieSpecial.png'></img>"
    }
    if (rolled == 8) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/8dieSpecial.png'></img>"
    }

    $("#overwrite").append(diceImage);
    $("#overwrite").append("<h1>" + rolled + "</h1>");
}

function rolld10() {
    playDiceSound();
    $("#overwrite").html("<h1>D10 Rolled</h1>");
    $("#overwrite").append("<h2>Result:</h2>");
    let rolled = randomIntFromInterval(1,10);

    if (rolled == 1) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/1dieSpecial.png'></img>"
    }
    if (rolled == 2) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/2dieSpecial.png'></img>"
    }
    if (rolled == 3) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/3dieSpecial.png'></img>"
    }
    if (rolled == 4) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/4dieSpecial.png'></img>"
    }
    if (rolled == 5) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/5dieSpecial.png'></img>"
    }
    if (rolled == 6) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/6dieSpecial.png'></img>"
    }
    if (rolled == 7) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/7dieSpecial.png'></img>"
    }
    if (rolled == 8) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/8dieSpecial.png'></img>"
    }
    if (rolled == 9) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/9dieSpecial.png'></img>"
    }
    if (rolled == 10) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/10dieSpecial.png'></img>"
    }

    $("#overwrite").append(diceImage);
    $("#overwrite").append("<h1>" + rolled + "</h1>");
}

function rolld12() {
    playDiceSound();
    $("#overwrite").html("<h1>D12 Rolled</h1>");
    $("#overwrite").append("<h2>Result:</h2>");
    let rolled = randomIntFromInterval(1,12);

    if (rolled == 1) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/1dieSpecial.png'></img>"
    }
    if (rolled == 2) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/2dieSpecial.png'></img>"
    }
    if (rolled == 3) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/3dieSpecial.png'></img>"
    }
    if (rolled == 4) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/4dieSpecial.png'></img>"
    }
    if (rolled == 5) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/5dieSpecial.png'></img>"
    }
    if (rolled == 6) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/6dieSpecial.png'></img>"
    }
    if (rolled == 7) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/7dieSpecial.png'></img>"
    }
    if (rolled == 8) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/8dieSpecial.png'></img>"
    }
    if (rolled == 9) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/9dieSpecial.png'></img>"
    }
    if (rolled == 10) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/10dieSpecial.png'></img>"
    }
    if (rolled == 11) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/11dieSpecial.png'></img>"
    }
    if (rolled == 12) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/12dieSpecial.png'></img>"
    }

    $("#overwrite").append(diceImage);

    $("#overwrite").append("<h1>" + rolled + "</h1>");
}

function rolld20() {
    playDiceSound();
    $("#overwrite").html("<h1>D20 Rolled</h1>");
    $("#overwrite").append("<h2>Result:</h2>");
    let rolled = randomIntFromInterval(1,20);

    if (rolled == 1) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/1dieSpecial.png'></img>"
    }
    if (rolled == 2) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/2dieSpecial.png'></img>"
    }
    if (rolled == 3) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/3dieSpecial.png'></img>"
    }
    if (rolled == 4) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/4dieSpecial.png'></img>"
    }
    if (rolled == 5) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/5dieSpecial.png'></img>"
    }
    if (rolled == 6) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/6dieSpecial.png'></img>"
    }
    if (rolled == 7) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/7dieSpecial.png'></img>"
    }
    if (rolled == 8) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/8dieSpecial.png'></img>"
    }
    if (rolled == 9) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/9dieSpecial.png'></img>"
    }
    if (rolled == 10) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/10dieSpecial.png'></img>"
    }
    if (rolled == 11) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/11dieSpecial.png'></img>"
    }
    if (rolled == 12) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/12dieSpecial.png'></img>"
    }
    if (rolled == 13) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/13dieSpecial.png'></img>"
    }
    if (rolled == 14) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/14dieSpecial.png'></img>"
    }
    if (rolled == 15) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/15dieSpecial.png'></img>"
    }
    if (rolled == 16) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/16dieSpecial.png'></img>"
    }
    if (rolled == 17) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/17dieSpecial.png'></img>"
    }
    if (rolled == 18) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/18dieSpecial.png'></img>"
    }
    if (rolled == 19) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/19dieSpecial.png'></img>"
    }
    if (rolled == 20) {
        diceImage = "<img style='max-width: 200px; margin-left: 50%;' src='./images/20dieSpecial.png'></img>"
    }

    $("#overwrite").append(diceImage);

    $("#overwrite").append("<h1>" + rolled + "</h1>");
}