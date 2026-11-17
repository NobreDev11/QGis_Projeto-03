var wms_layers = [];

var format_AIS2026_0 = new ol.format.GeoJSON();
var features_AIS2026_0 = format_AIS2026_0.readFeatures(json_AIS2026_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIS2026_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIS2026_0.addFeatures(features_AIS2026_0);
var lyr_AIS2026_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIS2026_0, 
                style: style_AIS2026_0,
                popuplayertitle: 'AIS 2026',
                interactive: true,
                title: '<img src="styles/legend/AIS2026_0.png" /> AIS 2026'
            });
var format_risppordissolucao_1 = new ol.format.GeoJSON();
var features_risppordissolucao_1 = format_risppordissolucao_1.readFeatures(json_risppordissolucao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_risppordissolucao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_risppordissolucao_1.addFeatures(features_risppordissolucao_1);
var lyr_risppordissolucao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_risppordissolucao_1, 
                style: style_risppordissolucao_1,
                popuplayertitle: 'risp-por-dissolucao',
                interactive: true,
                title: '<img src="styles/legend/risppordissolucao_1.png" /> risp-por-dissolucao'
            });
var format_CE_Municipios_2025_2 = new ol.format.GeoJSON();
var features_CE_Municipios_2025_2 = format_CE_Municipios_2025_2.readFeatures(json_CE_Municipios_2025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CE_Municipios_2025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CE_Municipios_2025_2.addFeatures(features_CE_Municipios_2025_2);
var lyr_CE_Municipios_2025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CE_Municipios_2025_2, 
                style: style_CE_Municipios_2025_2,
                popuplayertitle: 'CE_Municipios_2025',
                interactive: true,
                title: '<img src="styles/legend/CE_Municipios_2025_2.png" /> CE_Municipios_2025'
            });
var format_Camadaunida_3 = new ol.format.GeoJSON();
var features_Camadaunida_3 = format_Camadaunida_3.readFeatures(json_Camadaunida_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camadaunida_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camadaunida_3.addFeatures(features_Camadaunida_3);
var lyr_Camadaunida_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camadaunida_3, 
                style: style_Camadaunida_3,
                popuplayertitle: 'Camada unida',
                interactive: true,
                title: '<img src="styles/legend/Camadaunida_3.png" /> Camada unida'
            });
var format_Ocorrnciassimuladascamada_de_pontos_4 = new ol.format.GeoJSON();
var features_Ocorrnciassimuladascamada_de_pontos_4 = format_Ocorrnciassimuladascamada_de_pontos_4.readFeatures(json_Ocorrnciassimuladascamada_de_pontos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ocorrnciassimuladascamada_de_pontos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ocorrnciassimuladascamada_de_pontos_4.addFeatures(features_Ocorrnciassimuladascamada_de_pontos_4);
var lyr_Ocorrnciassimuladascamada_de_pontos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ocorrnciassimuladascamada_de_pontos_4, 
                style: style_Ocorrnciassimuladascamada_de_pontos_4,
                popuplayertitle: 'Ocorrências simuladas — camada_de_pontos',
                interactive: true,
                title: '<img src="styles/legend/Ocorrnciassimuladascamada_de_pontos_4.png" /> Ocorrências simuladas — camada_de_pontos'
            });

lyr_AIS2026_0.setVisible(true);lyr_risppordissolucao_1.setVisible(true);lyr_CE_Municipios_2025_2.setVisible(true);lyr_Camadaunida_3.setVisible(true);lyr_Ocorrnciassimuladascamada_de_pontos_4.setVisible(true);
var layersList = [lyr_AIS2026_0,lyr_risppordissolucao_1,lyr_CE_Municipios_2025_2,lyr_Camadaunida_3,lyr_Ocorrnciassimuladascamada_de_pontos_4];
lyr_AIS2026_0.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_BAIRRO': 'NM_BAIRRO', 'RISP': 'RISP', 'AIS_2026': 'AIS_2026', 'CRPM': 'CRPM', 'BPM': 'BPM', 'DEP. REGIONAL PCCE': 'DEP. REGIONAL PCCE', 'DEL. SECCIONAL PCCE': 'DEL. SECCIONAL PCCE', 'CIRCUNSCRIÇÃO PCCE': 'CIRCUNSCRIÇÃO PCCE', 'BBM': 'BBM', 'CIA_BBM': 'CIA_BBM', 'NÚCLEO PEFOCE': 'NÚCLEO PEFOCE', 'MUNICIPIO': 'MUNICIPIO', 'PARCELA_TERRITORIAL': 'PARCELA_TERRITORIAL', 'Área (km²)': 'Área (km²)', 'Pop_2025': 'Pop_2025', });
lyr_risppordissolucao_1.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_BAIRRO': 'NM_BAIRRO', 'RISP': 'RISP', 'AIS_2026': 'AIS_2026', 'CRPM': 'CRPM', 'BPM': 'BPM', 'DEP. REGIONAL PCCE': 'DEP. REGIONAL PCCE', 'DEL. SECCIONAL PCCE': 'DEL. SECCIONAL PCCE', 'CIRCUNSCRIÇÃO PCCE': 'CIRCUNSCRIÇÃO PCCE', 'BBM': 'BBM', 'CIA_BBM': 'CIA_BBM', 'NÚCLEO PEFOCE': 'NÚCLEO PEFOCE', 'MUNICIPIO': 'MUNICIPIO', 'PARCELA_TERRITORIAL': 'PARCELA_TERRITORIAL', 'Área (km²)': 'Área (km²)', 'Pop_2025': 'Pop_2025', });
lyr_CE_Municipios_2025_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'AREA_KM2': 'AREA_KM2', });
lyr_Camadaunida_3.set('fieldAliases', {'fid': 'fid', 'ID_OCORRENCIA': 'ID_OCORRENCIA', 'DATA': 'DATA', 'HORA': 'HORA', 'ANO': 'ANO', 'MES': 'MES', 'NATUREZA': 'NATUREZA', 'SUBTIPO': 'SUBTIPO', 'AIS_2026': 'AIS_2026', 'RISP_2026': 'RISP_2026', 'MUNICIPIO': 'MUNICIPIO', 'COD_IBGE': 'COD_IBGE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'QUANTIDADE': 'QUANTIDADE', 'FONTE': 'FONTE', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'AREA_KM2': 'AREA_KM2', });
lyr_Ocorrnciassimuladascamada_de_pontos_4.set('fieldAliases', {'fid': 'fid', 'ID_OCORRENCIA': 'ID_OCORRENCIA', 'DATA': 'DATA', 'HORA': 'HORA', 'ANO': 'ANO', 'MES': 'MES', 'NATUREZA': 'NATUREZA', 'SUBTIPO': 'SUBTIPO', 'AIS_2026': 'AIS_2026', 'RISP_2026': 'RISP_2026', 'MUNICIPIO': 'MUNICIPIO', 'COD_IBGE': 'COD_IBGE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'QUANTIDADE': 'QUANTIDADE', 'FONTE': 'FONTE', });
lyr_AIS2026_0.set('fieldImages', {'fid': '', 'CD_MUN': '', 'NM_BAIRRO': '', 'RISP': '', 'AIS_2026': '', 'CRPM': '', 'BPM': '', 'DEP. REGIONAL PCCE': '', 'DEL. SECCIONAL PCCE': '', 'CIRCUNSCRIÇÃO PCCE': '', 'BBM': '', 'CIA_BBM': '', 'NÚCLEO PEFOCE': '', 'MUNICIPIO': '', 'PARCELA_TERRITORIAL': '', 'Área (km²)': '', 'Pop_2025': '', });
lyr_risppordissolucao_1.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_BAIRRO': 'TextEdit', 'RISP': 'TextEdit', 'AIS_2026': 'TextEdit', 'CRPM': 'TextEdit', 'BPM': 'TextEdit', 'DEP. REGIONAL PCCE': 'TextEdit', 'DEL. SECCIONAL PCCE': 'TextEdit', 'CIRCUNSCRIÇÃO PCCE': 'TextEdit', 'BBM': 'TextEdit', 'CIA_BBM': 'TextEdit', 'NÚCLEO PEFOCE': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'PARCELA_TERRITORIAL': 'TextEdit', 'Área (km²)': 'TextEdit', 'Pop_2025': 'Range', });
lyr_CE_Municipios_2025_2.set('fieldImages', {'CD_MUN': '', 'NM_MUN': '', 'CD_RGI': '', 'NM_RGI': '', 'CD_RGINT': '', 'NM_RGINT': '', 'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'CD_REGIAO': '', 'NM_REGIAO': '', 'SIGLA_RG': '', 'CD_CONCURB': '', 'NM_CONCURB': '', 'AREA_KM2': '', });
lyr_Camadaunida_3.set('fieldImages', {'fid': '', 'ID_OCORRENCIA': '', 'DATA': '', 'HORA': '', 'ANO': '', 'MES': '', 'NATUREZA': '', 'SUBTIPO': '', 'AIS_2026': '', 'RISP_2026': '', 'MUNICIPIO': '', 'COD_IBGE': '', 'LATITUDE': '', 'LONGITUDE': '', 'QUANTIDADE': '', 'FONTE': '', 'CD_MUN': '', 'NM_MUN': '', 'CD_RGI': '', 'NM_RGI': '', 'CD_RGINT': '', 'NM_RGINT': '', 'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'CD_REGIAO': '', 'NM_REGIAO': '', 'SIGLA_RG': '', 'CD_CONCURB': '', 'NM_CONCURB': '', 'AREA_KM2': '', });
lyr_Ocorrnciassimuladascamada_de_pontos_4.set('fieldImages', {'fid': '', 'ID_OCORRENCIA': '', 'DATA': '', 'HORA': '', 'ANO': '', 'MES': '', 'NATUREZA': '', 'SUBTIPO': '', 'AIS_2026': '', 'RISP_2026': '', 'MUNICIPIO': '', 'COD_IBGE': '', 'LATITUDE': '', 'LONGITUDE': '', 'QUANTIDADE': '', 'FONTE': '', });
lyr_AIS2026_0.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_BAIRRO': 'no label', 'RISP': 'no label', 'AIS_2026': 'no label', 'CRPM': 'no label', 'BPM': 'no label', 'DEP. REGIONAL PCCE': 'no label', 'DEL. SECCIONAL PCCE': 'no label', 'CIRCUNSCRIÇÃO PCCE': 'no label', 'BBM': 'no label', 'CIA_BBM': 'no label', 'NÚCLEO PEFOCE': 'no label', 'MUNICIPIO': 'no label', 'PARCELA_TERRITORIAL': 'no label', 'Área (km²)': 'no label', 'Pop_2025': 'no label', });
lyr_risppordissolucao_1.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_BAIRRO': 'no label', 'RISP': 'no label', 'AIS_2026': 'no label', 'CRPM': 'no label', 'BPM': 'no label', 'DEP. REGIONAL PCCE': 'no label', 'DEL. SECCIONAL PCCE': 'no label', 'CIRCUNSCRIÇÃO PCCE': 'no label', 'BBM': 'no label', 'CIA_BBM': 'no label', 'NÚCLEO PEFOCE': 'no label', 'MUNICIPIO': 'no label', 'PARCELA_TERRITORIAL': 'no label', 'Área (km²)': 'no label', 'Pop_2025': 'no label', });
lyr_CE_Municipios_2025_2.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIAO': 'no label', 'NM_REGIAO': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCURB': 'no label', 'NM_CONCURB': 'no label', 'AREA_KM2': 'no label', });
lyr_Camadaunida_3.set('fieldLabels', {'fid': 'no label', 'ID_OCORRENCIA': 'no label', 'DATA': 'no label', 'HORA': 'no label', 'ANO': 'no label', 'MES': 'no label', 'NATUREZA': 'no label', 'SUBTIPO': 'no label', 'AIS_2026': 'no label', 'RISP_2026': 'no label', 'MUNICIPIO': 'no label', 'COD_IBGE': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'QUANTIDADE': 'no label', 'FONTE': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIAO': 'no label', 'NM_REGIAO': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCURB': 'no label', 'NM_CONCURB': 'no label', 'AREA_KM2': 'no label', });
lyr_Ocorrnciassimuladascamada_de_pontos_4.set('fieldLabels', {'fid': 'no label', 'ID_OCORRENCIA': 'no label', 'DATA': 'no label', 'HORA': 'no label', 'ANO': 'no label', 'MES': 'no label', 'NATUREZA': 'no label', 'SUBTIPO': 'no label', 'AIS_2026': 'no label', 'RISP_2026': 'no label', 'MUNICIPIO': 'no label', 'COD_IBGE': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'QUANTIDADE': 'no label', 'FONTE': 'no label', });
lyr_Ocorrnciassimuladascamada_de_pontos_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});