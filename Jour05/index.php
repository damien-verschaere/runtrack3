<?php
session_start();
if(isset($_SESSION['id'])){
echo'<p></p>';
}else{
    echo"<a href='signin.php'>Inscription</a>";
    echo"<a href='signup.php'>Connexion</a>";
}
?>