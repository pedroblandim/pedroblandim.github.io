# GitHub Pages
https://pedroblandim.github.io/

# Como executar
Você pode utilizar o plugin de Live Preview do VS Code, que irá iniciar um servidor de arquivo estático automaticamente. Uma outra opção é executar o seguinte comando no seu terminal, dentro da raiz do projeto:

```bash
python -m http.server
```
e depois acessar a URL http://0.0.0.0:8000/.

[URL do projeto no GitHub Pages.](https://pedroblandim.github.io/) 

# Projeto
Uma clínica oferece diversos serviços de saúde, desde atendimento médico, exames laboratoriais e de imagem, aconselhamento nutricional, entre outros procedimentos. Recentemente houve uma mudança na administração da clínica e os novos gestores decidiram reformular todas as soluções de tecnologia da empresa a fim de melhorar a experiência dos pacientes. Para isso, a clínica contratou a empresa onde você trabalha para desenvolver as soluções a seguir:

## **Projeto 01**
Uma landing page estática apresentando as principais informações da clínica, bem como seus principais serviços.

Partes obrigatórias do site:
Título (nome da aba);
Imagens de produtos/serviços (mínimo 2 imagens);
Descrição do produtos/serviços;
Equipe fictícia da clínica com fotos e cargos (mínimo 3 imagens);
Uso de pelo menos 2 níveis de cabeçalho;
Formulário estático de inscrição para saber mais a empresa (Nome, e-mail, cidade e estado) - sem processamento depois do submit.

## **Projeto 02**
Uma API para acesso à disponibilidade dos profissionais de saúde. Uma vez acionada, essa aplicação consultaria um arquivo local (XML ou JSON) e obteria as especialidades e os respectivos profissionais, permitindo filtros por especialidade e pesquisa por nome.

## **Projeto 03**
Uma aplicação para marcação de consultas/exames. Essa aplicação deve ser composta por frontend e backend e permitir que o usuário selecione a especialidade e o profissional. Serão apresentadas as datas disponíveis para que o usuário selecione a informe seus dados (Nome e CPF) para efetivar o agendamento. Deve ser possível pesquisar agendamento por CPF e eventualmente cancelá-lo. A consulta e armazenamento das informações deverá ocorrer em arquivos (XML ou JSON) no servidor de backend. 

## **Projeto 04**
A mesma aplicação objeto do Projeto 03, porém com gerenciamento dos dados em banco de dados (PostgreSQL ou MySQL) e cuja infraestrutura seja instanciada por meio de containers.

---

Nesta Sistematização você deve escolher qual dos projetos acima irá desenvolver. A implementação deve ocorrer em três fases, respeitando, pelo menos, os marcos a seguir:

Marco 1 (semana 3): Elaboração da Estrutura Analítica do Projeto (EAP) contendo o planejamento para implementação do projeto;
Marco 2 (semana 6): Implementação do projeto, permitindo que testes sejam realizados;
Marco 3:(semana 9 - entrega): Projeto finalizado, entregáveis produzidos e publicados.
Todos os projetos poderão alcançar nota máxima se atenderem ao critérios de avaliação.

O projeto deverá ser incluído em um repositório público do GitHub, contendo todos os artefatos que permitam executar a solução, bem como um arquivo README.md com as instruções para execução. Além disso, prepare uma apresentação (de no máximo 5 minutos) para os gestores da clínica, mostrando como a sua solução funciona e quais recursos tecnológicos você utilizou. Seu vídeo deverá estar disponível, seja como “Não listado” no Youtube, em uma pasta compartilhada no Google Drive ou em outra solução de armazenamento.

O trabalho é individual.

Entregáveis:

- Um arquivo PDF contendo:  
- link para o projeto no GitHub  
- link para o vídeo de apresentação  
- Instruções para gravação do vídeo:  

    - Duração máxima de 5 minutos;  
    - Pode ser gravado com OBS, loom, celular ou qualquer outra solução correlata;  
    - Pode ser publicado no Youtube e marcado como “não listado” ou incluído em uma pasta pública em algum serviço de armazenamento, como o Google Drive. Nesse caso, garanta que o professor tenha acesso ao arquivo, concedendo o acesso necessário.  

Critérios de avaliação:

- Funcionamento sem erros: 10 pontos  
- Publicação no GitHub: 5 pontos  
- Instruções para colocar em operação: 2 pontos  
- Apresentação da solução:  8 pontos  
- Pontuação extra:  
    - Solução em execução on-line, seja por meio do GitHub Pages, Heroku ou outro serviço de hospedagem gratuito: até 5 pontos
