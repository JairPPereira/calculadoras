
<!DOCTYPE html>
<html lang="pt">

<head>
	<base href='https://www.matematica.pt/'>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Portal de Matemática com mais de 2500 exercícios resolvidos em vídeo e com aulas contendo a explicação da matéria para ajudar na preparação dos exames nacionais.">
	<meta name="keywords" content="matemática, vídeos, exercícios, ajuda, explicações, exame">
	<meta name="author" content="Vitor Nunes">
	
	<!-- FaceBook META Tags -->
	<meta property='og:site_name' content='matematica.pt'>
	<meta property='og:url' content='https://www.matematica.pt'>
	<meta property='og:type' content='website'>
	<meta property='og:title' content='Portal de Matemática'>
	<meta property='og:description' content='Portal de Matemática com mais de 2500 exercícios resolvidos em vídeo e com aulas contendo a explicação da matéria para ajudar na preparação dos exames nacionais.'>
	<meta property='og:image' content='https://www.matematica.pt/images/256_icon.png'>		

	<title>Portal de Matemática</title>
	
    <link rel="shortcut icon" href="images/favicon.png">
	<link rel="apple-touch-icon" href="images/favicon.png">

    <!-- CSS Global -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="css/style.min.css">
	
	<style>
		body{
			font-size: 14px;
		}
		
		.vcenter {
			display: inline-block;
			vertical-align: middle;
			float: none;
		}
	</style>
	
	<!-- JS Global -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	<!-- Google Analytics 4 -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-EN3HH9WHYN"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-EN3HH9WHYN');
	</script>	

		
</head>

<body>

<div class="wrapper">
    <div class="header">
        <div class="topbar">
            <div class="container">
                 <ul class="loginbar pull-right">
					<li><i class="fa fa-user"></i>
					<a href="admin/login.php?location=%2Findex.php">Login</a>					</li>
                    <li class="topbar-devider"></li>				
					                    <li><i class="fa fa-envelope"></i> <a href="contacto.php">Contactar</a></li>
                </ul>
            </div>
        </div>
    
        <div class="navbar navbar-default mega-menu" role="navigation">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="fa fa-bars"></span>
                    </button>
                    <a class="navbar-brand" href="index.php">
                        <!-- Altera o ícone nos dispositivos de menor dimensão -->
						<div class="row">
							<div class="hidden-xs hidden-sm col-md-12 hidden-lg">  
								<img id="logo-header-small" src="images/logo_small.png" width="37" height="37" alt="Logótipo matematica.PT">
							</div>
							<div class="col-xs-12 hidden-md col-lg-12">
								<img id="logo-header" src="images/logo.png" width="265" height="37" alt="Logótipo matematica.PT">
							</div>
						</div>
                    </a>
                </div>			
				
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-responsive-collapse">
					<ul class="nav navbar-nav">

                        <!-- Exames -->
                        <li class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                                Exames
                            </a>
                            <ul class="dropdown-menu">						
								<li class="dropdown-submenu">
									<a href="javascript:void(0);">Matemática (A)</a>
									<ul class="dropdown-menu">
										<li><a href="exames/provas-afericao-2-ano.php"><i class="fa fa-file-pdf-o"></i> 2º ano (Prova de Aferição)</a></li>
										<li><a href="exames/exame-nacional-4-ano.php"><i class="fa fa-file-pdf-o"></i> 4º ano (Exame Nacional)</a></li>
										<li><a href="exames/provas-afericao-5-ano.php"><i class="fa fa-file-pdf-o"></i> 5º ano (Prova de Aferição)</a></li>
										<li><a href="exames/exame-nacional-6-ano.php"><i class="fa fa-file-pdf-o"></i> 6º ano (Exame Nacional)</a></li>
										<li><a href="exames/provas-afericao-8-ano.php"><i class="fa fa-file-pdf-o"></i> 8º ano (Prova de Aferição)</a></li>
										<li><a href="exames/exame-nacional-9-ano.php"><i class="fa fa-file-pdf-o"></i> 9º ano (Exame Nacional)</a></li>
										<li><a href="exames/teste-intermedio-10-ano.php"><i class="fa fa-file-pdf-o"></i> 10º ano (Teste Intermédio)</a></li>
										<li><a href="exames/teste-intermedio-11-ano.php"><i class="fa fa-file-pdf-o"></i> 11º ano (Teste Intermédio)</a></li>
										<li><a href="exames/exame-nacional-12-ano.php"><i class="fa fa-file-pdf-o"></i> 12º ano (Exame Nacional)</a></li>
									</ul>                                
								</li>
								<li><a href="exames/exame-nacional-matematica-b.php"><i class="fa fa-file-pdf-o"></i> Matemática B</a></li>
								<li><a href="exames/exame-nacional-macs.php"><i class="fa fa-file-pdf-o"></i> M.A.C.S.</a></li>
								<li><a href="exames/exame-maiores-23.php"><i class="fa fa-file-pdf-o"></i> Maiores de 23</a></li>
								<li><a href="exames/exame-modelo.php"><i class="fa fa-file-pdf-o"></i> Exames Modelo</a></li>
								<li><a href="exames/gave-exames-nacionais.php"><i class="fa fa-exclamation"></i> Recomendações</a></li>
							</ul>
						</li>

						<!-- Aulas -->
                        <li class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                                Aulas
                            </a>
                            <ul class="dropdown-menu">				
								<li><a href="aulas-matematica.php?ano=5"><i class="fa fa-graduation-cap"></i> 5º ano</a></li>
								<li><a href="aulas-matematica.php?ano=6"><i class="fa fa-graduation-cap"></i> 6º ano</a></li>
								<li><a href="aulas-matematica.php?ano=7"><i class="fa fa-graduation-cap"></i> 7º ano</a></li>
								<li><a href="aulas-matematica.php?ano=8"><i class="fa fa-graduation-cap"></i> 8º ano</a></li>
								<li><a href="aulas-matematica.php?ano=9"><i class="fa fa-graduation-cap"></i> 9º ano</a></li>
								<li><a href="aulas-matematica.php?ano=11"><i class="fa fa-graduation-cap"></i> 11º ano</a></li>
								<li><a href="aulas-matematica.php?ano=12"><i class="fa fa-graduation-cap"></i> 12º ano</a></li>
							</ul>
						</li>

                        <!-- Praticar -->
                        <li class="dropdown mega-menu-fullwidth">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                                Praticar
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <div class="mega-menu-content disable-icons">
                                        <div class="container">
                                            <div class="row equal-height">
                                                <div class="col-md-4 equal-height-in">
                                                    <ul class="list-unstyled equal-height-list">
                                                        <li><h3>Fichas de Trabalho</h3></li>
														<li><a href="util/fichas-primeiro-ciclo.php"><i class="fa fa-files-o"></i> Fichas do 1º Ciclo</a></li>
                   										<li><a href="util/fichas-trabalho-resolvidas.php"><i class="fa fa-files-o"></i> Fichas do 5º ao 12º Ano</a></li>
														<li><a href="util/fichas-trabalho.php"><i class="fa fa-files-o"></i> Fichas Resolvidas em Vídeo</a></li>
                                                        <li class="big-screen-space"></li>
                                                        <li><h3>Canguru Matemático</h3></li>
														<li><a href="canguru/desafio.php"><i class="fa fa-cogs"></i> Exercícios de Treino</a></li>
														<li><a href="canguru/provas-canguru.php"><i class="fa fa-table"></i> Enunciados das Provas</a></li>
														<li class="big-screen-space"></li>
                                                        <li><h3>Matemática - Brasil</h3></li>
														<li><a href="util/questoes-matematica-enem.php"><i class="fa fa-list-ul"></i> Exercícios do ENEM</a></li>
														<li><a href="exames/provas-enem-anos-anteriores.php"><i class="fa fa-file-pdf-o"></i> Provas e Gabaritos do ENEM</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4 equal-height-in">
                                                    <ul class="list-unstyled equal-height-list">
                                                        <li><h3>9º ano</h3></li>
														<li><a href="praticar.php?tema=l"><i class="fa fa-edit"></i> Estatística e Probabilidade</a></li>
														<li><a href="praticar.php?tema=m"><i class="fa fa-edit"></i> Sistemas de Equações</a></li>
														<li><a href="praticar.php?tema=n"><i class="fa fa-edit"></i> Proporcionalidade Inversa</a></li>
														<li><a href="praticar.php?tema=o"><i class="fa fa-edit"></i> Números Reais e Inequações</a></li>									
														<li><a href="praticar.php?tema=p"><i class="fa fa-edit"></i> Circunferências e Polígonos</a></li>
														<li><a href="praticar.php?tema=q"><i class="fa fa-edit"></i> Equações e Funções</a></li>
														<li><a href="praticar.php?tema=s"><i class="fa fa-edit"></i> Geometria no Espaço</a></li>
														<li><a href="praticar.php?tema=r"><i class="fa fa-edit"></i> Trigonometria</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4 equal-height-in">
                                                    <ul class="list-unstyled equal-height-list">
                                                        <li><h3>10º ano</h3></li>
														<li><a href="praticar.php?tema=i"><i class="fa fa-edit"></i> Geometria I</a></li>
														<li><a href="praticar.php?tema=j"><i class="fa fa-edit"></i> Funções e Gráficos</a></li>
														<li><a href="praticar.php?tema=k"><i class="fa fa-edit"></i> Estatística</a></li>
														<li class="big-screen-space"></li>
                                                        <li><h3>11º ano</h3></li>
														<li><a href="praticar.php?tema=d"><i class="fa fa-edit"></i> Trigonometria</a></li>
														<li><a href="praticar.php?tema=e"><i class="fa fa-edit"></i> Geometria II</a></li>
														<li><a href="praticar.php?tema=f"><i class="fa fa-edit"></i> Programação Linear</a></li>
														<li><a href="praticar.php?tema=g"><i class="fa fa-edit"></i> Cálculo Diferencial I</a></li>
														<li><a href="praticar.php?tema=h"><i class="fa fa-edit"></i> Sucessões Reais</a></li>														
													</ul>    
                                                </div>
                                                <div class="col-md-4 equal-height-in">
                                                    <ul class="list-unstyled equal-height-list">
                                                        <li><h3>12º ano</h3></li>
														<li><a href="praticar.php?tema=a"><i class="fa fa-edit"></i> Probabilidades e Combinatória</a></li>
														<li><a href="praticar.php?tema=b"><i class="fa fa-edit"></i> Cálculo Diferencial II</a></li>
														<li><a href="praticar.php?tema=c"><i class="fa fa-edit"></i> Trigonometria e Complexos</a></li>
													</ul>    
                                                </div>												
                                            </div>
                                        </div>    
                                    </div>    
                                </li>
							</ul>
						</li>

                        <!-- Videos -->
                        <li class="dropdown mega-menu-fullwidth">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                                Videos
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <div class="mega-menu-content disable-icons">
                                        <div class="container">
                                            <div class="row equal-height">
                                                <div class="col-md-4 equal-height-in">
                                                    <ul class="list-unstyled equal-height-list">
                                                        <li><h3>Exames Nacionais Resolvidos</h3></li>
                   										<li><a href="videos/resolvido.php?tipo=exa&amp;ano=9"><i class="fa fa-youtube-play"></i> 9º ano</a></li>
														<li><a href="videos/resolvido.php?tipo=exa&amp;ano=12"><i class="fa fa-youtube-play"></i> 12º ano</a></li>
                                                        <li class="big-screen-space"></li>
                                                        <li><h3>Testes Intermédios Resolvidos</h3></li>
														<li><a href="videos/resolvido.php?tipo=int&amp;ano=9"><i class="fa fa-youtube-play"></i> 9º ano</a></li>
														<li><a href="videos/resolvido.php?tipo=int&amp;ano=10"><i class="fa fa-youtube-play"></i> 10º ano</a></li>
														<li><a href="videos/resolvido.php?tipo=int&amp;ano=11"><i class="fa fa-youtube-play"></i> 11º ano</a></li>
														<li><a href="videos/resolvido.php?tipo=int&amp;ano=12"><i class="fa fa-youtube-play"></i> 12º ano</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4 equal-height-in">
                                                    <ul class="list-unstyled equal-height-list">
                                                        <li><h3>Khan Academy</h3></li>
 														<li><a href="videos/khan.php?ano=1"><i class="fa fa-university"></i> 1º ano</a></li>
														<li><a href="videos/khan.php?ano=2"><i class="fa fa-university"></i> 2º ano</a></li>
														<li><a href="videos/khan.php?ano=3"><i class="fa fa-university"></i> 3º ano</a></li>
														<li><a href="videos/khan.php?ano=4"><i class="fa fa-university"></i> 4º ano</a></li>
														<li><a href="videos/khan.php?ano=5"><i class="fa fa-university"></i> 5º ano</a></li>
														<li><a href="videos/khan.php?ano=6"><i class="fa fa-university"></i> 6º ano</a></li>
														<li><a href="videos/khan.php?ano=7"><i class="fa fa-university"></i> 7º ano</a></li>
														<li><a href="videos/khan.php?ano=8"><i class="fa fa-university"></i> 8º ano</a></li>
														<li><a href="videos/khan.php?ano=9"><i class="fa fa-university"></i> 9º ano</a></li>
														<li><a href="videos/khan.php?ano=10"><i class="fa fa-university"></i> 10º ano</a></li>
														<li><a href="videos/khan.php?ano=11"><i class="fa fa-university"></i> 11º ano</a></li>
														<li><a href="videos/khan.php?ano=12"><i class="fa fa-university"></i> 12º ano</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-4 equal-height-in">
                                                    <ul class="list-unstyled equal-height-list">
                                                        <li><h3>Isto é matemática</h3></li>
														<li><a href="videos/iemat.php?temp=1"><i class="fa fa-desktop"></i> 1ª Temporada</a></li>
														<li><a href="videos/iemat.php?temp=2"><i class="fa fa-desktop"></i> 2ª Temporada</a></li>
														<li><a href="videos/iemat.php?temp=3"><i class="fa fa-desktop"></i> 3ª Temporada</a></li>
														<li><a href="videos/iemat.php?temp=4"><i class="fa fa-desktop"></i> 4ª Temporada</a></li>
														<li><a href="videos/iemat.php?temp=5"><i class="fa fa-desktop"></i> 5ª Temporada</a></li>
														<li><a href="videos/iemat.php?temp=6"><i class="fa fa-desktop"></i> 6ª Temporada</a></li>
														<li><a href="videos/iemat.php?temp=7"><i class="fa fa-desktop"></i> 7ª Temporada</a></li>
														<li><a href="videos/iemat.php?temp=8"><i class="fa fa-desktop"></i> 8ª Temporada</a></li>
														<li><a href="videos/iemat.php?temp=9"><i class="fa fa-desktop"></i> 9ª Temporada</a></li>
														<li><a href="videos/iemat.php?temp=10"><i class="fa fa-desktop"></i> 10ª Temporada</a></li>
														<li><a href="videos/iemat.php?temp=11"><i class="fa fa-desktop"></i> 11ª Temporada</a></li>
													</ul>    
                                                </div>
                                                <div class="col-md-4 equal-height-in">
                                                    <ul class="list-unstyled equal-height-list">
                                                        <li><h3>Outros</h3></li>
														<li><a href="videos/enigma.php"><i class="fa fa-play"></i> Enigmas Matemáticos</a></li>
														<li><a href="videos/ted.php"><i class="fa fa-play"></i> Conferências TED</a></li>
													</ul>    
                                                </div>												
                                            </div>
                                        </div>    
                                    </div>    
                                </li>
                            </ul>
                        </li>

                        <!-- Util -->
                        <li class="dropdown mega-menu-fullwidth">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                                Útil
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <div class="mega-menu-content disable-icons">
                                        <div class="container">
                                            <div class="row equal-height">
                                                <div class="col-md-4 equal-height-in">
                                                    <ul class="list-unstyled equal-height-list">
                                                        <li><h3>Resumos</h3></li>
														<li><a href="util/resumos/solidos-platonicos.php"><i class="fa fa-file-text-o"></i> Sólidos Platónicos</a></li>
														<li><a href="util/resumos/classificar-poligonos.php"><i class="fa fa-file-text-o"></i> Classificação de Polígonos</a></li>
														<li><a href="util/resumos/classificar-quadrilateros.php"><i class="fa fa-file-text-o"></i> Classificação de Quadriláteros</a></li>
														<li><a href="util/resumos/classificar-triangulos.php"><i class="fa fa-file-text-o"></i> Classificação de Triângulos</a></li>
														<li><a href="util/resumos/pontos-notaveis-triangulo.php"><i class="fa fa-file-text-o"></i> Pontos Notáveis do Triângulo</a></li>
														<li><a href="util/resumos/definir-representar-funcao.php"><i class="fa fa-file-text-o"></i> Representação de uma Função</a></li>
														<li><a href="util/resumos/transformar-funcoes.php"><i class="fa fa-file-text-o"></i> Transformações de Funções</a></li>
														<li><a href="util/resumos/tipos-angulos-amplitude.php"><i class="fa fa-file-text-o"></i> Classificação dos Ângulos</a></li>
														<li><a href="util/resumos/relacionar-angulos.php"><i class="fa fa-file-text-o"></i> Relacionamento entre Ângulos</a></li>
														<li><a href="util/resumos/angulos-circunferencia.php"><i class="fa fa-file-text-o"></i> Ângulos na Circunferência</a></li>
														<li><a href="util/resumos/tipos-graficos-estatisticos.php"><i class="fa fa-file-text-o"></i> Gráficos Estatísticos</a></li>
														<li><a href="util/resumos/relacionar-retas-planos.php"><i class="fa fa-file-text-o"></i> Relacionamento entre Retas e Planos</a></li>
														<li><a href="util/resumos/tipos-matrizes-algebra.php"><i class="fa fa-file-text-o"></i> Tipos de Matrizes</a></li>
													</ul>    
                                                </div>
												<div class="col-md-4 equal-height-in">
                                                    <ul class="list-unstyled equal-height-list">
														<li><h3>Consultar</h3></li>
														<li><a href="util/formulas.php"><i class="fa fa-superscript"></i> Fórmulas Matemáticas</a></li>
														<li><a href="util/faq.php"><i class="fa fa-question"></i> Perguntas Frequentes</a></li>
														<li><a href="util/glossario.php"><i class="fa fa-clipboard"></i> Glossário Matemático</a></li>
														<li><a href="util/calendario-escolar.php"><i class="fa fa-calendar"></i> Calendário Escolar</a></li>
														<li><a href="util/ranking-escolas.php"><i class="fa fa-bar-chart-o"></i> Ranking de Escolas</a></li>
														<li class="big-screen-space"></li>
														<li><h3>Listas</h3></li>
														<li><a href="util/simbolos.php"><i class="fa fa-plus-square-o"></i> Símbolos Matemáticos</a></li>
														<li><a href="util/curvas.php"><i class="fa fa-area-chart"></i> Curvas Matemáticas</a></li>
														<li class="big-screen-space"></li>
														<li><h3>Usados</h3></li>
														<li><a href="util/comprar.php"><i class="fa fa-shopping-cart"></i> Comprar</a></li>
														<li><a href="util/vender.php"><i class="fa fa-shopping-cart"></i> Vender</a></li> 														
                                                    </ul>
                                                </div>
                                                <div class="col-md-4 equal-height-in">
                                                    <ul class="list-unstyled equal-height-list">
														<li><h3>Diversos</h3></li>
                   										<li><a href="util/explicacoes-matematica.php"><i class="fa fa-user"></i> Explicações de Matemática</a></li>
														<li><a href="util/dicas.php"><i class="fa fa-exclamation"></i> Dicas para Estudar</a></li>
														<li><a href="util/software.php"><i class="fa fa-download"></i> Software Gratuito</a></li>
														<li class="big-screen-space"></li>
														<li><h3>Calculadoras</h3></li>
														<li><a href="util/calculadora-cientifica.php"><i class="fa fa-calculator"></i> Calculadora Online</a></li>
														<li><a href="util/calculadora-porcentagem.php"><i class="fa fa-calculator"></i> Calcular Percentagem</a></li>
														<li><a href="util/calcular-imc.php"><i class="fa fa-calculator"></i> Calcular IMC</a></li>
														<li><a href="util/calcular-iva.php"><i class="fa fa-calculator"></i> Calcular IVA</a></li>
														<li><a href="util/calculadora-equacao-2-grau.php"><i class="fa fa-calculator"></i> Calcular Equação Segundo Grau</a></li>
														<li><a href="util/calculadora-teorema-pitagoras.php"><i class="fa fa-calculator"></i> Calcular Teorema de Pitágoras</a></li>
														<li><a href="util/calculadora-regra-3-simples.php"><i class="fa fa-calculator"></i> Calcular Regra de 3 Simples</a></li>
														<li><a href="https://www.to-convert.com/pt/"><i class="fa fa-calculator"></i> Converter Medidas</a></li>
													</ul>
                                                </div>
												<div class="col-md-4 equal-height-in">
                                                    <ul class="list-unstyled equal-height-list">
                                                        <li><h3>Programa e Metas</h3></li>
														<li><a href="programa/metas-curriculares-1-ano.php"><i class="fa fa-folder-open-o"></i> 1º ano</a></li>
														<li><a href="programa/metas-curriculares-2-ano.php"><i class="fa fa-folder-open-o"></i> 2º ano</a></li>
														<li><a href="programa/metas-curriculares-3-ano.php"><i class="fa fa-folder-open-o"></i> 3º ano</a></li>
														<li><a href="programa/metas-curriculares-4-ano.php"><i class="fa fa-folder-open-o"></i> 4º ano</a></li>
														<li><a href="programa/metas-curriculares-5-ano.php"><i class="fa fa-folder-open-o"></i> 5º ano</a></li>
														<li><a href="programa/metas-curriculares-6-ano.php"><i class="fa fa-folder-open-o"></i> 6º ano</a></li>
														<li><a href="programa/metas-curriculares-7-ano.php"><i class="fa fa-folder-open-o"></i> 7º ano</a></li>
														<li><a href="programa/metas-curriculares-8-ano.php"><i class="fa fa-folder-open-o"></i> 8º ano</a></li>
														<li><a href="programa/metas-curriculares-9-ano.php"><i class="fa fa-folder-open-o"></i> 9º ano</a></li>
														<li><a href="programa/metas-curriculares-10-ano.php"><i class="fa fa-folder-open-o"></i> 10º ano</a></li>
														<li><a href="programa/metas-curriculares-11-ano.php"><i class="fa fa-folder-open-o"></i> 11º ano</a></li>
														<li><a href="programa/metas-curriculares-12-ano.php"><i class="fa fa-folder-open-o"></i> 12º ano</a></li>
													</ul>    
                                                </div>
                                            </div>
                                        </div>    
                                    </div>    
                                </li>
                            </ul>
                        </li>

						<!-- Geometria -->
                        <li class="dropdown mega-menu-fullwidth">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                                Geometria
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <div class="mega-menu-content disable-icons">
                                        <div class="container">
                                            <div class="row equal-height">
                                                <div class="col-md-4 equal-height-in">
                                                    <ul class="list-unstyled equal-height-list">
                                                        <li><h3>9º ano</h3></li>
														<li><a href="geogebra/9-ano-ponto-medio.php"><i class="fa fa-codepen"></i> Ponto Médio</a></li>
														<li><a href="geogebra/9-ano-isometria-rotacao.php"><i class="fa fa-codepen"></i> Rotações no Plano</a></li>
														<li><a href="geogebra/9-ano-isometria-reflexao.php"><i class="fa fa-codepen"></i> Reflexões no Plano</a></li>
														<li><a href="geogebra/9-ano-angulo-complementar.php"><i class="fa fa-codepen"></i> Ângulo Complementar</a></li>
														<li><a href="geogebra/9-ano-angulo-suplementar.php"><i class="fa fa-codepen"></i> Ângulo Suplementar</a></li>														
														<li><a href="geogebra/9-ano-angulo-inscrito-1.php"><i class="fa fa-codepen"></i> Ângulo Inscrito 1</a></li>
														<li><a href="geogebra/9-ano-angulo-inscrito-2.php"><i class="fa fa-codepen"></i> Ângulo Inscrito 2</a></li>
														<li><a href="geogebra/9-ano-declive-reta-1.php"><i class="fa fa-codepen"></i> Declive da Reta 1</a></li>
														<li><a href="geogebra/9-ano-declive-reta-2.php"><i class="fa fa-codepen"></i> Declive da Reta 2</a></li>
														<li><a href="geogebra/9-ano-sistema-equacoes.php"><i class="fa fa-codepen"></i> Sistema de Equações</a></li>
													</ul>    
                                                </div>	
												<div class="col-md-4 equal-height-in">
                                                    <ul class="list-unstyled equal-height-list">
                                                        <li><h3>10º ano</h3></li>
														<li><a href="geogebra/10-ano-distancia-pontos.php"><i class="fa fa-codepen"></i> Distância Entre Dois Pontos</a></li>
														<li><a href="geogebra/10-ano-soma-vetores.php"><i class="fa fa-codepen"></i> Soma de Vetores</a></li>
														<li><a href="geogebra/10-ano-equacao-circunferencia.php"><i class="fa fa-codepen"></i> Equação da Circunferência</a></li>	
														<li><a href="geogebra/10-ano-equacao-vetorial-reta.php"><i class="fa fa-codepen"></i> Equação Vetorial da Reta</a></li>
														<li><a href="geogebra/10-ano-funcao-quadratica.php"><i class="fa fa-codepen"></i> Função Quadrática</a></li>														
														<li><a href="geogebra/10-ano-modelo-logistico.php"><i class="fa fa-codepen"></i> Modelo Logístico</a></li>
														<li><a href="geogebra/10-ano-transformacao-funcoes.php"><i class="fa fa-codepen"></i> Transformação de Funções</a></li>
														<li><a href="geogebra/10-ano-media-estatistica.php"><i class="fa fa-codepen"></i> Estatística - Média</a></li>
														<li><a href="geogebra/10-ano-mediana-estatistica.php"><i class="fa fa-codepen"></i> Estatística - Mediana</a></li>
														<li><a href="geogebra/10-ano-moda-estatistica.php"><i class="fa fa-codepen"></i> Estatística - Moda</a></li>		
														<li><a href="geogebra/10-ano-diagrama-extremos-quartis.php"><i class="fa fa-codepen"></i> Diagrama de Extremos e Quartis</a></li>														
                                                    </ul>
                                                </div>
                                                <div class="col-md-4 equal-height-in">
                                                    <ul class="list-unstyled equal-height-list">
                                                        <li><h3>11º ano</h3></li>
														<li><a href="geogebra/11-ano-medida-radiano.php"><i class="fa fa-codepen"></i> Medida de Um Radiano</a></li>
														<li><a href="geogebra/11-ano-circulo-trigonometrico.php"><i class="fa fa-codepen"></i> Circulo Trigonométrico</a></li>
														<li><a href="geogebra/11-ano-produto-escalar-vetores.php"><i class="fa fa-codepen"></i> Produto Escalar de Vetores</a></li>
														<li><a href="geogebra/11-ano-produto-escalar-plano.php"><i class="fa fa-codepen"></i> Produto Escalar no Plano</a></li>
														<li><a href="geogebra/11-ano-planos-paralelos.php"><i class="fa fa-codepen"></i> Planos Paralelos</a></li>
														<li><a href="geogebra/11-ano-planos-perpendiculares.php"><i class="fa fa-codepen"></i> Planos Perpendiculares</a></li>
														<li><a href="geogebra/11-ano-intersecao-3-planos.php"><i class="fa fa-codepen"></i> Interseção de Três Planos</a></li>
														<li><a href="geogebra/11-ano-tangente-declive.php"><i class="fa fa-codepen"></i> Tangente e Declive</a></li>
														<li><a href="geogebra/11-ano-problemas-otimizacao.php"><i class="fa fa-codepen"></i> Problemas de Otimização</a></li>
														<li><a href="geogebra/11-ano-funcao-racional.php"><i class="fa fa-codepen"></i> Função Racional</a></li>
														<li><a href="geogebra/11-ano-funcao-inversa.php"><i class="fa fa-codepen"></i> Função Inversa</a></li>
														<li><a href="geogebra/11-ano-funcao-derivada.php"><i class="fa fa-codepen"></i> Função Derivada</a></li>
														<li><a href="geogebra/11-ano-progressao-aritmetica.php"><i class="fa fa-codepen"></i> Progressão Aritmética</a></li>
														<li><a href="geogebra/11-ano-progressao-geometrica.php"><i class="fa fa-codepen"></i> Progressão Geométrica</a></li>														
													</ul>
                                                </div>
                                                <div class="col-md-4 equal-height-in">
                                                    <ul class="list-unstyled equal-height-list">
                                                        <li><h3>12º ano</h3></li>
														<li><a href="geogebra/12-ano-triangulo-pascal.php"><i class="fa fa-codepen"></i> Triângulo de Pascal</a></li>
														<li><a href="geogebra/12-ano-binomio-newton.php"><i class="fa fa-codepen"></i> Binómio de Newton</a></li>
														<li><a href="geogebra/12-ano-distribuicao-normal.php"><i class="fa fa-codepen"></i> Distribuição Normal</a></li>
														<li><a href="geogebra/12-ano-funcao-exponencial.php"><i class="fa fa-codepen"></i> Função Exponencial</a></li>
														<li><a href="geogebra/12-ano-assintota-obliqua.php"><i class="fa fa-codepen"></i> Assíntotas Não Verticais</a></li>
														<li><a href="geogebra/12-ano-limites-notaveis.php"><i class="fa fa-codepen"></i> Limites Notáveis</a></li>
														<li><a href="geogebra/12-ano-funcao-seno.php"><i class="fa fa-codepen"></i> Função Seno</a></li>
														<li><a href="geogebra/12-ano-funcao-cosseno.php"><i class="fa fa-codepen"></i> Função Cosseno</a></li>
														<li><a href="geogebra/12-ano-funcao-tangente.php"><i class="fa fa-codepen"></i> Função Tangente</a></li>
														<li><a href="geogebra/12-ano-numeros-complexos.php"><i class="fa fa-codepen"></i> Números Complexos</a></li>
														<li><a href="geogebra/12-ano-raizes-complexas.php"><i class="fa fa-codepen"></i> Raizes Complexas</a></li>
														<li><a href="geogebra/12-ano-complexos-regiao-circular.php"><i class="fa fa-codepen"></i> Região Complexa Circular</a></li>
														<li><a href="geogebra/12-ano-complexos-regiao-mediatriz.php"><i class="fa fa-codepen"></i> Região Complexa Mediatriz</a></li>
														<li><a href="geogebra/12-ano-complexos-regiao-semirretas.php"><i class="fa fa-codepen"></i> Região Complexa Semirretas</a></li>
													</ul>    
                                                </div>
                                            </div>
                                        </div>    
                                    </div>    
                                </li>
                            </ul>
                        </li>
					
                        <!-- Lazer -->
                        <li class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                                Lazer
                            </a>
                            <ul class="dropdown-menu">						
								<li><a href="fun/sudoku-online.php"><i class="fa fa-users"></i> Jogo do Sudoku</a></li>
								<li><a href="fun/jogo-galo.php"><i class="fa fa-users"></i> Jogo do Galo</a></li>
								<li><a href="fun/jogo-simbolo-escondido.php"><i class="fa fa-users"></i> Símbolo Mágico</a></li>
								<li><a href="fun/torre-hanoi.php"><i class="fa fa-users"></i> Torre de Hanói</a></li>
								<li><a href="fun/curiosidades-matematicas.php"><i class="fa fa-users"></i> Curiosidades</a></li>
								<li><a href="fun/charada-einstein.php"><i class="fa fa-users"></i> Charada de Einstein</a></li>
								<li><a href="fun/palindromo-capicua.php"><i class="fa fa-users"></i> Palíndromos</a></li>
								<li><a href="fun/piadas-matematicas.php"><i class="fa fa-users"></i> Piadas</a></li>
							</ul>
						</li>
					
                        <!-- Caixa de Pesquisa -->
                        <li>
                            <i class="search fa fa-search search-btn"></i>
                            <form action="admin/pesquisa.php" id="cse-search-box">
								<input type="hidden" name="cx" value="partner-pub-6710216031332363:6549191332">
								<input type="hidden" name="cof" value="FORID:10">
								<input type="hidden" name="ie" value="UTF-8">
								<div class="search-open">
									<div class="input-group animated fadeInDown">
										<input type="text" class="form-control" name="q">
										<span class="input-group-btn">
											<button class="btn btn-primary" type="submit">Ver</button>
										</span>
									</div>
								</div>
							</form>
							<script src="https://cse.google.com/brand?form=cse-search-box&lang=pt&sitesearch=true"></script>							
                        </li>
						
                    </ul>
                </div>
            </div>    
        </div>            
    </div>
		<!-- Contadores -->
	<div class="parallax-counter-v1 parallaxBg">
		<div class="container">
			<h2 class="title-v2 title-light title-center">OS NOSSOS NÚMEROS</h2>
			<p class="space-xlg-hor text-center color-light">Estamos constantemente a introduzir novos conteúdos. Acompanha o nosso crescimento.</p>
			<div class="margin-bottom-20"></div>
			<div class="row">
				<div class='col-sm-3 col-xs-6'>	<div class='counters'>		<span class='counter'>1708</span>		<h4>Desafios</h4>	</div></div><div class='col-sm-3 col-xs-6'>	<div class='counters'>		<span class='counter'>683</span>		<h4>Fichas</h4>	</div></div><div class='col-sm-3 col-xs-6'>	<div class='counters'>		<span class='counter'>793</span>		<h4>Exames</h4>	</div></div><div class='col-sm-3 col-xs-6'>	<div class='counters'>		<span class='counter'>3347</span>		<h4>Exercícios</h4>	</div></div>	
			</div>
		</div>
	</div>		
	<!-- End Contadores -->
	
	<div class="container content">
    	<!-- Blocos de Divulgação -->
		<div class="row">
        	<div class="col-md-4 col-sm-6">
        		<div class="service">
                    <i class="fa fa-graduation-cap service-icon"></i>
        			<div class="desc">
        				<h4>Aulas de Matemática</h4>
                        <p>Vê os nossos vídeos com as aulas do <a id="VerAulas5" href="aulas-matematica.php?ano=5">5º</a>, <a id="VerAulas6" href="aulas-matematica.php?ano=6">6º</a>, <a id="VerAulas7" href="aulas-matematica.php?ano=7">7º</a>, <a id="VerAulas8" href="aulas-matematica.php?ano=8">8º</a>, <a id="VerAulas9" href="aulas-matematica.php?ano=9">9º</a>, <a id="VerAulas11" href="aulas-matematica.php?ano=11">11º</a> e do <a id="VerAulas12" href="aulas-matematica.php?ano=12">12º</a> para te ajudar nos temas onde tens mais dúvidas. A seguir tenta resolver os exercícios propostos.</p>
        			</div>
        		</div>	
        	</div>
        	<div class="col-md-4 col-sm-6">
        		<div class="service">
                    <i class="fa fa-files-o service-icon"></i>
        			<div class="desc">
        				<h4>Exames Nacionais</h4>
                        <p>Consulta a nossa listagem de <a id="VerExames" href="exames/exame-nacional-12-ano.php">Exames Resolvidos</a>. Todas as perguntas que saíram nos Exames Nacionais e Testes Intermédios desde 2008 estão resolvidas!</p>
        			</div>
        		</div>	
        	</div>
			<!-- Ajudar a ordenar as colunas, por causa das diferentes alturas -->
			<div class="clearfix visible-sm"></div>
        	<div class="col-md-4 col-sm-6">
        		<div class="service">
                    <i class="fa fa-user service-icon"></i>
        			<div class="desc">
        				<h4>Explicações</h4>
                        <p>Se precisares de uma ajuda extra, procura de forma rápida um <a id="VerExplicador" href="util/explicacoes-matematica.php">Explicador</a> perto da tua área de residência. O registo é gratuito para todos os interessados.</p>
        			</div>
        		</div>	
        	</div>
			<!-- Ajudar a ordenar as colunas, por causa das diferentes alturas -->
			<div class="clearfix visible-md"></div>
        	<div class="col-md-4 col-sm-6">
        		<div class="service">
                    <i class="fa fa-pencil-square-o service-icon"></i>
        			<div class="desc">
        				<h4>Fichas de Matemática</h4>
                        <p>Utiliza as nossas <a id="VerFichas" href="util/fichas-trabalho-resolvidas.php">Fichas de Trabalho</a> com exercícios de matemática resolvidos em vídeo, para te preparares para os exames nacionais. Começa já a estudar!</p>
        			</div>
        		</div>	
        	</div>
			<!-- Ajudar a ordenar as colunas, por causa das diferentes alturas -->
			<div class="clearfix visible-sm"></div>			
        	<div class="col-md-4 col-sm-6">
        		<div class="service">
                    <i class="fa fa-question service-icon"></i>
        			<div class="desc">
        				<h4>Perguntas Frequentes</h4>
                        <p>Pesquisa na nossa lista de <a id="VerPerguntas" href="util/faq.php">Perguntas Frequentes</a>. De certeza que irás encontrar a resposta a algumas das tuas dúvidas mais pertinentes.</p>
        			</div>
        		</div>	
        	</div>
        	<div class="col-md-4 col-sm-6">
        		<div class="service">
                    <i class="fa fa-superscript service-icon"></i>
        			<div class="desc">
        				<h4>Fórmulas Matemáticas</h4>
                        <p>Analisa a nossa extensa lista de <a id="VerFormulas" href="util/formulas.php">Fórmulas Matemáticas</a>. Nela encontrarás todas as fórmulas que precisas de conhecer para seres bem sucedido nos testes!</p>
        			</div>
        		</div>	
        	</div>
			<!-- Ajudar a ordenar as colunas, por causa das diferentes alturas -->
			<div class="clearfix visible-md visible-sm"></div>
        	<div class="col-md-4 col-sm-6">
        		<div class="service">
                    <i class="fa fa-youtube service-icon"></i>
        			<div class="desc">
        				<h4>Canal do YouTube</h4>
                        <p>Subscreve o nosso mais recente canal do YouTube: <a id="VerYouTube" href="https://www.youtube.com/channel/UCcVcW_oVBSkr9damECEV4Xg" target="_blank" >Os Número da Inês</a>, com uma explicação detalhada da matéria dirigida aos mais novos.</p>
        			</div>
        		</div>	
        	</div>
        	<div class="col-md-4 col-sm-6">
        		<div class="service">
                    <i class="fa fa-facebook service-icon"></i>
        			<div class="desc">
        				<h4>Divulga o matematica.pt</h4>
                        <p>Se achas este site interessante, ajuda-nos a divulgá-lo junto dos teus amigos. Para fazer isso, basta que <a id="VerFace1" href="https://www.facebook.com/sharer/sharer.php?u=www.matematica.pt" target="_blank">Partilhes no Facebook</a> para conseguirmos ainda mais visitas!</p>
        			</div>
        		</div>	
        	</div>
			<!-- Ajudar a ordenar as colunas, por causa das diferentes alturas -->
			<div class="clearfix visible-sm"></div>				
        	<div class="col-md-4 col-sm-6">
        		<div class="service">
                    <i class="fa fa-envelope service-icon"></i>
        			<div class="desc">
        				<h4>A Tua Opinião Conta</h4>
                        <p>Queremos saber a tua opinião. Vai à página  <a id="VerContactos" href="contacto.php">Contactar</a> e diz-nos o que é que podemos fazer para melhorar. Todas as criticas e sugestões são bem-vindas!</p>
        			</div>
        		</div>	
        	</div>				
    	</div>
		<!-- End Divulgação -->

		<!-- Bloco Desafio do Dia -->
		<div class="panel panel-blue">
			<div class="panel-heading">
				<div class="row">
					<div class="col-xs-5">
						<h2 class="panel-title">
							Nível:
							<i class="fa fa-star" style="color:#ffffff"></i>
							<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>						</h2>
					</div>
					<div class="col-xs-7"><h2 class="panel-title" style="font-size:150%"><i class="icon-custom icon-color-light rounded-x fa fa-check"></i>Desafio do Dia:</h2></div>
				</div>
			</div>
			<div class="panel-body">
				<div class="box-shadow shadow-effect-2 img-center">
					<img class="img-responsive" src="docs/kangaroo/perguntas/ESC/2020/08_3.png" alt="desafio matemático do dia">
				</div><br>
				<div class="row">
					<div class='col-sm-1'></div>
					<div class='col-xs-4 col-sm-2'><br><button id='rA' class='btn-u btn-brd btn-brd-hover rounded btn-u-purple btn-u-lg btn-block testar' type='button'>Opção A <i style='display:none' class='fa fa-times'></i></button></div><div class='col-xs-4 col-sm-2'><br><button id='rB' class='btn-u btn-brd btn-brd-hover rounded btn-u-purple btn-u-lg btn-block testar' type='button'>Opção B <i style='display:none' class='fa fa-times'></i></button></div><div class='col-xs-4 col-sm-2'><br><button id='rC' class='btn-u btn-brd btn-brd-hover rounded btn-u-purple btn-u-lg btn-block testar' type='button'>Opção C <i style='display:none' class='fa fa-check'></i></button></div><div class='col-xs-4 col-sm-2'><br><button id='rD' class='btn-u btn-brd btn-brd-hover rounded btn-u-purple btn-u-lg btn-block testar' type='button'>Opção D <i style='display:none' class='fa fa-times'></i></button></div><div class='col-xs-4 col-sm-2'><br><button id='rE' class='btn-u btn-brd btn-brd-hover rounded btn-u-purple btn-u-lg btn-block testar' type='button'>Opção E <i style='display:none' class='fa fa-times'></i></button></div>				</div>
			</div>
			<div id="charts" class="row" style="display:none">
				<div class="col-12 text-center">
					<h3>Percentagem de respostas dadas pelos utilizadores:</h3>
				</div>
				<div class="col-xs-4 col-xs-offset-2 col-md-2 col-md-offset-1 text-center">
					<div class="circle" id="circles-1"></div>
					<h5 class="circle-title">Opção A</h5>
				</div> 
				<div class="col-xs-4 col-md-2 text-center">
					<div class="circle" id="circles-2"></div>
					<h5 class="circle-title">Opção B</h5>
				</div>       
				<div class="col-xs-4 col-md-2 text-center">
					<div class="circle" id="circles-3"></div>
					<h5 class="circle-title">Opção C</h5>
				</div>
				<div class="col-xs-4 col-md-2 text-center">
					<div class="circle" id="circles-4"></div>
					<h5 class="circle-title">Opção D</h5>
				</div>
				<div class="col-xs-4 col-md-2 text-center">
					<div class="circle" id="circles-5"></div>
					<h5 class="circle-title">Opção E</h5>
				</div>				
			</div>
			<p class="text-center">Para ver desafios de dias anteriores visita a nossa página de <a id="VerDesafios" href="util/desafios-problemas.php">Problemas Matemáticos</a>.</p>
		</div><br><br>
		<!-- End Desafio do Dia -->

		<!-- Bloco Video do Dia 
		<div class="panel panel-blue">
			<div class="panel-heading">
				<h2 class="panel-title text-center" style="font-size:150%"><i class="icon-custom icon-color-light rounded-x fa fa-play"></i>Vídeo do Dia:</h2>
			</div>
			<div class="panel-body">
				<div class="embed-responsive embed-responsive-16by9">
					<iframe class="embed-responsive-item" src="//www.youtube.com/embed/...?showinfo=0&enablejsapi=1" allowfullscreen></iframe>
				</div>
			</div>
		</div><br><br>
		End Video do Dia -->
		
		<!-- Blocos de Citação, Pergunta e Termo do Dia -->
        <div class="row margin-bottom-10">
            <div class="col-md-4 col-sm-6 col-xs-12 vcenter">
                <div class="service-block service-block-dark service-or">
                    <div class="service-bg"></div>                
                    <h2 class="heading-md"><i class="icon-custom icon-color-light rounded-x fa fa-quote-left "></i>Citação do Dia:</h2>
                    <p>"Entre dois espíritos iguais, postos nas mesmas condições, aquele que sabe Geometria é superior ao outro e adquire um vigor especial."</p>
					<p><small>Blaise Pascal</small></p>					
                </div>
            </div><!-- Elimina espaços por causa de conseguir centrar na Vertical
            --><div class="col-md-4 col-sm-6 col-xs-12 vcenter">
                <div class="service-block service-block-dark service-or">
                    <div class="service-bg"></div>                
                    <h2 class="heading-md"><i class="icon-custom icon-color-light rounded-x fa fa-question"></i>Pergunta do Dia:</h2>
                    <p>Para que serve o Triângulo de Pascal?</p>
					<p><a id='VerFAQ' href='faq/triangulo-pascal.php'><span style="font-size:22px;">ver resposta</span></a></p>
                </div>
            </div><!-- Elimina espaços por causa de conseguir centrar na Vertical
            --><div class="col-md-4 col-sm-12 col-xs-12 vcenter">
                <div class="service-block service-block-dark service-or">
                    <div class="service-bg"></div>                
                    <h2 class="heading-md"><i class="icon-custom icon-color-light rounded-x fa fa-info"></i>Termo do Dia:</h2>
                    <p><strong><span style="font-size:18px;">Trinómio</span></strong></p>
					<p>Polinómio com três termos, três monómios.</p>
                </div>
            </div>
        </div><br>
		<!-- End Citação, Pergunta e Termo do Dia -->
		
		<!-- Bloco Imagem do Dia -->
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<div class="panel panel-blue">
					<div class="panel-heading">
						<h2 class="panel-title text-center" style="font-size: 150%;"><i class="icon-custom icon-color-light rounded-x fa fa-camera-retro"></i>Imagem do Dia:</h2>
					</div>
					<div class="panel-body">
						<h3 class="text-center">Quadrados e cubos</h3>
						<div class="box-shadow shadow-effect-2 img-center">
							<img class="img-responsive" src="images/humor/img123.png" alt="imagem com humor matemático do dia">
						</div>
					</div>                                      
					<p class="text-center">Para ver imagens de dias anteriores visita a nossa página do <a id="VerFace2" href="https://www.facebook.com/pt.matematica" target="_blank">Facebook</a>.</p>
				</div>
			</div>
		</div>
		<!-- End Imagem do Dia -->
	</div>

	<!-- Footer -->
	<div class="footer-default">
		<div class="footer">
			<div class="container">
				<div class="row md-margin-bottom-20">
					<!-- Acerca -->
					<div class="col-md-4">
						<div class="headline"><h2>Acerca</h2></div>  
						<p class="margin-bottom-25 md-margin-bottom-40">Este <a href="util/matematica-online.php">Portal de Matemática</a> possui milhares de exercícios resolvidos em vídeo. Com o objetivo de ajudar os alunos que nos visitam, foram gravadas centenas de aulas contendo uma explicação detalhada da matéria. Esperamos assim, conseguir melhorar a aprendizagem e o gosto pela disciplina, bem como, fornecer uma ferramenta útil na preparação dos exames nacionais.</p>    
					</div>
					
					<!-- Novidades -->
					<div class="col-md-4">
						<div class="headline"><h2>Novidades</h2></div>
						<h2><span class='color-orange'>Calendário Escolar 2022-2023</span></h2><p>Foi disponibilizado um novo <a href='util/calendario-escolar.php'>calendário escolar</a> para o ano letivo 2022-2023. Este calendário contém todos os feriados nacionais, as datas das interrupções letivas, bem como, uma contagem de todos os dias úteis por período.<br>Ver <a href='util/historial.php'>novidades</a> de dias anteriores.</p><p class='text-right'><small>Setembro de 2022</small></p>					</div>
					
					<!-- Matemáticos -->
					<div class="col-md-4">
                        <div class="headline"><h2>Matemáticos</h2></div>
						<span id="matematicos"></span>
						<p class='text-right'><small>10 de Dezembro de 2022</small></p>
					</div>
				</div>
			</div> 
		</div>
    </div>     
	<!-- End Footer -->
	
	<!-- JS Implementing Plugins -->
	<script src="plugins/counter/waypoints.min.js"></script>
	<script src="plugins/counter/jquery.counterup.min.js"></script>
	<script src="plugins/circles-master/circles.min.js"></script>
	<script>
		function ver_nasc(){
			$("#matematicos").load("ajax/matematicos.php?estado=n");
		}

		function ver_mor(){
			$("#matematicos").load("ajax/matematicos.php?estado=m");
		}
		
		$(document).ready(function(){
			$('.counter').counterUp({
				delay: 10,
				time: 2000
			});
			
			ver_nasc();
			
			//Verifica a resposta da pergunta
			$(".testar").click(function(){
				var selectedID = $(this).attr('id');
				var id = "#" + selectedID;
				$(".testar i").fadeIn(5000);
				$(".testar").removeClass("btn-brd btn-u-purple").addClass("disabled").attr("disabled", "disabled");
				$(id).addClass("btn-u-purple");
				$("#charts").show();
				
				//Desenha os círculos com as percentagens de respostas
				var CirclesMaster = function () {
					return {
						initCirclesMaster: function () {

							var colors = [['#C9FF97', '#72c02c'], ['#FFC2BB', '#E74C3C']];
							var raio = 55;
							var largura = 5;
							var tempo = 2000;
							var obj1 = document.getElementById('circles-1');
							var obj2 = document.getElementById('circles-2');
							var obj3 = document.getElementById('circles-3');							
							var obj4 = document.getElementById('circles-4');
							var obj5 = document.getElementById('circles-5');

							var percent1 = 17;var percent2 = 17;var percent3 = 33;var percent4 = 17;var percent5 = 16;
							Circles.create({
								id:         obj1.id,
								percentage: percent1,
								radius:     raio,
								width:      largura,
								number:     percent1,
								text:       '%',
								duration:   tempo,
								colors: colors[1]							});
							Circles.create({
								id:         obj2.id,
								percentage: percent2,
								radius:     raio,
								width:      largura,
								number:     percent2,
								text:       '%',
								duration:   tempo,
								colors: colors[1]							});
							Circles.create({
								id:         obj3.id,
								percentage: percent3,
								radius:     raio,
								width:      largura,
								number:     percent3,
								text:       '%',
								duration:   tempo,
								colors: colors[0]							});
							Circles.create({
								id:         obj4.id,
								percentage: percent4,
								radius:     raio,
								width:      largura,
								number:     percent4,
								text:       '%',
								duration:   tempo,
								colors: colors[1]							});	
							Circles.create({
								id:         obj5.id,
								percentage: percent5,
								radius:     raio,
								width:      largura,
								number:     percent5,
								text:       '%',
								duration:   tempo,
								colors: colors[1]							});								
						}
					};
				}();
				CirclesMaster.initCirclesMaster();

				function updateResposta(respID) {
					$.ajax({
						'url': 'ajax/updateResposta.php', 
						'type': 'GET',
						'dataType': 'json', 
						'data': {resposta: respID, destino: 'cgr_questions', pergID: 1447}, 
					});
				}
				updateResposta(selectedID);				
			});
		});
	</script>	

	<div class="footer-default">
		<div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5">                     
                        <p>MATEMATICA.PT &copy; 2022 - Vitor Nunes<br>Se eliminar a causa, o efeito cessa.</p>
                    </div>
					<div class="col-sm-3">
						<button class='btn-u btn-u-orange rounded btn-block' data-toggle='modal' data-target='#SubscreverNews'><i class='fa fa-envelope-o'></i> Receber Novidades</button>					</div>	
                    <div class="col-sm-4">  
                        <ul class="social-icons pull-right">
                            <li><a id="DivulgaFace" class="rounded-x social_facebook" href="https://www.facebook.com/sharer/sharer.php?u=www.matematica.pt" target="_blank" rel="noopener" data-original-title="Facebook"></a></li>
                            <li><a id="DivulgaTwitter" class="rounded-x social_twitter" href="https://twitter.com/home?status=Portal%20de%20matem%C3%A1tica:%20www.matematica.pt" target="_blank" rel="noopener" data-original-title="Twitter"></a></li>
                            <li><a id="DivulgaLinkedIn" class="rounded-x social_linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=www.matematica.pt&amp;title=Portal%20de%20matem%C3%A1tica" target="_blank" rel="noopener" data-original-title="Linkedin"></a></li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
    </div>
	
	<div class="modal fade" id="SubscreverNews" tabindex="-1" role="dialog" style="top:10%" aria-labelledby="newsLetterTitle" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
					<h4 id="newsLetterTitle" class="modal-title"><i class="fa fa-envelope-o"></i> Receber Novidades</h4>
				</div>
				<div class="modal-body">
					<img style="float:right; margin:0 20px;" src="images/email-news.png" width="128" height="128" alt="Inscrever Email">
					<div id="info">
						<p><b>Subscreve</b> a nossa newsletter para estar informado sobre as mais recentes novidades!</p>
						<form id="InscreverForm"> 	
							<div class="input-group">
								<input type="email" id="mailNews" class="form-control" placeholder="Endereço de Email" required>
								<span class="input-group-btn">
									<button class="btn-u" type="submit">Subscrever</button>
								</span>
							</div>
						</form>	
					</div>           
				</div>
				<div class="modal-footer">
					<button data-dismiss="modal" class="btn-u btn-u-default" type="button">Fechar</button>
				</div>
			</div>
		</div>
	</div>
	
</div>

<script src="plugins/back-to-top.min.js"></script>

<script>
	$(document).ready(function() {
		//Faz aparecer a caixa de pesquisa
		$('.search').click(function () {
            if($('.search-btn').hasClass('fa-search')){
                $('.search-open').fadeIn(500);
                $('.search-btn').removeClass('fa-search');
                $('.search-btn').addClass('fa-times');
            } else {
                $('.search-open').fadeOut(500);
                $('.search-btn').addClass('fa-search');
                $('.search-btn').removeClass('fa-times');
            }   
        });
		
		//Envia o email para inscrição na Newsletter
		$("#InscreverForm").on("submit", function(){
			var selectedMail = escape($("#mailNews").val());
			$("#info").load("ajax/inscreverNews.php?email=" + selectedMail);
			return false;
		})
	});
</script>

</body>
</html>	