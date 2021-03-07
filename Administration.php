<!DOCTYPE html>
<html lang="en">
    <?php
    require_once('php/head.php');
    include 'Connection.php';
    updateContent();
    addText();
    ?>

    <body>
        <?php require_once('php/navigation.php'); ?>
        <h1>Bonjour M.<?php echo $_SESSION['user'] ?></h1>

        <button type="submit" name="addText" onclick="display();"  class="btn-dark"> Modifier Texte</button>
        <button type="submit" name="modtext" onclick="display2();" class="btn-dark"> Ajouter Texte</button>
        <form id="changeText" method="post"  class="form-group" style="background-color: lightgreen; display: none;">
            <table class="table">
                <legend>Modifier texte</legend>
                <thead>
                    <tr>
                        <th  scope="col">ID</th>
                        <th  scope="col">Content</th>

                    </tr>
                    <tr>
                        <td><select name="id" id="id"><?php addToList(); ?></select></td>
                        <td><textarea class="form-control" id="exampleFormControlTextarea1" name="content" columns="10"></textarea></td>
                    </tr>


            </table>
            <button type="submit" class="btn btn-info" name="modify">Enregistrer</button>


        </form>

        <form id="addText" method="post"  class="form-group" style="background-color: lightcyan; display: none;">
            <table class="table">
                <legend>Ajouter texte</legend>
                <thead>
                    <tr>
                        <th  scope="col">ID</th>
                        <th  scope="col">Content</th>

                    </tr>
                    <tr>
                        <td><input type="text" name="nomId"></td>
                        <td><textarea class="form-control" id="exampleFormControlTextarea1" name="content1" columns="10"></textarea></td>
                    </tr>


            </table>
            <button type="submit" class="btn btn-info" name="add">Enregistrer</button>


        </form>
        <a href="logout.php"><button type='button' class="btn btn-info" value="log out">Déconnection</button></a>
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
        <!-- Pied de page  -->
        <footer style="background-color: #033c73;">
            <sup style="color: azure;"> &#169 2020 Fondation Marie-Reine-De-La-Paix
            </sup>

        </footer>
    </div>
</html>
</body>