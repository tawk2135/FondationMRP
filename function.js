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
        $("#Titre").html("Noël 2018");
        $("#context").html("Les bénévoles, nos jeunes de la Fondation Marie Reine de la Paix, préparent des cadeaux de Noël pour les sans - abris; afin de leur prouver notre solidarité et que nous pensons à eux.")

    }
    if (countdown === 1) {
        $("#Right").attr("src", "Images/IMG_0051.JPG");
        $("#Left").attr("src", "Images/IMG_0035.JPG");
    }
    if (countdown === 2) {
        $("#Top").attr("src", "Images/IMG_0059.JPG");
        $("#Bottom").attr("src", "Images/stOdile1.JPG");
        $("#Titre").html(" Super Ventes");
        $("#context").html("En hiver, nous faisons de notre possible d'organiser des supers ventes afin de récolter le plus de donations possibles pour nos objectifs")
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
    var b1 = "Soif de Dieu Mon âme a soif de toi, toi que je cherche dès l’aube.Dieu, tu es mon Dieu,je te cherche dès l’aube : mon âme a soif de toi; après toi languit ma chair, terre aride, altérée, sans eau. Je t’ai contemplé au sanctuaire, J’ai vu ta force et ta gloire. Ton amour vaut mieux que la vie : Tu seras la louange de mes lèvres! Toute ma vie je vais te bénir, Lever les mains en invoquant ton nom. Comme par un festin je serai rassasié; la joie sur les lèvres, je dirai ta louange. Dans la nuit, je me souviens de toi  et je reste des heures à te parler. Oui, tu es venu à mon secours : je crie de joie à l’ombre de tes ailes. Mon âme s’attache à toi, a main droite me soutient. Alléluia.";
    var c1 = "<h1 style='text-align:center;'>" + a1 + "</h1>" + "<br>" + b1;
    var a2 = "Psaume 23";
    var b2 = "Le Bon Pasteur Yahvé est mon berger, rien ne me manque. Sur des prés d’herbe fraîche ul me parque. Vers les eaux du repos il me mène, il y refait mon âme; il me guide aux sentiers de justice à cause de son nom.Passerais-je un ravin de ténèbre, je ne crains aucun mal car tu es près de moi; ton bâton, ta houlette sont là qui me consolent. Devant moi tu apprêtes une table face à mes adversaires; d’une onction tu me parfumes la tête, ma coupe déborde. Oui, grâce et bonheur me pressent, tous les jours  de ma vie; ma demeure est la Maison de Yahvé et la longueur des jours.";
    var c2 = "<h1 style='text-align:center;'>" + a2 + "</h1>" + "<br>" + b2;
    var a3 = "Intercession";
    var b3 = "En proclamant Jésus « Seigneur», adressons-lui nos demandes : Ô Christ, tu nous appelles à combattre pour ton règne, arme-nous de patience et de douceur. Par la force de ton Esprit, tu envoies des disciples  préparer la route devant toi; donne-leur d’annoncer l’Évangile avec assurance. Renouvelle-nous par ton Esprit, conduis-nos pas à la rencontre de ta miséricorde. Donne-nous un cœur qui écoute, pour que nous soyons prêts à recevoir ta Parole. Refais-nos forces, Dieu de bonté, jusqu’au jour où viendra le Seigneur Jésus.";
    var c3 = "<h1 style='text-align:center;'>" + a3 + "</h1>" + "<br>" + b3;
    var a4 = "2 TM 2.8.11-13";
    var b4 = "Souviens-toi de Jésus Christ, le descendant de David: Il est Ressuscité d'entre les morts.Voici une parole sûre: si nous sommes morts avec lui, avec lui nous vivrons. Si nous supportons l'épreuve , avec lui nous régnerons. Si nous le rejetons, lui aussi nous rejettera. Si nous sommes infidèles, lui, il restera fidèle , car il ne peut se rejeter lui-même.";
    var c4 = "<h1 style='text-align:center;'>" + a4 + "</h1>" + "<br>" + b4;
    var a5 = "Un message divin pour le monde entier.  ";
    var b5 = "Le Fils de l’homme, quand il viendra, trouvera-t-il la foi sur la terre.St Luc 18,8," + "<br>" + "Regardons la tiédeur qui nous envahis de plus en plus! Aujourd’hui nous vivons dans un monde plongé dans le " + "<br>" + "matériel, avoir de choses,  toujours plus, c’est le succès et tous les moyens pour y arriver sont bons. " + "Nous sommes accablés, essoufflés, inquiets, méfiants et souvent malheureux. Où allons-Nous? Cessons de nous" + "<br>" + "épuiser dans le vide et tournons nos regards vers la Source – car elle existe - " + "« Éveille-toi, toi qui dors; lève-toi d’entre les morts, et   le Christ te touchera.» Ep 5, 14  " + "<br>" + "Notre Seigneur se tient à la porte et Il frappe. Ouvrons-lui notre cœur dans la petite prière. Éclairons-nous dans " +
        "son  Évangile. Il nous parle, nous console  « Venez à moi, vous tous qui peinez et ployez sous le fardeau, et moi " + "<br>" + "je vous soulagerai.» :   Mt  11,28 " + "<br>" + "Pourquoi, moi qui lis ce texte, je ne prendrais pas un peu de temps chaque jour pour répondre à cet appel si important ? Le Seigneur m’attend.";
    var c5 = "<h1 style='text-align:center;'>" + a5 + "</h1>" + "<br>" + b5;
    var a6 = "Lettre de Saint Jacques2,15-17."
    var b6 = "Si un frère ou une sœur sont nus, s’ils manquent de leur nourriture quotidienne, et que l’un d’entre nous leur dise: « Allez en paix, chauffez-vous, rassasiez-vous», sans leur donner ce qui est nécessaire à leur corps, à quoi sert-il? Ainsi en est-il de la foi: si elle n’a pas les œuvres, elle est tout à fait morte. "
    var c6 = "<h1 style='text-align:center;'>" + a6 + "</h1>" + "<br>" + b6;

    var a8 = "Fais de moi:  ";
    var a81 = "Saint  François d’Assise."
    var b8 = "« Seigneur, fais de moi un instrument de ta paix,";
    var b81 = "Là où est la haine, que je mette l’amour.";
    var b82 = "Là où est l’offense, que je mette le pardon.";
    var b83 = "Là où est la discorde, que je mette l’union.";
    var b84 = "Là où est l’erreur, que je mette la vérité.";
    var b85 = "Là où est le doute, que je mette la foi.";
    var b86 = "Là où est désespoir, que je mette l’espérance.";
    var b87 = "Là où sont les ténèbres, que je mette la lumière.";
    var b88 = "Là où est la tristesse, que je mette la joie.» ";
    var c8 = "<h1 style='text-align:center;'>" + a8 + "</h1>" + "<br>" + b8 + "<br>" + b81 + "<br>" + b82 + "<br>" + b83 + "<br>" + b84 + "<br>" + b85 + "<br>" + b86 + "<br>" + b87 + "<br>" + b88 + "<br>" + "<br>" + "<h1>" + a81 + "</h1>";
    var a9 = "Enseignements";
    var b9 = "<h1>Romains  12,2</h1> Et ne vous modelez pas sur le monde présent, mais que le renouvellement de votre jugement vous transforme et vous fasse discerner quelle est la volonté de Dieu, ce qui est bon, ce qui lui plaît, ce qui est parfait. " + "<br>" + "<br>" +"<h1>Romains 12,21</h1> Ne te laisse pas vaincre par le mal, sois vainqueur du mal par le bien. " + "<br>" +"<br>" + "<h1>Galates 5,16</h1> " + "Laissez-vous mener par l’Esprit et vous ne risquerez de satisfaire la convoitise charnelle. " + "<br>" +"<br>" + "<h1> Jean 2,15</h1> N’aimez ni le monde ni ce qui est dans le monde. Si quelqu’un aime le monde, l’amour du Père n’est pas en lui. Car tout ce qui est dans le monde, la convoitise de la chair, la convoitise des yeux et l’orgueil de la richesse, vient du non pas du Père mais du monde. Or le monde passe avec ses convoitises; mais celui qui fait la volonté de Dieu demeure éternellement. " + "<br>" +"<br>" + "<h1>Matthieu 7,12</h1> La Règle d’or : Tout ce que vous voulez que les hommes fassent pour vous, faites-le vous-mêmes pour eux : Voilà la loi et les Prophètes. " + "<br>" +"<br>" + "<h1>Matthieu 10,42</h1> Quiconque donnera à boire à l’un de ces petits rien qu’un verre d’eau fraîche, en tant qu’il est un disciple, en vérité je vous le dis, il ne perdra pas sa récompense. "
    var c9 = "<h1 style='text-align:center;'>" + a9 + "</h1>" + "<br>" + b9;
    var a10 = "La Fragilité de l’Être Humain ";
    var b10 = "St Mc 8,36 :«  Que sert donc à l’homme de gagner le monde entier, s’il ruine sa propre vie.» " + "<br>" + "St Luc 12,20 :« Insensé, cette nuit même, on va te redemander ton âme. » " + "<br>" + "J’ai choisi ces passages, non pas pour nous faire peur, mais pour montrer notre fragilité et à quel point sommes-nous vulnérables et limités face à la vie. " + "Le mal existe, on se heurte, et l’image qu’on se crée ; parfois il nous arrive, que nous nous  pensons meilleurs que les autres. Trouver des raisons pour justifier nos agissements,   de retourner le mal contre le mal ; en faisant cela, nous oublions complètement l’Enseignement de notre Seigneur Jésus. " + "<br>" + "C’est le moment de faire une halte, jeter un regard autour de nous, essayer d’ouvrir notre cœur, peut-être chercher des conseils, trouver le moyen d’épuiser à la vraie source. Cette source est Jésus, un trésor caché. St Jean 14,6 : « Je suis le Chemin, la Vérité et la Vie.» En rencontrant Jésus dans la parole, scruter l’Évangile, nous allons trouver un ami, Jésus,  qui frappe à la porte. Cela nous permettra d’établir une relation intime avec celui qui nous a aimé le premier. En rencontrant Jésus, tête à tête, cœur à cœur et petit à petit cette fragilité disparaîtra. Avec la grâce promis par notre Seigneur et l’intercession de notre tendre et douce Maman Marie : Une paix intérieure qui n’est pas de ce monde s’installera et notre cœur ne se troublera plus.  ";
    var c10 = "<h1 style='text-align:center;'>" + a10 + "</h1>" + "<br>" + b10;
    var a11 = "Éphésiens 3,14-21 ";
    var b11 = "«C’est pourquoi je fléchis les genoux en présence du Père de qui toute paternité, au ciel et sur la terre, tire son nom. Qu’il daigne, selon la richesse de sa gloire, vous armer de puissance par son Esprit pour que se fortifie en vous l’homme intérieur, que le Christ habite en vos cœurs par la foi, et que vous soyez enracinés, fondés dans l’amour. Ainsi vous recevrez la force de comprendre, avec tous les saints, ce qu’est la Largeur, la Longueur, la Hauteur, et la Profondeur, vous connaîtrez l’amour du Christ qui surpasse toute connaissance, et vous entrerez par  votre plénitude dans toute la Plénitude de Dieu." + "<br>" + "À Celui dont la puissance agissant en nous est capable de faire bien au - delà, infiniment au - delà de tout ce que nous pouvons demander ou concevoir, à Lui la gloire, dans l’ Église et le Christ Jésus, pour tous les âges et tous le siècles!Amen.»"
    var c11 = "<h1 style='text-align:center;'>" + a11 + "</h1>" + "<br>" + b11;
    var a12 = "Romain 8,35-39 ";
    var b12 = "«Qui nous séparera de l'amour du Christ ? la tribulation, l'angoisse, la persécution, la faim, la nudité, les périls, le glaive ?" +
        "<br>" + "Selon le mot de l’ écriture: À cause de toi, l 'on nous met à mort tout le long du jour;   nous avons passé pour  des brebis d’abattoir." + "<br>" +
        "Mais en tout cela nous sommes les grands vainqueurs par celui qui nous a aimés." + "<br>" +
        "Oui, j’ en ai l’ assurance, ni mort ni vie, ni anges ni principautés, ni présent ni avenir, ni puissances, ni hauteur, ni profondeur, ni aucune" +
        "    autre créature ne pourra nous séparer de l 'amour de Dieu manifesté dans le  Christ Jésus notre Seigneur.»"
    var c12 = "<h1 style='text-align:center;'>" + a12 + "</h1>" + "<br>" + b12;
    var a13 = "La Prière "
    var b13 = "La prière a une puissance extraordinaire, révélé par notre Seigneur que nous pouvons tout obtenir pas la prière mais d’abord, cherchez son Royaume et sa justice, et tout le reste vous sera donné par  surcroît.  Est-ce que Dieu peut changer d’avis? À mon avis personnel, c’est une question très simple, ma réponse n’est que Non, point finale, Dieu ne change pas d’avis.  Regardons ensemble,  la maladie et la guérison d’Ézéchias, dans Isaïe Chapitre 38,1-5, voici son antidote : En ces jours-là, Ézéchias fut atteint d’une maladie mortelle. Alors,  Isaïe le prophète, dit à Ézéchias : « Ainsi parle Yahvé : Mets ordre à ta maison, car tu vas mourir, tu ne vivras pas.» Quelle parole, quel message si dur. Mais Ézéchias a reçu le message, une confiance totale en Dieu, il s’est mis à parler à Dieu, il se tourna vers le mur et il  monte cette prière envers Dieu: « Ah! Yahvé, souviens-toi, de grâce, que je me suis conduit fidèlement et en toute probité de cœur devant toi, et que j’ai fait ce qui était bien à tes yeux.» Et Ézéchias versa d’abondantes larmes. Face à ces larmes Dieu ne peut plus rien, alors la parole de Yahvé se fit entendre à Isaïe : « Va dire à Ézéchias : Ainsi parle Yahvé, Dieu de ton ancêtre David. J’ai entendu ta prière, j’ai vu tes larmes. Je vais te guérir; dans trois jours, tu monteras au Temple de Yahvé. J’ajouterai quinze années à ta vie. Dieu est Amour, Jésus qui est venu nous révéler le Père, Il nous dit : Je suis doux et    humble de cœur (Mt-11, 28).  Donc Dieu peut changer d’avis. Tout cela pour dire que la prière a une force, alors, prions sans-cesse.  "
    var c13 = "<h1 style='text-align:center;'>" + a13 + "</h1>" + "<br>" + b13;
    //collection
    var collectionParole = [c1, c2, c3, c4, c5, c6, c8, c9, c10, c11, c12, c13];
    
    //obtenir la date de la journée actuelle
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    // mm égale au mois actuel

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