<?php
    // $_SESSION['user']="damien";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="index.js"></script>
    <title>Document</title>
</head>
<body>
<?php
if (isset($_SESSION['user'])) {
    echo "<h1> bonjour" . $_SESSION['user'] . "</h1>";
}
else {
    echo "<h1> veuillez vous inscrire ou connectez </h1>";
    echo "<a href=>inscription</a>";
    echo"<a href=>connexion</a>";
}
?>
<form action="" method="post">
    <input type="text" id="nom">
    <input type="text" id="prenom">
    <input type="email" id="email">
    <input type="password" id="password">
    <button type="button" id="button">s'inscrire</button>
</form>
</body>
</html>