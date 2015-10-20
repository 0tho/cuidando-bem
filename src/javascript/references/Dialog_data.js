/**
 *
 * @author Otho - Marcelo Lopes Lotufo
 */
define({
    tutorial: {
        recepcao: [
            //0 Recepcionista
            "Bom dia! Ainda n�o conhe�o voc�. Como posso ajudar?",
            //1 Jogador
            "Bom dia. Sou profissional de enfermagem e hoje � meu primeiro dia de trabalho.",
            //2 Recepcionista
            "Ah, sim! Sou Clarice, a recepcionista. O Enfermeiro mentor est� te esperando no corredor."
        ],
        corredor: [
            //0 Mentor
            "Ol�! Toda a equipe do Hospital Cuidando Bem te deseja boas vindas! Sou Alberto, seu enfermeiro mentor." +
            " Aqui nossa miss�o � a garantia da seguran�a de nossos pacientes atrav�s dos protocolos. Voc� far� um est�gio" +
            " de experi�ncia e, caso se saia bem, seu contrato ser� definitivo.",
            //1 Jogador op 1
            "Agrade�o, Alberto! Espero conseguir atender suas expectativas.",
            //2 Jogador op 2
            "Preciso come�ar agora?",
            //3 Mentor
            "Esteja sempre preparado para o trabalho",
            //4 Jogador op 3
            "Agrade�o, Alberto, mas tenho certeza que posso trabalhar sem sua supervis�o.",
            //5 Mentor
            "Sempre aceite ajuda de um profissional mais experiente.",
            //6 Mentor
            "Agora me acompanhe, come�aremos pela enfermaria masculina."
        ],
        leito: {
            perguntarNome: "Me desculpe, mas poderia repetir seu nome completo e sua data de nascimento?",
            conversa1: [
                //0 Mentor
                "Este � o Sr. Jo�o, seu primeiro paciente. Um dos principais protocolos de seguran�a" +
                " � a sua apresenta��o ao paciente e a certifica��o de que a identifica��o dele est� correta.",
                //1 Jogador op 1
                "Ol� Sr. Jo�o. Sou profissional de enfermagem e cuidarei do Sr. hoje." +
                " Como est� se sentindo?",
                //2 Jogador op 2
                "Ol�, sou eu quem cuidar� do senhor hoje. Est� se sentindo bem?",
                //3 Mentor
                "Voc� precisa se apresentar como profissional de enfermagem!",
                //4 Jogador op 3
                "Ol�, senhor Jo�o. Sou profissional de enfermagem do hospital, tenho 28 anos e cuidarei" +
                " do senhor hoje. � um prazer conhec�-lo. Como est� se sentindo?",
                //5 Mentor
                "Sua apresenta��o cont�m informa��es desnecess�rias.",
                //6 Paciente
                "Estou com muita dor de cabe�a e passei muito nervoso hoje, acho que minha press�o subiu" +
                " � a primeira vez que preciso ser internado em um hospital e estou com um pouco de medo.",
                //7 Jogador op 1
                "Vamos fazer o poss�vel para que sua estadia aqui seja r�pida e que se sinta em casa." +
                " Por�m, primeiro preciso do seu nome completo e da sua data de nascimento, tudo bem?!",
                //8 Jogador op 2
                " Vamos fazer o poss�vel para que se sinta confort�vel.",
                //9 Mentor
                "Voc� precisa das informa��es sobre o paciente.",
                //10 Jogador op 3
                "HAHAHA fique sussa, seu Jo�o, o senhor vai pra casa em breve. Mas primeiro preciso" +
                " dos seus dados.",
                //11 Mentor
                "Sua resposta est� vaga e informal. Voc� pode melhorar!",
                //12 Paciente
                "Meu nome � Jo�o Manoel Ribeiro, nasci no dia 07/06/1956.",
                //13 Jogador
                " Est� certo, seu Jo�o. J� tenho todas as informa��es de que preciso ",
                //14 Mentor
                "Sua primeira miss�o � admitir o Sr. Jo�o nesta enfermaria, identificando-o" +
                " com uma pulseira e verificando os seus sinais vitais. Antes de come�ar," +
                " v� at� o posto de enfermagem retirar os instrumentos necess�rios."
            ],
            conversa2: [
                //0 Jogador op 1
                "Sr. Jo�o, esta pulseira agora � a sua identifica��o aqui dentro do hospital. Ela � importante para" +
                " que ningu�m o confunda com outro paciente. Daqui em diante, quando for submetido a um procedimento" +
                " m�dico, pe�a ao profissional de sa�de para verificar essa identifica��o." +
                " Agora preciso verificar seus sinais vitais, ok?",
                //1 Jogador op 2
                "Senhor Jo�o, fique com esta pulseira de identifica��o at� o fim de sua" +
                " estadia aqui. Vamos realizar alguns procedimentos m�dicos?",
                //2 Mentor
                "Voc� deve explicar ao paciente a fun��o da pulseira de identifica��o.",
                //3 Jogador op 3
                "Senhor Jo�o, vamos verificar seus sinais vitais?",
                //4 Mentor
                "N�o se esque�a: A pulseira de identifica��o � importante!",
                //5 Paciente
                "Ok. Obrigado.",
                //6 Jogador
                "De nada.",
                //7 Mentor
                "Parab�ns, voc� conseguiu admitir o paciente neste hospital! Agora falta algo muito importante:" +
                " anotar os procedimentos realizados e os dados obtidos dos sinais vitais (SSVV) do paciente. Vamos l�?"
            ],
            pulseira_incorreta: "Voc� tem certeza que as informa��es do paciente est�o corretas?"
        }
    },

    fase1: {
        recepcao: [
            //0 Recepcionista
            "Oi! Parece que deu tudo certo com seu primeiro paciente. Parab�ns!" +
            " O mentor j� te espera para um novo caso.",
            //1 Jogador
            "Ele deve estar no corredor. Estou indo encontr�-lo, Clarice."
        ],
        corredor: {
            fala1: [
                //0 Mentor
                "Bom dia! Seu segundo paciente tem 69 anos, est� acamado e sabemos que isso � um fator de" +
                " risco para o desenvolvimento de �lcera por press�o, a mudan�a de posi��o � essencial!",
                //1 Jogador
                "Bom dia, Alberto! Vou at� a enfermaria conhec�-lo."
            ],
            fala2: [
                //0 Mentor
                "Voc� inspecionou a pele do paciente?",
                //1 Jogador op 1
                "Sim e encontrei algumas regi�es hiperemiadas no cotovelo.",
                //2 Jogador op 2
                "Sim, por�m n�o encontrei nada.",
                //3 Mentor
                "Voc� tem certeza?",
                //4 Jogador op 3
                "Rapidamente e tenho algumas d�vidas.",
                //5 Mentor
                "A inspe��o deve ser minuciosa e requer aten��o.",
                //6 Mentor
                "Isso mesmo! Em casos como este � essencial a mudan�a de posi��o (dec�bito)" +
                " a cada 2 horas e colocar coxim.",
                //7 Jogador op 1
                "Vou  procurar no posto de enfermagem imediatamente.",
                //8 Jogador op 2
                "O que � coxim?",
                //9 Mentor
                "O coxim � um objeto parecido com um travesseiro.",
                //10 Jogador op 3
                "Ok.",
                //11 Mentor
                "O que voc� deve procurar no posto de enfermagem agora?"
            ]
        },
        perguntarNome: "Me desculpe, mas poderia repetir seu nome completo e sua data de nascimento?",
        enfermaria: [
            //0 Jogador op 1
            "Ol�! Sou o t�cnico de enfermagem cuidarei do Sr. hoje. Como o Sr. est� se sentindo?",
            //1 Jogador op 2
            "Bom dia. O senhor est� se sentindo bem hoje?",
            //2 Mentor
            "Voc� deve se apresentar ao paciente.",
            //3 Jogador op 3
            "Ol�.",
            //4 Mentor
            "Voc� deve se apresentar ao paciente e perguntar sobre seu estado de sa�de atual.",
            //5 Paciente
            "Olha, eu poderia estar melhor mas n�o serviram minha preciosa gelatina hoje. HAHAHAHAHA.",
            //6 Jogador op 1
            "A gelatina daqui � �tima mesmo. O senhor poderia me dizer" +
            " seu nome completo e data de nascimento, por favor?",
            //7 Jogador op 2
            "Nome completo, por favor.",
            //8 Mentor
            "Sua resposta est� incompleta. Tente novamente.",
            //9 Jogador op 3
            "HAHAHA eu n�o gosto muito, comi uma vez e meu est�mago n�o se acostumou. A comida � ruim," +
            " mas vou dar um voto de confian�a e tentar jantar. Quem sabe dessa vez melhore?" +
            " Agora preciso de seu nome completo e data de nascimento, por favor.",
            //10 Mentor
            "N�o � �tico dizer ao paciente sua percep��o sobre o hospital.",
            //11 Paciente
            "Carlos Esme Gouv�a, nasci em 01/12/1945.",
            //12 Jogador
            "Vou verificar sua pulseira e depois examin�-lo, senhor Carlos. Com licen�a."
        ]
    },

    fase2: {
        recepcao: [
            //0 Recepcionista
            "Bom dia! Hoje o mentor n�o poder� te apresentar seu novo paciente, mas estar� aqui no hospital" +
            " caso precise dele. Ele tamb�m pediu que voc� comece pela enfermaria masculina. Boa Sorte!"
        ],
        ala_masculina: [
            //0 Jogador
            "Bom dia!",
            //1 Paciente
            "Bom dia.",
            // A��o - pegar o prontu�rio
            //2 Jogador
            "Parece que temos um procedimento para ser realizado, vou at� o posto de enfermagem e j� volto."
        ],
        leito_paciente: [
            //0 Jogador
            "Ol�. Sou profissional de enfermagem e preciso fazer alguns testes." +
            " Deixe-me conferir sua pulseira de identifica��o, por favor?",
            //1 Paciente
            "Pero de nuevo?",
            //2 Jogador
            "� um procedimento padr�o. Raul Gonzales, 78 anos, certo?" +
            " Pelo sotaque d� para perceber que o senhor n�o � daqui. Espanha?",
            //3 Paciente
            "No no no, soy de mi amada Argentina.",
            //4 Jogador
            "Justo a Argentina, senhor Raul? Hahaha. Vou verificar sua glicemia para que possamos acompanhar" +
            " a diabetes. Quando precisar se levantar, aperte a campainha e ter� aux�lio imediato.",
            //5 Paciente
            "Gracias! Soy velho e �ltimamente j� no consigo estar de pie.",
            //A��o - medir a glicemia
            //6 Paciente
            "Cu�l foi el resultado?",
            //7 Jogador op 1
            "N�o me lembro do valor",
            //8 Mentor
            "Memorize o valor e tente novamente.",
            //9 Jogador op 2
            "Sua glicemia est� 180 mg/dl. N�o se preocupe, est� estabilizando.",
            //10 Jogador op 3
            "240 mg/dl.",
            //11 Mentor
            " Seu resultado est� incorreto. Tente novamente."
        ],
        corredor: [
            //0 Jogador
            "Ol�, Alberto. A taxa de glicemia  do paciente estava alterada, tornando-o propenso a" +
            " quedas. Ergui a grade do leito e cumpri os procedimentos prescritos.",
            //1 Mentor
            "O  N�cleo de Seguran�a do Paciente do nosso hospital orienta a avalia��o di�ria do" +
            " paciente para a diminui��o das incid�ncias de quedas. Parab�ns pela avalia��o."
        ]
    },

    fase3: {
        recepcao: [
            //0 Recepcionista
            "Bom dia! O mentor lhe espera no corredor."
        ],
        corredor: {
            fala1: [
                //0 Mentor
                "Ol�! Estamos prestes a entrar no centro cir�rgico. Voc� ser� respons�vel pela aplica��o" +
                " da primeira fase da lista de verifica��o de seguran�a cir�rgica. Por�m, antes de come�armos," +
                " voc� sabe qual a import�ncia da aplica��o desta lista?",
                //1 Jogador op 1
                "Claro! Ela � utilizada para reduzir os riscos de incidentes cir�rgicos.",
                //2 Jogador op 2
                "Desculpe, n�o sei o porqu� devo utiliz�-la.",
                //3 Jogador op 3
                "�  apenas um papel a ser preenchido, sem muita import�ncia.",
                //4 Mentor
                "Muito bem! Antes de levar a paciente para a cirurgia, voc� deve ir ao centro cir�rgico" +
                " e verificar com a circulante de sala se todos os equipamentos est�o em ordem?"
            ],
            fala2: [
                //0 Jogador
                "Tudo pronto, Alberto, a paciente j� est� no centro cir�rgico.",
                //1 Mentor
                "Utilizar o protocolo de cirurgia segura � um ganho enorme para nosso hospital e todos os  pacientes." +
                " Parab�ns!"
            ]
        },
        centro_cirurgico: {
            fala1: [
                //0 Aline
                "Bom dia! Voc�  encaminhar� a paciente ao centro cir�rgico?",
                //1 Jogador op 1
                "Sim! Mas antes, o mentor Alberto me pediu para verificar os equipamentos da sala com voc�.",
                //2 Jogador op 2
                "N�o, ainda n�o a conheci!",
                //3 Jogador op 3
                "Sim, j� vou busc�-la.",
                //4 Jogador
                "Terminamos, Aline. Vou buscar a paciente."
            ],
            fala2: [
                //0 Aline
                "Voc� sabe em qual momento precisar� realizar a primeira" +
                " fase da lista de verifica��o de seguran�a cir�rgica?",
                //1 Jogador op 1
                "Claro! A primeira fase � antes da indu��o anest�sica.",
                //2 Jogador op 2
                "Claro! A primeira fase � antes da incis�o cir�rgica.",
                //3 Jogador op 3
                "Claro! A primeira fase � antes do paciente sair da sala de opera��o.",
                //4 Jogador
                "Regina, preciso fazer algumas perguntas antes da indu��o anest�sica, tudo bem?" +
                " Apenas para verificar se est� tudo em ordem.",
                //5 Paciente
                "Magina! Pode fazer quantas perguntas quiser.",
                //6 Jogador
                "Seu nome?",
                //7 Paciente
                "Regina Oliveira",
                //8 Jogador
                "Parte do corpo em que ser� feita a cirurgia?",
                //9 Paciente
                "P� esquerdo.",
                //10 Jogador
                "Qual procedimento ser� realizado?",
                //11 Paciente
                "Num sei o nome direito, acho que � amputa��o transt�rtica ou coisa parecida." +
                " Ah, v�o colocar enxerto tamb�m.",
                //12 Jogador
                "Certo! O nome do procedimento � Amputa��o transmetat�rsica � esquerda e Enxerto Popl�teo." +
                " A senhora assinou o termo de consentimento?",
                //13 Paciente
                "Sim.",
                //14 Jogador
                "A senhora possui algum tipo de alergia?",
                //15 Paciente
                "Que eu saiba, n�o.",
                //16 Jogador op 1
                "Tudo certo at� agora, Regina. Agora preciso verificar o ox�metro de pulso e o local da cirurgia.",
                //17 Jogador op 2
                "Tudo certo at� agora, Regina. Vamos para a sala de cirurgia?",
                //18 Jogador op 3
                "Desculpe, Regina, preciso fazer mais algumas perguntas."
            ]
        },
        ala_feminina: [
            //tabela
        ],
        leito_paciente: [
            //0 Jogador
            "Bom dia! Sou profissional de enfermagem e levarei a senhora para a sala de cirurgia." +
            " Qual � o seu nome?",
            //1 Paciente
            "Bom dia! Regina Oliveira, muito prazer.",
            //2 Jogador
            "O prazer � meu. A senhora est� agendada para uma cirurgia hoje, certo?!" +
            " Como est� se sentindo?",
            //3 Paciente
            "Certo. T� um tiquinho nervosa, pra mim agulha s� � boa com linha.",
            //4 Jogador
            "A senhora costura? Que legal! Fique tranquila, Regina, estamos cuidando de todos os detalhes de sua cirurgia." +
            " A senhora n�o pode entrar no centro cir�rgico com adornos ou pr�teses. Est� ou tem algo do g�nero?",
            //5 Paciente
            "Num t� n�o! Minha filha j� t� com tudinho l� fora."
        ]
    },

    fase4: {
        recepcao: [
            //0 Jogador
            "Bom dia, Clarice.",
            //1 Clarice
            "Bom dia! O paciente j� est� � sua espera."
        ],
        ala_masculina: [
            //0 Jogador
            "Bom dia! Sou profissional de enfermagem e atenderei o senhor hoje. Deixe-me ver seu prontu�rio...",
            //1 Paciente
            "Bom dia. Hora da medica��o? Qual � a de hoje?",
            //2 Jogador op 1
            "Sim senhor! Ainda � o segundo dia de uso do Keflin. Vou preparar sua medica��o e j� volto.",
            //3 Jogador op 2
            "Sim, mas o nome da medica��o n�o � uma informa��o importante, n�o se preocupe.",
            //4 Jogador op 3
            "N�o sei dizer, n�o h� nada anotado no prontu�rio."
        ],
        farmacia: [
            //0 Paulo
            "Bom dia! Do que precisa?",
            //1 Jogador
            "Bom dia, Paulo! Vim buscar o medicamento prescrito para um paciente da enfermaria masculina." +
            " Aqui est� o prontu�rio.",
            //2 Paulo
            "Pronto. Este � o frasco de Keflin, sua apresenta��o � de 1g.",
            //3 Jogador
            "Agrade�o, Paulo! Preciso voltar ao paciente."
        ],
        posto_enfermagem: [
            //C�lculo de medicamente
            //0 Jogador
            "Acredito que peguei tudo o que precisava.",
            //1 Mentor
            "Muito bem! Vamos conferir se a medica��o dispensada � a mesma prescrita."
        ],
        leito_paciente: [
        //0 Jogador
        "Voltei. Antes da administra��o do medicamento, o senhor poderia me dizer" +
        " seu nome e data de nascimento, por favor?",
        //1 Paciente
        "Claro. Pedro Alc�des Mendon�a, nasci em 03 de junho de 1962.",
        //2 Jogador op 1
        "Senhor Pedro, este medicamento � o Keflin; sua a��o � antimicrobiana" +
        " e ele vai correr no per�odo de uma hora, tudo bem?",
        //3 Jogador op 2
        "Senhor Pedro, vou administrar o medicamento. Tudo bem?",
        //4 Jogador op 3
        "Senhor Pedro, vou administrar o medicamento. Caso queira saber sua fun��o," +
        " pergunte ao m�dico respons�vel e ele saber� te informar.",
        //5 Paciente
        "Muito obrigado. E me desculpe pelas perguntas, � mania de professor.",
        //6 Jogador
        "Hahaha. Sem problemas. Se sentir qualquer sensa��o estranha � s� me comunicar." +
        " Por favor, n�o abra a pin�a do equipo e em breve poder� voltar para seus alunos.",
        //7 Mentor
        "Lembre-se sempre de utilizar os nove certos na administra��o de medicamentos!" +
        " Deste modo reduzimos a possibilidades de erros."
        ]
    },

    fase5: {
        recepcao:[
            //0 Recepcionista
            "Bom tarde! Temos uma paciente � sua espera."
        ],
        corredor: [
            //0 Jogador
            "Boa tarde, Alberto!",
            //1 Mentor
            "Boa tarde! A paciente de hoje teve um Acidente Vascular Encef�lico Isqu�mico (AVE)." +
            " Ela tamb�m sofreu uma queda, resultando em uma les�o. V� at� a enfermaria" +
            " feminina para realizar os procedimentos necess�rios."
        ],
        ala_feminina: [
            //0 Jogador
            "Boa tarde!",
            //1 Paciente
            "Boa tarde!",
            //2 Jogador
            "Sou da equipe de enfermagem do hospital e realizarei os cuidados esta tarde."
        ],
        leito_paciente: {
            fala1: [
                //tabela
            ],
            fala2: [
                //0 Jogador
                "Antes de come�armos, a senhora poderia me dizer seu nome completo, por favor?",
                //1 Paciente
                "Esther Fidelis.",
                //2 Jogador
                "Senhora Esther, temos dois procedimentos a serem realizados: o primeiro ser�" +
                " um teste de glicemia capilar. O segundo ser� um curativo no local machucado pela queda." +
                " A senhora sofreu um acidente vascular, n�o � mesmo?",
                //3 Paciente
                "Sim. O estress e a correria no Consulado s�o di�rias, eu j� esperava que isso talvez" +
                " pudesse acabar acontecendo. Ao menos os movimentos do meu lado direito est�o voltando," +
                " tudo estava paralisado. E caso ajude, sou diab�tica e hipertensa.",
                //4 Jogador op 1
                "Realizarei alguns procedimentos, qualquer d�vida basta perguntar." +
                " Al�m disso, deixarei sua grade sempre erguida; a senhora pode ter" +
                " sensa��o de desequil�brio devido � queda e a medica��o.",
                //5 Jogador op 2
                "Vou come�ar a realizar os procedimentos!"
            ]
        }
    },

    fase6: {
        recepcao: [
            //0 Recepcionista
            "Bom dia! O mentor te espera no corredor para a apresenta��o do seu pr�ximo caso.",
            //1 Jogador
            "Estou indo encontr�-lo, Clarice."
        ],
        corredor: [
            //0 Mentor
            "Bom dia! Hoje seu paciente ser� o senhor Josivaldo Silva. A alimenta��o dele" +
            " est� sendo realizada atrav�s de uma sonda nasog�strica. Lembre-se de que os" +
            " cuidados na administra��o de dietas s�o iguais aos da administra��o de medicamentos.",
            //1 Jogador op 1
            "Sim, Alberto! Antes de administrar qualquer subst�ncia, sei que devo" +
            " prestar aten��o na conex�o correta da sonda.",
            //2 Jogador op 2
            "Sim, Alberto! N�o se preocupe, passar uma dieta � simples.",
            //3 Mentor
            "Boa sorte com seu novo paciente!"
        ],
        ala_masculina: [
            //0 Jogador
            "Bom dia! Sou profissional de enfermagem e acompanharei o senhor esta manh�." +
            " Como est� se sentindo?",
            //1 Paciente
            "Bom dia! T� marromeno, mas nada que me aperreie.",
            //2 Jogador op 1
            "Senhor Josivaldo... Seu prontu�rio tem uma prescri��o de dieta," +
            " vou at� a farm�cia buscar os equipamentos necess�rios e j� volto.",
            //3 Jogador op 2
            "Senhor Josivaldo... Al�m de sua sonda nasog�strica, por hora n�o h� nada prescrito."
        ],
        farmacia: [
            //0 Jogador op 1
            "Oi, Paulo! Preciso de uma dieta para um paciente que est� com sonda nasog�strica.",
            //1 Jogador op 2
            "Oi, Paulo! Me esqueci do que estava anotado na prescri��o, aguarde um momento.",
            //2 Farmaceutico
            "A dieta dele foi solicitada ontem e j� est� preparada. Aqui est�.",
            //3 Mentor
            "Voc� conferiu a dieta corretamente. Parab�ns! A partir deste momento, tenha em mente que" +
            " neste hospital usamos equipos de cores espec�ficas para evitar poss�veis erros de conex�o."
        ],
        posto_enfermagem: [
            //0 Jogador op 1
            "A infus�o da dieta ocorrer� em 67 gotas por minuto no per�odo de uma hora.",
            //1 Jogador op 2
            "A infus�o da dieta ocorrer� em 33 gotas por minuto no per�odo de uma hora.",
            //2 Jogador op 3
            "A infus�o da dieta ocorrer� em 67 gotas no per�odo de uma hora."
        ],
        leite_paciente: [
            //0 Jogador
            "Vou come�ar a administrar sua dieta, mas antes, por favor, me diga seu nome completo e data de nascimento.",
            //1 Paciente
            "�xi! Craro! Mi chamo Josivaldo da Silva, mas n�o se avexe n�o, p�di cham� de Valdin." +
            " Nasci no s�rt�o da Para�ba dia 02 de f�verero de 1961.",
            //2 Jogador
            "Nordestino, Josivaldo?",
            //3 Paciente
            "Nord�stino, da p�xera e carni di sol paraibana, com muito �rgulho!",
            //4 Jogador
            "Que legal! Sempre quis conhecer o nordeste brasileiro. Qualquer d�vida ou anormalidade na sonda" +
            " durante a passagem da dieta, basta me avisar e resolverei o problema.",
            //5 Paciente
            "Sim sinh�! Brigado."
        ]
    },

    fase7: {
        recepcao:[
            //0 Jogador
            "Bom dia, Clarice.",
            //1 Recepcionista
            "Bom dia. Uma paciente te espera na enfermaria feminina."
        ],
        enfermaria_feminina: [
            //0 Jogador op 1
            "Bom dia! Fa�o parte da equipe de enfermagem do hospital e cuidarei de voc� hoje Como voc� se chama?",
            //1 Jogador op 2
            "Bom dia! Como se chama?",
            //2 Paciente
            "Ana Beatriz Galv�o.",
            //3 Jogador
            "Muito prazer, Ana Beatriz. Voc� est� recebendo medica��o antes do caf� da manh�, certo?",
            //4 Paciente
            "Certo! S�o para controlar o diabetes.",
            //5 Jogador
            "Vou at� a farm�cia buscar sua dose de hoje e volto em breve."
        ],
        farmacia: [
            //0 Jogador
            "Bom dia, Paulo! Desta vez preciso de Clorpropamida 250mg para uma paciente diab�tica.",
            //1 Farmac�utico
            "Aqui est�. Venha sempre que precisar.",
            //2 Jogador op 1
            "Desculpe, Paulo,  mas voc� me entregou Clorpromazina. Eu preciso da Clorpropamida de 250 mg.",
            //3 Jogador op 2
            "Voltarei sim! At� a pr�xima prescri��o.",
            //4 Farmac�utico
            "Me desculpe! Verificarei com mais aten��o a dispensa��o dos medicamentos realizados" +
            " pela equipe aqui da farm�cia e afirmo que isto n�o voltar� a se repetir." +
            " Esta � a medica��o correta. Voc� se lembra  da diferen�a entre elas?",
            //5 Jogador op 1
            "Est� tudo bem, sempre verifico a medica��o antes de us�-la no paciente." +
            " N�o me lembro muito bem das fun��es, mas est� na prescri��o e preciso apenas aplicar.",
            //6 Jogador op 2
            "Est� tudo bem, sempre verifico a medica��o antes de us�-la no paciente." +
            " A Clorpromazina � um antipsic�tico que necessita de receitu�rio de controle especial." +
            " J� a clorpropamida � um hipoglicemiante oral."
            ],
        posto_enfermagem: [
            //tabela
        ],
        leito_paciente: [
            //0 Paciente
            "Que bom que voltou, j� estou ficando com fome.",
            //1 Jogador
            "Ent�o pode ficar animada, Ana Beatriz. Eu trouxe sua medica��o.",
            //2 Paciente
            "Animada vou ficar quando puder voltar para meu computador trabalhar." +
            " N�o terminei a edi��o de um comercial, meu chefe deve estar furioso!",
            //3 Jogador op 1
            "Voc� trabalha com publicidade? Muito legal! Agora lembre-se: A clorpropamida reduz" +
            " o �ndice de glicose no seu organismo, caso sinta algo fora do comum me avise.",
            //4 Jogador op 2
            "Voc� trabalha com publicidade? Muito legal! Me chame se precisar de algo.",
            //5 Paciente
            "Ok! Te chamarei caso eu precise.",
            //6 Jogador
            "Em breve ser� liberada e poder� voltar para seu trabalho. Aproveite o caf� da manh�.",
            //7 Paciente
            "Obrigada."
        ],
        ala_feminina: [
            //tabela
        ]
    },

    fase_final: {
        recepcao: [
            //0 Recepcionista
            "Boa noite! Hoje ser� seu �ltimo teste antes de oficialmente fazer parte da" +
            " equipe do Cuidando Bem. Seu mentor n�o poder� lhe apresentar os dois" +
            " pacientes que est�o � sua espera. Vamos as informa��es?",
            //1 Jogador
            "Boa noite, Clarice! Pode come�ar.",
            //2 Recepcionista
            "Ambos pacientes est�o na enfermaria masculina. Um � o Yuri, est� aguardando a realiza��o de uma" +
            " cirurgia agendada para esta noite; o outro � o Francisco, tem reposi��o hidroeletrol�tica" +
            " prescrita. Sua contrata��o depender� de sua escolha de prioridade e qualidade de atendimento." +
            " Boa sorte!"
        ]
    },

    fase8:{
        ala_masculina: [
            //0 Jogador
            "Boa noite! Sou respons�vel por lev�-lo at� o centro cir�rgico. Como � o seu nome?",
            //1 Paciente
            "Boa noite! Sou Yuri.",
            //2 Jogador
            "O que aconteceu com voc�?",
            //3 Paciente
            "Bom... Parece que rompi o ligamento do joelho, mas foi mancada minha." +
            " Cruzei o sinal no amarelo, uma van me fechou e ca� da moto.",
            //4 Jogador
            "Por sorte foi apenas o joelho. Antes de irmos ao centro cir�rgico," +
            " vou at� a farm�cia buscar o medicamento que voc� precisar� tomar. Est� nervoso?",
            //5 Paciente
            "Nervoso n�o, um pouco ansioso, eu diria. E talvez com um pouco de medo, nunca fiz uma cirurgia.",
            //6 Jogador
            "Fique calmo, Yuri, vai dar tudo certo!"
        ],
        farmacia: [
            //0 Farmaceutico
            "Ol�! Do que precisa hoje?",
            //1 Jogador
            "Oi, Paulo! Preciso de Midazolan de 15 mg.",
            //2 Farmaceutico
            "Aqui est�!"
        ],
        leito_paciente: [
            //0 Jogador
            "Yuri, esta medica��o se chama Midazolan. Ela serve para sedar o paciente" +
            " antes de darmos in�cio aos procedimentos cir�rgicos. Voc� poderia me falar" +
            " seu nome completo e mostrar a pulseira de identifica��o, por favor?",
            //1 Paciente
            "Ok. Yuri de Souza Almeida.",
            //2 Jogador
            "Certo, Yuri. Por favor tome a medica��o e iremos para o centro cir�rgico em seguida."
        ],
        centro_cirurgico: [
            //0 Jogador op 1
            "Boa noite, Aline! Trouxe o paciente da  pr�xima cirurgia. Voc� precisa de ajuda?",
            //1 Jogador op 2
            "Boa noite, Aline! Trouxe um paciente para cirurgia. Antes de come�armos os procedimentos" +
            " cir�rgicos, posso checar os equipamentos e fazer a lista de verifica��o?",
            //2 Circulante da sala
            "Bom noite. Claro! Fique � vontade.",
            //3 Jogador
            "Yuri, vou te fazer algumas perguntas para verificar se est� tudo em ordem" +
            " antes da indu��o anest�sica. Tudo bem?",
            //4 Paciente
            "Sem problemas. Pode mandar.",
            //5 Jogador
            "Nome completo?",
            //6 Paciente
            "Yuri de Souza Almeida.",
            //7 Jogador
            "Idade e profiss�o?",
            //8 Paciente
            "22, futuro engenheiro civil, se Deus quiser e o tr�nsito deixar.",
            //9 Jogador
            "Hahaha. Em qual parte do corpo ser� feita a cirurgia?",
            //10 Paciente
            "Na perna direita.",
            //11 Jogador
            "Qual procedimento?",
            //12 Paciente
            "N�o tenho muita certeza�.Acho que � uma cirurgia do ligamento ...cruzado anterior.",
            //13 Jogador
            "Voc� assinou o termo de consentimento?",
            //14 Paciente
            "Sim.",
            //15 Jogador
            "Voc� tem alguma alergia conhecida?",
            //16 Paciente
            "Sou... al�r...gico a dipiro...na e �. sulfa.",
            //17 Jogador
            "A anestesia j� come�ou a fazer efeito. Esta � a circulante de sala Aline," +
            " ela cuidar� de voc� a partir de agora. Boa cirurgia, Yuri!"
        ]
    },

    fase9: {
        ala_masculina: [
            //0 Jogador op 1
            "Bom dia! Sou profissional de enfermagem deste hospital e cuidarei do senhor hoje." +
            " Qual seu nome e como se sente esta manh�?",
            //1 Jogador op 2
            "Bom dia! Vim para cuidar do senhor esta manh�.",
            //2 Paciente
            "Francisco Rodrigues, ao seu dispor. T� bem n�o, t� meio mole.",
            //3 Jogador
            "O senhor parece muito desidratado. Vou at� a farm�cia buscar o soro prescrito" +
            " pelo m�dico e, assim que eu voltar, verificaremos seus sinais vitais.",
            //4 Paciente
            "T� certo! Brigado."
        ],
        farmacia: [
            //0 Farmaceutico
            "Mais um paciente?",
            //1 Jogador
            "Sim, Paulo. E desta vez preciso de Soro glicosado  5% - 1000ml e NaCl 20 %- 20 ml.",
            //2 Farmaceutico
            "Aqui est�. Boa sorte!"
        ],
        leito_paciente: [
            //0 Jogador
            "Senhor Francisco, antes de come�armos, o senhor poderia me dizer sua" +
            " data de nascimento e me deixar verificar sua pulseira de identifica��o?",
            //1 Paciente
            "S�. 02 de deciembro de 1937.",
            //2 Jogador
            "Opa! Senhor Raul? Porque est� no leito do senhor Francisco?",
            //3 Paciente
            "Troc�mos de cama, no �s possible assistir a la pelicula daquele lado!",
            //4 Jogador op 1
            "Desculpe senhor Raul, mas por medidas de seguran�a os pacientes n�o podem trocar de leito." +
            " Conseguiremos encontrar uma maneira em que o senhor consiga assistir" +
            " � televis�o daquela cama.Vamos destrocar?",
            //5 Jogador op 2
            "Tudo bem, senhor Raul, por�m deixarei apenas desta vez, ok?!"
        ],
        ala_masculina: [
            //0 Jogador
            "Agora estamos no leito correto, senhor Francisco.",
            //1 Paciente
            "Desculpa a� pela confus�o, pensei que pudia mudar de cama." +
            " O argentino queria ver a novela e essa aqui t� me dando dor nas costas�" +
            " ou pode ser por causa do caminh�o. Achei melhor trocar pra ter certeza.",
            //2 Jogador
            "O senhor � caminhoneiro? Suas dores nas costas realmente podem ser consequ�ncia" +
            " de sua posi��o lombar ao dirigir. Vou pedir para a manuten��o verificar sua cama e," +
            " caso seja necess�rio, ela ser� substitu�da. Vamos checar seus sinais vitais?",
            //3 Paciente
            "Sou sim. Brigada pela ajuda e pode medir o que precisar a�, tenho que ficar bom r�pido.",
            //4 Jogador
            "Falta apenas a infus�o do soro. Qualquer desconforto basta me avisar, ok?!"
        ]
    },

    alertas: {
        generico: "Alerta do mentor",
        lavar_maos: {
            tipo1: [
                "Nunca se esque�a de lavar as m�os antes e ap�s tocar o paciente!"
            ],
            tipo2: [
                "Ap�s contato com o paciente, lave as m�os!"
            ],
            tipo3: [
                "Lave as m�os!"
            ]
        },
        enfermaria_masculina: [
            "Volte � Enfermaria Masculina."
        ],
        perdido: {
            enfermagem: [
                // 0 op 1
                "Est� perdido? O lugar correto � o posto de enfermagem.",
                // 1 op 2
                "Voc� tem certeza  de que este � o lugar certo?"
            ],
            ala_feminina:[
                "Esta � a enfermaria correta?"
            ],
            farm�cia: [
                "Voc� precisa encontrar seu paciente primeiro!"
            ]
        },
        esqueceu: {
            coxim: [
                "Voc� est� se esquecendo de algo!"
            ],
            luvas: [
                "Voc� precisa de prote��o para as m�os"
            ],
            algod�o: [
                "O algod�o seco precisa ser utilizado"
            ],
            teste: [
                "Lembre-se do procedimento a ser realizado"
            ],
            paciente: [
                "O paciente precisa de informa��es"
            ]
        }
    }
});