/* =====================================================
   MELHOR AMIGO
   APP.JS
   ===================================================== */


/* =====================================================
   MOSTRAR TELA
   ===================================================== */

function mostrarTela(id) {

    const telas = document.querySelectorAll(".tela");

    telas.forEach(function(tela) {

        tela.classList.remove("ativa");

    });

    const tela = document.getElementById(id);

    if (tela) {

        tela.classList.add("ativa");

    }

}


/* =====================================================
   SPLASH → LOGIN
   ===================================================== */

setTimeout(function() {

    mostrarTela("login");

}, 3000);


/* =====================================================
   LOGIN
   ===================================================== */

function entrarComEmail() {

    const email =
        document.getElementById("loginEmail").value.trim();

    const senha =
        document.getElementById("loginSenha").value;


    if (!email || !senha) {

        alert("Preencha o e-mail e a senha.");

        return;

    }


    const dados =
        localStorage.getItem("melhorAmigoTutor");


    if (!dados) {

        alert(
            "Nenhum cadastro encontrado. Faça seu cadastro primeiro."
        );

        return;

    }


    const tutor = JSON.parse(dados);


    if (
        email.toLowerCase() !==
        tutor.email.toLowerCase()
    ) {

        alert("E-mail não encontrado.");

        return;

    }


    if (senha !== tutor.senha) {

        alert("Senha incorreta.");

        return;

    }


    mostrarTela("inicio");

}


/* =====================================================
   ABRIR CADASTRO
   ===================================================== */

function abrirCadastro() {

    mostrarTela("cadastro");

}


/* =====================================================
   VOLTAR PARA LOGIN
   ===================================================== */

function abrirLogin() {

    mostrarTela("login");

}


/* =====================================================
   CADASTRAR TUTOR
   ===================================================== */

function cadastrarTutor() {

    const nome =
        document.getElementById("nomeTutor").value.trim();

    const email =
        document.getElementById("emailTutor").value.trim();

    const telefone =
        document.getElementById("telefoneTutor").value.trim();

    const cpf =
        document.getElementById("cpfTutor").value.trim();

    const senha =
        document.getElementById("senhaTutor").value;

    const confirmar =
        document
            .getElementById("confirmarSenhaTutor")
            .value;


    if (!nome) {

        alert("Preencha o nome completo.");

        return;

    }


    if (!email || !email.includes("@")) {

        alert("Digite um e-mail válido.");

        return;

    }


    if (!telefone) {

        alert("Preencha o telefone/WhatsApp.");

        return;

    }


    if (!cpf) {

        alert("Preencha o CPF.");

        return;

    }


    if (senha.length < 6) {

        alert(
            "A senha deve ter pelo menos 6 caracteres."
        );

        return;

    }


    if (senha !== confirmar) {

        alert("As senhas não conferem.");

        return;

    }


    const tutor = {

        nome: nome,
        email: email,
        telefone: telefone,
        cpf: cpf,
        senha: senha

    };


    localStorage.setItem(
        "melhorAmigoTutor",
        JSON.stringify(tutor)
    );


    alert(
        "Cadastro realizado com sucesso!"
    );


    mostrarTela("inicio");

}


/* =====================================================
   MOSTRAR SENHA
   ===================================================== */

function mostrarSenha(id) {

    const campo =
        document.getElementById(id);


    if (!campo) {

        return;

    }


    if (campo.type === "password") {

        campo.type = "text";

    } else {

        campo.type = "password";

    }

}


/* =====================================================
   MEUS PETS
   ===================================================== */

function abrirMeusPets() {

    mostrarTela("meusPets");

}


/* =====================================================
   VOLTAR PARA INÍCIO
   ===================================================== */

function abrirInicio() {

    mostrarTela("inicio");

}


/* =====================================================
   AGENDA
   ===================================================== */

function abrirAgenda() {

    mostrarTela("agenda");

}


/* =====================================================
   VACINAS
   ===================================================== */

function abrirVacinas() {

    mostrarTela("vacinas");

}


/* =====================================================
   PRONTUÁRIO
   ===================================================== */

function abrirProntuario() {

    mostrarTela("fichaPet");

}


/* =====================================================
   BANHO E TOSA
   ===================================================== */

function abrirBanhoTosa() {

    mostrarTela("banhoTosa");

}


/* =====================================================
   EQUIPE
   ===================================================== */

function abrirEquipe() {

    mostrarTela("equipe");

}


/* =====================================================
   PACOTES
   ===================================================== */

function abrirPacotes() {

    mostrarTela("cadastroPet");

}


/* =====================================================
   GOOGLE
   ===================================================== */

function loginGoogle() {

    alert(
        "Login com Google será conectado posteriormente."
    );

}


/* =====================================================
   APPLE
   ===================================================== */

function loginApple() {

    alert(
        "Login com Apple será conectado posteriormente."
    );

}


/* =====================================================
   WHATSAPP
   ===================================================== */

function loginWhatsApp() {

    alert(
        "Login pelo WhatsApp será conectado posteriormente."
    );

}


/* =====================================================
   MÁSCARA CPF
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const cpf =
            document.getElementById("cpfTutor");


        if (cpf) {

            cpf.addEventListener(
                "input",
                function() {

                    let valor =
                        cpf.value
                            .replace(/\D/g, "")
                            .substring(0, 11);


                    if (valor.length > 9) {

                        valor =
                            valor.replace(
                                /(\d{3})(\d{3})(\d{3})(\d{1,2})/,
                                "$1.$2.$3-$4"
                            );

                    } else if (valor.length > 6) {

                        valor =
                            valor.replace(
                                /(\d{3})(\d{3})(\d+)/,
                                "$1.$2.$3"
                            );

                    } else if (valor.length > 3) {

                        valor =
                            valor.replace(
                                /(\d{3})(\d+)/,
                                "$1.$2"
                            );

                    }


                    cpf.value = valor;

                }
            );

        }


        /* =================================================
           MÁSCARA TELEFONE
           ================================================= */

        const telefone =
            document.getElementById(
                "telefoneTutor"
            );


        if (telefone) {

            telefone.addEventListener(
                "input",
                function() {

                    let valor =
                        telefone.value
                            .replace(/\D/g, "")
                            .substring(0, 11);


                    if (valor.length > 10) {

                        valor =
                            valor.replace(
                                /(\d{2})(\d{5})(\d+)/,
                                "($1) $2-$3"
                            );

                    } else if (valor.length > 6) {

                        valor =
                            valor.replace(
                                /(\d{2})(\d{4})(\d+)/,
                                "($1) $2-$3"
                            );

                    } else if (valor.length > 2) {

                        valor =
                            valor.replace(
                                /(\d{2})(\d+)/,
                                "($1) $2"
                            );

                    }


                    telefone.value = valor;

                }
            );

        }

    }
);