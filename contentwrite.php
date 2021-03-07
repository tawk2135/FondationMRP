<?php

function Write($id) {
    $pdo = connectionLogin();
    try {
        $query = 'select content.content from content where content.id=:id';
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        while ($row = $stmt->fetch($pdo::FETCH_OBJ)) {
            echo $row->content;
        }
    } catch (Exception $exc) {
        echo $exc->getTraceAsString();
    }
}

function addToList() {
    $pdo = connectionLogin();
    try {
        $query = 'select * from content';
        $stmt = $pdo->prepare($query);

        $stmt->execute();
        while ($row = $stmt->fetch($pdo::FETCH_OBJ)) {
            echo '<option>' . $row->id . '</option>';
        }
    } catch (Exception $exc) {
        echo $exc->getTraceAsString();
    }
}

function updateContent() {
    $pdo = connectionLogin();
    try {
        if (isset($_POST['modify'])) {
            $id = $_POST['id'];
            $content = $_POST['content'];
            $query = 'update content set content=:content where id=:id';
            $stmt = $pdo->prepare($query);
            $stmt->bindParam(':id', $id);
            $stmt->bindParam(':content', $content);
            $stmt->execute();
        }
    } catch (Exception $exc) {
        echo $exc->getTraceAsString();
    }
}

function addText() {
    $pdo = connectionLogin();
    $count = true;
    try {
        if (isset($_POST['add'])) {

            $id = $_POST['nomId'];
            $content = $_POST['content1'];
            $query = 'select * from content where id=:id';
            $prep = $pdo->prepare($query);
            //$prep->bindParam(':content', $content);
            $prep->bindParam(':id', $id);
            $prep->execute();
            while ($row = $prep->fetch(PDO::FETCH_ASSOC)) {
                if ($row['id'] === $id) {
                    echo '<script>alert("Cet id existe déjà veuillez en choisir un autre")</script>';
                    $count = FALSE;
                }
            }
            if ($count == true) {
                if (!(strlen($id) == 0 || strlen($content) == 0 || $count == FALSE)) {

                    $query1 = "insert into content(id,content)values(:id,:content)";
                    $stmt = $pdo->prepare($query1);
                    $stmt->bindParam(':content', $content);
                    $stmt->bindParam(':id', $id);
                    $stmt->execute();
                } else {
                    echo '<script>alert("SVP remplir tout les champs")</script>';
                }
            }
        }
    } catch (Exception $exc) {
        echo $exc->getTraceAsString();
    }
}
