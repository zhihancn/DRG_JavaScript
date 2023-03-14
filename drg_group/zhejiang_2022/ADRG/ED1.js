import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCE_DRG} from '../DRG/MDCE_DRG.js';

export default function ED1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["31.7302","31.7900x006","31.9901","31.9904","31.9905","32.0103","32.0901","32.0902","32.2200x004","32.2400x001","32.2500x001","32.2700","32.2801","32.2802","32.2803","32.2804","32.2900x005","32.9x00","33.0x00x003","33.0x00x004","33.0x01","33.0x02","33.0x03","33.0x04","33.1x00x003","33.1x00x004","33.1x01","33.1x02","33.1x03","33.1x04","33.1x05","33.1x06","33.2000","33.2000x002","33.2500x002","33.2500x003","33.2800x001","33.7101","33.7102","33.7301","33.7302","33.7802","33.7900x001","33.7900x002","33.7901","33.9101","33.9200x002","33.9900x001","33.9901","33.9902","33.9903","34.0101","34.0103","34.0200x001","34.0402","34.0600","34.0900x010","34.0900x011","34.0901","34.0902","34.0903","34.0904","34.0905","34.0906","34.2000","34.2100x001","34.2301","34.2700x001","34.4x00x008","34.4x01","34.4x02","34.4x03","34.5902","34.5904","34.6x02","34.7100","34.7101","34.7302","34.7900x001","34.7900x002","34.7900x003","34.7900x004","34.8101","34.8102","34.8200","34.8200x002","34.8301","34.8302","34.8303","34.8400x003","34.8500","34.9300","34.9302","34.9901","34.9902","34.9904","34.9905","38.8500x016","40.6300x003","53.8100x001","53.8101","53.8102","53.8103","53.8200","53.8300x001","53.8400"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合ED1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCE_DRG();
        
        if (drg.ED11_group(record)){
            return 'ED11';
        }

        if (drg.ED13_group(record)){
            return 'ED13';
        }

        if (drg.ED15_group(record)){
            return 'ED15';
        }

        return 'ED1';
    }else{
        return '';
    }
}
  