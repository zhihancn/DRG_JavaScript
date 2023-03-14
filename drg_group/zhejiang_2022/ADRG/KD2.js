import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCK_DRG} from '../DRG/MDCK_DRG.js';

export default function KD2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["06.0100x001","06.0200x001","06.0201","06.0900x004","06.0900x005","06.0901","06.0902","06.0903","06.1200","06.3100","06.3101","06.3102","06.7x00","06.7x00x003","06.7x01","06.7x02","06.8100","06.8100x002","06.8900x005","06.8901","06.8902","06.8903","06.8904","06.8905","06.9100x001","06.9200","06.9300","06.9501","06.9502","06.9800","06.9900x002","40.1900x002","40.4000","40.4000x003"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合KD2入组条件，匹配规则：某一手术匹配');
        let drg=new MDCK_DRG();
        
        if (drg.KD21_group(record)){
            return 'KD21';
        }

        if (drg.KD23_group(record)){
            return 'KD23';
        }

        if (drg.KD25_group(record)){
            return 'KD25';
        }

        return 'KD2';
    }else{
        return '';
    }
}
  