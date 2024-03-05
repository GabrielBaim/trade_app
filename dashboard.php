<?php
    // Inicia a sessão
    session_start();

    // Verifica se o usuário está autenticado
    if (!isset($_SESSION['usuario'])) {
        // Redireciona para a página de login
        header('Location: login.html');
        exit;
    }

    // Botão para deslogar
   
    ?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./assets/css/reset.css" />
    <link rel="stylesheet" href="./assets/css/main.css" />
    <title>Dashboard</title>
</head>
<body>
<div class="dashboard">
    
    <img src="./assets/img/logo.png" class="logo"/>
    <div class="frames">
    <iframe src="https://trade.exnova.com/pt/profile/personal" width="800" height="500">
</iframe>
<iframe src="./bot.html" >
</iframe>
    </div>
    <?php
    echo '<form action="./php/logout.php" method="POST">';
    echo '<input class="deslogar" type="submit" value="DESLOGAR ">';
    echo '</form>';
 ?>
</div>    


</body>
</html>
