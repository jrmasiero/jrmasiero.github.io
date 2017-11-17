function carregar_descricoes() {

  proj_titulos = new Array();
  
  proj_textos = new Array();
  
   video_links = new Array();
  

  proj_titulos[0] = "";
  proj_textos[0] = "";
  video_links[0] = '';
  
  proj_titulos[1] = "Leap Motion";
  proj_textos[1] = "Controle de conteúdo utilizando Leap Motion para mapeamento das mãos.";
  video_links[1] = '<iframe width="640" height="360" src="https://www.youtube.com/embed/6xZYqlNNPC0?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0"gesture="media" allowfullscreen></iframe>';

  proj_titulos[2] = "Virtual Sculpture";
  proj_textos[2] = "Escaneamento 3D do Corpo e interação com modelo.";
  video_links[2] = '<iframe width="640" height="360" src="https://www.youtube.com/embed/0FpdeoEwu64?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0"gesture="media" allowfullscreen></iframe>';

  proj_titulos[3] = "Background Subtraction";
  proj_textos[3] = "Aplicativo Android que utiliza métodos de C.V. para extraior pixels estáticos.";
  video_links[3] = '<iframe width="640" height="360" src="https://www.youtube.com/embed/obtHCa0Sh1o?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0"gesture="media" allowfullscreen></iframe>';


  proj_titulos[4] = "Totem Interativo";
  proj_textos[4] = "Interface controlada pelo toque utilizando frame com infravermelho.";
  video_links[4] = '<iframe width="640" height="360" src="https://www.youtube.com/embed/J1jaToKHv30?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0"gesture="media" allowfullscreen></iframe>';

  proj_titulos[5] = "Música Generativa";
  proj_textos[5] = "Utilizando métodos de C.V. para geração de música em tempo real.";
  video_links[5] = '<iframe width="640" height="360" src="https://www.youtube.com/embed/_M_9TNMQJTE?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0"gesture="media" allowfullscreen></iframe>';

  proj_titulos[6] = "Tablet PC";
  proj_textos[6] = "Display Holográfico controlado remotamente por aplicativo via OSC.";
  video_links[6] = '<iframe width="640" height="360" src="https://www.youtube.com/embed/aX4rA1TgBpI?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0"gesture="media" allowfullscreen></iframe>';
  
    proj_titulos[7] = "Interface Reativa";
    proj_textos[7] = "Anúncio Digital que responde à presença do usúario utilizando Face Tracking.";
    video_links[7] = '<iframe width="640" height="360" src="https://www.youtube.com/embed/Ee6Abcfa78A?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0"gesture="media" allowfullscreen></iframe>';
    
      proj_titulos[8] = "App RArq";
    proj_textos[8] = "Aplicativo de Realidade Aumentada para visualização de maquetes virtuais.";
    video_links[8] = '<iframe width="640" height="360" src="https://www.youtube.com/embed/Bg562_5gEic?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0"gesture="media" allowfullscreen></iframe>';
    
      proj_titulos[9] = "Provador Virtual";
    proj_textos[9] = "Sistema para experimentação de roupas virtuais utilizando sensor e smartphone.";
    video_links[9] = '<iframe width="640" height="360" src="https://www.youtube.com/embed/LBvwMwy8reo?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0"gesture="media" allowfullscreen></iframe>';
  
      proj_titulos[10] = "HP Sprout";
    proj_textos[10] = "Experiência com projeção mapeada interativa.";
    video_links[10] = '<iframe width="640" height="360" src="https://www.youtube.com/embed/z-5tEoudfbY?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0"gesture="media" allowfullscreen></iframe>';
    
      proj_titulos[11] = "Interface Holográfica";
    proj_textos[11] = "Aplicativo para controle de conteúdo virtual através da câmera(C.V.).";
    video_links[11] = '<iframe width="640" height="360" src="https://www.youtube.com/embed/kvIB8jN6xeI?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0"gesture="media" allowfullscreen></iframe>';
    
      proj_titulos[12] = "Banco de Dados";
    proj_textos[12] = "Interface Multimídia para visualização de obras de artistas consagrados.";
    video_links[12] = '<iframe width="640" height="360" src="https://www.youtube.com/embed/KJENQImapzM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0"gesture="media" allowfullscreen></iframe>';
    
      proj_titulos[13] = "Kinect Physics";
    proj_textos[13] = "Simulações de partículas interativas.";
    video_links[13] = '<iframe width="640" height="360" src="https://www.youtube.com/embed/ODsMX9K_kMw?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0"gesture="media" allowfullscreen></iframe>';
    
      proj_titulos[14] = "DataViz + ML";
    proj_textos[14] = "Software para identificação de cortes na montagem de filmes.";
    video_links[14] = '';
    
    proj_titulos[15] = "RFID + Arduino";
  proj_textos[15] = "Cabide Inteligente para informações sobre produtos.";
  video_links[15] = '<iframe width="640" height="360" src="https://www.youtube.com/embed/99skkXJ-Okw?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0"gesture="media" allowfullscreen></iframe>';
  
  proj_titulos[16] = "Realidade Aumentada";
  proj_textos[16] = "Aplicativo para vestir virtualmente os manequins.";
  video_links[16] = '<iframe width="640" height="360" src="https://www.youtube.com/embed/KLMKnw6MKlE?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0"allowfullscreen></iframe>';
  
  proj_titulos[17] = "Experiência Sonora";
  proj_textos[17] = "Software para mixagem de som com gravação em tempo real";
  video_links[17] = '';
  
  proj_titulos[18] = "Podium Virtual";
  proj_textos[18] = "Instalação para medição de dados da corrida do usúario e experiência de RA.";
  video_links[18] = '';
}