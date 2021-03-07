<!DOCTYPE html>
<html lang="en">
    <!-- La tete du site avec les références -->
    <?php
    require_once('php/head.php');
    include 'Connection.php';
    ?>
    <!-- Titre au dessus -->
    <title>Fondation Marie-Reine-De-La-Paix: Accueuil</title>


    <!-- La barre de navigation -->
    <?php require_once('php/navigation.php') ?>
    <!-- Fin de la barre de navigation, Debut des images sur les cotes -->

</div>

<!-- debut des images sur les cotes gauche -->
<main>
    <div class="container-fluid text-center">
        <div class="row">
            <div class="col-sm-3" >
                <img class="img-responsive" id="picLeft" src="Images/IMAG0132.jpg" alt="">
                <img src="Images/stOdile1.JPG" class="img-responsive" id="picLeft1" alt="photoFamille">

            </div>
            <!-- fin des images sur les cotes gauche -->
            <div class="col-sm-6 text-align center">
                <br><?php Write("P1Accueil"); ?>
                <br><br>
                <h1><?php Write("Titre1"); ?></h1>
                <p>
                <ul>
                    <li id="first"><?php Write("P2Accueil"); ?> </li>

                    <img src="Images/cross3.png" alt="Croix">
                    <hr>
                    <li id="second"> Engager des fonds pour créer des établissements voués aux œuvres de bienfaisance dans
                        certains pays du tiers monde et, en particulier, le continent Africain.
                    </li>
                    <img src="Images/cross3.png" alt="CroixFrancescaine">
                    <hr>
                    <li id="third">Les opérations de la société peuvent se poursuivre dans tout le Canada et les pays du tiers
                        monde, en particulier, les régions pauvres du continent Africain.
                    </li>
                    <img src="Images/cross3.png" alt="CroixBleue">
                    <hr>
                    <li id="fourth">C’est beau d’établir des objectifs, mais au cour de route, la providence se révèle et avec le                        temps,
                        nous réalisons que nos pensées ne sont pas les pensées de Dieu.
                    </li>

                    <img src="Images/cross3.png" alt="Croix">
                    <hr>

                    <p id="fifth">Grâce après grâce, la Fondation Marie Reine de la Paix est un triomphe.
                        <br> L’Amour grandit dans nos cœurs et devient une semence.<br>
                        <img src="Images/cross3.png" alt="Croix">
                    <hr>
                    <br>Par de petites œuvres répétées avec courage, le Seigneur multiplie les fruits car il se plaît de
                    bénir
                    la
                    Fondation. Dédiée à sa Mère, elle ne peut que grandir et devenir un trésor dans l’infini où tout
                    converge.
                    </p>
                    <img src="Images/cross3.png" alt="Croix">
                    <hr>
                </ul>
            </div>
            <!--debut des images cote droit-->
            <div class="col-sm-3 text-align left">
                <img class="img-responsive" id="picRight" src="Images/Egypte3.jpg" alt="">
                <img class="img-responsive" id="picRight1" src="Images/salleEglise1.jpg" alt=""></div>


        </div>
    </div>
    <!-- Fin des images sur les cotes droit -->
    <div class="container-fluid">
        <div class="col-1">
            <div class="visitCount" style="display: <?php
            showVisitCount();
            ?>;">
                <a href='https://www.stat-counter.org/'></a>
                <script type="text/javascript" src="https://www.freevisitorcounters.com/en/home/counter/763438/t/12"></script>

            </div>
        </div>
    </div>
</main>
<!-- Fin du contenue -->
<!-- Début du pied de page -->
<div class="container-fluid">
    <?php require_once('php/footer.php') ?>
</div>