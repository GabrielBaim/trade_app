<?php
// Inicia a sessão
session_start();

// Destroi a sessão
session_destroy();

// Redireciona para a página de login com mensagem de aviso
echo '<script>alert("Você foi deslogado!");</script>';
header('Location: ../login.html');
exit;
?>
