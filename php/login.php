<?php
// Permitindo apenas o método POST
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("HTTP/1.1 405 Method Not Allowed");
    exit;
}

// Função para abrir a conexão com o banco de dados SQLite3
function abrirConexao() {
    $db = new PDO('sqlite:usuarios.db');
    return $db;
}

// Função para verificar o login do usuário
function verificarLogin($conexao, $usuario, $senha) {
    $sql = "SELECT * FROM usuarios WHERE usuario = :usuario AND senha = :senha";
    $stmt = $conexao->prepare($sql);
    $stmt->bindValue(':usuario', $usuario, PDO::PARAM_STR);
    $stmt->bindValue(':senha', $senha, PDO::PARAM_STR);
    $resultado = $stmt->execute();

    if ($resultado) {
        // Verifica se encontrou algum registro
        $usuario = $stmt->fetch();
        return $usuario ? true : false;
    } else {
        // Em caso de erro na execução da consulta
        return false;
    }
}

// Verifica se os campos foram submetidos
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Abre a conexão com o banco de dados
    $conexao = abrirConexao();

    // Recupera os dados do formulário
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    // Verifica o login do usuário
    if (verificarLogin($conexao, $usuario, $senha)) {
        // Inicia a sessão
        session_start();
        
        // Armazena o nome de usuário na sessão
        $_SESSION['usuario'] = $usuario;

        // Verifica se a opção "lembrar-me" foi marcada
        if (isset($_POST['lembrar'])) {
            // Define um cookie para lembrar o usuário por 30 dias
            setcookie('usuario', $usuario, time() + (30 * 24 * 60 * 60), '/');
        }

        // Redireciona para a página dashboard
        header('Location: ../dashboard.php');
        exit;
    } else {
        // Exibe um script para exibir um popup com a mensagem de erro
        echo "<script>alert('Usuário ou senha incorretos.');</script>";
        header('Location: ../login.html');
        exit;
    }

    // Fecha a conexão com o banco de dados
    $conexao = null;
}
?>
