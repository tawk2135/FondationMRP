/* global a */

function O(i) {
    return typeof i === 'object' ? i : document.getElementById(i)
}

function L(i) {
    return typeof i === 'object' ? i : document.getElementsByClassName(i)
}

function V(i) {
    return L(i).style
}

function S(i) {
    return O(i).style
}

function C(i) {
    return document.getElementsByClassName(i)
}
//Put id than the color wanted
function colorChange(i, b) {
    document.getElementById(i).style.color = b
}

function send(f) {
    window.location = f
}
setTimeout(displaysom, 100)

function displaysom() {

    $("#first").slideUp()
    $("#second").slideUp()
    $("#third").slideUp()
    $("#fourth").slideUp()
    $("#fifth").slideUp()
    $("#picRight").slideUp()
    $("#picRight1").slideUp()
    $("#picLeft").slideUp()
    $("#picLeft1").slideUp()
    $("#first").slideDown(1000)
    $("#second").slideDown(2000)
    $("#third").slideDown(3000)
    $("#fourth").slideDown(4000)
    $("#fifth").slideDown(5000)
    $("#picRight").slideDown(5000)
    $("#picLeft").slideDown(5000)
    $("#picLeft1").slideDown(5000)
    $("#picRight1").slideDown(5000)
}
a = setInterval(opacityChange, 500)
count = 0

function opacityChange() {

    count += 1
    if (count === 1) {

        S("logo").opacity = "0";
    }
    if (count === 2) {
        S("logo").opacity = "0.2";
    }
    if (count === 3) {
        S("logo").opacity = "0.3";
    }
    if (count === 4) {
        S("logo").opacity = "0.4";
    }
    if (count === 5) {
        S("logo").opacity = "0.5";
    }
    if (count === 6) {
        S("logo").opacity = "0.6";
    }
    if (count === 7) {
        S("logo").opacity = "1";
        setTimeout("clearInterval(a)", 3000)
    }
}

countdown = 0
//setInterval(pictureChange, 5000)

function pictureChange() {

    countdown += 1;
    if (countdown === 0) {
        $("#Right").attr("src", "Images/3muketeers1.JPG");
        $("#Left").attr("src", "Images/3muketeershelp.JPG");
        $("#Top").attr("src", "Images/3muketeers.JPG");
        $("#Bottom").attr("src", "Images/3muketeers2.JPG");
        $("#Titre").html("No??l 2018");
        $("#context").html("Les b??n??voles, nos jeunes de la Fondation Marie Reine de la Paix, pr??parent des cadeaux de No??l pour les sans - abris; afin de leur prouver notre solidarit?? et que nous pensons ?? eux.")

    }
    if (countdown === 1) {
        $("#Right").attr("src", "Images/IMG_0051.JPG");
        $("#Left").attr("src", "Images/IMG_0035.JPG");
    }
    if (countdown === 2) {
        $("#Top").attr("src", "Images/IMG_0059.JPG");
        $("#Bottom").attr("src", "Images/stOdile1.JPG");
        $("#Titre").html(" Super Ventes");
        $("#context").html("En hiver, nous faisons de notre possible d'organiser des supers ventes afin de r??colter le plus de donations possibles pour nos objectifs")
    }
    if (countdown === 3) {
        countdown = -1;
    }
}
function display()
{
    
 var x = document.getElementById("changeText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }    
}
function display2()
{
    
     var x = document.getElementById("addText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
    
}
function paroleDuMois() { //Initiation des variables
    var a1 = "Psaume 62";
    var b1 = "Soif de Dieu Mon ??me a soif de toi, toi que je cherche d??s l???aube.Dieu, tu es mon Dieu,je te cherche d??s l???aube : mon ??me a soif de toi; apr??s toi languit ma chair, terre aride, alt??r??e, sans eau. Je t???ai contempl?? au sanctuaire, J???ai vu ta force et ta gloire. Ton amour vaut mieux que la vie : Tu seras la louange de mes l??vres! Toute ma vie je vais te b??nir, Lever les mains en invoquant ton nom. Comme par un festin je serai rassasi??; la joie sur les l??vres, je dirai ta louange. Dans la nuit, je me souviens de toi  et je reste des heures ?? te parler. Oui, tu es venu ?? mon secours : je crie de joie ?? l???ombre de tes ailes. Mon ??me s???attache ?? toi, a main droite me soutient. All??luia.";
    var c1 = "<h1 style='text-align:center;'>" + a1 + "</h1>" + "<br>" + b1;
    var a2 = "Psaume 23";
    var b2 = "Le Bon Pasteur Yahv?? est mon berger, rien ne me manque. Sur des pr??s d???herbe fra??che ul me parque. Vers les eaux du repos il me m??ne, il y refait mon ??me; il me guide aux sentiers de justice ?? cause de son nom.Passerais-je un ravin de t??n??bre, je ne crains aucun mal car tu es pr??s de moi; ton b??ton, ta houlette sont l?? qui me consolent. Devant moi tu appr??tes une table face ?? mes adversaires; d???une onction tu me parfumes la t??te, ma coupe d??borde. Oui, gr??ce et bonheur me pressent, tous les jours  de ma vie; ma demeure est la Maison de Yahv?? et la longueur des jours.";
    var c2 = "<h1 style='text-align:center;'>" + a2 + "</h1>" + "<br>" + b2;
    var a3 = "Intercession";
    var b3 = "En proclamant J??sus ?? Seigneur??, adressons-lui nos demandes : ?? Christ, tu nous appelles ?? combattre pour ton r??gne, arme-nous de patience et de douceur. Par la force de ton Esprit, tu envoies des disciples  pr??parer la route devant toi; donne-leur d???annoncer l?????vangile avec assurance. Renouvelle-nous par ton Esprit, conduis-nos pas ?? la rencontre de ta mis??ricorde. Donne-nous un c??ur qui ??coute, pour que nous soyons pr??ts ?? recevoir ta Parole. Refais-nos forces, Dieu de bont??, jusqu???au jour o?? viendra le Seigneur J??sus.";
    var c3 = "<h1 style='text-align:center;'>" + a3 + "</h1>" + "<br>" + b3;
    var a4 = "2 TM 2.8.11-13";
    var b4 = "Souviens-toi de J??sus Christ, le descendant de David: Il est Ressuscit?? d'entre les morts.Voici une parole s??re: si nous sommes morts avec lui, avec lui nous vivrons. Si nous supportons l'??preuve , avec lui nous r??gnerons. Si nous le rejetons, lui aussi nous rejettera. Si nous sommes infid??les, lui, il restera fid??le , car il ne peut se rejeter lui-m??me.";
    var c4 = "<h1 style='text-align:center;'>" + a4 + "</h1>" + "<br>" + b4;
    var a5 = "Un message divin pour le monde entier.  ";
    var b5 = "Le Fils de l???homme, quand il viendra, trouvera-t-il la foi sur la terre.St Luc 18,8," + "<br>" + "Regardons la ti??deur qui nous envahis de plus en plus! Aujourd???hui nous vivons dans un monde plong?? dans le " + "<br>" + "mat??riel, avoir de choses,  toujours plus, c???est le succ??s et tous les moyens pour y arriver sont bons. " + "Nous sommes accabl??s, essouffl??s, inquiets, m??fiants et souvent malheureux. O?? allons-Nous? Cessons de nous" + "<br>" + "??puiser dans le vide et tournons nos regards vers la Source ??? car elle existe - " + "?? ??veille-toi, toi qui dors; l??ve-toi d???entre les morts, et   le Christ te touchera.?? Ep 5, 14  " + "<br>" + "Notre Seigneur se tient ?? la porte et Il frappe. Ouvrons-lui notre c??ur dans la petite pri??re. ??clairons-nous dans " +
        "son  ??vangile. Il nous parle, nous console  ?? Venez ?? moi, vous tous qui peinez et ployez sous le fardeau, et moi " + "<br>" + "je vous soulagerai.?? :   Mt  11,28 " + "<br>" + "Pourquoi, moi qui lis ce texte, je ne prendrais pas un peu de temps chaque jour pour r??pondre ?? cet appel si important ? Le Seigneur m???attend.";
    var c5 = "<h1 style='text-align:center;'>" + a5 + "</h1>" + "<br>" + b5;
    var a6 = "Lettre de Saint Jacques2,15-17."
    var b6 = "Si un fr??re ou une s??ur sont nus, s???ils manquent de leur nourriture quotidienne, et que l???un d???entre nous leur dise: ?? Allez en paix, chauffez-vous, rassasiez-vous??, sans leur donner ce qui est n??cessaire ?? leur corps, ?? quoi sert-il? Ainsi en est-il de la foi: si elle n???a pas les ??uvres, elle est tout ?? fait morte. "
    var c6 = "<h1 style='text-align:center;'>" + a6 + "</h1>" + "<br>" + b6;

    var a8 = "Fais de moi:  ";
    var a81 = "Saint  Fran??ois d???Assise."
    var b8 = "?? Seigneur, fais de moi un instrument de ta paix,";
    var b81 = "L?? o?? est la haine, que je mette l???amour.";
    var b82 = "L?? o?? est l???offense, que je mette le pardon.";
    var b83 = "L?? o?? est la discorde, que je mette l???union.";
    var b84 = "L?? o?? est l???erreur, que je mette la v??rit??.";
    var b85 = "L?? o?? est le doute, que je mette la foi.";
    var b86 = "L?? o?? est d??sespoir, que je mette l???esp??rance.";
    var b87 = "L?? o?? sont les t??n??bres, que je mette la lumi??re.";
    var b88 = "L?? o?? est la tristesse, que je mette la joie.?? ";
    var c8 = "<h1 style='text-align:center;'>" + a8 + "</h1>" + "<br>" + b8 + "<br>" + b81 + "<br>" + b82 + "<br>" + b83 + "<br>" + b84 + "<br>" + b85 + "<br>" + b86 + "<br>" + b87 + "<br>" + b88 + "<br>" + "<br>" + "<h1>" + a81 + "</h1>";
    var a9 = "Enseignements";
    var b9 = "<h1>Romains  12,2</h1> Et ne vous modelez pas sur le monde pr??sent, mais que le renouvellement de votre jugement vous transforme et vous fasse discerner quelle est la volont?? de Dieu, ce qui est bon, ce qui lui pla??t, ce qui est parfait. " + "<br>" + "<br>" +"<h1>Romains 12,21</h1> Ne te laisse pas vaincre par le mal, sois vainqueur du mal par le bien. " + "<br>" +"<br>" + "<h1>Galates 5,16</h1> " + "Laissez-vous mener par l???Esprit et vous ne risquerez de satisfaire la convoitise charnelle. " + "<br>" +"<br>" + "<h1> Jean 2,15</h1> N???aimez ni le monde ni ce qui est dans le monde. Si quelqu???un aime le monde, l???amour du P??re n???est pas en lui. Car tout ce qui est dans le monde, la convoitise de la chair, la convoitise des yeux et l???orgueil de la richesse, vient du non pas du P??re mais du monde. Or le monde passe avec ses convoitises; mais celui qui fait la volont?? de Dieu demeure ??ternellement. " + "<br>" +"<br>" + "<h1>Matthieu 7,12</h1> La R??gle d???or : Tout ce que vous voulez que les hommes fassent pour vous, faites-le vous-m??mes pour eux : Voil?? la loi et les Proph??tes. " + "<br>" +"<br>" + "<h1>Matthieu 10,42</h1> Quiconque donnera ?? boire ?? l???un de ces petits rien qu???un verre d???eau fra??che, en tant qu???il est un disciple, en v??rit?? je vous le dis, il ne perdra pas sa r??compense. "
    var c9 = "<h1 style='text-align:center;'>" + a9 + "</h1>" + "<br>" + b9;
    var a10 = "La Fragilit?? de l?????tre Humain ";
    var b10 = "St Mc 8,36 :??  Que sert donc ?? l???homme de gagner le monde entier, s???il ruine sa propre vie.?? " + "<br>" + "St Luc 12,20 :?? Insens??, cette nuit m??me, on va te redemander ton ??me. ?? " + "<br>" + "J???ai choisi ces passages, non pas pour nous faire peur, mais pour montrer notre fragilit?? et ?? quel point sommes-nous vuln??rables et limit??s face ?? la vie. " + "Le mal existe, on se heurte, et l???image qu???on se cr??e ; parfois il nous arrive, que nous nous  pensons meilleurs que les autres. Trouver des raisons pour justifier nos agissements,   de retourner le mal contre le mal ; en faisant cela, nous oublions compl??tement l???Enseignement de notre Seigneur J??sus. " + "<br>" + "C???est le moment de faire une halte, jeter un regard autour de nous, essayer d???ouvrir notre c??ur, peut-??tre chercher des conseils, trouver le moyen d?????puiser ?? la vraie source. Cette source est J??sus, un tr??sor cach??. St Jean 14,6 : ?? Je suis le Chemin, la V??rit?? et la Vie.?? En rencontrant J??sus dans la parole, scruter l?????vangile, nous allons trouver un ami, J??sus,  qui frappe ?? la porte. Cela nous permettra d?????tablir une relation intime avec celui qui nous a aim?? le premier. En rencontrant J??sus, t??te ?? t??te, c??ur ?? c??ur et petit ?? petit cette fragilit?? dispara??tra. Avec la gr??ce promis par notre Seigneur et l???intercession de notre tendre et douce Maman Marie : Une paix int??rieure qui n???est pas de ce monde s???installera et notre c??ur ne se troublera plus.  ";
    var c10 = "<h1 style='text-align:center;'>" + a10 + "</h1>" + "<br>" + b10;
    var a11 = "??ph??siens 3,14-21 ";
    var b11 = "??C???est pourquoi je fl??chis les genoux en pr??sence du P??re de qui toute paternit??, au ciel et sur la terre, tire son nom. Qu???il daigne, selon la richesse de sa gloire, vous armer de puissance par son Esprit pour que se fortifie en vous l???homme int??rieur, que le Christ habite en vos c??urs par la foi, et que vous soyez enracin??s, fond??s dans l???amour. Ainsi vous recevrez la force de comprendre, avec tous les saints, ce qu???est la Largeur, la Longueur, la Hauteur, et la Profondeur, vous conna??trez l???amour du Christ qui surpasse toute connaissance, et vous entrerez par  votre pl??nitude dans toute la Pl??nitude de Dieu." + "<br>" + "?? Celui dont la puissance agissant en nous est capable de faire bien au - del??, infiniment au - del?? de tout ce que nous pouvons demander ou concevoir, ?? Lui la gloire, dans l??? ??glise et le Christ J??sus, pour tous les ??ges et tous le si??cles!Amen.??"
    var c11 = "<h1 style='text-align:center;'>" + a11 + "</h1>" + "<br>" + b11;
    var a12 = "Romain 8,35-39 ";
    var b12 = "??Qui nous s??parera de l'amour du Christ ? la tribulation, l'angoisse, la pers??cution, la faim, la nudit??, les p??rils, le glaive ?" +
        "<br>" + "Selon le mot de l??? ??criture: ?? cause de toi, l 'on nous met ?? mort tout le long du jour;   nous avons pass?? pour  des brebis d???abattoir." + "<br>" +
        "Mais en tout cela nous sommes les grands vainqueurs par celui qui nous a aim??s." + "<br>" +
        "Oui, j??? en ai l??? assurance, ni mort ni vie, ni anges ni principaut??s, ni pr??sent ni avenir, ni puissances, ni hauteur, ni profondeur, ni aucune" +
        "    autre cr??ature ne pourra nous s??parer de l 'amour de Dieu manifest?? dans le  Christ J??sus notre Seigneur.??"
    var c12 = "<h1 style='text-align:center;'>" + a12 + "</h1>" + "<br>" + b12;
    var a13 = "La Pri??re "
    var b13 = "La pri??re a une puissance extraordinaire, r??v??l?? par notre Seigneur que nous pouvons tout obtenir pas la pri??re mais d???abord, cherchez son Royaume et sa justice, et tout le reste vous sera donn?? par  surcro??t.  Est-ce que Dieu peut changer d???avis? ?? mon avis personnel, c???est une question tr??s simple, ma r??ponse n???est que Non, point finale, Dieu ne change pas d???avis.  Regardons ensemble,  la maladie et la gu??rison d?????z??chias, dans Isa??e Chapitre 38,1-5, voici son antidote : En ces jours-l??, ??z??chias fut atteint d???une maladie mortelle. Alors,  Isa??e le proph??te, dit ?? ??z??chias : ?? Ainsi parle Yahv?? : Mets ordre ?? ta maison, car tu vas mourir, tu ne vivras pas.?? Quelle parole, quel message si dur. Mais ??z??chias a re??u le message, une confiance totale en Dieu, il s???est mis ?? parler ?? Dieu, il se tourna vers le mur et il  monte cette pri??re envers Dieu: ?? Ah! Yahv??, souviens-toi, de gr??ce, que je me suis conduit fid??lement et en toute probit?? de c??ur devant toi, et que j???ai fait ce qui ??tait bien ?? tes yeux.?? Et ??z??chias versa d???abondantes larmes. Face ?? ces larmes Dieu ne peut plus rien, alors la parole de Yahv?? se fit entendre ?? Isa??e : ?? Va dire ?? ??z??chias : Ainsi parle Yahv??, Dieu de ton anc??tre David. J???ai entendu ta pri??re, j???ai vu tes larmes. Je vais te gu??rir; dans trois jours, tu monteras au Temple de Yahv??. J???ajouterai quinze ann??es ?? ta vie. Dieu est Amour, J??sus qui est venu nous r??v??ler le P??re, Il nous dit : Je suis doux et    humble de c??ur (Mt-11, 28).  Donc Dieu peut changer d???avis. Tout cela pour dire que la pri??re a une force, alors, prions sans-cesse.  "
    var c13 = "<h1 style='text-align:center;'>" + a13 + "</h1>" + "<br>" + b13;
    //collection
    var collectionParole = [c1, c2, c3, c4, c5, c6, c8, c9, c10, c11, c12, c13];
    
    //obtenir la date de la journ??e actuelle
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    // mm ??gale au mois actuel

    var l = 0;
    //Si le mois est plus petit que 10
    if (mm < 10) {
        //Prendre seulement le deuxieme chiffre
        l = mm.substring(1, 2);
    } else {
        //Sinon prendre le chiffre au complet
        l = mm;
    }
    //Placer l'item qui correspond a la date
    var f = $("#demo");
   
    //f.html(collectionParole);
    f.html(collectionParole[parseInt(l) -1 ]);


}