ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31984").setExtent([334351.777952, 7723844.130957, 374544.043533, 7759765.406347]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriImagery_2 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_RegioAdministrativa5_3 = new ol.format.GeoJSON();
var features_RegioAdministrativa5_3 = format_RegioAdministrativa5_3.readFeatures(json_RegioAdministrativa5_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_RegioAdministrativa5_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioAdministrativa5_3.addFeatures(features_RegioAdministrativa5_3);
var lyr_RegioAdministrativa5_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioAdministrativa5_3, 
                style: style_RegioAdministrativa5_3,
                popuplayertitle: 'Região Administrativa 5',
                interactive: true,
                title: '<img src="styles/legend/RegioAdministrativa5_3.png" /> Região Administrativa 5'
            });
var format_RegioAdministrativa4_4 = new ol.format.GeoJSON();
var features_RegioAdministrativa4_4 = format_RegioAdministrativa4_4.readFeatures(json_RegioAdministrativa4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_RegioAdministrativa4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioAdministrativa4_4.addFeatures(features_RegioAdministrativa4_4);
var lyr_RegioAdministrativa4_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioAdministrativa4_4, 
                style: style_RegioAdministrativa4_4,
                popuplayertitle: 'Região Administrativa 4',
                interactive: true,
                title: '<img src="styles/legend/RegioAdministrativa4_4.png" /> Região Administrativa 4'
            });
var format_RegioAdministrativa3_5 = new ol.format.GeoJSON();
var features_RegioAdministrativa3_5 = format_RegioAdministrativa3_5.readFeatures(json_RegioAdministrativa3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_RegioAdministrativa3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioAdministrativa3_5.addFeatures(features_RegioAdministrativa3_5);
var lyr_RegioAdministrativa3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioAdministrativa3_5, 
                style: style_RegioAdministrativa3_5,
                popuplayertitle: 'Região Administrativa 3',
                interactive: true,
                title: '<img src="styles/legend/RegioAdministrativa3_5.png" /> Região Administrativa 3'
            });
var format_RegioAdministrativa2_6 = new ol.format.GeoJSON();
var features_RegioAdministrativa2_6 = format_RegioAdministrativa2_6.readFeatures(json_RegioAdministrativa2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_RegioAdministrativa2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioAdministrativa2_6.addFeatures(features_RegioAdministrativa2_6);
var lyr_RegioAdministrativa2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioAdministrativa2_6, 
                style: style_RegioAdministrativa2_6,
                popuplayertitle: 'Região Administrativa 2',
                interactive: true,
                title: '<img src="styles/legend/RegioAdministrativa2_6.png" /> Região Administrativa 2'
            });
var format_RegioAdministrativa1_7 = new ol.format.GeoJSON();
var features_RegioAdministrativa1_7 = format_RegioAdministrativa1_7.readFeatures(json_RegioAdministrativa1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_RegioAdministrativa1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegioAdministrativa1_7.addFeatures(features_RegioAdministrativa1_7);
var lyr_RegioAdministrativa1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegioAdministrativa1_7, 
                style: style_RegioAdministrativa1_7,
                popuplayertitle: 'Região Administrativa 1',
                interactive: true,
                title: '<img src="styles/legend/RegioAdministrativa1_7.png" /> Região Administrativa 1'
            });
var format_Parcelasfornecidaspelaprefeitura_8 = new ol.format.GeoJSON();
var features_Parcelasfornecidaspelaprefeitura_8 = format_Parcelasfornecidaspelaprefeitura_8.readFeatures(json_Parcelasfornecidaspelaprefeitura_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Parcelasfornecidaspelaprefeitura_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelasfornecidaspelaprefeitura_8.addFeatures(features_Parcelasfornecidaspelaprefeitura_8);
var lyr_Parcelasfornecidaspelaprefeitura_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelasfornecidaspelaprefeitura_8, 
                style: style_Parcelasfornecidaspelaprefeitura_8,
                popuplayertitle: 'Parcelas fornecidas pela prefeitura',
                interactive: true,
                title: '<img src="styles/legend/Parcelasfornecidaspelaprefeitura_8.png" /> Parcelas fornecidas pela prefeitura'
            });
var format_Bairros_IJSN_VILAVELHA_9 = new ol.format.GeoJSON();
var features_Bairros_IJSN_VILAVELHA_9 = format_Bairros_IJSN_VILAVELHA_9.readFeatures(json_Bairros_IJSN_VILAVELHA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_Bairros_IJSN_VILAVELHA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bairros_IJSN_VILAVELHA_9.addFeatures(features_Bairros_IJSN_VILAVELHA_9);
var lyr_Bairros_IJSN_VILAVELHA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bairros_IJSN_VILAVELHA_9, 
                style: style_Bairros_IJSN_VILAVELHA_9,
                popuplayertitle: 'Bairros_IJSN_VILA-VELHA',
                interactive: true,
                title: '<img src="styles/legend/Bairros_IJSN_VILAVELHA_9.png" /> Bairros_IJSN_VILA-VELHA'
            });
var format_LimiteMunicipal_10 = new ol.format.GeoJSON();
var features_LimiteMunicipal_10 = format_LimiteMunicipal_10.readFeatures(json_LimiteMunicipal_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_LimiteMunicipal_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipal_10.addFeatures(features_LimiteMunicipal_10);
var lyr_LimiteMunicipal_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMunicipal_10, 
                style: style_LimiteMunicipal_10,
                popuplayertitle: 'Limite Municipal',
                interactive: true,
                title: '<img src="styles/legend/LimiteMunicipal_10.png" /> Limite Municipal'
            });
var format_TotaldeIndividuosAmostradasVilaVelhaES_11 = new ol.format.GeoJSON();
var features_TotaldeIndividuosAmostradasVilaVelhaES_11 = format_TotaldeIndividuosAmostradasVilaVelhaES_11.readFeatures(json_TotaldeIndividuosAmostradasVilaVelhaES_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_TotaldeIndividuosAmostradasVilaVelhaES_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotaldeIndividuosAmostradasVilaVelhaES_11.addFeatures(features_TotaldeIndividuosAmostradasVilaVelhaES_11);
var lyr_TotaldeIndividuosAmostradasVilaVelhaES_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TotaldeIndividuosAmostradasVilaVelhaES_11, 
                style: style_TotaldeIndividuosAmostradasVilaVelhaES_11,
                popuplayertitle: 'Total de Individuos Amostradas Vila Velha - ES',
                interactive: true,
                title: '<img src="styles/legend/TotaldeIndividuosAmostradasVilaVelhaES_11.png" /> Total de Individuos Amostradas Vila Velha - ES'
            });
var format_OcorrnciadeEspcies_12 = new ol.format.GeoJSON();
var features_OcorrnciadeEspcies_12 = format_OcorrnciadeEspcies_12.readFeatures(json_OcorrnciadeEspcies_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_OcorrnciadeEspcies_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OcorrnciadeEspcies_12.addFeatures(features_OcorrnciadeEspcies_12);
var lyr_OcorrnciadeEspcies_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OcorrnciadeEspcies_12, 
                style: style_OcorrnciadeEspcies_12,
                popuplayertitle: 'Ocorrência de Espécies',
                interactive: false,
                title: '<img src="styles/legend/OcorrnciadeEspcies_12.png" /> Ocorrência de Espécies'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(false);lyr_EsriImagery_2.setVisible(false);lyr_RegioAdministrativa5_3.setVisible(false);lyr_RegioAdministrativa4_4.setVisible(false);lyr_RegioAdministrativa3_5.setVisible(false);lyr_RegioAdministrativa2_6.setVisible(false);lyr_RegioAdministrativa1_7.setVisible(false);lyr_Parcelasfornecidaspelaprefeitura_8.setVisible(false);lyr_Bairros_IJSN_VILAVELHA_9.setVisible(false);lyr_LimiteMunicipal_10.setVisible(true);lyr_TotaldeIndividuosAmostradasVilaVelhaES_11.setVisible(true);lyr_OcorrnciadeEspcies_12.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,lyr_EsriImagery_2,lyr_RegioAdministrativa5_3,lyr_RegioAdministrativa4_4,lyr_RegioAdministrativa3_5,lyr_RegioAdministrativa2_6,lyr_RegioAdministrativa1_7,lyr_Parcelasfornecidaspelaprefeitura_8,lyr_Bairros_IJSN_VILAVELHA_9,lyr_LimiteMunicipal_10,lyr_TotaldeIndividuosAmostradasVilaVelhaES_11,lyr_OcorrnciadeEspcies_12];
lyr_RegioAdministrativa5_3.set('fieldAliases', {'ID': 'ID', 'SubRegiao': 'SubRegiao', 'Area': 'Area', });
lyr_RegioAdministrativa4_4.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_RegioAdministrativa3_5.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_RegioAdministrativa2_6.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_RegioAdministrativa1_7.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_Parcelasfornecidaspelaprefeitura_8.set('fieldAliases', {'id': 'id', 'Codigo': 'Codigo', 'Regiao': 'Regiao', 'Subgrupo': 'Subgrupo', 'layer': 'layer', });
lyr_Bairros_IJSN_VILAVELHA_9.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', 'areaM2': 'areaM2', 'situacao': 'situacao', 'distrito': 'distrito', 'geocDistr': 'geocDistr', 'municipio': 'municipio', 'geocMun': 'geocMun', 'macroEstad': 'macroEstad', 'microEstad': 'microEstad', 'escala': 'escala', 'origem': 'origem', 'anoReferen': 'anoReferen', 'fonte': 'fonte', 'area ha': 'area ha', 'ID': 'ID', 'nota urb': 'nota urb', });
lyr_LimiteMunicipal_10.set('fieldAliases', {'geocodigo': 'geocodigo', 'nome': 'nome', 'microEstad': 'microEstad', 'macroEstad': 'macroEstad', 'anoReferen': 'anoReferen', 'origem': 'origem', 'areaKm2': 'areaKm2', 'perimetroK': 'perimetroK', 'fonte': 'fonte', '�rea_m_2': '�rea_m_2', '�rea_ha': '�rea_ha', '_count': '_count', '_sum': '_sum', '_mean': '_mean', });
lyr_TotaldeIndividuosAmostradasVilaVelhaES_11.set('fieldAliases', {'CHAVE_ID': 'CHAVE_ID', 'RG_adm': 'Região Administrativa', 'Parcela': 'Parcela', 'Indivíduo': 'Indivíduo', 'Endereço': 'Endereço', 'Endereço_': 'Endereço no Google', 'Espécie': 'Espécie', 'CAP': 'CAP', 'DAP': 'DAP', 'Altura_tot': 'Altura total  (m)', 'Copa___Ár': 'Copa área transversal  (m)', 'Hábito': 'Hábito', 'Nome_Popul': 'Nome Popular', 'Dispersão': 'Dispersão', 'Origem': 'Origem', 'Status_CNC': 'Status CNC Flora', 'Status_MMA': 'Status MMA', 'Árvore_mo': 'Árvore Morta', 'Probabilid': 'Probabilidade de Falha', 'Probabil_1': 'Probabilidade de atingir alvo', 'Consequên': 'Consequências da falha', 'Grau_de_ri': 'Grau de risco', 'Remoção': 'Remoção', 'Folha_Rala': 'Folhagem rala ou de cor anormal', 'Galhos_via': 'Galhos interferindo na via', 'Erva_Pass': 'Erva de passarinho', 'Tocos_poda': 'Tocos de poda', 'Constricto': 'Constrictora', 'Galhos_Sec': 'Galhos secos', 'Galhos_Que': 'Galhos quebrados', 'Galhos_Esg': 'Galhos esguios', 'Galhos_Cod': 'Galhos codominantes', 'Bif_V': 'Bifurcação em V', 'Arq_Anorm': 'Arquitetura anormal', 'Poda_Uni': 'Poda unilateral', 'Conflito_R': 'Conflito com rede elétrica', 'Destopo': 'Destopo', 'Fiss_Rach': 'Fissuras rachaduras', 'Bif_V_2': 'Bifurcação em V 1', 'Fungos': 'Fungos decompositores', 'Inclinaç': 'Inclinação', 'Can_Gal_Ca': 'Cancros Galhas Caroços', 'Brot_Epi': 'Brotações epicórmicas do tronco', 'Cavidade': 'Cavidade', 'Orifício_': 'Orifício de insetos', 'Casca_Inc': 'Casca inclusa', 'Troncos_Co': 'Troncos codominantes', 'Pod_Alb': 'Podridão de alburno', 'Rest_AP': 'Restrições de área permeável', 'Brot_Epi_2': 'Brotações epicórmicas da base', 'Ater_Colo': 'Aterramento do colo', 'Plantio_T_': 'Plantio em tubo caixa   Aterramento do colo', 'Corte_Raiz': 'Corte de raízes', 'Marca_Roç': 'Marca de roçadeira', 'Raiz_Est': 'Raiz estrangulante', 'Ori_Inseto': 'Orifício de insetos 1', 'Fungos_2': 'Fungos decompositores 1', 'Cav_2': 'Cavidades   Fissuras rachaduras', 'Pessoas': 'Pessoas', 'Veiculos': 'Veículos', 'Via_Pub': 'Via pública', 'Rede': 'Rede elétrica', 'Bens_Pat': 'Bens patrimoniais', 'Via_Priv': 'Via privada', 'Acomp_Inc': 'Acompanhamento de inclinação', 'Poda_Form': 'Poda de formação', 'Poda_Limp': 'Poda de limpeza', 'Poda_Red': 'Poda de redução', 'Poda_Elev': 'Poda de elevação', 'Cauteriza': 'Cauterização', 'Desat_Colo': 'Desaterramento de colo', 'Aumento_AP': 'Aumento da área permeável', 'Adubacao': 'Adubação', 'Melhoria_S': 'Melhoria física do solo', 'Controle_P': 'Controle de pragas', 'Estaiament': 'Estaiamento', 'Escorament': 'Escoramento', 'Ortese': 'Ortese', 'Cabeamento': 'Cabeamento', 'Tutorament': 'Tutoramento', 'Ava_Nível': 'Avaliação de nível 3  ABNT', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Lat': 'Lat', 'Long': 'Long', });
lyr_OcorrnciadeEspcies_12.set('fieldAliases', {'RG_adm': 'RG_adm', 'Parcela': 'Parcela', 'Indivíduo': 'Indivíduo', 'Endereço': 'Endereço', 'Endereço_': 'Endereço_', 'Espécie': 'Espécie', 'CAP': 'CAP', 'DAP': 'DAP', 'Altura_tot': 'Altura_tot', 'Copa___Ár': 'Copa___Ár', 'Hábito': 'Hábito', 'Nome_Popul': 'Nome_Popul', 'Dispersão': 'Dispersão', 'Origem': 'Origem', 'Status_CNC': 'Status_CNC', 'Status_MMA': 'Status_MMA', 'Árvore_mo': 'Árvore_mo', 'Probabilid': 'Probabilid', 'Probabil_1': 'Probabil_1', 'Consequên': 'Consequên', 'Grau_de_ri': 'Grau_de_ri', 'Remoção': 'Remoção', 'Folha_Rala': 'Folha_Rala', 'Galhos_via': 'Galhos_via', 'Erva_Pass': 'Erva_Pass', 'Tocos_poda': 'Tocos_poda', 'Constricto': 'Constricto', 'Galhos_Sec': 'Galhos_Sec', 'Galhos_Que': 'Galhos_Que', 'Galhos_Esg': 'Galhos_Esg', 'Galhos_Cod': 'Galhos_Cod', 'Bif_V': 'Bif_V', 'Arq_Anorm': 'Arq_Anorm', 'Poda_Uni': 'Poda_Uni', 'Conflito_R': 'Conflito_R', 'Destopo': 'Destopo', 'Fiss_Rach': 'Fiss_Rach', 'Bif_V_2': 'Bif_V_2', 'Fungos': 'Fungos', 'Inclinaç': 'Inclinaç', 'Can_Gal_Ca': 'Can_Gal_Ca', 'Brot_Epi': 'Brot_Epi', 'Cavidade': 'Cavidade', 'Orifício_': 'Orifício_', 'Casca_Inc': 'Casca_Inc', 'Troncos_Co': 'Troncos_Co', 'Pod_Alb': 'Pod_Alb', 'Rest_AP': 'Rest_AP', 'Brot_Epi_2': 'Brot_Epi_2', 'Ater_Colo': 'Ater_Colo', 'Plantio_T_': 'Plantio_T_', 'Corte_Raiz': 'Corte_Raiz', 'Marca_Roç': 'Marca_Roç', 'Raiz_Est': 'Raiz_Est', 'Ori_Inseto': 'Ori_Inseto', 'Fungos_2': 'Fungos_2', 'Cav_2': 'Cav_2', 'Pessoas': 'Pessoas', 'Veiculos': 'Veiculos', 'Via_Pub': 'Via_Pub', 'Rede': 'Rede', 'Bens_Pat': 'Bens_Pat', 'Via_Priv': 'Via_Priv', 'Acomp_Inc': 'Acomp_Inc', 'Poda_Form': 'Poda_Form', 'Poda_Limp': 'Poda_Limp', 'Poda_Red': 'Poda_Red', 'Poda_Elev': 'Poda_Elev', 'Cauteriza': 'Cauteriza', 'Desat_Colo': 'Desat_Colo', 'Aumento_AP': 'Aumento_AP', 'Adubacao': 'Adubacao', 'Melhoria_S': 'Melhoria_S', 'Controle_P': 'Controle_P', 'Estaiament': 'Estaiament', 'Escorament': 'Escorament', 'Ortese': 'Ortese', 'Cabeamento': 'Cabeamento', 'Tutorament': 'Tutorament', 'Ava_Nível': 'Ava_Nível', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_RegioAdministrativa5_3.set('fieldImages', {'ID': 'Range', 'SubRegiao': 'TextEdit', 'Area': 'TextEdit', });
lyr_RegioAdministrativa4_4.set('fieldImages', {'nome': 'TextEdit', 'geocodigo': 'TextEdit', 'areaM2': 'TextEdit', 'situacao': 'TextEdit', 'distrito': 'TextEdit', 'geocDistr': 'TextEdit', 'municipio': 'TextEdit', 'geocMun': 'TextEdit', 'macroEstad': 'TextEdit', 'microEstad': 'TextEdit', 'escala': 'TextEdit', 'origem': 'TextEdit', 'anoReferen': 'TextEdit', 'fonte': 'TextEdit', 'area ha': 'TextEdit', 'ID': 'Range', 'nota urb': 'TextEdit', });
lyr_RegioAdministrativa3_5.set('fieldImages', {'nome': 'TextEdit', 'geocodigo': 'TextEdit', 'areaM2': 'TextEdit', 'situacao': 'TextEdit', 'distrito': 'TextEdit', 'geocDistr': 'TextEdit', 'municipio': 'TextEdit', 'geocMun': 'TextEdit', 'macroEstad': 'TextEdit', 'microEstad': 'TextEdit', 'escala': 'TextEdit', 'origem': 'TextEdit', 'anoReferen': 'TextEdit', 'fonte': 'TextEdit', 'area ha': 'TextEdit', 'ID': 'Range', 'nota urb': 'TextEdit', });
lyr_RegioAdministrativa2_6.set('fieldImages', {'nome': 'TextEdit', 'geocodigo': 'TextEdit', 'areaM2': 'TextEdit', 'situacao': 'TextEdit', 'distrito': 'TextEdit', 'geocDistr': 'TextEdit', 'municipio': 'TextEdit', 'geocMun': 'TextEdit', 'macroEstad': 'TextEdit', 'microEstad': 'TextEdit', 'escala': 'TextEdit', 'origem': 'TextEdit', 'anoReferen': 'TextEdit', 'fonte': 'TextEdit', 'area ha': 'TextEdit', 'ID': 'Range', 'nota urb': 'TextEdit', });
lyr_RegioAdministrativa1_7.set('fieldImages', {'nome': 'TextEdit', 'geocodigo': 'TextEdit', 'areaM2': 'TextEdit', 'situacao': 'TextEdit', 'distrito': 'TextEdit', 'geocDistr': 'TextEdit', 'municipio': 'TextEdit', 'geocMun': 'TextEdit', 'macroEstad': 'TextEdit', 'microEstad': 'TextEdit', 'escala': 'TextEdit', 'origem': 'TextEdit', 'anoReferen': 'TextEdit', 'fonte': 'TextEdit', 'area ha': 'TextEdit', 'ID': 'Range', 'nota urb': 'TextEdit', });
lyr_Parcelasfornecidaspelaprefeitura_8.set('fieldImages', {'id': 'TextEdit', 'Codigo': 'TextEdit', 'Regiao': 'TextEdit', 'Subgrupo': 'TextEdit', 'layer': 'TextEdit', });
lyr_Bairros_IJSN_VILAVELHA_9.set('fieldImages', {'nome': 'TextEdit', 'geocodigo': 'TextEdit', 'areaM2': 'TextEdit', 'situacao': 'TextEdit', 'distrito': 'TextEdit', 'geocDistr': 'TextEdit', 'municipio': 'TextEdit', 'geocMun': 'TextEdit', 'macroEstad': 'TextEdit', 'microEstad': 'TextEdit', 'escala': 'TextEdit', 'origem': 'TextEdit', 'anoReferen': 'TextEdit', 'fonte': 'TextEdit', 'area ha': 'TextEdit', 'ID': 'Range', 'nota urb': 'TextEdit', });
lyr_LimiteMunicipal_10.set('fieldImages', {'geocodigo': 'TextEdit', 'nome': 'TextEdit', 'microEstad': 'TextEdit', 'macroEstad': 'TextEdit', 'anoReferen': 'TextEdit', 'origem': 'TextEdit', 'areaKm2': 'TextEdit', 'perimetroK': 'TextEdit', 'fonte': 'TextEdit', '�rea_m_2': 'TextEdit', '�rea_ha': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', });
lyr_TotaldeIndividuosAmostradasVilaVelhaES_11.set('fieldImages', {'CHAVE_ID': 'Hidden', 'RG_adm': 'Range', 'Parcela': 'Range', 'Indivíduo': 'Range', 'Endereço': 'TextEdit', 'Endereço_': 'TextEdit', 'Espécie': 'TextEdit', 'CAP': 'Range', 'DAP': 'Range', 'Altura_tot': 'Range', 'Copa___Ár': 'Range', 'Hábito': 'TextEdit', 'Nome_Popul': 'TextEdit', 'Dispersão': 'TextEdit', 'Origem': 'TextEdit', 'Status_CNC': 'TextEdit', 'Status_MMA': 'TextEdit', 'Árvore_mo': 'TextEdit', 'Probabilid': 'TextEdit', 'Probabil_1': 'TextEdit', 'Consequên': 'TextEdit', 'Grau_de_ri': 'TextEdit', 'Remoção': 'TextEdit', 'Folha_Rala': 'TextEdit', 'Galhos_via': 'TextEdit', 'Erva_Pass': 'TextEdit', 'Tocos_poda': 'TextEdit', 'Constricto': 'TextEdit', 'Galhos_Sec': 'TextEdit', 'Galhos_Que': 'TextEdit', 'Galhos_Esg': 'TextEdit', 'Galhos_Cod': 'TextEdit', 'Bif_V': 'TextEdit', 'Arq_Anorm': 'TextEdit', 'Poda_Uni': 'TextEdit', 'Conflito_R': 'TextEdit', 'Destopo': 'TextEdit', 'Fiss_Rach': 'TextEdit', 'Bif_V_2': 'TextEdit', 'Fungos': 'TextEdit', 'Inclinaç': 'TextEdit', 'Can_Gal_Ca': 'TextEdit', 'Brot_Epi': 'TextEdit', 'Cavidade': 'TextEdit', 'Orifício_': 'TextEdit', 'Casca_Inc': 'TextEdit', 'Troncos_Co': 'TextEdit', 'Pod_Alb': 'TextEdit', 'Rest_AP': 'TextEdit', 'Brot_Epi_2': 'TextEdit', 'Ater_Colo': 'TextEdit', 'Plantio_T_': 'TextEdit', 'Corte_Raiz': 'TextEdit', 'Marca_Roç': 'TextEdit', 'Raiz_Est': 'TextEdit', 'Ori_Inseto': 'TextEdit', 'Fungos_2': 'TextEdit', 'Cav_2': 'TextEdit', 'Pessoas': 'TextEdit', 'Veiculos': 'TextEdit', 'Via_Pub': 'TextEdit', 'Rede': 'TextEdit', 'Bens_Pat': 'TextEdit', 'Via_Priv': 'TextEdit', 'Acomp_Inc': 'TextEdit', 'Poda_Form': 'TextEdit', 'Poda_Limp': 'TextEdit', 'Poda_Red': 'TextEdit', 'Poda_Elev': 'TextEdit', 'Cauteriza': 'TextEdit', 'Desat_Colo': 'TextEdit', 'Aumento_AP': 'TextEdit', 'Adubacao': 'TextEdit', 'Melhoria_S': 'TextEdit', 'Controle_P': 'TextEdit', 'Estaiament': 'TextEdit', 'Escorament': 'TextEdit', 'Ortese': 'TextEdit', 'Cabeamento': 'TextEdit', 'Tutorament': 'TextEdit', 'Ava_Nível': 'TextEdit', 'Latitude': 'Range', 'Longitude': 'Range', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_OcorrnciadeEspcies_12.set('fieldImages', {'RG_adm': 'TextEdit', 'Parcela': 'TextEdit', 'Indivíduo': 'TextEdit', 'Endereço': 'TextEdit', 'Endereço_': 'TextEdit', 'Espécie': 'TextEdit', 'CAP': 'TextEdit', 'DAP': 'TextEdit', 'Altura_tot': 'TextEdit', 'Copa___Ár': 'TextEdit', 'Hábito': 'TextEdit', 'Nome_Popul': 'TextEdit', 'Dispersão': 'TextEdit', 'Origem': 'TextEdit', 'Status_CNC': 'TextEdit', 'Status_MMA': 'TextEdit', 'Árvore_mo': 'TextEdit', 'Probabilid': 'TextEdit', 'Probabil_1': 'TextEdit', 'Consequên': 'TextEdit', 'Grau_de_ri': 'TextEdit', 'Remoção': 'TextEdit', 'Folha_Rala': 'TextEdit', 'Galhos_via': 'TextEdit', 'Erva_Pass': 'TextEdit', 'Tocos_poda': 'TextEdit', 'Constricto': 'TextEdit', 'Galhos_Sec': 'TextEdit', 'Galhos_Que': 'TextEdit', 'Galhos_Esg': 'TextEdit', 'Galhos_Cod': 'TextEdit', 'Bif_V': 'TextEdit', 'Arq_Anorm': 'TextEdit', 'Poda_Uni': 'TextEdit', 'Conflito_R': 'TextEdit', 'Destopo': 'TextEdit', 'Fiss_Rach': 'TextEdit', 'Bif_V_2': 'TextEdit', 'Fungos': 'TextEdit', 'Inclinaç': 'TextEdit', 'Can_Gal_Ca': 'TextEdit', 'Brot_Epi': 'TextEdit', 'Cavidade': 'TextEdit', 'Orifício_': 'TextEdit', 'Casca_Inc': 'TextEdit', 'Troncos_Co': 'TextEdit', 'Pod_Alb': 'TextEdit', 'Rest_AP': 'TextEdit', 'Brot_Epi_2': 'TextEdit', 'Ater_Colo': 'TextEdit', 'Plantio_T_': 'TextEdit', 'Corte_Raiz': 'TextEdit', 'Marca_Roç': 'TextEdit', 'Raiz_Est': 'TextEdit', 'Ori_Inseto': 'TextEdit', 'Fungos_2': 'TextEdit', 'Cav_2': 'TextEdit', 'Pessoas': 'TextEdit', 'Veiculos': 'TextEdit', 'Via_Pub': 'TextEdit', 'Rede': 'TextEdit', 'Bens_Pat': 'TextEdit', 'Via_Priv': 'TextEdit', 'Acomp_Inc': 'TextEdit', 'Poda_Form': 'TextEdit', 'Poda_Limp': 'TextEdit', 'Poda_Red': 'TextEdit', 'Poda_Elev': 'TextEdit', 'Cauteriza': 'TextEdit', 'Desat_Colo': 'TextEdit', 'Aumento_AP': 'TextEdit', 'Adubacao': 'TextEdit', 'Melhoria_S': 'TextEdit', 'Controle_P': 'TextEdit', 'Estaiament': 'TextEdit', 'Escorament': 'TextEdit', 'Ortese': 'TextEdit', 'Cabeamento': 'TextEdit', 'Tutorament': 'TextEdit', 'Ava_Nível': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_RegioAdministrativa5_3.set('fieldLabels', {'ID': 'no label', 'SubRegiao': 'no label', 'Area': 'no label', });
lyr_RegioAdministrativa4_4.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_RegioAdministrativa3_5.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_RegioAdministrativa2_6.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_RegioAdministrativa1_7.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_Parcelasfornecidaspelaprefeitura_8.set('fieldLabels', {'id': 'no label', 'Codigo': 'no label', 'Regiao': 'no label', 'Subgrupo': 'no label', 'layer': 'no label', });
lyr_Bairros_IJSN_VILAVELHA_9.set('fieldLabels', {'nome': 'no label', 'geocodigo': 'no label', 'areaM2': 'no label', 'situacao': 'no label', 'distrito': 'no label', 'geocDistr': 'no label', 'municipio': 'no label', 'geocMun': 'no label', 'macroEstad': 'no label', 'microEstad': 'no label', 'escala': 'no label', 'origem': 'no label', 'anoReferen': 'no label', 'fonte': 'no label', 'area ha': 'no label', 'ID': 'no label', 'nota urb': 'no label', });
lyr_LimiteMunicipal_10.set('fieldLabels', {'geocodigo': 'no label', 'nome': 'no label', 'microEstad': 'no label', 'macroEstad': 'no label', 'anoReferen': 'no label', 'origem': 'no label', 'areaKm2': 'no label', 'perimetroK': 'no label', 'fonte': 'no label', '�rea_m_2': 'no label', '�rea_ha': 'no label', '_count': 'no label', '_sum': 'no label', '_mean': 'no label', });
lyr_TotaldeIndividuosAmostradasVilaVelhaES_11.set('fieldLabels', {'RG_adm': 'inline label - visible with data', 'Parcela': 'inline label - visible with data', 'Indivíduo': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Endereço_': 'inline label - visible with data', 'Espécie': 'inline label - visible with data', 'CAP': 'inline label - visible with data', 'DAP': 'inline label - visible with data', 'Altura_tot': 'inline label - visible with data', 'Copa___Ár': 'inline label - visible with data', 'Hábito': 'inline label - visible with data', 'Nome_Popul': 'inline label - visible with data', 'Dispersão': 'inline label - visible with data', 'Origem': 'inline label - visible with data', 'Status_CNC': 'inline label - visible with data', 'Status_MMA': 'inline label - visible with data', 'Árvore_mo': 'inline label - visible with data', 'Probabilid': 'inline label - visible with data', 'Probabil_1': 'inline label - visible with data', 'Consequên': 'inline label - visible with data', 'Grau_de_ri': 'inline label - visible with data', 'Remoção': 'inline label - visible with data', 'Folha_Rala': 'inline label - visible with data', 'Galhos_via': 'inline label - visible with data', 'Erva_Pass': 'inline label - visible with data', 'Tocos_poda': 'inline label - visible with data', 'Constricto': 'inline label - visible with data', 'Galhos_Sec': 'inline label - visible with data', 'Galhos_Que': 'inline label - visible with data', 'Galhos_Esg': 'inline label - visible with data', 'Galhos_Cod': 'inline label - visible with data', 'Bif_V': 'inline label - visible with data', 'Arq_Anorm': 'inline label - visible with data', 'Poda_Uni': 'inline label - visible with data', 'Conflito_R': 'inline label - visible with data', 'Destopo': 'inline label - visible with data', 'Fiss_Rach': 'inline label - visible with data', 'Bif_V_2': 'inline label - visible with data', 'Fungos': 'inline label - visible with data', 'Inclinaç': 'inline label - visible with data', 'Can_Gal_Ca': 'inline label - visible with data', 'Brot_Epi': 'inline label - visible with data', 'Cavidade': 'inline label - visible with data', 'Orifício_': 'inline label - visible with data', 'Casca_Inc': 'inline label - visible with data', 'Troncos_Co': 'inline label - visible with data', 'Pod_Alb': 'inline label - visible with data', 'Rest_AP': 'inline label - visible with data', 'Brot_Epi_2': 'inline label - visible with data', 'Ater_Colo': 'inline label - visible with data', 'Plantio_T_': 'inline label - visible with data', 'Corte_Raiz': 'inline label - visible with data', 'Marca_Roç': 'inline label - visible with data', 'Raiz_Est': 'inline label - visible with data', 'Ori_Inseto': 'inline label - visible with data', 'Fungos_2': 'inline label - visible with data', 'Cav_2': 'inline label - visible with data', 'Pessoas': 'inline label - visible with data', 'Veiculos': 'inline label - visible with data', 'Via_Pub': 'inline label - visible with data', 'Rede': 'inline label - visible with data', 'Bens_Pat': 'inline label - visible with data', 'Via_Priv': 'inline label - visible with data', 'Acomp_Inc': 'inline label - visible with data', 'Poda_Form': 'inline label - visible with data', 'Poda_Limp': 'inline label - visible with data', 'Poda_Red': 'inline label - visible with data', 'Poda_Elev': 'inline label - visible with data', 'Cauteriza': 'inline label - visible with data', 'Desat_Colo': 'inline label - visible with data', 'Aumento_AP': 'inline label - visible with data', 'Adubacao': 'inline label - visible with data', 'Melhoria_S': 'inline label - visible with data', 'Controle_P': 'inline label - visible with data', 'Estaiament': 'inline label - visible with data', 'Escorament': 'inline label - visible with data', 'Ortese': 'inline label - visible with data', 'Cabeamento': 'inline label - visible with data', 'Tutorament': 'inline label - visible with data', 'Ava_Nível': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', });
lyr_OcorrnciadeEspcies_12.set('fieldLabels', {'RG_adm': 'no label', 'Parcela': 'no label', 'Indivíduo': 'no label', 'Endereço': 'no label', 'Endereço_': 'no label', 'Espécie': 'inline label - visible with data', 'CAP': 'no label', 'DAP': 'no label', 'Altura_tot': 'no label', 'Copa___Ár': 'no label', 'Hábito': 'no label', 'Nome_Popul': 'no label', 'Dispersão': 'no label', 'Origem': 'no label', 'Status_CNC': 'no label', 'Status_MMA': 'no label', 'Árvore_mo': 'no label', 'Probabilid': 'no label', 'Probabil_1': 'no label', 'Consequên': 'no label', 'Grau_de_ri': 'no label', 'Remoção': 'no label', 'Folha_Rala': 'no label', 'Galhos_via': 'no label', 'Erva_Pass': 'no label', 'Tocos_poda': 'no label', 'Constricto': 'no label', 'Galhos_Sec': 'no label', 'Galhos_Que': 'no label', 'Galhos_Esg': 'no label', 'Galhos_Cod': 'no label', 'Bif_V': 'no label', 'Arq_Anorm': 'no label', 'Poda_Uni': 'no label', 'Conflito_R': 'no label', 'Destopo': 'no label', 'Fiss_Rach': 'no label', 'Bif_V_2': 'no label', 'Fungos': 'no label', 'Inclinaç': 'no label', 'Can_Gal_Ca': 'no label', 'Brot_Epi': 'no label', 'Cavidade': 'no label', 'Orifício_': 'no label', 'Casca_Inc': 'no label', 'Troncos_Co': 'no label', 'Pod_Alb': 'no label', 'Rest_AP': 'no label', 'Brot_Epi_2': 'no label', 'Ater_Colo': 'no label', 'Plantio_T_': 'no label', 'Corte_Raiz': 'no label', 'Marca_Roç': 'no label', 'Raiz_Est': 'no label', 'Ori_Inseto': 'no label', 'Fungos_2': 'no label', 'Cav_2': 'no label', 'Pessoas': 'no label', 'Veiculos': 'no label', 'Via_Pub': 'no label', 'Rede': 'no label', 'Bens_Pat': 'no label', 'Via_Priv': 'no label', 'Acomp_Inc': 'no label', 'Poda_Form': 'no label', 'Poda_Limp': 'no label', 'Poda_Red': 'no label', 'Poda_Elev': 'no label', 'Cauteriza': 'no label', 'Desat_Colo': 'no label', 'Aumento_AP': 'no label', 'Adubacao': 'no label', 'Melhoria_S': 'no label', 'Controle_P': 'no label', 'Estaiament': 'no label', 'Escorament': 'no label', 'Ortese': 'no label', 'Cabeamento': 'no label', 'Tutorament': 'no label', 'Ava_Nível': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_OcorrnciadeEspcies_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});