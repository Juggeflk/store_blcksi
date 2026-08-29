/*
  Lista de todos os produtos da loja.
  Para adicionar um produto novo, copie um bloco { ... } e cole antes do
  fecho "];", mudando o "id" (tem de ser único), a categoria, nome, preco,
  tamanhos, imagens e descricao.

  categoria precisa ser uma destas: camisa, camisola, calca, calcado,
  bone, acessorio, conjunto, eletronico, tech, preto

  tamanhos: lista de tamanhos disponiveis. Use [] se o produto nao tiver
  tamanho (ex: eletronico, tech).

  imagens: caminhos para as fotos, relativos a pasta /paginas/.
  Ex: "../assets/produtos/camisa-01-1.jpg". Deixe "" se ainda nao tiver a foto.

  thumbZoom (opcional): numero, ex 1.15, para ampliar a foto dentro do
  quadrado do catalogo quando a peca fica pequena/com muito fundo a volta.
  1 = sem alteracao. Serve so para a miniatura do catalogo, nao afeta a
  pagina do produto. Ajusta por olho e ve o resultado no navegador.

  thumbPos (opcional): posicao do enquadramento, ex "center top",
  "center 30%". Default "center". Util quando o topo/base da peca fica
  cortado de forma estranha.
*/

var PRODUTOS = [
  {
    id: "camisa-01",
    categoria: "camisa",
    nome: "STAY WEIRD",
    preco: 1.799,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-02.webp","../styles/assets/img/camisa-01.webp", ""],
    descricao: "Peça em algodão, corte reto, estampa exclusiva BLCKSI. Disponível."
  },
  {
    id: "camisa-03",
    categoria: "camisa",
    nome: "CULTURE OF AMBITION",
    preco: 2.099,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-03.webp", "../styles/assets/img/camisa-04.webp", "", ""],
    thumbZoom: 1.2,
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-05",
    categoria: "camisa",
    nome: "VIBIN",
    preco: 1.759,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-59.webp", "../styles/assets/img/camisa-06.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-07",
    categoria: "camisa",
    nome: "NANAMI KENTO",
    preco: 2.029,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-07.webp", "../styles/assets/img/camisa-08.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-09",
    categoria: "camisa",
    nome: "NANAMI KENTO",
    preco: 2.029,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-09.webp", "../styles/assets/img/camisa-10.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-11",
    categoria: "camisa",
    nome: "VIBIN",
    preco: 1.759,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-11.webp", "../styles/assets/img/camisa-12.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-13",
    categoria: "camisa",
    nome: "YESHUA",
    preco: 1.721,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-13.webp", "../styles/assets/img/camisa-14.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-15",
    categoria: "camisa",
    nome: "G.O.A.THING",
    preco: 2.349,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-15.webp", "../styles/assets/img/camisa-16.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-17",
    categoria: "camisa",
    nome: "NEON-SAPCE",
    preco: 1.799,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-17.webp", "../styles/assets/img/camisa-18.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-19",
    categoria: "camisa",
    nome: "CLORATHI",
    preco: 1.799,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-19.webp", "../styles/assets/img/camisa-20.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-21",
    categoria: "camisa",
    nome: "GUESS WHO?",
    preco: 1.849,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-21.webp", "../styles/assets/img/camisa-22.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },

   {
    id: "camisa-23",
    categoria: "camisa",
    nome: "DIFF-4",
    preco: 1.799,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-23.webp", "../styles/assets/img/camisa-24.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-25",
    categoria: "camisa",
    nome: "LIAT",
    preco: 1.819,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-25.webp", "../styles/assets/img/camisa-26.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-30",
    categoria: "camisa",
    nome: "ANGHARD",
    preco: 1.799,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-30.webp", "../styles/assets/img/camisa-31.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-32",
    categoria: "camisa",
    nome: "MUGIWARA",
    preco: 2.019,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-32.webp", "../styles/assets/img/camisa-33.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-34",
    categoria: "camisa",
    nome: "VIBIN",
    preco: 1.759,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-34.webp", "../styles/assets/img/camisa-35.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-36",
    categoria: "camisa",
    nome: "GTO",
    preco: 1.799,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-36.webp", "../styles/assets/img/camisa-37.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-38",
    categoria: "camisa",
    nome: "CULTURE OF AMBITION",
    preco: 2.099,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-38.webp", "../styles/assets/img/camisa-40.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-41",
    categoria: "camisa",
    nome: "VIBIN",
    preco: 1.759,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-41.webp", "../styles/assets/img/camisa-42.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-43",
    categoria: "camisa",
    nome: "CRYST",
    preco: 2.399,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-43.webp", "../styles/assets/img/camisa-44.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-45",
    categoria: "camisa",
    nome: "NANAMI KENTO",
    preco: 2.029,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-45.webp", "../styles/assets/img/camisa-46.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-48",
    categoria: "camisa",
    nome: "CULTURE OF AMBITION",
    preco: 2.099,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-48.webp", "../styles/assets/img/camisa-47.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-49",
    categoria: "camisa",
    nome: "PURPKIL",
    preco: 2.599,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-49.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-50",
    categoria: "camisa",
    nome: "INVITUS",
    preco: 1.759,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-50.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-51",
    categoria: "camisa",
    nome: "VIBIN",
    preco: 1.759,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-51.webp", "../styles/assets/img/camisa-52.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-53",
    categoria: "camisa",
    nome: "ORPING",
    preco: 1.799,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-53.webp", "../styles/assets/img/camisa-54.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-55",
    categoria: "camisa",
    nome: "DRILLION",
    preco: 1.799,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-55.webp", "../styles/assets/img/camisa-56.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-57",
    categoria: "camisa",
    nome: "KING OF HELL",
    preco: 2.417,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-57.webp", "../styles/assets/img/camisa-58.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-60",
    categoria: "camisa",
    nome: "GHOUL",
    preco: 2.029,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: [ "../styles/assets/img/camisa-60.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-61",
    categoria: "camisa",
    nome: "OUTYUR",
    preco: 2.099,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-61.webp", "", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-63",
    categoria: "camisa",
    nome: "ALTER-EGO",
    preco: 1.799,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-63.webp", "../styles/assets/img/camisa-62.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "64",
    categoria: "camisa",
    nome: "CULTURE OF AMBITION",
    preco: 2.099,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-65.webp", "../styles/assets/img/camisa-64.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-66",
    categoria: "camisa",
    nome: "TRAVIS WRLD",
    preco: 1.799,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-67.webp", "../styles/assets/img/camisa-66.webp", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-68",
    categoria: "camisa",
    nome: "MILAN",
    preco: 1.779,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-68.webp", "", "", ""],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-69",
    categoria: "camisa",
    nome: "WEBB",
    preco: 2.029,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-69.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-70",
    categoria: "camisa",
    nome: "FIRE FORCE",
    preco: 2.029,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-70.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-71",
    categoria: "camisa",
    nome: "CHILOUT F",
    preco: 2.029,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-71.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-72",
    categoria: "camisa",
    nome: "DAISY",
    preco: 2.029,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-72.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-73",
    categoria: "camisa",
    nome: "SOLO LEAVING",
    preco: 2.599,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-73.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-74",
    categoria: "camisa",
    nome: "MARI",
    preco: 2.029,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-74.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-76",
    categoria: "camisa",
    nome: "GON",
    preco: 2.199,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-76.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-75",
    categoria: "camisa",
    nome: "ORIX",
    preco: 1.839,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-75.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-77",
    categoria: "camisa",
    nome: "KRATOS",
    preco: 2.029,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-77.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-78",
    categoria: "camisa",
    nome: "UCHIHA MADARA",
    preco: 2.899,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-78.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-79",
    categoria: "camisa",
    nome: "KAKASHI 1000 JUTSOS",
    preco: 2.029,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-79.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-80",
    categoria: "camisa",
    nome: "KROA",
    preco: 2.029,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-80.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-81",
    categoria: "camisa",
    nome: "NUFFY",
    preco: 1.755,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-81.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-82",
    categoria: "camisa",
    nome: "NIKA",
    preco: 2.300,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-82.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-83",
    categoria: "camisa",
    nome: "DEATH NOTE",
    preco: 2.029,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-83.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-84",
    categoria: "camisa",
    nome: "YESHUA",
    preco: 1.759,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-84.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-85",
    categoria: "camisa",
    nome: "SEXTAS FELIZES",
    preco: 1.859,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-85.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-86",
    categoria: "camisa",
    nome: "AKAZA",
    preco: 2.399,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-86.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-87",
    categoria: "camisa",
    nome: "O ARQUITETO",
    preco: 2.029,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-87.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-88",
    categoria: "camisa",
    nome: "SATORU GOJO",
    preco: 2.799,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-88.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-89",
    categoria: "camisa",
    nome: "YTHUR",
    preco: 1.759,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-89.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-90",
    categoria: "camisa",
    nome: "WORM",
    preco: 2.029,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-90.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
   {
    id: "camisa-91",
    categoria: "camisa",
    nome: "BJORN",
    preco: 1.759,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-91.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-92",
    categoria: "camisa",
    nome: "MASH",
    preco: 2.099,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-92.webp","../styles/assets/img/camisa-96.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-93",
    categoria: "camisa",
    nome: "EREN YEAGER",
    preco: 2.099,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-93.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-94",
    categoria: "camisa",
    nome: "BROTHERS",
    preco: 2.099,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-94.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-95",
    categoria: "camisa",
    nome: "GRAN-TOUR",
    preco: 2.099,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-95.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-97",
    categoria: "camisa",
    nome: "FAUZE",
    preco: 1.759,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-97.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-98",
    categoria: "camisa",
    nome: "KAIDO",
    preco: 2.499,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-98.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-99",
    categoria: "camisa",
    nome: "MOB PSYICHO",
    preco: 2.059,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-99.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-100",
    categoria: "camisa",
    nome: "ALL BLUE",
    preco: 2.349,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-100.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-101",
    categoria: "camisa",
    nome: "CLOSE MORE",
    preco: 2.059,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-101.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-102",
    categoria: "camisa",
    nome: "DAN DAN",
    preco: 2.299,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-102.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-103",
    categoria: "camisa",
    nome: "FRIIZE",
    preco: 1.759,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-103.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-104",
    categoria: "camisa",
    nome: "TOMAS",
    preco: 1.759,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-104.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-105",
    categoria: "camisa",
    nome: "MILWAKE",
    preco: 1.859,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-105.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-27",
    categoria: "camisa",
    nome: "ROSTYUN",
    preco: 1.799,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-27.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-28",
    categoria: "camisa",
    nome: "bluesong",
    preco: 1.759,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-28.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-106",
    categoria: "camisa",
    nome: "GKO",
    preco: 1.759,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-106.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-107",
    categoria: "camisa",
    nome: "MILWAKE",
    preco: 1.859,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-107.webp","../styles/assets/img/camisa-108.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-109",
    categoria: "camisa",
    nome: "MILWAKE",
    preco: 2.099,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-109.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-110",
    categoria: "camisa",
    nome: "HELSING",
    preco: 2.099,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-110.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-111",
    categoria: "camisa",
    nome: "BOILER",
    preco: 1.769,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-111.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-112",
    categoria: "camisa",
    nome: "REPTLL",
    preco: 1.759,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-112.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-113",
    categoria: "camisa",
    nome: "HELSING PURPLE",
    preco: 1.829,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-113.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-114",
    categoria: "camisa",
    nome: "AKASA",
    preco: 2.199,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-114.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-115",
    categoria: "camisa",
    nome: "YESHU",
    preco: 1.749,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-115.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-116",
    categoria: "camisa",
    nome: "ITS ALL",
    preco: 1.859,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-116.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-117",
    categoria: "camisa",
    nome: "CULTSPACE",
    preco: 2.099,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-117.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-118",
    categoria: "camisa",
    nome: "BASHIK",
    preco: 2.199,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-118.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-119",
    categoria: "camisa",
    nome: "KUROSAKI",
    preco: 2.029,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-119.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-120",
    categoria: "camisa",
    nome: "SOFTHEN",
    preco: 1.759,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-120.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-121",
    categoria: "camisa",
    nome: "FIRE FORCE",
    preco: 2.099,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-121.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-122",
    categoria: "camisa",
    nome: "GHOSTBUSTERS",
    preco: 1.759,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-122.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-123",
    categoria: "camisa",
    nome: "OVERFAITH",
    preco: 1.859,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-123.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
  {
    id: "camisa-124",
    categoria: "camisa",
    nome: "THE CHAMP",
    preco: 1.959,
    tamanhos: ["S", "M", "L", "XL"],
    imagens: ["../styles/assets/img/camisa-124.webp"],
    descricao: "Camisa oversized com acabamento fosco, ideal para compor looks urbanos."
  },
];

var CATEGORIA_LABEL = {
  camisa: "Camisa",
  camisola: "Camisola",
  calca: "Calça",
  calcado: "Calçado",
  bone: "Boné",
  acessorio: "Acessório",
  conjunto: "Conjunto",
  eletronico: "Eletrónico",
  tech: "Tech",
  preto: "Preto"
};

var CATEGORIA_ICON = {
  camisa: "ti-shirt",
  camisola: "ti-shirt-sport",
  calca: "ti-hanger",
  calcado: "ti-shoe",
  bone: "ti-hat",
  acessorio: "ti-diamond",
  conjunto: "ti-layout-grid",
  eletronico: "ti-headphones",
  tech: "ti-device-watch",
  preto: "ti-moon"
};

function formatarPreco(valor) {
  return valor.toLocaleString("pt-PT") + " MT";
}

/* Ícones SVG locais para conteúdos criados por JavaScript. */
function iconSVG(iconClass, extraAttrs) {
  var name = String(iconClass || "ti-photo").replace(/^ti-/, "");
  var paths = {
    shirt: '<path d="M8 4l4 2 4-2 4 3-3 4v9H7v-9L4 7l4-3z"/><path d="M9 4c.5 2 1.5 3 3 3s2.5-1 3-3"/>',
    'shirt-sport': '<path d="M8 4l4 2 4-2 4 3-3 4v9H7v-9L4 7l4-3z"/><path d="M10 11h4M10 15h4"/>',
    hanger: '<path d="M9 7a3 3 0 1 1 4 2.8V12l8 5H3l8-5"/>',
    shoe: '<path d="M4 14c3 0 5-1 6-4l2 1c2 3 4 4 8 4v3H5a2 2 0 0 1-1-4z"/><path d="M12 11l1-2M15 13l1-2"/>',
    hat: '<path d="M4 13c2-4 5-6 8-6s6 2 8 6v3H4v-3zM8 7l1-3h6l1 3M4 16c4 2 12 2 16 0"/>',
    diamond: '<path d="M6 4h12l3 5-9 11L3 9l3-5zM3 9h18M8 4l4 16 4-16"/>',
    'layout-grid': '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',
    headphones: '<path d="M4 13v-2a8 8 0 0 1 16 0v2"/><path d="M4 13h3v6H5a1 1 0 0 1-1-1v-5zM20 13h-3v6h2a1 1 0 0 0 1-1v-5z"/>',
    'device-watch': '<rect x="7" y="6" width="10" height="12" rx="3"/><path d="M9 6V3h6v3M9 18v3h6v-3M12 9v3l2 1"/>',
    moon: '<path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5z"/>',
    photo: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="M3 16l5-5 4 4 2-2 4 3"/>'
  };
  return '<svg class="ti ti-' + name + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false" ' + (extraAttrs || '') + '>' + (paths[name] || paths.photo) + '</svg>';
}
