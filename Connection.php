<?php

//Methode pour la connection
function connectionLogin() {
//instancier les variables
    global $conn;
    global $hn;
    $hn = 'localhost';
    global $un;
    $un = 'root';
    global $pw;
    $pw = "";
    global $db;
    $db = 'fondationmrp';
    global $conn;
    $strconnection = 'mysql:host=' . $hn . ';dbname=' . $db;
    $pdo = new PDO($strconnection, $un, $pw);

    return $pdo;
}

//Methode pour le login
function login() {
    $pdo = connectionLogin();
    try {//Si le champs du login est utiliser
        if (isset($_POST['login'])) {

            $Name = '';

            $Name = ($_REQUEST['user']);

            $password = ($_REQUEST['password']);

            $valide = true;

            $query = "select * from user where user.Name=:Name AND user.password=:password";

            $stmt = $pdo->prepare($query);
            $stmt->bindParam(':Name', $Name);
            $stmt->bindParam(':password', $password);
            $stmt->execute();
            $missedShot = 0;
            $count = $stmt->rowCount();
            /* Si le compte est plus grand que 1 */
            if ($count > 0) {
                $_SESSION['user'] = $_POST['user'];
                echo "<script>window.location.assign('Administration.php');</script>";
            } else {
                $missedShot ++;
                echo"<script>alert('tentative'.' '.$missedShot.' sur 3<script>";
                if ($missedShot == 3) {
                    echo "<script>window.location.assign('accueil.php');</script>";
                }
            }
        }
    } catch (Exception $exc) {
        echo $exc->getTraceAsString();
    }
}

function showVisitCount() {
    if (isset($_SESSION['user'])) {
        echo 'block';
    }
}

//use DOMDocument;
//
//add_filter('the_content', __NAMESPACE__);
//
//function updateParagraphElements($content) {
//    if (!is_single() || !is_main_query()) {
//        return $content;
//    }
//    $domDocument = new DOMDocument();
//    $domContent = $domDocument->loadHTML(mb_convert_encoding($content, 'HTML-ENTITIES'));
//    if (false === $domContent) {
//        return $content;
//    }
//    $paragraphs = $domDocument->getElementsByTagName('p');
//    if (0 === count($paragraphs)) {
//        return $content;
//    }
//// If so, iterate through the elements and add the post ID as a custom attribute.
//    $updatedContent = '';
//    foreach ($paragraphs as $paragraph) {
//        $paragraph->setAttribute('data-id', get_the_ID());
//    }
//    return wp_kses_post($domDocument->saveHTML());
//}
?>