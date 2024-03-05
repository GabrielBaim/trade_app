<?php
// Função para abrir a conexão com o banco de dados SQLite3 usando PDO
function abrirConexao() {
    $db = new PDO('sqlite:usuarios.db');
    return $db;
}

// Função para criar a tabela de usuários
function criarTabelaUsuarios($conexao) {
    $sql = "CREATE TABLE IF NOT EXISTS usuarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                usuario TEXT NOT NULL UNIQUE,
                senha TEXT NOT NULL
            )";

    $conexao->exec($sql);
}

// Função para verificar se o usuário já existe
function usuarioExiste($conexao, $usuario) {
    $sql = "SELECT * FROM usuarios WHERE usuario = :usuario";
    $stmt = $conexao->prepare($sql);
    $stmt->bindValue(':usuario', $usuario, PDO::PARAM_STR);
    $stmt->execute();

    return $stmt->fetch() ? true : false;
}

// Função para cadastrar um novo usuário
function cadastrarUsuario($conexao, $usuario, $senha) {
    $sql = "INSERT INTO usuarios (usuario, senha) VALUES (:usuario, :senha)";
    $stmt = $conexao->prepare($sql);
    $stmt->bindValue(':usuario', $usuario, PDO::PARAM_STR);
    $stmt->bindValue(':senha', $senha, PDO::PARAM_STR);

    return $stmt->execute();
}

// Verifica se os campos foram submetidos
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Abre a conexão com o banco de dados
    $conexao = abrirConexao();
    
    // Cria a tabela de usuários, se não existir
    criarTabelaUsuarios($conexao);
    
    // Recupera os dados do formulário
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    // Verifica se o usuário já existe
    if (usuarioExiste($conexao, $usuario)) {
        echo "Usuário já existe. Por favor, escolha outro nome de usuário.";
    } else {
        // Cadastra o novo usuário no banco de dados
        if (cadastrarUsuario($conexao, $usuario, $senha)) {
            echo "Usuário cadastrado com sucesso!";
        } else {
            echo "Erro ao cadastrar usuário.";
        }
    }

    // Fecha a conexão com o banco de dados
    $conexao = null;
}
?>
