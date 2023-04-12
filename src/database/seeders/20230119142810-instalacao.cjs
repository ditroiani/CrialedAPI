'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('instalacoes',
      [
        {
          id: "1",
          razao_social: "CRIALED",
          cnpj: "07423929000172",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "2",
          razao_social: "ASSOCIA��O DOS ENGENHEIROS DE JUNDIA�",
          cnpj: "44645166000130",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "3",
          razao_social: "POSTO DE SERVI�OS AUTOMOTIVOS E COMERCIO DE COMBUSTIVEIS ABU-DHABI  (REDE PARIS)",
          cnpj: "17449816000108",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "4",
          razao_social: "POSTO DE SERVICOS AUTOMOTIVOS E COMERCIO DE COMBUSTIVEL LISBOA LTDA (REDE PARIS)",
          cnpj: "15584756000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "5",
          razao_social: "POSTO DE SERVI�OS AUTOMOTIVOS E COMERCIO DE COMBUSTIVEIS MADRI  (REDE PARIS)",
          cnpj: "13569294000119",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "6",
          razao_social: "POSTO DE SERVI�OS AUTOMOTIVOS E COMERCIO DE COMBUSTIVEIS PARIS EIRELI (PARIS 01)",
          cnpj: "10529465000198",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "7",
          razao_social: "AUTO POSTO BARRAMARES LTDA",
          cnpj: "11820191000154",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "8",
          razao_social: "POSTO DE SERVI�OS AUTOMOTIVOS E COMERCIO DE COMBUSTIVEIS PARIS EIRELI (PARIS 02)",
          cnpj: "10529465000198",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "9",
          razao_social: "CATANHO E CATANHO LTDA",
          cnpj: "54901988000199",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "10",
          razao_social: "SUPERMERCADO BOM X LTDA",
          cnpj: "11150477000170",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "11",
          razao_social: "SLEEP CENTER COM. COLCH�ES IBIRAPUERA",
          cnpj: "19708532000106",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "12",
          razao_social: "SLEEP CENTER COM. COLCH�ES ARICANDUVA",
          cnpj: "19708532000459",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "13",
          razao_social: "AUTO POSTO O PORTAL DE VILA CARR�O LTDA",
          cnpj: "28487096000183",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "14",
          razao_social: "AUTO POSTO BIG BOSS",
          cnpj: "29602536000169",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "15",
          razao_social: "POSTO ALICANTE (REDE ESA)",
          cnpj: "32639240000127",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "16",
          razao_social: "POSTO PIEMONTE (REDE ESA)",
          cnpj: "27831714000106",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "17",
          razao_social: "KOPENHAGEN",
          cnpj: "61158283019370",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "18",
          razao_social: "GARENA AGENCIAMENTO DE NEG�CIOS",
          cnpj: "33267823000137",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "19",
          razao_social: "RADNAQ & PETROCAR (REI DO �LEO - LOJA MARGINAL 1)",
          cnpj: "26286556000180",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "20",
          razao_social: "OMINI ODONTOLOGIA",
          cnpj: "12940025000154",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "21",
          razao_social: "PROBEL VILA MATILDE",
          cnpj: "30244734000187",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "22",
          razao_social: "AUTO POSTO BAHIA DO SOL LTDA",
          cnpj: "38974879000145",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "23",
          razao_social: "CENTRO AUTOMOTIVO RSB LTDA (BOULEVAR)",
          cnpj: "34920817000108",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "24",
          razao_social: "AUTO POSTO GUARDI�O DA MEIA NOITE",
          cnpj: "42867352000189",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "25",
          razao_social: "CENTRO AUTOMOTIVO AVENIDA DO POVO",
          cnpj: "12502366000148",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "26",
          razao_social: "NSG PARTNERS ODONTOLOGIA LTDA ME (RISUM)",
          cnpj: "24247715000101",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "27",
          razao_social: "LOJA MARLENE ENXOVAIS (FILIAL AN�LIA FRANCO)",
          cnpj: "62730619000109",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "28",
          razao_social: "ANDORINHA SUPERMERCADO LTDA",
          cnpj: "44480747000160",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "29",
          razao_social: "EMPLACADORA CARLOS VARGAS LTDA (POSTO PARIS)",
          cnpj: "36822297000118",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "30",
          razao_social: "LAB PRODUTOS DE CONVENIENCIA LTDA ME",
          cnpj: "23212302000129",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "31",
          razao_social: "AUTO POSTO ESTA��O BELENZINHO LTDA (REDE ESA)",
          cnpj: "27720551000186",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "32",
          razao_social: "PORTAL LESTE AUTO POSTO LTDA (REDE ESA)",
          cnpj: "05451897000193",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "33",
          razao_social: "LUBRISINT LUBRIFICANTES SINT�TICOS ESPECIAIS LTDA (REI DO �LEO - LOJA MARGINAL 1)",
          cnpj: "26286556000180",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "34",
          razao_social: "PROBEL INTERLAR INTERLAGOS",
          cnpj: "19708532000459",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "35",
          razao_social: "PLATINUM CONSULTORIA FINANCEIRA ESPECIALIZADA LTDA",
          cnpj: "35658108000150",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "36",
          razao_social: "DOPERI COM�RCIO DE COMBUSTIVEIS EIRELI (POSTO IPIRANGA)",
          cnpj: "33905077000160",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "37",
          razao_social: "ALFA INDUSTRIA E COMERCIO DE IMPLEMENTOS RODOVIARIOS LTDA (POSTO BR TIQUATIRA)",
          cnpj: "01716872000113",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "38",
          razao_social: "CENTRO AUTOMOTIVO LAGO FRIAS LTDA",
          cnpj: "23934173000182",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "39",
          razao_social: "AUTO POSTO PEDR�O (FAST STORE) (REDE ESA)",
          cnpj: "49033632000140",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "40",
          razao_social: "POSTO BRISTOL AUTO POSTO E SERVI�OS (REDE ESA)",
          cnpj: "07717314000159",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "41",
          razao_social: "POSTO TROPICAL GASOLINAS E SERVI�OS AUTOMOTIVOS LTDA (REDE ESA)",
          cnpj: "62658786000196",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "42",
          razao_social: "POSTO AUTO POSTO BENETS (REDE ESA)",
          cnpj: "04503528000134",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "43",
          razao_social: "POSTOS MIME SC",
          cnpj: "83488882000294",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "44",
          razao_social: "POSTOS DO CLA�DIO - RODOVIA ROTA DO SOL",
          cnpj: "18198912000266",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "45",
          razao_social: "POSTOS DO CLA�DIO",
          cnpj: "18198912000347",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "46",
          razao_social: "IRM�OS ANDREAZZA - MATRIZ 001",
          cnpj: "01132478000138",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "47",
          razao_social: "IRM�OS ANDREAZZA - LOJA FARROPILHA",
          cnpj: "01132478000138",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "48",
          razao_social: "LOJA HIPE - CURITIBA",
          cnpj: "",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "49",
          razao_social: "CENTRO AUTOMOTIVO PORTAL DO LITORAL LTDA",
          cnpj: "06106738000114",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "50",
          razao_social: "CENTRO AUTOMOTIVO LAGO VOSTOK (IMIRIM)",
          cnpj: "15604395000109",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "51",
          razao_social: "GANHA SEMPRE DROGARIAS LTDA",
          cnpj: "10734545000770",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "52",
          razao_social: "LIMONE AB03 RESTAURANTE LTDA",
          cnpj: "35795791000178",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "53",
          razao_social: "ORGANIZA��O FARMACEUTICA NAKANO LTDA (PROMOFARMA)",
          cnpj: "03123210000165",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "54",
          razao_social: "ILHABELA POSTO DE SERVI�OS LTDA",
          cnpj: "59434027000135",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "55",
          razao_social: "DMS COMERCIO DE ROUPAS E ACESS�RIOS EIRELI (COLOMBO - VESTE CASA LAPA)",
          cnpj: "37927379000190",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "56",
          razao_social: "AUTO POSTO NOVO �GUIA DE HAIA (REDE ESA)",
          cnpj: "13462086000116",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "57",
          razao_social: "ZMAP IMOBILI�RIA",
          cnpj: "34075179000168",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "58",
          razao_social: "COMERCIAL DE M�VEIS IBIRAPUERA EIRELI (D LINEA IBIRAPUERA)",
          cnpj: "36920772000199",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "59",
          razao_social: "SOCCER GROUP ESPORTE E ENTRETERIMENTO EIRELI",
          cnpj: "30185981000230",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "60",
          razao_social: "PROBEL JURUBATUBA",
          cnpj: "19708532000459",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "61",
          razao_social: "ESTETICA BTC SANTO AMARO LTDA (BOTO CENTER)",
          cnpj: "37978374000196",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "62",
          razao_social: "BOX CONNECTION COMERCIO E SERVI�OS LTDA",
          cnpj: "37629465000116",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "63",
          razao_social: "IRM�OS ANDREAZZA - LOJA S�O CRISTOV�O",
          cnpj: "01132478003668",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "64",
          razao_social: "AUTO POSTO JARDIM AVELINO (REDE ESA)",
          cnpj: "57977803000118",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "65",
          razao_social: "AUTO POSTO GTI",
          cnpj: "32516758000173",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "66",
          razao_social: "TARGET COMUNICA��O VISUAL  (UNIDADE - NANUQUE)",
          cnpj: "36390309000182",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "67",
          razao_social: "SOCIAL SERVICE MKT DE RESPONSABILIDADE LTDA",
          cnpj: "07303492000133",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "68",
          razao_social: "AUTO POSTO AMMA LTDA",
          cnpj: "03968113000173",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "69",
          razao_social: "MIRANDOPOLIS AUTO POSTO LTDA",
          cnpj: "60597713000106",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "70",
          razao_social: "POSTO DE SERVI�OS AUTOMOTIVOS E COMERCIO DE COMBUSTIVEIS PARIS EIRELI (PARIS 03)",
          cnpj: "10529465000198",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "71",
          razao_social: "POSTO SUL AM�RICA LTDA",
          cnpj: "60761640000146",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "72",
          razao_social: "AUTO POSTO BARRANC�O EIRELI",
          cnpj: "47388160000113",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "73",
          razao_social: "STYLLUS SUPERMERCADO CENTER",
          cnpj: "18454571000161",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "74",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 02)",
          cnpj: "60437647000174",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "75",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 01 - MATRIZ)",
          cnpj: "60437647004013",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "76",
          razao_social: "AVALON BLINDAGENS ESPECIAIS LTDA",
          cnpj: "05558064000126",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "77",
          razao_social: "AUTO POSTO DILMA REDE DE LUCCA",
          cnpj: "47248547000174",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "78",
          razao_social: "SUPERMERCADO GUANABARA BARRA",
          cnpj: "17033381000108",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "79",
          razao_social: "SUPERMERCADO CASTANHA LTDA",
          cnpj: "63082721000108",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "80",
          razao_social: "IRM�OS ANDREAZZA - LOJA FEIJ�",
          cnpj: "01132478000219",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "81",
          razao_social: "IRM�OS ANDREAZZA - LOJA EMANCIPA��O",
          cnpj: "01132478003315",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "82",
          razao_social: "IRM�OS ANDREAZZA - LOJA BENTO 2",
          cnpj: "01132478003900",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "83",
          razao_social: "IRM�OS ANDREAZZA - LOJA LOURDES",
          cnpj: "01132478000642",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "84",
          razao_social: "IRM�OS ANDREAZZA - LOJA PIO X",
          cnpj: "01132478003404",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "85",
          razao_social: "SUPERMERCADO AGRICER",
          cnpj: "24107160000283",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "86",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 01 - MATRIZ)",
          cnpj: "60437647004013",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "87",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 03)",
          cnpj: "60437647001260",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "88",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 04)",
          cnpj: "60437647001936",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "89",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 12)",
          cnpj: "60437647002312",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "90",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 23)",
          cnpj: "60437647001006",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "91",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 24)",
          cnpj: "60437647003122",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "92",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 31)",
          cnpj: "60437647002908",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "93",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 35)",
          cnpj: "60437647004285",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "94",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 36)",
          cnpj: "60437647004366",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "95",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 37)",
          cnpj: "60437647004447",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "96",
          razao_social: "DASS STORE COM�RCIO DE ROUPAS E ACESS�RIOS LTDA",
          cnpj: "30008104000103",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "97",
          razao_social: "AUTO POSTO KAJIYA LTDA",
          cnpj: "71039622000171",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "98",
          razao_social: "RESTAURANTE LAVASH (SHOPPING FREI CANECA)",
          cnpj: "",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "99",
          razao_social: "PLASTICOS IVONE",
          cnpj: "",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "100",
          razao_social: "ARQUITRAMA FEIRAS E EXPOSI��ES LTDA (PROJETO C6 BANK)",
          cnpj: "43226125000147",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "101",
          razao_social: "PINK GLOW CONF. EIRELI",
          cnpj: "28726580000118",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "102",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 2336)",
          cnpj: "47508411007916",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "103",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 2349)",
          cnpj: "47508411048353",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "104",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 1)",
          cnpj: "47508411000237",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "105",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 1224)",
          cnpj: "47508411094207",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "106",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 1704)",
          cnpj: "47508411095785",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "107",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 1302)",
          cnpj: "47508411000407",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "108",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 1337)",
          cnpj: "47508411104954",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "109",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 1341)",
          cnpj: "47508411105179",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "110",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 1299)",
          cnpj: "47508411061708",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "111",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 1717)",
          cnpj: "47508411096757",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "112",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 1292)",
          cnpj: "47508411010623",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "113",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 1357)",
          cnpj: "47508411034212",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "114",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 1688)",
          cnpj: "47508411208571",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "115",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 2409)",
          cnpj: "47508411169657",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "116",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 1307)",
          cnpj: "47508411086360",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "117",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 1314)",
          cnpj: "47508411092506",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "118",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 1359)",
          cnpj: "47508411058154",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "119",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 1201)",
          cnpj: "47508411030730",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "120",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 1319)",
          cnpj: "47508411099268",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "121",
          razao_social: "COMPANHIA BRASILEIRA DE DISTRIBUICAO (COLGATE - LOJA 1351)",
          cnpj: "47508411013991",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "122",
          razao_social: "JOS� CLEANDO RODRIGUES DOS SANTOS LTDA (PADARIA FRATELLI TATUAP�)",
          cnpj: "34191597000110",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "123",
          razao_social: "CENTRO AUTOMOTIVO PNEUS MEU CARRO LTDA",
          cnpj: "20085983000113",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "124",
          razao_social: "CENTRO AUTOMOTIVO PNEUS MEU CARRO LTDA (CONTINENTAL PNEUS)",
          cnpj: "20085983000113",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "125",
          razao_social: "SLEEP CENTER COM. COLCH�ES IBIRAPUERA",
          cnpj: "19708532000106",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "126",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 124 / TUBALINA)",
          cnpj: "09442132002787",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "127",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 124 / TUBALINA)",
          cnpj: "09442132002787",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "128",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 124 / TUBALINA)",
          cnpj: "09442132002787",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "129",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 124 / TUBALINA)",
          cnpj: "09442132002787",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "130",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 124 / TUBALINA)",
          cnpj: "09442132002787",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "131",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 124 / TUBALINA)",
          cnpj: "09442132002787",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "132",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 124 / TUBALINA)",
          cnpj: "09442132002787",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "133",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 124 / TUBALINA)",
          cnpj: "09442132002787",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "134",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 124 / TUBALINA)",
          cnpj: "09442132002787",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "135",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 124 / TUBALINA)",
          cnpj: "09442132002787",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "136",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 124 / TUBALINA)",
          cnpj: "09442132002787",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "137",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 124 / TUBALINA)",
          cnpj: "09442132002787",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "138",
          razao_social: "RESTAURANTE CIA GASTRONOMICA 3 GALLERIA LTDA (RESTAURANTE LAVASH GALLERIA SHOPPING)",
          cnpj: "39440039000165",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "139",
          razao_social: "RESTAURANTE CIA GASTRONOMICA 3 GALLERIA LTDA (RESTAURANTE LAVASH GALLERIA SHOPPING)",
          cnpj: "39440039000165",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "140",
          razao_social: "DRA. CABELO & ART LTDA (SAL�O JACQUES JANINE MORUMBI)",
          cnpj: "11533051000103",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "141",
          razao_social: "B.A BARBOSA SUPERMERCADO LTDA (SUPERMERCADO GUARANI)",
          cnpj: "43462720000181",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "142",
          razao_social: "AUTO POSTO DENVER LTDA (REDE VALE +)",
          cnpj: "37065218000134",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "143",
          razao_social: "COMERCIAL E IMPORTADORA DE PNEUS LTDA (LOJA CERQUEIRA C�SAR)",
          cnpj: "61234985020725",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "144",
          razao_social: "COMERCIAL E IMPORTADORA DE PNEUS LTDA (LOJA HENRIQUE SCHAUMANN, 531)",
          cnpj: "61234985021373",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "145",
          razao_social: "COMERCIAL E IMPORTADORA DE PNEUS LTDA (LOJA SANTO AMARO)",
          cnpj: "61234985020300",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "146",
          razao_social: "ASSOCIA��O COMERCIAL E EMPRESARIAL DE ILHABELA",
          cnpj: "50322338000138",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "147",
          razao_social: "LUBRISINT LUBRIFICANTES SINT�TICOS ESPECIAIS LTDA (REI DO �LEO - LOJA BUTANT�)",
          cnpj: "50484476000113",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "148",
          razao_social: "LUBRISINT LUBRIFICANTES SINT�TICOS ESPECIAIS LTDA (REI DO �LEO - LOJA MARGINAL 2)",
          cnpj: "50484476000113",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "149",
          razao_social: "AUTOLUB COM�RCIO DE PRODUTOS AUTOMOTIVOS LTDA",
          cnpj: "07574105000101",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "150",
          razao_social: "FAST MATTRESS INDUSTRIA E COM�RCIO DE COLCH�ES LTDA",
          cnpj: "31674597000183",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "151",
          razao_social: "LOJA MARLENE ENXOVAIS - FILIAL SHOPPING AN�LIA FRANCO",
          cnpj: "62730619000109",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "152",
          razao_social: "TATAU ESTACIONAMNETO E LAVA R�PIDO",
          cnpj: "07898192000144",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "153",
          razao_social: "NEW AMAZON CONFECC��O E COM�RCIO LTDA (BANCA CARMIM)",
          cnpj: "10526857000799",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "154",
          razao_social: "S.A ABDOUNI M�VEIS E DECORA��ES LTDA (BAZZI M�VEIS)",
          cnpj: "10373578000147",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "155",
          razao_social: "BEM MAIS INCORPORADORA E CONSTRUTORA LTDA (ITANHA�M)",
          cnpj: "15198623000198",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "156",
          razao_social: "RESTAURANTE C.I.A. GASTRONOMICA 1 FREI CANECA LTDA (RESTAURANTE LAVASH FREI CANECA)",
          cnpj: "39382033000189",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "157",
          razao_social: "RESTAURANTE C.I.A. GASTRONOMICA 1 FREI CANECA LTDA (RESTAURANTE LAVASH FREI CANECA)",
          cnpj: "39382033000189",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "158",
          razao_social: "TARGET COMUNICA��O VISUAL  (UNIDADE - MUCURI)",
          cnpj: "39294105000136",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "159",
          razao_social: "AATM COM�RCIO (PRO HOUSE COLCH�ES BUTANTA)",
          cnpj: "32995134000186",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "160",
          razao_social: "AUTO POSTO 2222 LTDA",
          cnpj: "46815221000119",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "161",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 01 - MATRIZ) / PROJETO CUBO",
          cnpj: "60437647004013",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "162",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS LTDA (LOJA 39) / PROJETO CUBO",
          cnpj: "60437647004790",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "163",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 24) / PROJETO CUBO",
          cnpj: "60437647003122",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "164",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 36) / PROJETO CUBO",
          cnpj: "60437647004366",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "165",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 37) / PROJETO CUBO",
          cnpj: "60437647004447",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "166",
          razao_social: "RESTAURANTE CIA GASTRONOMICA 3 GALLERIA LTDA (RESTAURANTE LAVASH DON PEDRO)",
          cnpj: "39381998000157",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "167",
          razao_social: "RESTAURANTE CIA GASTRONOMICA 3 GALLERIA LTDA (RESTAURANTE LAVASH DON PEDRO)",
          cnpj: "39381998000157",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "168",
          razao_social: "ESTETICA FORTALEZA EIRELI (CLINICA PELE / RECIFE)",
          cnpj: "20400830000113",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "169",
          razao_social: "DISTRIBUIDORA DE PRODUTOS ALIMENT�CIOS MARSIL LTDA",
          cnpj: "61182051000176",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "170",
          razao_social: "MEXICANISSIMO SANTO ANDRE",
          cnpj: "39652827000115",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "171",
          razao_social: "LOJA DE CARROS VILA LEOPOLDINA",
          cnpj: "",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "172",
          razao_social: "ESPA�O W7 CABELO E EST�TICA",
          cnpj: "17092208000180",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "173",
          razao_social: "KODY ADMINISTRA��O E COBRAN�A LTDA (ELEVSHOPBRAS)",
          cnpj: "32263226000171",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "174",
          razao_social: "AUTO POSTO BONDINHO LTDA (REDE ESA)",
          cnpj: "67796680000172",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "175",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 102 / LUIZOTE DE FREITAS)",
          cnpj: "09442132000490",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "176",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS LTDA (LOJA 39)",
          cnpj: "60437647004790",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "177",
          razao_social: "RESTAURANTE LIMONE",
          cnpj: "",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "178",
          razao_social: "RESTAURANTE LAVASH (DISTRITO FEDERAL)",
          cnpj: "",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "179",
          razao_social: "AK ADMINISTRA��O CONSULTORIA MARKETING ESPORTIVO EVENTOS E SHOWS",
          cnpj: "10627736000148",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "180",
          razao_social: "XPERIENCE STUDIO LTDA (CAF�)",
          cnpj: "39303331000136",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "181",
          razao_social: "SOCIAL DREAM EYES CENTRO DE EST�TICA LTDA (MYLASH ITAIM BIBI)",
          cnpj: "33652778000134",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "182",
          razao_social: "CENTRO AUTOMOTIVO CANAIOLO (REDE ESA)",
          cnpj: "20158384000182",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "183",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 38)",
          cnpj: "60437647004870",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "184",
          razao_social: "BIG BOYS CENTRO AUTOMOTIVO LTDA",
          cnpj: "32240308000109",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "185",
          razao_social: "SLEEP CENTER COM. COLCH�ES ARICANDUVA (LOJA 02)",
          cnpj: "19708532000459",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "186",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS LTDA (LOJA 39) / PROJETO CUBO",
          cnpj: "60437647004790",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "187",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS LTDA (LOJA 36) / PROJETO CUBO",
          cnpj: "60437647004366",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "188",
          razao_social: "B.A BARBOSA SUPERMERCADO LTDA (SUPERMERCADO GUARANI)",
          cnpj: "43462720000181",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "189",
          razao_social: "ACM CAFE E LANCHONETE LTDA (CHEIRIN BOM)",
          cnpj: "38228993000126",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "190",
          razao_social: "ORRA MEU BEACH SPORTS LTDA",
          cnpj: "35501987000102",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "191",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 125 / PAINEIRAS)",
          cnpj: "09442132002868",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "192",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 125 / PAINEIRAS)",
          cnpj: "09442132002868",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "193",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 125 / PAINEIRAS)",
          cnpj: "09442132002868",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "194",
          razao_social: "AUTO POSTO PENHA BRASIL LTDA",
          cnpj: "01351146000144",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "195",
          razao_social: "BIG BROTHER AUTO POSTO LTDA",
          cnpj: "04845671000104",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "196",
          razao_social: "AUTO POSTO ESTRELA DA CASA VERDE LTDA",
          cnpj: "18934956000126",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "197",
          razao_social: "CHICKEN TASTY GOUMERT RETAURANTE LTDA",
          cnpj: "23005749000127",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "198",
          razao_social: "VIDA NATURAL MAIS COM E PROD DE ALIMENTOS SA�DE E BELEZA LTDA",
          cnpj: "30193053000137",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "199",
          razao_social: "PREMIUM TRAVEL CORPORATE E EVENTOS (SUPERMERCADO SHIBATA) - (JBS - PROJETO FRIBOI)",
          cnpj: "27647910000117",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "200",
          razao_social: "ASSOCIA��O COMERCIAL E EMPRESARIAL DE ILHABELA",
          cnpj: "50322338000138",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "201",
          razao_social: "ARINELLA INTERLAGOS COMERCIO VAREJISTA DE COMBUSTIVEL LTDA",
          cnpj: "34944266000104",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "202",
          razao_social: "ARINELLA INTERLAGOS COMERCIO VAREJISTA DE COMBUSTIVEL LTDA",
          cnpj: "34944266000104",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "203",
          razao_social: "AUTO POSTO PERSEU LTDA",
          cnpj: "00723674000114",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "204",
          razao_social: "BOISSUCANGA AUTO POSTO LTDA",
          cnpj: "55208789000162",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "205",
          razao_social: "POSTO PAISAGEM LTDA",
          cnpj: "60895653000108",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "206",
          razao_social: "HIPE INNOVATION CENTER DESENVOLVIMENTO E PARTICIPACOES LTDA",
          cnpj: "35247156000156",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "207",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 120 / ALTO UMUARAMA)",
          cnpj: "09442132002191",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "208",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 120 / ALTO UMUARAMA)",
          cnpj: "09442132002191",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "209",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 123 / SEGISMUNDO PEREIRA)",
          cnpj: "09442132002515",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "210",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 123 / SEGISMUNDO PEREIRA)",
          cnpj: "09442132002515",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "211",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 123 / SEGISMUNDO PEREIRA)",
          cnpj: "09442132002515",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "212",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 124 / TUBALINA)",
          cnpj: "09442132002787",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "213",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 124 / TUBALINA)",
          cnpj: "09442132002787",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "214",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 124 / TUBALINA)",
          cnpj: "09442132002787",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "215",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 124 / TUBALINA)",
          cnpj: "09442132002787",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "216",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 126 / AMOROSO COSTA)",
          cnpj: "09442132002604",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "217",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 126 / AMOROSO COSTA)",
          cnpj: "09442132002604",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "218",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 126 / AMOROSO COSTA)",
          cnpj: "09442132002604",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "219",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 114 / MANSOUR)",
          cnpj: "09442132001543",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "220",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 114 / MANSOUR)",
          cnpj: "09442132001543",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "221",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 114 / MANSOUR)",
          cnpj: "09442132001543",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "222",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 121 / PEQUIS)",
          cnpj: "09442132002272",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "223",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 121 / PEQUIS)",
          cnpj: "09442132002272",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "224",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 121 / PEQUIS)",
          cnpj: "09442132002272",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "225",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 101 / CANA�)",
          cnpj: "09442132000148",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "226",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 101 / CANA�)",
          cnpj: "09442132000148",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "227",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 101 / CANA�)",
          cnpj: "09442132000148",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "228",
          razao_social: "CENTRO AUTOMOTIVO PSX58 LTDA (REDE ESA)",
          cnpj: "13577912000172",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "229",
          razao_social: "CENTRO AUTOMOTIVO PSX58 LTDA (REDE ESA)",
          cnpj: "13577912000172",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "230",
          razao_social: "POSTO INTERKAR (REDE TANGE GENTE E GEST�O LTDA)",
          cnpj: "37097288000174",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "231",
          razao_social: "POSTO INTERKAR (REDE TANGE GENTE E GEST�O LTDA)",
          cnpj: "37097288000174",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "232",
          razao_social: "POSTO ADAMO (REDE TANGE GENTE E GEST�O LTDA)",
          cnpj: "37097288000174",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "233",
          razao_social: "POSTO ADAMO (REDE TANGE GENTE E GEST�O LTDA)",
          cnpj: "37097288000174",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "234",
          razao_social: "POSTO BAGUA (REDE TANGE GENTE E GEST�O LTDA)",
          cnpj: "37097288000174",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "235",
          razao_social: "POSTO BAGUA (REDE TANGE GENTE E GEST�O LTDA)",
          cnpj: "37097288000174",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "236",
          razao_social: "POSTO BAGUA (REDE TANGE GENTE E GEST�O LTDA)",
          cnpj: "37097288000174",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "237",
          razao_social: "POSTO BAGUA (REDE TANGE GENTE E GEST�O LTDA)",
          cnpj: "37097288000174",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "238",
          razao_social: "POSTO BRILHANTEX (REDE TANGE GENTE E GEST�O LTDA)",
          cnpj: "37097288000174",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "239",
          razao_social: "POSTO BRILHANTEX (REDE TANGE GENTE E GEST�O LTDA)",
          cnpj: "37097288000174",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "240",
          razao_social: "POSTO SYSTEM (REDE TANGE GENTE E GEST�O LTDA)",
          cnpj: "37097288000174",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "241",
          razao_social: "POSTO SYSTEM (REDE TANGE GENTE E GEST�O LTDA)",
          cnpj: "37097288000174",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "242",
          razao_social: "PRODU��ES E LOCA��ES DE EQUIPAMENTOS LTDA (ALOCADO NO SUPERMERCADO P�O DE A��CAR RJ)",
          cnpj: "28267710000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "243",
          razao_social: "PRODU��ES E LOCA��ES DE EQUIPAMENTOS LTDA (ALOCADO NO SUPERMERCADO P�O DE A��CAR RJ)",
          cnpj: "28267710000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "244",
          razao_social: "PRODU��ES E LOCA��ES DE EQUIPAMENTOS LTDA (ALOCADO NO SUPERMERCADO P�O DE A��CAR RJ)",
          cnpj: "28267710000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "245",
          razao_social: "CENTRO AUTOMOTIVO MOSCATEL (REDE ESA)",
          cnpj: "21042671000195",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "246",
          razao_social: "LAVANDISCA AUTO POSTO (REDE ESA)",
          cnpj: "08963218000153",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "247",
          razao_social: "AUTO POSTO PEDR�O (REDE ESA)",
          cnpj: "49033632000140",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "248",
          razao_social: "AUTO POSTO RODOVIAS (REDE ESA)",
          cnpj: "46887394000142",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "249",
          razao_social: "AUTO POSTO BAURU LTDA (REDE ESA)",
          cnpj: "60830627000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "250",
          razao_social: "P. SERV. AUTO. E COM. DE COMB. TOURIGA (REDE ESA)",
          cnpj: "10445677000197",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "251",
          razao_social: "CENTRO AUTOMOTIVO TOSCANA (REDE ESA)",
          cnpj: "16539607000184",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "252",
          razao_social: "AUTO POSTO BONDINHO (REDE ESA)",
          cnpj: "67796680000172",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "253",
          razao_social: "CENTRO AUTOMOTIVO MOURISCO LTDA (REDE ESA)",
          cnpj: "38335454000196",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "254",
          razao_social: "CENTRO AUTOMOTIVO MOURISCO LTDA (REDE ESA)",
          cnpj: "38335454000196",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "255",
          razao_social: "CENTRO AUTOMOTIVO TANNAT LTDA (REDE ESA)",
          cnpj: "17617672000143",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "256",
          razao_social: "AUTO POSTO FLOR DE LIS LTDA (REDE ATLANTA)",
          cnpj: "22123993000121",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "257",
          razao_social: "AUTO POSTO GONDOLA LTDA (REDE ATLANTA)",
          cnpj: "61929782000132",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "258",
          razao_social: "AUTO POSTO INDEPENDENCIA DO CAMBUCI LTDA (REDE ATLANTA)",
          cnpj: "07679089000103",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "259",
          razao_social: "CENTRO AUTOMOTIVO PUGLIA LTDA (REDE ESA)",
          cnpj: "38033703000199",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "260",
          razao_social: "POSTO DE SERVI�OS ISIKAWA LTDA",
          cnpj: "60954856000128",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "261",
          razao_social: "POSTO DE SERVI�OS ISIKAWA LTDA",
          cnpj: "60954856000128",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "262",
          razao_social: "AUTO POSTO DIAMANTE DE SOROCABA",
          cnpj: "04645433000155",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "263",
          razao_social: "CENTRO AUTOMOTIVO CANAIOLO (REDE ESA)",
          cnpj: "20158384000182",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "264",
          razao_social: "MODENA 17 DESENVOLVIMENTO IMOBILI�RIO SPE LTDA",
          cnpj: "30589407000167",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "265",
          razao_social: "IRM�OS ANDREAZZA � F37 (SANTA LUCIA / 040)",
          cnpj: "01132478003820",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "266",
          razao_social: "BULLGUER ALIMENTACOES S.A",
          cnpj: "21288040001122",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "267",
          razao_social: "POSTO PORTAL DA ESPRAIADA LTDA (REDE ESA)",
          cnpj: "10903881000104",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "268",
          razao_social: "MARC BAZAR E ARMARINHOS LTDA (L�OEIL)",
          cnpj: "30928078000212",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "269",
          razao_social: "AUTO POSTO DIAMANTE DO IPIRANGA LTDA",
          cnpj: "30910310807",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "270",
          razao_social: "LAVO CLODOMIRO AMAZONAS LTDA",
          cnpj: "40099645000148",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "271",
          razao_social: "ANADIA COMERCIAL PANIFICADORA E IMPORTADORA LTDA",
          cnpj: "34194950000116",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "272",
          razao_social: "ANADIA COMERCIAL PANIFICADORA E IMPORTADORA LTDA",
          cnpj: "34194950000116",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "273",
          razao_social: "VETOR AUTO POSTO LTDA (REDE ATLANTA)",
          cnpj: "44356004000182",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "274",
          razao_social: "AUTO POSTO CASA NOVA LTDA (REDE ATLANTA)",
          cnpj: "48926448000167",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "275",
          razao_social: "AUTO POSTO GUSA LTDA (REDE ATLANTA)",
          cnpj: "47458690000190",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "276",
          razao_social: "POSTO DE SERVI�OS RIOLIS LTDA (REDE ATLANTA)",
          cnpj: "10863632000132",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "277",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 113 / MORUMBI)",
          cnpj: "09442132001462",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "278",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 113 / MORUMBI)",
          cnpj: "09442132001462",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "279",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 113 / MORUMBI)",
          cnpj: "09442132001462",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "280",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 122 / JARDIM BRAS�LIA)",
          cnpj: "09442132002434",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "281",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 122 / JARDIM BRAS�LIA)",
          cnpj: "09442132002434",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "282",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 122 / JARDIM BRAS�LIA)",
          cnpj: "09442132002434",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "283",
          razao_social: "AVIAMENTOS E PLASTICOS MAIS ALEM LTDA (PLASTICOS IVONE)",
          cnpj: "28611155000183",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "284",
          razao_social: "PORTO PREMIUM FUNDO DE INVESTIMENTO IMOBILIARIO (SHOPPING PORTO BR�S)",
          cnpj: "31524789000103",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "285",
          razao_social: "PORTO PREMIUM FUNDO DE INVESTIMENTO IMOBILIARIO (SHOPPING PORTO BR�S)",
          cnpj: "31524789000103",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "286",
          razao_social: "SUPER POSTO 3M LTDA - POSTO SHELL (REDE SETEE)",
          cnpj: "56900129000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "287",
          razao_social: "BOLA PRO ALTO ALUGUEIS ESPORTIVOS LTDA (QUADRA FUTEV�LEI)",
          cnpj: "32020028000187",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "288",
          razao_social: "DP1 RESTAURANTE LTDA (DOMINO'S PIZZA)",
          cnpj: "24840166009807",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "289",
          razao_social: "DP1 RESTAURANTE LTDA (DOMINO'S PIZZA) - CUBO DE LED",
          cnpj: "24840166009807",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "290",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 127 / ROOSEVELT)",
          cnpj: "09442132003082",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "291",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 127 / ROOSEVELT)",
          cnpj: "09442132003082",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "292",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 127 / ROOSEVELT)",
          cnpj: "09442132003082",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "293",
          razao_social: "AUTOMOTIVO TANGERINAS LTDA",
          cnpj: "43297563000104",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "294",
          razao_social: "SMF SERVI�OS LTDA ME (SUPERMERCADO CUCA)",
          cnpj: "21529650000107",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "295",
          razao_social: "VILLAGE OPTICA PRESENTES LTDA",
          cnpj: "65781585000170",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "296",
          razao_social: "REDE AUTOMAN POSTOS E SERVICOS LTDA",
          cnpj: "19214470000186",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "297",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 105 / ESTADOS UNIDOS)",
          cnpj: "09442132000652",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "298",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 105 / ESTADOS UNIDOS)",
          cnpj: "09442132000652",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "299",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 105 / ESTADOS UNIDOS)",
          cnpj: "09442132000652",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "300",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 108 / NOSSA SENHORA DA ABADIA)",
          cnpj: "09442132000903",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "301",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 108 / NOSSA SENHORA DA ABADIA)",
          cnpj: "09442132000903",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "302",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 108 / NOSSA SENHORA DA ABADIA)",
          cnpj: "09442132000903",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "303",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 109 / FABRICIO)",
          cnpj: "09442132001039",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "304",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 109 / FABRICIO)",
          cnpj: "09442132001039",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "305",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 109 / FABRICIO)",
          cnpj: "09442132001039",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "306",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 112 / BOA VISTA)",
          cnpj: "09442132001381",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "307",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 112 / BOA VISTA)",
          cnpj: "09442132001381",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "308",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 112 / BOA VISTA)",
          cnpj: "09442132001381",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "309",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 119 / OLINDA)",
          cnpj: "09442132002000",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "310",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 119 / OLINDA)",
          cnpj: "09442132002000",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "311",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 119 / OLINDA)",
          cnpj: "09442132002000",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "312",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 128 / SARAIVA 2)",
          cnpj: "09442132000814",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "313",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 128 / SARAIVA 2)",
          cnpj: "09442132000814",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "314",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 128 / SARAIVA 2)",
          cnpj: "09442132000814",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "315",
          razao_social: "PONTO QUENTE PAES DE DOCES LTDA (PADARIA PONTO QUENTE)",
          cnpj: "03394358000134",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "316",
          razao_social: "LOJA MARLENE ENXOVAIS - FILIAL SHOPPING AN�LIA FRANCO",
          cnpj: "62730619000109",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "317",
          razao_social: "CENTRO AUTOMOTIVO CANAIOLO (REDE ESA)",
          cnpj: "20158384000182",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "318",
          razao_social: "CENTRO AUTOMOTIVO CANAIOLO (REDE ESA)",
          cnpj: "20158384000182",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "319",
          razao_social: "SUPERMERCADO VIOLETA (MATRIZ BUTANT�)",
          cnpj: "00771999000172",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "320",
          razao_social: "IBI DRIVE IBIRAPUERA (MCDONALD�S IBI)",
          cnpj: "42591651212752",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "321",
          razao_social: "IBI DRIVE IBIRAPUERA (MCDONALD�S IBI)",
          cnpj: "42591651212752",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "322",
          razao_social: "IBI DRIVE IBIRAPUERA (MCDONALD�S IBI)",
          cnpj: "42591651212752",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "323",
          razao_social: "IBI DRIVE IBIRAPUERA (MCDONALD�S IBI)",
          cnpj: "42591651212752",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "324",
          razao_social: "MALURE AUTO POSTO LTDA",
          cnpj: "16782462000148",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "325",
          razao_social: "MALURE AUTO POSTO LTDA",
          cnpj: "16782462000148",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "326",
          razao_social: "AUTO POSTO CITY TATUAP� LTDA",
          cnpj: "09603651000140",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "327",
          razao_social: "POSTO DESERVI�OS COTE DAZUR LTDA",
          cnpj: "60756640000158",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "328",
          razao_social: "SUPER POSTO 3M LTDA - POSTO SHELL (REDE SETEE)",
          cnpj: "56900129000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "329",
          razao_social: "SUPER POSTO 3M LTDA - POSTO SHELL (REDE SETEE)",
          cnpj: "56900129000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "330",
          razao_social: "SUPER POSTO 3M LTDA - POSTO SHELL (REDE SETEE)",
          cnpj: "56900129000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "331",
          razao_social: "AUTO POSTO CASARAO DA FACO LTDA",
          cnpj: "00833532000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "332",
          razao_social: "SANTANA 2000 AUTO POSTO LTDA",
          cnpj: "03305974000171",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "333",
          razao_social: "LEROY MERLIN CIA BRASILEIRA DE BRICOLAGEM (LOJA 01 - GONZAGA)",
          cnpj: "01438784006723",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "334",
          razao_social: "POSTO BOLA PESADA LTDA",
          cnpj: "62972492000134",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "335",
          razao_social: "POSTO BOLA PESADA LTDA",
          cnpj: "62972492000134",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "336",
          razao_social: "BOM PARTO SOM E ACESSORIOS LTDA (\tYOUNG SOUND)",
          cnpj: "09424859000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "337",
          razao_social: "POTENZA PRODUTOS MEDICOS HOSPITALARES LTDA",
          cnpj: "39299133000146",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "338",
          razao_social: "VIVA COMERCIO DE COLCHOES LTDA (PROBEL GUARULHOS)",
          cnpj: "35715456000112",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "339",
          razao_social: "CENTRO AUTOMOTIVO MARQUES DE ITAQUERA (REDE SHOWLIN)",
          cnpj: "38444880000168",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "340",
          razao_social: "AVIAMENTOS E PLASTICOS MAIS ALEM LTDA (PLASTICOS IVONE)",
          cnpj: "28611155000183",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "341",
          razao_social: "AUTO POSTO INDEPENDENCIA DO CAMBUCI LTDA (REDE PETROGAL)",
          cnpj: "07679089000103",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "342",
          razao_social: "AUTO POSTO DA BALAN�A LTDA",
          cnpj: "58199522000144",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "343",
          razao_social: "AUTO POSTO DA BALAN�A LTDA",
          cnpj: "58199522000144",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "344",
          razao_social: "AUTO POSTO NOVO MILENIO LTDA",
          cnpj: "03542311000170",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "345",
          razao_social: "GS POSTO DE COMBUSTVEL LTDA",
          cnpj: "40203038000186",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "346",
          razao_social: "AUTO POSTO DIAMANTE DA FREGUESIA LTDA",
          cnpj: "39327266000189",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "347",
          razao_social: "AUTO POSTO DIAMANTE DA CASA VERDE LTDA",
          cnpj: "41002545000114",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "348",
          razao_social: "COMERCIAL E IMPORTADORA DE PNEUS LTDA (LOJA SANTO AMARO)",
          cnpj: "61234985020300",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "349",
          razao_social: "DRICKA FASHION MODAS FEMININAS LTDA",
          cnpj: "42621337000166",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "350",
          razao_social: "CENOLED CENOGRAFIA E TECNOLOGIA LTDA (CAPODARTE SHOPPING MORUMBI)",
          cnpj: "37378686000169",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "351",
          razao_social: "PORFIRIO & MATTOS EST�TICA E REPARA��O AUTOMOTIVA EIRELLI (AN�LIA DETAILING)",
          cnpj: "26173122000173",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "352",
          razao_social: "NUVENS COMERCIO DE COLCHOES LTDA",
          cnpj: "31911705000194",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "353",
          razao_social: "VNC CONSULTORIA DE IM�VEIS LTDA",
          cnpj: "11990425000101",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "354",
          razao_social: "DOMINO�S PIZZA FORTALEZA",
          cnpj: "24840166011623",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "355",
          razao_social: "MUTINGA SUSHI BAR E RESTAURANTE LTDA",
          cnpj: "42426516000142",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "356",
          razao_social: "�GUA FRIA SUSHI BAR E RESTAURANTE LTDA",
          cnpj: "40632657000196",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "357",
          razao_social: "SUPERMERCADO VIOLETA (LOJA 06 - EDGAR FAC�)",
          cnpj: "04742665000393",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "358",
          razao_social: "SUPERMERCADO VIOLETA (LOJA 06 - EDGAR FAC�)",
          cnpj: "04742665000393",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "359",
          razao_social: "SUPERMERCADO VIOLETA (LOJA 06 - EDGAR FAC�)",
          cnpj: "04742665000393",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "360",
          razao_social: "SUPERMERCADO VIOLETA (LOJA 06 - EDGAR FAC�)",
          cnpj: "04742665000393",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "361",
          razao_social: "SUPERMERCADO VIOLETA (LOJA 08 - OTACILIO TOMANIK)",
          cnpj: "04742665000636",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "362",
          razao_social: "SUPERMERCADO VIOLETA (LOJA 08 - OTACILIO TOMANIK)",
          cnpj: "04742665000636",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "363",
          razao_social: "SUPERMERCADO VIOLETA (LOJA 08 - OTACILIO TOMANIK)",
          cnpj: "04742665000636",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "364",
          razao_social: "SUPERMERCADO VIOLETA (LOJA 08 - OTACILIO TOMANIK)",
          cnpj: "04742665000636",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "365",
          razao_social: "SUPERMERCADO VIOLETA (MATRIZ BUTANT�)",
          cnpj: "00771999000172",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "366",
          razao_social: "SUPERMERCADO VIOLETA (MATRIZ BUTANT�)",
          cnpj: "00771999000172",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "367",
          razao_social: "SUPERMERCADO VIOLETA (MATRIZ BUTANT�)",
          cnpj: "00771999000172",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "368",
          razao_social: "SUPERMERCADO VIOLETA (MATRIZ BUTANT�)",
          cnpj: "00771999000172",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "369",
          razao_social: "UNITED DENIM MODAS EIRELI (TOP VINTE SHOPPING ITAQUERA - LOJA 02)",
          cnpj: "31556302000417",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "370",
          razao_social: "UNITED DENIM MODAS EIRELI (TOP VINTE SHOPPING ITAQUERA - LOJA 26)",
          cnpj: "31556302000417",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "371",
          razao_social: "OUTLOOK PROMO MERCHANDISING DE SERVI�OS TEMPOR�RIOS LTDA (MY HEINEKEN)",
          cnpj: "04466924000139",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "372",
          razao_social: "OUTLOOK PROMO MERCHANDISING DE SERVI�OS TEMPOR�RIOS LTDA (MY HEINEKEN)",
          cnpj: "04466924000139",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "373",
          razao_social: "OUTLOOK PROMO MERCHANDISING DE SERVI�OS TEMPOR�RIOS LTDA (MY HEINEKEN)",
          cnpj: "04466924000139",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "374",
          razao_social: "OUTLOOK PROMO MERCHANDISING DE SERVI�OS TEMPOR�RIOS LTDA (MY HEINEKEN)",
          cnpj: "04466924000139",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "375",
          razao_social: "A D DA SILVA COMERCIO DE FERRO E A�O",
          cnpj: "15027787000152",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "376",
          razao_social: "SLAES E JACOBINI COM�RCIO DE COLCH�ES LTDA (PROBEL COLCH�ES - SHOPPING UNI�O OSASCO)",
          cnpj: "34412235000102",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "377",
          razao_social: "CDS ODONTOLOGIA DIGITAL LTDA",
          cnpj: "05264407000140",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "378",
          razao_social: "SEARA ALIMENTOS LTDA",
          cnpj: "02914460044603",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "379",
          razao_social: "POSTO MALAGUETA (REDE SHOWLIN)",
          cnpj: "56310766000127",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "380",
          razao_social: "POSTO PAINEIRA LTDA (REDE PARIS)",
          cnpj: "48741193000168",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "381",
          razao_social: "POSTO PAINEIRA LTDA (REDE PARIS)",
          cnpj: "48741193000168",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "382",
          razao_social: "POSTO BOLA SETE DERIVADOS DE PETR�LEO LTDA (REDE BOLA PESADA)",
          cnpj: "30945197000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "383",
          razao_social: "POSTO DE SERVI�OS JURUCE LTDA (REDE BOLA PESADA)",
          cnpj: "61786455000179",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "384",
          razao_social: "QUINTA MARCHA AUTO POSTO LTDA (REDE BOLA PESADA)",
          cnpj: "00614608000106",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "385",
          razao_social: "POSTO SUMMER DERIVADOS DE PETR�LEO LTDA (REDE BOLA PESADA)",
          cnpj: "02590635000111",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "386",
          razao_social: "POSTO BOLA PESADA LTDA (REDE BOLA PESADA)",
          cnpj: "62972492000134",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "387",
          razao_social: "CONTAINER BAR E RESTAURANTE LTDA",
          cnpj: "36191760000170",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "388",
          razao_social: "SEARA ALIMENTOS LTDA",
          cnpj: "02914460044603",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "389",
          razao_social: "POTENZA PRODUTOS MEDICOS HOSPITALARES LTDA",
          cnpj: "39299133000146",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "390",
          razao_social: "ANADIA COMERCIAL PANIFICADORA E IMPORTADORA LTDA",
          cnpj: "34194950000116",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "391",
          razao_social: "ANADIA COMERCIAL PANIFICADORA E IMPORTADORA LTDA",
          cnpj: "34194950000116",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "392",
          razao_social: "ANADIA COMERCIAL PANIFICADORA E IMPORTADORA LTDA",
          cnpj: "34194950000116",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "393",
          razao_social: "ANADIA COMERCIAL PANIFICADORA E IMPORTADORA LTDA",
          cnpj: "34194950000116",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "394",
          razao_social: "ANADIA COMERCIAL PANIFICADORA E IMPORTADORA LTDA",
          cnpj: "34194950000116",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "395",
          razao_social: "FUOCO CIDADE SP COM�RCIO DE ROUPAS E CAL�ADOS LTDA (DUDALINA SHOPPING CIDADE)",
          cnpj: "49669856000143",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "396",
          razao_social: "FUOCO CIDADE SP COM�RCIO DE ROUPAS E CAL�ADOS LTDA (DUDALINA - SHOPPING ELDOURADO)",
          cnpj: "49669856000143",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "397",
          razao_social: "AUTO POSTO DIAMANTE DA FREGUESIA LTDA",
          cnpj: "39327266000189",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "398",
          razao_social: "AUTO POSTO DIAMANTE DA CASA VERDE LTDA",
          cnpj: "41002545000114",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "399",
          razao_social: "AUTO POSTO DIAMANTE DO IPIRANGA LTDA",
          cnpj: "30910310807",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "400",
          razao_social: "CENTRO AUTOMOTIVO NAZAR� - REDE SETE",
          cnpj: "30432615000158",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "401",
          razao_social: "RAIDEN RECAP EIRELLI",
          cnpj: "34760794000103",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "402",
          razao_social: "RAIDEN RECAP EIRELLI",
          cnpj: "34760794000103",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "403",
          razao_social: "AUTO POSTO WALQUIRIA",
          cnpj: "60421807000120",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "404",
          razao_social: "AUTO POSTO WALQUIRIA",
          cnpj: "60421807000120",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "405",
          razao_social: "LEROY MERLIN CIA BRASILEIRA DE BRICOLAGEM (RIBEIR�O PRETO)",
          cnpj: "01438784000369",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "406",
          razao_social: "PELE DERMATOLOGICA 3 BH LTDA (CLINICA PELE BH)",
          cnpj: "39915788000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "407",
          razao_social: "COOP 011-6 CAPUAVA (SEARA)",
          cnpj: "57508426001301",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "408",
          razao_social: "COOP 009-4 RIBEIR�O PIRES (SEARA)",
          cnpj: "57508426001140",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "409",
          razao_social: "COOP 007-8 INDUSTRIAL (SEARA)",
          cnpj: "57508426001654",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "410",
          razao_social: "COOP 014-0 MAU� (SEARA)",
          cnpj: "57508426002030",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "411",
          razao_social: "COOP 021-3 DIADEMA (SEARA)",
          cnpj: "57508426002464",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "412",
          razao_social: "COOP 004-3 SANTANA (SEARA)",
          cnpj: "57508426001069",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "413",
          razao_social: "COOP 023-0 �RVORE GRANDE (SEARA)",
          cnpj: "57508426002707",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "414",
          razao_social: "COOP 024-8 VOLLET SACHS (SEARA)",
          cnpj: "57508426002898",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "415",
          razao_social: "COOP 015-9 MORUMBI (SEARA)",
          cnpj: "57508426002111",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "416",
          razao_social: "AUTO POSTO JET GAS 2 TUCURUVI (REDE JETGAS)",
          cnpj: "41952608000101",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "417",
          razao_social: "AUTO POSTO JET GAS 1 LIBERDADE (REDE JETGAS)",
          cnpj: "41952608000101",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "418",
          razao_social: "AUTO POSTO JET GAS OSASCO  (REDE JETGAS)",
          cnpj: "41952608000101",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "419",
          razao_social: "CHACARA QUIRIRI COMERCIO VAREJISTA DE COMBUSTIVEL LTDA - JET GAS (ANTIGO PORTAL DA ALDEIA)",
          cnpj: "25048774000113",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "420",
          razao_social: "CENTRO AUTOMOTIVO RUBY (REDE ESA)",
          cnpj: "43979128000151",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "421",
          razao_social: "ISABELA COMERCIO DE ARTIGOS PARA PRESENTES LTDA (ISABELA PRESENTES FRANCO DA ROCHA)",
          cnpj: "08260087000148",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "422",
          razao_social: "ELETRO GAS COMERCIAL LTDA",
          cnpj: "46262085000187",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "423",
          razao_social: "AUTO POSTO BARRANCAO",
          cnpj: "47388160000113",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "424",
          razao_social: "AUTO POSTO BARRANCAO",
          cnpj: "47388160000113",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "425",
          razao_social: "BULLGUER ALIMENTAC�ES LTDA-EPP ELDORADO",
          cnpj: "21288040000101",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "426",
          razao_social: "SUPERMERCADO BOM X LTDA",
          cnpj: "11150477000170",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "427",
          razao_social: "TARGET COMUNICA��O VISUAL  (UNIDADE - TEXEIRA DE FREITAS)",
          cnpj: "36390309000182",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "428",
          razao_social: "DIAGEO",
          cnpj: "04370997000122",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "429",
          razao_social: "DIAGEO",
          cnpj: "04370997000122",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "430",
          razao_social: "DRICKA FASHION MODAS FEMININAS LTDA",
          cnpj: "40033293000128",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "431",
          razao_social: "AUTOLUB COM�RCIO DE PRODUTOS AUTOMOTIVOS LTDA",
          cnpj: "07574105000101",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "432",
          razao_social: "ASSOCIA��O BRASILEIRA DE ODONTOLOGIA - SANTO ANDR�",
          cnpj: "29666982000137",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "433",
          razao_social: "ASSOCIA��O BRASILEIRA DE ODONTOLOGIA - SANTO ANDR�",
          cnpj: "29666982000137",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "434",
          razao_social: "SUPERMERCADO COLINA",
          cnpj: "15370915000166",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "435",
          razao_social: "SUPERMERCADO COLINA",
          cnpj: "15370915000166",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "436",
          razao_social: "SUPERMERCADO COLINA",
          cnpj: "15370915000166",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "437",
          razao_social: "MANTOVA EMPREENDIMENTO IMOBILIARIO SPE LTDA",
          cnpj: "36684230000164",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "438",
          razao_social: "ATHLETA BRASIL COM�RCIO DE ARTIGOS ESPORTIVOS LTDA",
          cnpj: "24354948000103",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "439",
          razao_social: "MAXIMUS SUPERMERCADO",
          cnpj: "03572262000119",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "440",
          razao_social: "VERDE MAIS HAUER COMERCIO DE ALIMENTOS LTDA",
          cnpj: "29354564000104",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "441",
          razao_social: "LEROY MERLIN (S�O JOS� DO RIO PRETO)",
          cnpj: "01438784003899",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "442",
          razao_social: "BOISSUCANGA AUTO POSTO LTDA",
          cnpj: "55208789000162",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "443",
          razao_social: "AUTO POSTO S�O FRANCISCO DE ASSIS (REDE JETGAS)",
          cnpj: "69028389000180",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "444",
          razao_social: "AUTO POSTO ASTORGA LTDA (REDE SETEE)",
          cnpj: "10627882000173",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "445",
          razao_social: "AUTO POSTO ASTORGA LTDA (REDE SETEE)",
          cnpj: "10627882000173",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "446",
          razao_social: "PADEL LIFE ESPORTES XANGRI-LA LTDA",
          cnpj: "39543635000170",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "447",
          razao_social: "AG�NCIA ORIBA LIVE MARKETING",
          cnpj: "21529650000107",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "448",
          razao_social: "NECTAR RESTAURANTE",
          cnpj: "38113351000181",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "449",
          razao_social: "NECTAR RESTAURANTE",
          cnpj: "38113351000181",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "450",
          razao_social: "NECTAR RESTAURANTE",
          cnpj: "38113351000181",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "451",
          razao_social: "NECTAR RESTAURANTE",
          cnpj: "38113351000181",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "452",
          razao_social: "NECTAR RESTAURANTE",
          cnpj: "38113351000181",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "453",
          razao_social: "NECTAR RESTAURANTE",
          cnpj: "38113351000181",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "454",
          razao_social: "POSTO DE SERVI�OS AUTOMOTIVOS E COMERCIO DE COMBUSTIVEIS ABU-DHABI LTDA",
          cnpj: "17449816000108",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "455",
          razao_social: "DUDALINA (SHOPPING CENTER NORTE)",
          cnpj: "49669856035796",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "456",
          razao_social: "DUDALINA (SHOPPING CENTER NORTE)",
          cnpj: "49669856035796",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "457",
          razao_social: "TATUAPRAIA QUADRAS POLIESPORTIVAS LTDA",
          cnpj: "32212025000145",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "458",
          razao_social: "H2S4 CONFEC��O E CAL�ADOS LTDA (ART WALK OSCAR FREIRE)",
          cnpj: "05055599001741",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "459",
          razao_social: "AUTO SHOPPING MUNDIAL",
          cnpj: "42982304000141",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "460",
          razao_social: "TIP VISUAL",
          cnpj: "32948603000106",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "461",
          razao_social: "DUDALINA (SHOPPING MORUMBI)",
          cnpj: "49669856030050",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "462",
          razao_social: "CONTAINER BAR E RESTAURANTE LTDA",
          cnpj: "36191760000170",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "463",
          razao_social: "AUTO POSTO X6 SANTO ANDR� (JETGAS)",
          cnpj: "97531250000190",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "464",
          razao_social: "AUTO POSTO HELIADORA (REDE ALPHA)",
          cnpj: "43223197000130",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "465",
          razao_social: "AUTO POSTO MAXIMUS (REDE ALPHA)",
          cnpj: "33047386000146",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "466",
          razao_social: "ROTONDO AUTO POSTO (REDE ALPHA)",
          cnpj: "66101569000151",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "467",
          razao_social: "MARFIMETAL COM�RCIO DE PRODUTOS PLASTICOS E METALICOS",
          cnpj: "12513492000106",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "468",
          razao_social: "AUTO POSTO DC-10",
          cnpj: "03444432000180",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "469",
          razao_social: "AUTO POSTO DJ",
          cnpj: "07478162800",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "470",
          razao_social: "AUTO POSTO MAR DEL PLATA LTDA",
          cnpj: "12109018000105",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "471",
          razao_social: "IMP�RIO DO CHURRASCO",
          cnpj: "17216114000176",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "472",
          razao_social: "IRM�OS ANDREAZZA - CAP�O DA CANOA",
          cnpj: "01132478004044",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "473",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 115 / MONTE ALEGRE)",
          cnpj: "09442132001624",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "474",
          razao_social: "MEGA FLORA AUTO POSTO LTDA POSTO IPIRANGA",
          cnpj: "07157989000190",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "475",
          razao_social: "JACKSON NUNES NEG�CIOS IMOBILI�RIOS LTDA.",
          cnpj: "28590471000116",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "476",
          razao_social: "GUTOS BEACH",
          cnpj: "44893855000164",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "477",
          razao_social: "POSTO DE SERVI�OS AUTOMOTIVOS E COMERCIO DE COMBUSTIVEIS LISBOA (REDE PARIS)",
          cnpj: "15584756000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "478",
          razao_social: "SUNSET POSTO DE SERVI�OS (REDE ESA)",
          cnpj: "00707272000126",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "479",
          razao_social: "SUNSET POSTO DE SERVI�OS (REDE ESA)",
          cnpj: "00707272000126",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "480",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 117 / SANTO INACIO)",
          cnpj: "09442132001896",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "481",
          razao_social: "COMERCIAL IMPORTADORA DE PNEUS LTDA. (CAMPNEUS RIBEIRAO PRETO 1 - PIRELLI)",
          cnpj: "61234985000104",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "482",
          razao_social: "AUTO POSTO SANTA EDWIRGES LTDA",
          cnpj: "51950657000150",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "483",
          razao_social: "AUTO POSTO JET GAS OSASCO  (REDE JETGAS)",
          cnpj: "41952608000101",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "484",
          razao_social: "SLEEP CENTER COM. COLCH�ES IBIRAPUERA",
          cnpj: "19708532000106",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "485",
          razao_social: "SLEEP CENTER COM. COLCH�ES IBIRAPUERA",
          cnpj: "19708532000106",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "486",
          razao_social: "ALVAREZ E MARSAL",
          cnpj: "28092933000175",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "487",
          razao_social: "POSTO DE SERVI�OS MB (REDE ESA)",
          cnpj: "62554282000126",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "488",
          razao_social: "LA VACA RESTAURANTE E BUFFET E EVENTOS",
          cnpj: "39711481000189",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "489",
          razao_social: "ESPA�O �POS",
          cnpj: "22700168000142",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "490",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 113 / MORUMBI)",
          cnpj: "09442132001462",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "491",
          razao_social: "AUTO POSTO BAR�O DO L�BANO LTDA",
          cnpj: "12020118000160",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "492",
          razao_social: "AUTO POSTO BAR�O DO L�BANO LTDA",
          cnpj: "12020118000160",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "493",
          razao_social: "AUTO POSTO TEODORO 565 (REDE ALPHA)",
          cnpj: "43708786000109",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "494",
          razao_social: "MEGA FLORA AUTO POSTO LTDA POSTO IPIRANGA",
          cnpj: "07157989000190",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "495",
          razao_social: "PET POINT",
          cnpj: "00568630000167",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "496",
          razao_social: "AUTO GOMGAJ (REDE XAVIER)",
          cnpj: "11298903000117",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "497",
          razao_social: "AUTO POSTO FONTALES (REDE XAVIER)",
          cnpj: "24633449000155",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "498",
          razao_social: "AUTO POSTO VILA ZILDA (REDE XAVIER)",
          cnpj: "39960853000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "499",
          razao_social: "AUTO POSTO VILA RIO (REDE XAVIER)",
          cnpj: "06185775000165",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "500",
          razao_social: "CENTRO AUTOMOTIVO PETRONIO PORTE (REDE XAVIER)",
          cnpj: "96292966000119",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "501",
          razao_social: "AUTO POSTO GUARUPARK (REDE XAVIER)",
          cnpj: "19380517000181",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "502",
          razao_social: "AUTO POSTO DOURO (REDE XAVIER)",
          cnpj: "47166707000136",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "503",
          razao_social: "B. MACHADO RESTAURANTE EIRELI (A�A� BAR � BARUERI)",
          cnpj: "32723241000155",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "504",
          razao_social: "B. MACHADO RESTAURANTE EIRELI (A�A� BAR � BARUERI)",
          cnpj: "32723241000155",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "505",
          razao_social: "MADDIE ALIMENTACAO EIRELI",
          cnpj: "30338736000135",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "506",
          razao_social: "PREMIER PNEUS LTDA",
          cnpj: "41808925000140",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "507",
          razao_social: "MIRAGEM SERVI�OS AUTOMOTIVOS (REDE ALPHA)",
          cnpj: "07832164000124",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "508",
          razao_social: "MIRAGEM SERVI�OS AUTOMOTIVOS (REDE ALPHA)",
          cnpj: "07832164000124",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "509",
          razao_social: "GISELE VILELA DA SILVA (GV PARK ESTACIONAMENTOS)",
          cnpj: "21542150000105",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "510",
          razao_social: "CARIBBEAN CONSTRUTORA E INCORPORADORA LTDA (ITAMIX)",
          cnpj: "27323372000105",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "511",
          razao_social: "POSTO AGRONOMIA DE PIRACICABA LTDA (REDE ESA)",
          cnpj: "48659874000181",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "512",
          razao_social: "EMPORIO FARM TAMBOR�",
          cnpj: "37554145000144",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "513",
          razao_social: "DROGARIA VILA R� LTDA (FAZ FARMA)",
          cnpj: "06006677000113",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "514",
          razao_social: "DROGARIA VILA R� LTDA (FAZ FARMA)",
          cnpj: "06006677000113",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "515",
          razao_social: "SILVA E BARBOSA COMERCIO DE ALIMENTOS (LOJA 40)",
          cnpj: "60437647000107",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "516",
          razao_social: "POSTO DE SERVI�OS VERA CRUZ (REDE ATUAL)",
          cnpj: "13677537000132",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "517",
          razao_social: "POSTO DE SERVI�OS VERA CRUZ (REDE ATUAL)",
          cnpj: "13677537000132",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "518",
          razao_social: "PROBEL RADIAL LESTE",
          cnpj: "19708532000459",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "519",
          razao_social: "PROBEL RADIAL LESTE",
          cnpj: "19708532000459",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "520",
          razao_social: "PROBEL RADIAL LESTE",
          cnpj: "19708532000459",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "521",
          razao_social: "PROBEL RADIAL LESTE",
          cnpj: "19708532000459",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "522",
          razao_social: "PROBEL RADIAL LESTE",
          cnpj: "19708532000459",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "523",
          razao_social: "CENTRO AUTOMOTIVO TANNAT LTDA (REDE ESA)",
          cnpj: "17617672000143",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "524",
          razao_social: "CENTRO AUTOMOTIVO TANNAT LTDA (REDE ESA)",
          cnpj: "17617672000143",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "525",
          razao_social: "PROBEL BRAZ LEME",
          cnpj: "19708532000459",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "526",
          razao_social: "PROBEL BRAZ LEME",
          cnpj: "19708532000459",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "527",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 129 / CENTRO)",
          cnpj: "09442132003163",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "528",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 129 / CENTRO)",
          cnpj: "09442132003163",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "529",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 129 / CENTRO)",
          cnpj: "09442132003163",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "530",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 129 / CENTRO)",
          cnpj: "09442132003163",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "531",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 129 / CENTRO)",
          cnpj: "09442132003163",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "532",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 129 / CENTRO)",
          cnpj: "09442132003163",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "533",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 129 / CENTRO)",
          cnpj: "09442132003163",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "534",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 129 / CENTRO)",
          cnpj: "09442132003163",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "535",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 129 / CENTRO)",
          cnpj: "09442132003163",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "536",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 129 / CENTRO)",
          cnpj: "09442132003163",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "537",
          razao_social: "PROBEL BRAZ LEME",
          cnpj: "19708532000459",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "538",
          razao_social: "AUTO POSTO BARRAMARES LTDA",
          cnpj: "11820191000154",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "539",
          razao_social: "AUTO POSTO BARRAMARES LTDA",
          cnpj: "11820191000154",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "540",
          razao_social: "POSTO IPIRANGA LAGO VOSTOK (PARADA PINTO)",
          cnpj: "15604395000109",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "541",
          razao_social: "POSTO IPIRANGA LAGO VOSTOK (PARADA PINTO)",
          cnpj: "15604395000109",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "542",
          razao_social: "JARDIM TORINO (REDE PARIS)",
          cnpj: "09289579000129",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "543",
          razao_social: "JARDIM TORINO (REDE PARIS)",
          cnpj: "09289579000129",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "544",
          razao_social: "JARDIM TORINO (REDE PARIS)",
          cnpj: "09289579000129",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "545",
          razao_social: "CENTRO AUTOMOTIVO TANNAT LTDA (REDE ESA)",
          cnpj: "17617672000143",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "546",
          razao_social: "ASSOCIACAO BRASILEIRA DE ODONTOLOGIA REGIONAL DO ABC",
          cnpj: "05396992000131",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "547",
          razao_social: "PADARIA P�ES E DOCES SOL LTDA",
          cnpj: "61223681000141",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "548",
          razao_social: "PADARIA P�ES E DOCES SOL LTDA",
          cnpj: "61223681000141",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "549",
          razao_social: "AUTO POSTO ENGENHEIRO CAETANO ALVARES (REDE ALPHA)",
          cnpj: "43977606000194",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "550",
          razao_social: "AUTO POSTO BOSQUE CURSINO",
          cnpj: "39765171000147",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "551",
          razao_social: "AUTO POSTO PRISCILA (REDE ESA)",
          cnpj: "01460726000170",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "552",
          razao_social: "SUPERMERCADOS BERGAMINI LTDA",
          cnpj: "43559079000602",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "553",
          razao_social: "AUTOLUB COM�RCIO DE PRODUTOS AUTOMOTIVOS LTDA",
          cnpj: "07574105000101",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "554",
          razao_social: "VILA DI PRAIA PEDRA GRANDE LTDA",
          cnpj: "44359932000109",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "555",
          razao_social: "VILA DI PRAIA PEDRA GRANDE LTDA",
          cnpj: "44359932000109",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "556",
          razao_social: "VILA DI PRAIA PEDRA GRANDE LTDA",
          cnpj: "44359932000109",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "557",
          razao_social: "VILA DI PRAIA PEDRA GRANDE LTDA",
          cnpj: "44359932000109",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "558",
          razao_social: "BUFFET ESTA��O CAMBUI",
          cnpj: "03278690000133",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "559",
          razao_social: "VILLAS GASTRO",
          cnpj: "27551329000105",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "560",
          razao_social: "VILLAS GASTRO",
          cnpj: "27551329000105",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "561",
          razao_social: "SIMBALAE BAR E BURGER",
          cnpj: "03180073000109",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "562",
          razao_social: "SANISA �GUA E INSTALA��ES PROVIS�RIAS EIRELI",
          cnpj: "23856310000108",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "563",
          razao_social: "POSTO IPIRANGA LAGO VOSTOK (JD PERI)",
          cnpj: "15604395000109",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "564",
          razao_social: "TREVO TIQUATIRA SER. AUTOMOTIVOS - REDE SHOWLIN",
          cnpj: "67342212000128",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "565",
          razao_social: "LOJA MAIS MIX VARIEDADES",
          cnpj: "34175137000107",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "566",
          razao_social: "SOUL BEACH",
          cnpj: "42066317000170",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "567",
          razao_social: "SOUL BEACH",
          cnpj: "42066317000170",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "568",
          razao_social: "AUTO POSTO PEDRA AZUL LTDA",
          cnpj: "43627470000192",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "569",
          razao_social: "CL GERMANO EIRELI ME",
          cnpj: "02294739000189",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "570",
          razao_social: "STYLE BROKERS IMOBILIARIA",
          cnpj: "23694780000112",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "571",
          razao_social: "SUPER BAR�O",
          cnpj: "28790260000470",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "572",
          razao_social: "SUPER BAR�O",
          cnpj: "28790260000470",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "573",
          razao_social: "SUPERMERCADO SUPER PUPPO",
          cnpj: "26775552000327",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "574",
          razao_social: "SUPER QUINTANILHA",
          cnpj: "37036266000102",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "575",
          razao_social: "MODENACIPEL PARTICIPA��O E ADMINISTRA��O LTDA (CONSTRUTURA CIPEL - BARUERI)",
          cnpj: "29402889000115",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "576",
          razao_social: "AUTO POSTO PRISCILA (REDE ESA)",
          cnpj: "01460726000170",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "577",
          razao_social: "AUTO POSTO PRISCILA (REDE ESA)",
          cnpj: "01460726000170",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "578",
          razao_social: "AUTO POSTO BOSQUE CURSINO (MARIA C�NDIDA)",
          cnpj: "39765171000147",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "579",
          razao_social: "AUTO POSTO BOSQUE CURSINO (CUPEC�)",
          cnpj: "39765171000147",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "580",
          razao_social: "AUTO POSTO ESTRELA DA CASA VERDE",
          cnpj: "18934956000126",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "581",
          razao_social: "AUTO POSTO BRASIL 137 LTDA - REDE ALPHA",
          cnpj: "07832164000124",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "582",
          razao_social: "AUTO POSTO BRASIL 137 LTDA - REDE ALPHA",
          cnpj: "07832164000125",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "583",
          razao_social: "CENTRO AUTOMOTIVO NOVO BUTANT� EIRELIO",
          cnpj: "38449576000103",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "584",
          razao_social: "CHACARA QUIRIRI COMERCIO VAREJISTA DE COMBUSTIVEL LTDA - JET GAS",
          cnpj: "25048774000113",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "585",
          razao_social: "AUTO POSTO 2222 LTDA",
          cnpj: "46815221000119",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "586",
          razao_social: "SUPER BAR�O (VERA CRUZ)",
          cnpj: "28790260000631",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "587",
          razao_social: "SUPER BAR�O (VERA CRUZ)",
          cnpj: "28790260000631",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "588",
          razao_social: "SUPER BAR�O (VERA CRUZ)",
          cnpj: "28790260000631",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "589",
          razao_social: "IGREJA APOSTOLICA TEMPO DE RESTAURA��O",
          cnpj: "42083364000122",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "590",
          razao_social: "CENTRO AUTOMOTIVO SAN EIRELE (REDE ALE)",
          cnpj: "28039562000168",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "591",
          razao_social: "AUTO POSTO VILA LAVINIA LTDA (REDE ALE)",
          cnpj: "23572250000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "592",
          razao_social: "LOJA KINGS - PARQUE SHOPPING BARUERI",
          cnpj: "42689530000139",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "593",
          razao_social: "POSTO CONVENI�NCIA GRP - GRUPO ALMEIDA",
          cnpj: "40116688000194",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "594",
          razao_social: "AUTO POSTO NOVO PARAISO LTDA - GRUPO ALMEIDA",
          cnpj: "20121723000156",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "595",
          razao_social: "CASTER CLUB",
          cnpj: "10742324000159",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "596",
          razao_social: "AUTO POSTO BOM JESUS DE PIRAPORA",
          cnpj: "62576723000190",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "597",
          razao_social: "AUTO POSTO BOM JESUS DE PIRAPORA",
          cnpj: "62576723000190",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "598",
          razao_social: "CASSIANO CMERCIO DE COMBUSTIVEL E CONVENIENCIA LTDA",
          cnpj: "03052091000369",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "599",
          razao_social: "SUPERMERCADO ASSAI ATACADISTA - SEDE (JBS - PROJETO FRIBOI)",
          cnpj: "02916265002707",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "600",
          razao_social: "CAMARIM JEANS",
          cnpj: "38480837000158",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "601",
          razao_social: "SUPERMERCADO BARBOSA MATRIZ",
          cnpj: "60437647004013",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "602",
          razao_social: "AUTO POSTO JATI LTDA (REDE JETGAS)",
          cnpj: "13590386000180",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "603",
          razao_social: "AUTO POSTO MM LTDA - REDE FOSCHINI",
          cnpj: "62859798000189",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "604",
          razao_social: "AUTO POSTO MM LTDA - REDE FOSCHINI",
          cnpj: "62859798000189",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "605",
          razao_social: "AUTO POSTO HAVAI LTDA - REDE FOSCHINI",
          cnpj: "47299912000170",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "606",
          razao_social: "AUTO POSTO HAVAI LTDA - REDE FOSCHINI",
          cnpj: "47299912000170",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "607",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 106 / MARTINS)",
          cnpj: "09442132000733",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "608",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 106 / MARTINS)",
          cnpj: "09442132000733",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "609",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 106 / MARTINS)",
          cnpj: "09442132000733",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "610",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 113 / MORUMBI)",
          cnpj: "09442132001462",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "611",
          razao_social: "SUPER BAR�O (VERA CRUZ)",
          cnpj: "28790260002170",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "612",
          razao_social: "SUPER BAR�O (VERA CRUZ)",
          cnpj: "28790260002170",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "613",
          razao_social: "DIA % BRASIL - AVENIDA FAGUNDES FILHO",
          cnpj: "03476811103635",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "614",
          razao_social: "AUTO POSTO PARQUE MANDAQUI - REDE ALPHA",
          cnpj: "44061373000148",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "615",
          razao_social: "POSTO DUBAI PACAEMBU (REDE VALE+)",
          cnpj: "39880782000136",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "616",
          razao_social: "ARENA �SSIPE",
          cnpj: "40182587000111",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "617",
          razao_social: "ARENA �SSIPE",
          cnpj: "40182587000111",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "618",
          razao_social: "LINCON LUIS MARQUES PEREIRA - INOVE",
          cnpj: "45451100000172",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "619",
          razao_social: "AUTO POSTO NOVA ERA LTDA (BRASIL GAS)",
          cnpj: "62808001000114",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "620",
          razao_social: "VILLA SANTUARIO BAR E ESPETO LTDA",
          cnpj: "45301383000176",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "621",
          razao_social: "AUTO POSTO ATENCIOSO",
          cnpj: "10371676000145",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "622",
          razao_social: "AUTO POSTO R1 - SANTO ANDR�",
          cnpj: "09429293000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "623",
          razao_social: "AUTO POSTO R1 - SANTO ANDR�",
          cnpj: "09429293000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "624",
          razao_social: "SUPER BAR�O (SETOR SUL)",
          cnpj: "28790260001603",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "625",
          razao_social: "SUPER BAR�O (SETOR SUL)",
          cnpj: "28790260001603",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "626",
          razao_social: "DUDALINA RESTOQUE (SHOPPING BOURBON)",
          cnpj: "49669856032932",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "627",
          razao_social: "DUDALINA RESTOQUE  (AEROPORTO CONGONHAS)",
          cnpj: "49669856031294",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "628",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 114 / CIDADE JARDIM)",
          cnpj: "09442132000571",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "629",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 114 / CIDADE JARDIM)",
          cnpj: "09442132000571",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "630",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 114 / CIDADE JARDIM)",
          cnpj: "09442132000571",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "631",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 103 / LUIZOTE)",
          cnpj: "09442132000490",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "632",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 103 / LUIZOTE)",
          cnpj: "09442132000490",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "633",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 103 / LUIZOTE)",
          cnpj: "09442132000490",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "634",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 102 / PLANALTO)",
          cnpj: "09442132000229",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "635",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 102 / PLANALTO)",
          cnpj: "09442132000229",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "636",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 102 / PLANALTO)",
          cnpj: "09442132000229",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "637",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 116 / JARDIM PATRICIA)",
          cnpj: "09442132001705",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "638",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 116 / JARDIM PATRICIA)",
          cnpj: "09442132001705",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "639",
          razao_social: "MN SUPERMERCADOS LTDA (SUPERMAXI - UNIDADE 116 / JARDIM PATRICIA)",
          cnpj: "09442132001705",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "640",
          razao_social: "AUTO POSTO LENNON LTDA (REDE VALE+)",
          cnpj: "27839537000104",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "641",
          razao_social: "AUTO POSTO CINCINATA (REDE VALE+)",
          cnpj: "16960793000120",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "642",
          razao_social: "OUTLET DOS PNEUS MAUA SHOPPING",
          cnpj: "51123040002458",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "643",
          razao_social: "PIRELLI CAMPNEUS LIMEIRA",
          cnpj: "61234985022930",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "644",
          razao_social: "POSTO DE SERVI�OS AUTOMOTIVOS E COMERCIO DE COMBUSTIVEIS ABU-DHABI LTDA",
          cnpj: "17449816000108",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "645",
          razao_social: "AUTO POSTO PORTAL",
          cnpj: "10400453000169",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "646",
          razao_social: "AUTO POSTO KFS",
          cnpj: "17791574000128",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "647",
          razao_social: "AUTO POSTO 7",
          cnpj: "76769322000161",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "648",
          razao_social: "AUTO POSTO SANTA F�",
          cnpj: "33582477000181",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "649",
          razao_social: "CENTRO AUTOMOTIVO NOVO ORATORIO (REDE SHOWLIN)",
          cnpj: "42182260000175",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "650",
          razao_social: "AUTO POSTO ENGENHEIRO 1200 (REDE ALPHA)",
          cnpj: "45151101000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "651",
          razao_social: "AUTO POSTO ENGENHEIRO 1200 (REDE ALPHA)",
          cnpj: "45151101000100",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "652",
          razao_social: "AUTO POSTO CORONEL SEZEFREDO 2 (REDE ALPHA)",
          cnpj: "45164362000156",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: "653",
          razao_social: "AUTO POSTO CORONEL SEZEFREDO 2 (REDE ALPHA)",
          cnpj: "45164362000156",
          categoria: "Entretenimento",
          logo: "",
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('instalacoes', null, {});
  }
};
